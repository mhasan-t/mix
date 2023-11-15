import { faArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FilterByRating() {
	const [collapsed, setCollapsed] = React.useState(false);

	return (
		<div className="w-full">
			<button
				onClick={() => setCollapsed(!collapsed)}
				className="w-full flex justify-between items-center"
			>
				<div className="text-lg font-bold text-slate-900 mb-4 flex flex-col justify-center items-center">
					<div>Filter by rating</div>
				</div>
				<FontAwesomeIcon
					icon={faArrowDown}
					className={`text-slate-900 ${
						collapsed && "transform -rotate-90"
					}`}
				/>
			</button>

			{!collapsed && (
				<div className="flex flex-col gap-2">
					{[...Array(5)].map((item, index) => (
						<div className="flex items-center gap-2">
							<input type="checkbox" name="" id="" />
							<label className="text-gray-400 text-lg" htmlFor="">
								{[...Array(index + 1)].map((item, index) => (
									<FontAwesomeIcon
										icon={faStar}
										className="text-orange-400"
									/>
								))}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
