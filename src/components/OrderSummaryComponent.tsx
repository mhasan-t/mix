"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function OrderSummaryComponent({ orderData }: any) {
	const [subtotal, setSubtotal] = useState(0);
	const [shipping, setShipping] = useState(10);
	const [tax, setTax] = useState(5);
	const items: any = [];

	useEffect(() => {
		let subt = items.reduce((acc: any, cur: any) => {
			return acc + Number(cur.price);
		}, 0);
		setSubtotal(subt);
	}, []);

	async function handleCheckout() {
		// fetch("/api/order", {
		//   method: "POST",
		//   body: JSON.stringify({
		//     products: itemIds,
		//     total: subtotal,
		//     ...orderData,
		//   }),
		// }).then((res) => {
		//   if (res.status === 200) {
		//     window.location.href = "/order";
		//   }
		// });

		let itemIds = items.map((item: any) => item.id);

		const data = {
			products: new Set(itemIds),
			total: subtotal,
			...orderData,
		};

		let res = await fetch("http://localhost:8000/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer ",
			},
			body: JSON.stringify(data),
		});

		console.log(res);

		if (res.status === 200) {
			window.location.href = "/order";
		}
	}

	return (
		<div>
			<div className="flex flex-col gap-4">
				<div className="text-lg font-bold w-full">
					Your Order Summary
				</div>

				<table className="w-full border-separate border-spacing-y-2">
					{items.map((item: any) => {
						return (
							<tr>
								<td>1x</td>
								<td className="line-clamp-1">{item.name}</td>
								<td>{item.price}</td>
							</tr>
						);
					})}
				</table>

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
					<button
						className="bg-orange-400 text-white text-center text-lg p-2 rounded-full w-full"
						onClick={handleCheckout}
					>
						Checkout
					</button>
				</Link>
			</div>
		</div>
	);
}
