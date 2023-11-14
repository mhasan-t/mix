"use client";
import OrderCreateComponent from "@/components/OrderCreateComponent";
import OrderSummaryComponent from "@/components/OrderSummaryComponent";
import React, { useState } from "react";

export default function page() {
	const [orderData, setOrderData] = useState<any>({});
	return (
		<div className="flex flex-col gap-2 max-w-[1500px] justify-self-center m-auto">
			<div className="font-bold text-2xl text-center mt-2">Checkout</div>

			<div className="flex">
				<div className="w-2/3">
					<OrderCreateComponent
						orderData={orderData}
						setOrderData={setOrderData}
					/>
				</div>
				<div className="min-w-[400px]">
					<OrderSummaryComponent orderData={orderData} />
				</div>
			</div>
		</div>
	);
}
