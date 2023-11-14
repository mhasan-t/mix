import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CartDetails({ items }: any) {
	const [subtotal, setSubtotal] = useState(0);
	const [shipping, setShipping] = useState(10);
	const [tax, setTax] = useState(5);

	useEffect(() => {
		let subt = items.reduce((acc: any, cur: any) => {
			return acc + Number(cur.price);
		}, 0);
		setSubtotal(subt);
	}, [items]);

	return (
		<div>
			<div className="flex flex-col gap-4">
				<div className="text-lg font-bold w-full">Summary</div>

				<table className="w-full">
					<tr>
						<td>Subtotal</td>
						<td>{subtotal}</td>
					</tr>

					<tr>
						<td>Shipping</td>
						<td>{shipping}</td>
					</tr>

					<tr>
						<td>Tax</td>
						<td>{tax}</td>
					</tr>

					<tr className="h-12 border-t-2 border-b-2 border-gray-200">
						<td className="text-lg font-bold ">Total</td>
						<td className="text-orange-400">
							${subtotal + shipping + tax}
						</td>
					</tr>
				</table>

				<Link href="/checkout" className="w-full">
					<button className="bg-orange-400 text-white text-center text-lg p-2 rounded-full w-full">
						Checkout
					</button>
				</Link>
			</div>
		</div>
	);
}
