"use client";

import CartDetails from "@/components/CartDetails";
import CartItem from "@/components/CartItem";
import CartItemList from "@/components/CartItemList";
import React, { useState } from "react";

export default function page() {
	const [items, setItems] = useState([]);

	return (
		<div>
			<div className="flex justify-center items-center text-center mt-2">
				<h1 className="font-bold text-3xl">My Cart</h1>
			</div>

			{items && items.length > 0 ? (
				<div className="flex">
					<div className="w-2/3">
						<CartItemList items={items} />
					</div>

					<div className="min-w-[500px]">
						<CartDetails items={items} />
					</div>
				</div>
			) : (
				<div>no items so empty</div>
			)}
		</div>
	);
}
