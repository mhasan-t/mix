import React from "react";

export default function OrderCreateComponent({ orderData, setOrderData }: any) {
	return (
		<div>
			<div className="flex flex-col p-4 gap-6">
				<div className="flex flex-col gap-2">
					<div className="text-lg font-bold">Contact Information</div>
					<input
						type="text"
						placeholder="Email or phone number"
						className="w-full p-2"
						onChange={(event) => {
							setOrderData({
								...orderData,
								contact: event.target.value,
							});
						}}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<div className="text-lg font-bold">Shipping Address</div>
					<input
						type="text"
						placeholder="Your name"
						className="w-full p-2"
						onChange={(event) => {
							setOrderData({
								...orderData,
								name: event.target.value,
							});
						}}
					/>

					<input
						type="text"
						placeholder="Your name"
						className="w-full p-2"
						onChange={(event) => {
							setOrderData({
								...orderData,
								name: event.target.value,
							});
						}}
					/>
					<input
						type="text"
						placeholder="Shipping Address"
						className="w-full p-2"
						onChange={(event) => {
							setOrderData({
								...orderData,
								address: event.target.value,
							});
						}}
					/>
					<input
						type="text"
						placeholder="Your city"
						className="w-full p-2"
						onChange={(event) => {
							setOrderData({
								...orderData,
								city: event.target.value,
							});
						}}
					/>

					<div className="flex">
						<input
							type="text"
							placeholder="Your city"
							className="w-full p-2"
							onChange={(event) => {
								setOrderData({
									...orderData,
									country: event.target.value,
								});
							}}
						/>
						<input
							type="text"
							placeholder="Your phone number"
							className="w-full p-2"
							onChange={(event) => {
								setOrderData({
									...orderData,
									phone: event.target.value,
								});
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
