"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  {
    name: "Dashboard",
    href: "/main_dashboard",
    iconPath: "/images/sidebar/dashboardIcon.svg",
  },
  {
    name: "Activity",
    href: "/activity",
    iconPath: "/images/sidebar/activityIcon.svg",
  },
  {
    name: "Customize AI",
    href: "/customiseAI",
    iconPath: "/images/sidebar/customiseAIIcon.svg",
  },
  {
    name: "Subscription Plan",
    href: "/subscription-planDashboard",
    iconPath: "/images/sidebar/subscriptionPlansIcon.svg",
  },
  {
    name: "Affiliate Programs",
    href: "/affiliate",
    iconPath: "/images/sidebar/subscriptionPlansIcon.svg",
  }
];

export default function MobileSidebar() {
  const pathname = usePathname();

  return (
  <aside className="relative w-72 m-4 p-4 text-white flex flex-col space-y-4 ">
      {/* Background blur + border */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm border border-white/20 rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col space-y-4">

        
       {/* LinkedIn Icon Header */}
    <div className="flex items-center space-x-4 mt-2 ml-4">
      <Image src="/images/sidebar/linkedIcon.svg" alt="LinkedIn" width={36} height={36} />
    <p className="text-[12px] italic">
  Connected with <span className="text-xl not-italic font-bold">LinkedIn</span>
</p>

    </div>


        {/* Main Navigation */}
        <nav className="space-y-2">
          {navItems.map(({ name, href, iconPath }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  active ? "bg-white/20 text-white" : "text-gray-300 hover:bg-white/10"
                }`}
              >
                <img src={iconPath} alt={`${name} icon`} className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>


        {/* Bottom Links */}
        <div className="space-y-2 pt-4 border-t border-white/20 mb-4 ml-4">
          
          <Link
            href="/help"
            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition"
          >
            <Image src="/images/sidebar/helpIcon.svg" alt="" width={20} height={20} />
            <span>Help</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
