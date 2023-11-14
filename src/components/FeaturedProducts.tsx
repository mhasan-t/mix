import React from "react";
import ProductItem from "./ProductItem";

const products = [
	{
		name: "Airpods pro",
		price: "250",
		rating: "4",
	},
	{
		name: "Usb c cable",
		price: "10",
		rating: "4",
	},
	{
		name: "Macbook pro",
		price: "2500",
		rating: "4",
	},
	{
		name: "Airpods pro",
		price: "250",
		rating: "4",
	},
];

export default function FeaturedProducts() {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="text-4xl font-bold text-slate-900 text-center mb-12">
				Featured products
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:flex justify-evenly ">
				{products.map((product: any, index: number) => {
					return (
						<div>
							<ProductItem product={product} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
