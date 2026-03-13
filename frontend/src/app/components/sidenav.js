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
	{ name: "Activity", href: "/activity", iconPath: "/images/sidebar/activityIcon.svg" },
	{
		name: "Customise AI",
		href: "/customiseAI",
		iconPath: "/images/sidebar/customiseAIIcon.svg",
	},
	{
		name: "Subscription Plans",
		href: "/plans",
		iconPath: "/images/sidebar/subscriptionPlansIcon.svg",
	},
	{
		name: "Affiliate Programs",
		href: "/affiliate",
		iconPath: "/images/sidebar/affiliateProgramIcon.svg",
	},
	{ name: "Help", href: "/help", iconPath: "/images/sidebar/helpIcon.svg" },
];

const moreFeatures = [
	"Leave up to 500 intelligent comments per day",
	"Connect with decision-makers in your niche",
	"Spark real conversations with multiple comment templates",
	"Grow your influence on LinkedIn with strategic comments",
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside
			className="
        relative
        w-80
        mx-4 my-0
        p-6
        text-white
        flex-shrink-0
        flex flex-col
        overflow-y-auto
        mt-7
      "
		>
			{/* Frosted-glass backdrop */}
			<div
				className="
          absolute inset-0
          bg-black/70 backdrop-blur-sm
          border border-white/20
          rounded-2xl
          pointer-events-none
        "
			/>

			{/* Logo */}
			<div className="relative z-10 mb-5 flex items-center justify-center space-x-2">
				<img
					src="/images/sidebar/linkedIcon.svg"
					alt="LinkedIn icon - Connected with LinkedIn"
					className="h-10"
				/>
				<div className="text-sm italic">Connected with LinkedIn</div>
			</div>

			{/* Nav */}
			<nav className="relative z-10 space-y-2">
				{navItems.slice(0, 4).map(({ name, href, iconPath }) => {
					const active = pathname === href;
					return (
						<Link
							key={href}
							href={href}
							className={`
                flex items-center space-x-3
                rounded-lg px-4 py-2 transition
                ${
									active
										? "bg-white/20 text-white"
										: "text-gray-200 hover:bg-white/10"
								}
              `}
						>
							<img src={iconPath} alt={`${name} icon`} className="w-6 h-6" />
							<span className="font-medium">{name}</span>
						</Link>
					);
				})}

				{/* More features container */}
				<div
					className="mt-4 p-3 rounded-xl space-y-2"
					style={{ backgroundColor: "rgba(51, 198, 244, 0.44)" }}
				>
					<h3 className="text-white font-semibold text-center text-sm">
						More features!
					</h3>
					<p className="text-[12px] text-white/80 text-center">
						Supercharge Your Growth with Comments Fusion by engaging
						smarter, not just more.
					</p>
					<ul className="space-y-1">
						{moreFeatures.map((feat) => (
							<li key={feat} className="flex items-center space-x-2 text-white">
								<Image
									src="/images/sidebar/checkIcon.svg"
									alt="check"
									width={20}
									height={20}
								/>
								<span className="text-[12px]">{feat}</span>
							</li>
						))}
					</ul>
					<button className="w-full mt-2 flex items-center justify-center px-0 py-1 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
						<img
							src="/images/sidebar/upgradeIcon.svg"
							alt="Upgrade"
							className="w-5 h-5 mr-2"
						/>
						Upgrade plan
					</button>
				</div>

				{navItems.slice(4).map(({ name, href, iconPath }) => {
					const active = pathname === href;
					return (
						<Link
							key={href}
							href={href}
							className={`
                flex items-center space-x-3
                rounded-lg px-4 py-2 transition
                ${
									active
										? "bg-white/20 text-white"
										: "text-gray-200 hover:bg-white/10"
								}
              `}
						>
							<img src={iconPath} alt={`${name} icon`} className="w-6 h-6" />
							<span className="font-medium">{name}</span>
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
