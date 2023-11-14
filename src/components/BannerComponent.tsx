import React from "react";

export default function BannerComponent() {
	return (
		<div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 w-full">
			<img
				src="/banner-1.png"
				alt=""
				className="md:col-span-2 md:row-span-2 w-full h-[98%] rounded-2xl"
			/>
			<img src="/banner-2.png" alt="" className="w-full  rounded-2xl" />
			<img src="/banner-3.png" alt="" className="w-full  rounded-2xl" />
		</div>
	);
}
