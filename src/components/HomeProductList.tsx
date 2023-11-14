import React from "react";
import ProductItem from "./ProductItem";

export default function HomeProductList({ data }: any) {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<div className="text-xl font-bold text-slate-900 mb-4">
					Product List
				</div>
				<div className="text-sm font-bold text-slate-400 mb-4">
					Viewing 20 of 160 products
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
				{data.map((item: any, index: number) => (
					<div key={index}>
						<ProductItem product={item} />
					</div>
				))}
			</div>

			<div className="flex justify-center gap-2">
				<button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl">
					1
				</button>
				<button className="bg-white-400 hover:bg-gray-200 text-gray-400 border-gray-400 border-2 font-bold py-2 px-4 rounded-xl">
					2
				</button>
				<button className="bg-white-400 hover:bg-gray-200 text-gray-400 border-gray-400 border-2 font-bold py-2 px-4 rounded-xl">
					3
				</button>
			</div>
		</div>
	);
}
