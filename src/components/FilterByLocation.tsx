import React from "react";

const locations = [
	"Jakarta",
	"Bandung",
	"Dhaka",
	"Jakarta",
	"Bandung",
	"Dhaka",
];

export default function FilterByLocation() {
	return (
		<div className="w-full">
			<div className="text-lg font-bold text-slate-900 mb-4">
				Filter by location
			</div>

			<div className="flex flex-col gap-2">
				{locations.map((item, index) => (
					<div key={index} className="flex items-center gap-2">
						<input type="checkbox" name="" id="" />
						<label className="text-gray-400 text-lg" htmlFor="">
							{item}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
