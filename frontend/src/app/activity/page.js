"use client";

import { useEffect, useState } from "react";
import Layout from "../components/layout";
import MobileLayout from "../components/mobileLayout";
import Image from "next/image";

const rows = [
  {
    id: "01",
    avatar: "/images/user1.jpg",
    name: "Balie Parker",
    tagline: "Stripping the boring out of B2B marketing | Co-Fou...",
    post:
      "Everyone tries to go viral. So they chase whatever trend is blowing up that week. " +
      "New format? Jump on it. Funny audio? Use it. Meme? Slap your logo on it. " +
      "It feels like marketing… but most of the time, it’s just noise.",
    comment:
      'Pepsi® is back with a fresh take on its "Thirsty For More" platform, fronted by none other than David Beckham. ' +
      "This new global campaign is about one simple universal message: 'If you love it, it’s never a waste.'",
    status: "Online",
    date: "28 April, 2025",
  },
  {
    id: "02",
    avatar: "/images/user2.jpg",
    name: "Brandon William",
    tagline: "Helping brands craft impactful Video-First Adverti...",
    post:
      "So, here’s what the best videos have in common. " +
      "No, it’s not a drone shot. Or a moody slow-motion cover. Or that music track we’ve all heard in a million explainer vids. " +
      "It’s strategy. After a couple of weeks of digging into what really makes video work, here’s the final word (for now) on the 5 Factors That Frame Great Video Content: Frequency, Consistency builds memory.",
    comment:
      'Pepsi® is back with a fresh take on its "Thirsty For More" platform, fronted by none other than David Beckham. ' +
      "This new global campaign is about one simple universal message: 'If you love it, it’s never a waste.'",
    status: "Online",
    date: "28 April 2025",
  },
];

const headers = ["Sn #", "Post", "Comment", "Status", "Shared on"];

