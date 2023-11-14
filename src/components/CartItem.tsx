import React, { useState } from "react";

export default function CartItem({ item }: any) {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="p-4 flex gap-2">
			<div>
				<img
					src="http://placekitten.com/300/300"
					alt=""
					className="w-32 rounded-2xl"
				/>
			</div>
			<div className="flex flex-col justify-around">
				<div className="text-lg">{item.name}</div>
				<div className="text-orange-400">${item.price}</div>
				<div className="flex gap-2">
					<button
						className="rounded-xl bg-gray-200 px-2"
						onClick={(event) => {
							setQuantity(Math.max(1, quantity - 1));
						}}
					>
						-
					</button>
					{quantity}
					<button
						className="rounded-xl bg-gray-200 px-2"
						onClick={(event) => {
							setQuantity(quantity + 1);
						}}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
