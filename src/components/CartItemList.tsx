import React from "react";
import CartItem from "./CartItem";

export default function CartItemList({ items }: any) {
	return (
		<div>
			<div className="divide-y-2 divide-orange-400 w-full">
				{items.map((item: any) => {
					return (
						<div className="">
							<CartItem item={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