export default function Activity() {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScreenType("desktop");
      else if (width >= 768) setScreenType("tablet");
      else setScreenType("mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDesktop = () => (
    <div className="h-full p-4 flex flex-col space-y-4">
      <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-xl px-2 py-3 mb-2 w-full space-y-3 lg:space-y-0 lg:flex lg:flex-wrap lg:items-center lg:gap-4 lg:rounded-2xl lg:px-3 lg:py-4">
        {/* Row 1: All Accounts + All Statuses */}
        <div className="flex flex-row flex-wrap gap-3 ">
          {["All Accounts", "All statuses"].map((label, idx) => (
            <div key={idx} className="relative flex-1 min-w-[45%]">
              <select className="w-full appearance-none bg-[#33C6F4]/60 text-white text-sm rounded px-4 py-2 pr-10 focus:outline-none focus:ring focus:ring-[#33C6F470]/44">
                <option>{label}</option>
                <option>{label} A</option>
                <option>{label} B</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/images/activity/dropdownIcon.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Date Range */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
          <input
            type="date"
            defaultValue="2025-04-03"
            className="flex-1 min-w-[45%] text-sm bg-[#33C6F4]/60 px-4 py-2 rounded text-white focus:outline-none focus:ring focus:ring-[#33C6F470]/44"
          />
          <span className="text-white/50">—</span>
          <input
            type="date"
            defaultValue="2025-04-28"
            className="flex-1 min-w-[45%] text-sm bg-[#33C6F4]/60 px-4 py-2 rounded text-white focus:outline-none focus:ring focus:ring-[#33C6F470]/44"
          />
        </div>

        <div className=" sm:w-auto pt-1 flex justify-center sm:justify-end">
          <button className="inline-flex items-center bg-white text-black text-sm py-2 px-5 rounded-2xl hover:bg-gray-100 transition-colors space-x-2">
            <Image
              src="/images/activity/exportIcon.svg"
              alt="Export"
              width={18}
              height={18}
            />
            <span>Export Comments</span>
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="min-w-full table-fixed text-white border-collapse border-spacing-0">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-left border-t border-b border-[#33C6F4] ${
                      i < headers.length - 1 ? "border-r border-[#33C6F4]" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-white/5 border-b border-[#33C6F4] last:border-b-0"
                >
                  <td className="px-4 py-3 align-top border-r border-[#33C6F4]">
                    {item.id}
                  </td>
                  <td className="px-4 py-3 flex items-start space-x-3 border-r border-[#33C6F4]">
                    <Image
                      src="/images/topbar/userIcon.svg"
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="text-sm">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-300 leading-snug">
                        {item.tagline}
                      </p>
                      <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                        {item.post}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm leading-relaxed border-r border-[#33C6F4]">
                    {item.comment}
                  </td>
                  <td className="px-4 py-3 border-r border-[#33C6F4]">
                    <span className="inline-block bg-[#33C6F4] text-white text-xs px-2 py-1 rounded-full">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300 whitespace-nowrap">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={headers.length}
                  className="border-t border-[#33C6F4] p-0"
                />
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 p-4">
          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
            &larr;
          </button>
          <button className="w-8 h-8 bg-white/20 text-white rounded-full">
            1
          </button>
          <button className="w-8 h-8 bg-white/20 text-white rounded-full">
            2
          </button>
          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="flex flex-col space-y-2 px-2 py-3 text-sm text-white font-sans w-full">
      <div className="w-full flex flex-col gap-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg p-3">
        <div className="flex gap-2">
          {["All Accounts", "All statuses"].map((label, idx) => (
            <div key={idx} className="relative w-1/2">
              <select className="w-full bg-[#33C6F4]/70 text-white rounded px-2 py-1 pr-8 text-xs focus:outline-none">
                <option>{label}</option>
                <option>{label} A</option>
                <option>{label} B</option>
              </select>
            </div>
          ))}
        </div>

        <div className="flex gap-1 items-center">
          <input
            type="date"
            defaultValue="2025-04-03"
            className="w-full bg-[#33C6F4]/70 text-white text-xs px-1 py-1 rounded focus:outline-none"
          />
          <span className="text-white/50 text-xs">-</span>
          <input
            type="date"
            defaultValue="2025-04-28"
            className="w-full bg-[#33C6F4]/70 text-white text-xs px-1 py-1 rounded focus:outline-none"
          />
        </div>
        <div className="px-6 pt-1 flex justify-center">
          <button className="inline-flex items-center justify-center bg-white text-black py-2 px-3 text-xs rounded-lg hover:bg-gray-200 space-x-2">
            <Image
              src="/images/activity/exportIcon.svg"
              alt="Export"
              width={16}
              height={16}
            />
            <span>Export Comments</span>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-md overflow-hidden">
        <table className="min-w-full text-white text-[11px]">
          <thead className="bg-[#33C6F4]/40 text-left">
            <tr>
              <th className="px-2 py-2 border-r border-[#33C6F4] w-10">Sn #</th>
              <th className="px-2 py-2 border-r border-[#33C6F4]">Post</th>
              <th className="px-2 py-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr
                key={item.id}
                className="border-t border-[#33C6F4] hover:bg-white/5"
              >
                <td className="px-2 py-2 border-r border-[#33C6F4] align-top">
                  {item.id}
                </td>
                <td className="px-2 py-2 border-r border-[#33C6F4]">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[11.5px]">
                      {item.name}
                    </span>
                    <span className="text-gray-300 text-[10px]">
                      {item.tagline}
                    </span>
                    <p className="mt-1 text-[10px] text-gray-300">
                      {item.post}
                    </p>
                  </div>
                </td>
                <td className="px-2 py-2 text-[10px] text-gray-200">
                  {item.comment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination + Export Button */}
      <div className="w-full flex flex-col items-center justify-center mt-2 space-y-2">
        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <button className="px-2 py-1 bg-white/20 rounded hover:bg-white/30 text-xs">
            &larr;
          </button>
          <button className="w-6 h-6 bg-white/20 rounded-full text-xs text-white">
            1
          </button>
          <button className="w-6 h-6 bg-white/20 rounded-full text-xs text-white">
            2
          </button>
          <button className="px-2 py-1 bg-white/20 rounded hover:bg-white/30 text-xs">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );

  // Final Render
  if (screenType === "desktop") return <Layout>{renderDesktop()}</Layout>;
  if (screenType === "tablet")
    return <MobileLayout>{renderDesktop()}</MobileLayout>;
  return <MobileLayout>{renderMobile()}</MobileLayout>;
}
