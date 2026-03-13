"use client";

import Layout from "../components/layout";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileLayout from "../components/mobileLayout";
import { getDashboardMetrics } from "../utils/api";

const FollowersChart = dynamic(
  () => import("../components/charts/FollowersChart"),
  { ssr: false }
);
const ConnectionsChart = dynamic(
  () => import("../components/charts/ConnectionsChart"),
  { ssr: false }
);
const CommentsDotPlot = dynamic(
  () => import("../components/charts/CommentsDotPlot"),
  { ssr: false }
);

export default function Home() {
  const filters = [
    { label: "7d", value: "7d" },
    { label: "15d", value: "15d" },
    { label: "30d", value: "30d" },
  ];
  const [selectedFilter, setSelectedFilter] = useState(filters[1].value);
  const [screenType, setScreenType] = useState("desktop");
  const [metrics, setMetrics] = useState({
    followersCount: 0,
    followersSeries: [],
    connectionsCount: 0,
    connectionsSeries: [],
    totalComments: 0,
    commentsSeries: [],
  });

  useEffect(() => {
    getDashboardMetrics(selectedFilter)
      .then(setMetrics)
      .catch((err) => console.error("Dashboard load error:", err));
  }, [selectedFilter]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenType("mobile");
      else if (width < 1024) setScreenType("tablet");
      else setScreenType("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDesktop = () => (
    <div className="h-full p-1">
      <div className="flex justify-end space-x-2 mb-4">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setSelectedFilter(f.value)}
            className={
              `px-3 py-1 rounded-lg border border-white/20 transition-colors duration-200 ` +
              (selectedFilter === f.value
                ? "bg-white/30"
                : "bg-white/10 hover:bg-white/20")
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 auto-rows-min gap-6">
        {/* Followers */}
        <div className="w-full flex flex-col bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/main_dashboard/followersIcon.svg"
                alt="Followers Icon"
                width={24}
                height={24}
              />
              <span className="text-lg font-medium">Followers</span>
            </div>
            <span className="text-lg">{metrics.followersCount}</span>
          </div>
          <div className="relative w-full h-48">
            <FollowersChart data={metrics.followersSeries} />
          </div>
        </div>

        {/* Connections */}
        <div className="w-full flex flex-col bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/main_dashboard/connectionsIcon.svg"
                alt="Connections Icon"
                width={24}
                height={24}
              />
              <span className="text-lg font-medium">Connections</span>
            </div>
            <span className="text-lg">{metrics.connectionsCount}</span>
          </div>
          <div className="relative w-full h-48">
            <ConnectionsChart data={metrics.connectionsSeries} />
          </div>
        </div>

        {/* Comments */}
        <div className="w-full flex flex-col bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/main_dashboard/commentsIcon.svg"
                alt="Comments Icon"
                width={24}
                height={24}
              />
              <span className="text-lg font-medium">Comments</span>
            </div>
            <span className="text-lg">{metrics.totalComments}</span>
          </div>
          <div className="relative w-full h-48">
            <CommentsDotPlot data={metrics.commentsSeries} />
          </div>
        </div>

        {/* Performance Tracker */}
        <div
          className="
            col-span-3 flex flex-col
            bg-black/60 backdrop-blur-md
            border border-white/20
            rounded-2xl
            p-6
          "
        >
          <div className="flex flex-col items-center gap-0">
            <span className="text-xl font-semibold text-center">
              Comments Fusion Performance Tracker
            </span>
            <span className="text-sm text-center">
              Optimize your outreach by tracking which targets drive the most
              engagement.
            </span>
          </div>

          <div className="grid grid-cols-5 gap-4 mt-5 mb-2 px-4 text-sm font-medium">
            <span>No:</span>
            <span>Name:</span>
            <span>Comments count:</span>
            <span>Latest comment date:</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2">
            {[
              { name: "Balie Parker", followers: "1.3K" },
              { name: "Brandon William", followers: "2.6K" },
              { name: "Crista Munchkins", followers: "5K" },
            ].map((user, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 items-center px-4 border-t border-white/20 py-2"
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div className="flex items-center space-x-3">
                  <img
                    src={`/images/topbar/userIcon.svg`}
                    alt={user.name + " Icon"}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-300">
                      {user.followers} followers
                    </p>
                  </div>
                </div>
                <span>0</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="p-2 bg-white/20 rounded-lg">&larr;</button>
            <button className="w-8 h-8 bg-white/20 rounded-lg">1</button>
            <button className="w-8 h-8 bg-white/20 rounded-lg">2</button>
            <button className="p-2 bg-white/20 rounded-lg">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="space-y-4 px-2 pb-6">
      {/* Followers */}
      <div className="w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 ">
            <Image
              src="/images/main_dashboard/followersIcon.svg"
              alt="Followers Icon"
              width={20}
              height={20}
            />
            <span className="text-base font-medium">Followers</span>
          </div>
          <span className="text-base">{metrics.followersCount}</span>
        </div>
        <div className="relative w-full h-48">
          <FollowersChart data={metrics.followersSeries} />
        </div>
      </div>

      {/* Connections */}
      <div className="w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/main_dashboard/connectionsIcon.svg"
              alt="Connections Icon"
              width={20}
              height={20}
            />
            <span className="text-base font-medium">Connections</span>
          </div>
          <span className="text-base">{metrics.connectionsCount}</span>
        </div>
        <div className="relative w-full h-48">
          <ConnectionsChart data={metrics.connectionsSeries} />
        </div>
      </div>

      {/* Comments */}
      <div className="w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/main_dashboard/commentsIcon.svg"
              alt="Comments Icon"
              width={20}
              height={20}
            />
            <span className="text-base font-medium">Comments</span>
          </div>
          <span className="text-base">{metrics.totalComments}</span>
        </div>
        <div className="relative w-full h-48">
          <CommentsDotPlot />
        </div>
      </div>
      <hr />
      {/* Performance Tracker */}
      <div className="w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-4">
        <div className="text-center mb-3">
          <p className="text-lg font-semibold">Performance Tracker</p>
          <p className="text-xs text-white/70">
            Optimize your outreach by tracking which targets drive the most
            engagement.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              name: "Balie Parker",
              followers: "1.3K",
              comments: 0,
              impressions: 0,
              date: "—",
            },
            {
              name: "Brandon William",
              followers: "2.6K",
              comments: 0,
              impressions: 0,
              date: "—",
            },
            {
              name: "Crista Munchkins",
              followers: "5K",
              comments: 0,
              impressions: 0,
              date: "—",
            },
          ].map((user, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl px-4 py-3 bg-black/30"
            >
              <div className="flex items-center justify-between mb-2 text-xs text-white/60">
                <span>No: {String(i + 1).padStart(2, "0")}</span>
                <span>Latest: {user.date}</span>
              </div>

              <div className="flex items-center space-x-3 mb-1">
                <Image
                  src="/images/topbar/userIcon.svg"
                  alt={user.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-sm">{user.name}</p>
                  <p className="text-xs text-white/70">
                    {user.followers} followers
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-xs text-white/80">
                <span>Comments: {user.comments}</span>
                <span>Impressions: {user.impressions}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-5">
          <button className="p-2 bg-white/20 rounded-lg text-sm">&larr;</button>
          <button className="w-8 h-8 bg-white/20 rounded-lg text-sm">1</button>
          <button className="w-8 h-8 bg-white/20 rounded-lg text-sm">2</button>
          <button className="p-2 bg-white/20 rounded-lg text-sm">&rarr;</button>
        </div>
      </div>
    </div>
  );

  if (screenType === "desktop") return <Layout>{renderDesktop()}</Layout>;
  if (screenType === "tablet")
    return <MobileLayout>{renderDesktop()}</MobileLayout>;
  return <MobileLayout>{renderMobile()}</MobileLayout>;
}
