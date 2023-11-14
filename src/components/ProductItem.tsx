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
	function addToCart(product: any) {
		const lsData = window ? localStorage.getItem("cart") : "";
		console.log(lsData);

		if (
			lsData === null ||
			lsData.length === 0 ||
			Object.keys(lsData).length === 0
		) {
			localStorage.setItem("cart", JSON.stringify([product]));
		} else {
			let cartItems = JSON.parse(lsData);
			console.log(cartItems);
			cartItems.push(product);
			localStorage.setItem("cart", JSON.stringify(cartItems));
		}
	}

	return (
		<div className="bg-white rounded-md shadow-sm flex flex-col gap-1 w-60 h-auto justify-center align-center text-center p-4">
			<img
				src={"http://placekitten.com/300/300"}
				alt={product.title}
				width={300}
				height={300}
				className="rounded-xl"
			/>
			<span className="text-lg line-clamp-1">{product.name}</span>
			<span className="text-lg text-orange-600">${product.price}</span>
			<div className="flex justify-around text-center items-center">
				<span className="text-lg w-1/2">
					<FontAwesomeIcon
						icon={faStar}
						className="mr-1 text-orange-400"
					/>
					{product.rating}
				</span>
				<span className="text-sm text-gray-400 w-1/2">Sold 99</span>
			</div>

			<div className="flex justify-around mt-4">
				<button
					className="bg-orange-400 p-2 px-4 rounded-2xl text-white font-medium text-sm"
					onClick={() => {
						addToCart(product);
					}}
				>
					<FontAwesomeIcon icon={faCartShopping} className="mr-2" />
					Add to cart
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
