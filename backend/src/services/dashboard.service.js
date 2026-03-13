const Profile = require("../models/profile");
const Comment = require("../models/comment");

const PERIOD_MS = {
  "7d": 7 * 24 * 3600 * 1000,
  "15d": 15 * 24 * 3600 * 1000,
  "30d": 30 * 24 * 3600 * 1000,
};

async function getMetrics(userId, period) {
  const lookback = PERIOD_MS[period] || PERIOD_MS["7d"];
  const since = new Date(Date.now() - lookback);

  // 1) Followers time series
  const profile = await Profile.findOne({ user: userId });
  const followersSeries = profile.followerSnapshots
    .filter((s) => s.timestamp >= since)
    .map((s) => ({ x: s.timestamp, y: s.count }));

  // 2) Connections time series
  const connectionsSeries = profile.connectionSnapshots
    .filter((s) => s.timestamp >= since)
    .map((s) => ({ x: s.timestamp, y: s.count }));

  // 3) Comments count total in that window + per-day series
  const comments = await Comment.find({
    commenter: userId,
    createdAt: { $gte: since },
  });

  const totalComments = comments.length;

  // Build daily count
  const dayBuckets = {};
  for (let i = 0; i <= lookback / (24 * 3600 * 1000); i++) {
    const day = new Date(Date.now() - i * 24 * 3600 * 1000)
      .toISOString()
      .slice(0, 10);
    dayBuckets[day] = 0;
  }
  comments.forEach((c) => {
    const day = c.createdAt.toISOString().slice(0, 10);
    if (day in dayBuckets) dayBuckets[day]++;
  });
  const commentsSeries = Object.entries(dayBuckets)
    .map(([day, count]) => ({ x: day, y: count }))
    .sort((a, b) => a.x.localeCompare(b.x));

  return {
    followersCount: profile.followers,
    followersSeries,
    connectionsCount: profile.connections,
    connectionsSeries,
    totalComments,
    commentsSeries,
  };
}

module.exports = { getMetrics };
