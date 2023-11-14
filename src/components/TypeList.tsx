import {
	faBox,
	faCableCar,
	faChargingStation,
	faGamepad,
	faHeadphones,
	faMoneyBill,
	faParachuteBox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const types = [
	{
		name: "Deals",
		icon: faMoneyBill,
	},
	{
		name: "Chargers",
		icon: faChargingStation,
	},
	{
		name: "Parts",
		icon: faParachuteBox,
	},
	{
		name: "Cables",
		icon: faCableCar,
	},
	{
		name: "Headphones",
		icon: faHeadphones,
	},
	{
		name: "Cases",
		icon: faBox,
	},
	{
		name: "Others",
		icon: faGamepad,
	},
];

export default function TypeList() {
	return (
		<div className="lg:flex grid grid-cols-3 md:grid-cols-4">
			{types.map((type: any, index: number) => {
				return (
					<div className="h-32">
						<div className="flex flex-col items-center bg-white font-bold text-xl p-2 px-8 rounded-full mb-6 h-20">
							<div className="flex justify-between items-center p-4 border-2 border-gray-300 rounded-2xl w-20">
								<FontAwesomeIcon
									icon={type.icon}
									fill="#111"
									className="w-auto max-w-full h-12"
								/>
							</div>
							<div className="text-center font-medium mt-3 text-sm">
								{type.name}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
