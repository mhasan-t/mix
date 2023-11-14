import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Pride() {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col gap-8 md:flex-row md:justify-around">
				<div className="flex flex-col justify-center items-center">
					<FontAwesomeIcon
						icon={faCar}
						className="text-6xl text-blue-900"
					/>
					<div className="text-xl font-medium">54 Brands</div>
					<div className="text-sm text-gray-400">
						Lorem Ipsum dolor dit amet
					</div>
				</div>

				<div className="flex flex-col justify-center items-center">
					<FontAwesomeIcon
						icon={faCar}
						className="text-6xl text-blue-900"
					/>
					<div className="text-xl font-medium">1000 Customers</div>
					<div className="text-sm text-gray-400">
						Lorem Ipsum dolor dit amet
					</div>
				</div>

				<div className="flex flex-col justify-center items-center">
					<FontAwesomeIcon
						icon={faCar}
						className="text-6xl text-blue-900"
					/>
					<div className="text-xl font-medium">Fast Delivery</div>
					<div className="text-sm text-gray-400">
						Lorem Ipsum dolor dit amet
					</div>
				</div>

				<div className="flex flex-col justify-center items-center">
					<FontAwesomeIcon
						icon={faCar}
						className="text-6xl text-blue-900"
					/>
					<div className="text-xl font-medium">
						100% Original Product
					</div>
					<div className="text-sm text-gray-400">
						Lorem Ipsum dolor dit amet
					</div>
				</div>
			</div>
		</div>
	);
}
