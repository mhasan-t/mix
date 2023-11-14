import React from "react";

const categories = [
	{
		name: "Computers and laptops",
		count: 132,
	},
	{
		name: "Mobile phones",
		count: 3,
	},
	{
		name: "Tablets",
		count: 132,
	},
	{
		name: "TV",
		count: 132,
	},
	{
		name: "Audio",
		count: 132,
	},
	{
		name: "Cameras",
		count: 98,
	},
	{
		name: "Drones",
		count: 98,
	},
	{
		name: "Accessories",
		count: 98,
	},
	{
		name: "Smart home",
		count: 98,
	},
	{
		name: "Gaming",
		count: 98,
	},
	{
		name: "Wearables",
		count: 98,
	},
	{
		name: "Printers",
		count: 132,
	},
	{
		name: "Monitors",
		count: 132,
	},
	{
		name: "Networking",
		count: 132,
	},
	{
		name: "Software",
		count: 132,
	},
	{
		name: "Storage",
		count: 132,
	},
	{
		name: "Components",
		count: 132,
	},
	{
		name: "Gadgets",
		count: 132,
	},
	{
		name: "Home appliances",
		count: 132,
	},
	{
		name: "Office supplies",
		count: 132,
	},
	{
		name: "Batteries",
		count: 132,
	},
	{
		name: "Cables",
		count: 132,
	},
	{
		name: "Cameras",
		count: 132,
	},
	{
		name: "Car electronics",
		count: 132,
	},
	{
		name: "Chargers",
		count: 132,
	},
	{
		name: "Drones",
		count: 132,
	},
	{
		name: "Gaming",
		count: 132,
	},
	{
		name: "Headphones",
		count: 132,
	},
	{
		name: "Home audio",
		count: 132,
	},
	{
		name: "Home video",
		count: 132,
	},
];

export default function AllCategories() {
	return (
		<div className="w-full">
			<div className="text-lg font-bold text-slate-900 mb-4">
				All categories
			</div>
			<div className="h-80 overflow-y-scroll scrollbar-thumb-orange-400 scrollbar-track-slate-200 scrollbar-thin scrollbar-rounded-full">
				{categories.map((category: any, index: number) => {
					return (
						<div className="w-full">
							<span>
								<span className="text-slate-700">
									{category.name}
								</span>{" "}
								<span className="text-slate-300">
									{"("} {category.count} {")"}
								</span>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
