import {
	faCartShopping,
	faHeart,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ProductItem({ product }: any) {
	function addToCart(product: any) {}

	return (
		<div className="bg-white rounded-md shadow-sm flex flex-col gap-1  h-auto justify-center align-center text-center p-4">
			<img
				src={"/phone.jpg"}
				alt={product.title}
				width={300}
				height={300}
				className="rounded-xl"
			/>
			<span className="text-2xl line-clamp-1 mt-2">{product.name}</span>
			<span className="text-xl text-orange-400">${product.price}</span>

			<div className="w-full flex gap-4 justify-center text-center items-center mt-2">
				<div className="text-lg ">
					<FontAwesomeIcon
						icon={faStar}
						className="mr-1 text-orange-400 text-lg "
					/>
					<span className="text-gray-400">{product.rating}.0</span>
				</div>
				<div className="text-lg text-gray-400 ">Sold 99</div>
			</div>

			<div className="flex justify-center mt-4 gap-4">
				<button
					className="bg-orange-400 p-3 px-6 rounded-3xl text-white font-medium text-lg flex"
					onClick={() => {
						addToCart(product);
					}}
				>
					<FontAwesomeIcon
						icon={faCartShopping}
						className="mr-2 text-xl"
					/>
					<div className="text-sm">Add to cart</div>
				</button>

				<button
					className=" text-gray-300 text-xl"
					onClick={() => {
						addToCart(product);
					}}
				>
					<FontAwesomeIcon icon={faHeart} className="mr-2" />
				</button>
			</div>
		</div>
	);
}
