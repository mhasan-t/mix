import React from "react";

export default function FilterByPrice() {
	const [value, setValue] = React.useState(50);

	return (
		<div className="w-full">
			<div className="text-lg font-bold text-slate-900 mb-4">
				Filter by price
			</div>
			<div>
				<input
					id="medium-range"
					type="range"
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
					className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-400"
				/>
			</div>
		</div>
	);
}
