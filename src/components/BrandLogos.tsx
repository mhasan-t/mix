import React from "react";

const brands = [
	{
		name: "Sony",
		logo: "/sony.png",
	},
	{
		name: "Apple",
		logo: "/apple.png",
	},
	{
		name: "Google",
		logo: "/google.png",
	},
	{
		name: "Sony",
		logo: "/sony.png",
	},
	{
		name: "Apple",
		logo: "/apple.png",
	},
	{
		name: "Google",
		logo: "/google.png",
	},
];

export default function BrandLogos() {
	return (
		<div className="w-full">
			<div className="text-4xl font-bold text-slate-900 text-center mb-12">
				Shop by brand
			</div>
			<div className="grid grid-cols-2 gap-4 items-stretch md:grid-cols-3 md:gap-4 lg:flex justify-evenly lg:divide-x-2 divide-slate-300">
				{brands.map((brand: any, index: number) => {
					return (
						<div className="flex justify-center items-center w-full opacity-75 py-4">
							<img
								src={brand.logo}
								alt=""
								className="w-20 h-auto"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
