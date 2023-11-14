import React from "react";

export default function Footer() {
	return (
		<div className="bg-[#00398f] p-8 md:p-20 rounded-2xl text-white">
			<div className="grid grid-col-1 md:grid-cols-5 gap-6  items-stretch font-white  pb-10 mb-10 border-b border-white">
				<div className="flex flex-col gap-4 md:col-span-2 max-w-[400px]">
					<div className="text-xl font-bold">PHONELECTRONICS</div>
					<div className="text-md ">
						Phonetronics is a leading provider of high-quality phone
						accessories and spare parts. With a commitment to
						delivering exceptional products and service, we cater to
						the needs of businesses and consumers in the
						ever-evolving mobile technology industry.
					</div>
				</div>
				<div className="flex flex-col gap-4  max-w-[400px]">
					<div className="font-bold text-lg">About</div>
					<div className="text-sm opacity-90">Company</div>
					<div className="text-sm opacity-90">Who we are</div>
					<div className="text-sm opacity-90">Blog</div>
					<div className="text-sm opacity-90">Careers</div>
				</div>
				<div className="flex flex-col gap-4  max-w-[400px]">
					<div className="font-bold text-lg">Product</div>
					<div className="text-sm opacity-90">Phonetronics Pro</div>
					<div className="text-sm opacity-90">Phonetronics Sport</div>
					<div className="text-sm opacity-90">Phonetronics Cool</div>
					<div className="text-sm opacity-90">Phonetronics</div>
				</div>
				<div className="flex flex-col gap-4  max-w-[400px]">
					<div className="font-bold text-lg">Discover</div>
					<div className="text-sm opacity-90">Store & Services</div>
					<div className="text-sm opacity-90">Accessories</div>
					<div className="text-sm opacity-90">Promotion</div>
				</div>
			</div>

			<div className="grid grid-col-1 md:grid-cols-5 gap-6 items-stretch font-white text-white">
				<div className="font-medium text-sm md:col-span-2">
					©Copyright 2023 Phonetronics
				</div>
				<div className="font-medium text-sm">Term of Services</div>
				<div className="font-medium text-sm">Privacy</div>
				<div className="font-medium text-sm">Cookies</div>
			</div>
		</div>
	);
}
