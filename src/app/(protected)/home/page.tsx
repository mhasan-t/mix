"use client";
import AllCategories from "@/components/AllCategories";
import BannerComponent from "@/components/BannerComponent";
import BrandLogos from "@/components/BrandLogos";
import FeaturedProducts from "@/components/FeaturedProducts";
import FilterByLocation from "@/components/FilterByLocation";
import FilterByPrice from "@/components/FilterByPrice";
import FilterByRating from "@/components/FilterByRating";
import Footer from "@/components/Footer";
import HomeProductList from "@/components/HomeProductList";
import Pride from "@/components/Pride";
import ProductItem from "@/components/ProductItem";
import TypeList from "@/components/TypeList";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
	const router = useRouter();

	const [data, setData] = useState([
		{
			id: 1,
			created_at: "2023-11-13T08:28:38.000000Z",
			updated_at: "2023-11-13T08:28:38.000000Z",
			name: "iPhone",
			description: "Nice phone",
			image: "imge",
			price: "100.00",
			stock: 10,
			rating: 1,
		},
		{
			id: 2,
			created_at: "2023-11-13T08:28:44.000000Z",
			updated_at: "2023-11-13T08:28:44.000000Z",
			name: "aphone",
			description: "Nice phone",
			image: "imge",
			price: "100.00",
			stock: 10,
			rating: 1,
		},
		{
			id: 3,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "Xiomi xxx2",
			description:
				"Optio aliquam fugit consequuntur officiis nesciunt ab. Necessitatibus eius ratione qui error similique illum ut.",
			image: "Quia ipsum repellendus nam. Quae vero porro quod non ut tempora. Dolorem voluptas ducimus nisi minus aut laudantium dicta eum. Repudiandae consequatur id eos distinctio sequi repellendus accusamus.",
			price: "1.00",
			stock: 38,
			rating: 3,
		},
		{
			id: 4,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "Shea",
			description:
				"Enim beatae vero perspiciatis quis dolor. Et earum facere facere et. Aliquid vel expedita aliquam voluptate ut eum.",
			image: "Enim modi nihil adipisci placeat inventore. Hic quia id sequi quae iure voluptatem. Possimus porro omnis doloremque eos. Dolorem non repudiandae id culpa. Qui dolorum dolor eveniet est dicta.",
			price: "5.00",
			stock: 3967765,
			rating: 1,
		},
		{
			id: 5,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "Osinski",
			description:
				"Saepe totam est veniam alias. Voluptate omnis rem sed et et aut. Maiores enim qui repellat ipsa nam ut.",
			image: "Iure velit quas dignissimos ea sequi modi eveniet. Dolor eos voluptatem omnis consequatur necessitatibus maxime. Corporis enim voluptas quaerat autem quas minus. Id qui et omnis consequuntur.",
			price: "7.00",
			stock: 8,
			rating: 3,
		},
		{
			id: 6,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "Mr. USB",
			description:
				"Rem dolorem voluptatem enim commodi repellat. Qui officia illo earum porro suscipit. Dicta accusantium quam nobis qui et.",
			image: "Recusandae corporis harum atque adipisci rerum architecto commodi. Molestias asperiores dolor ad commodi molestiae quia sed. Distinctio aperiam dolorem saepe voluptas sunt.",
			price: "1.00",
			stock: 3237,
			rating: 4,
		},
		{
			id: 7,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "Armand",
			description:
				"Et sed earum ut minima autem sapiente. Ad expedita error doloremque asperiores suscipit. Provident sapiente officia eius nisi tempore et.",
			image: "At quisquam officiis voluptas officia. Similique totam id ut non molestiae tenetur. Alias iste molestiae fugiat aut voluptatem soluta quod.",
			price: "7.00",
			stock: 20,
			rating: 2,
		},
		{
			id: 8,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "EPIC",
			description:
				"Et et dolorem ut deleniti. Assumenda quos aut temporibus natus. Perspiciatis ducimus rerum at quidem enim molestiae.",
			image: "Consectetur facere et quia eveniet. Sint maxime quo consequatur ratione est. Porro sit aliquam aspernatur tempore tempora.",
			price: "6.00",
			stock: 23959775,
			rating: 3,
		},
		{
			id: 9,
			created_at: "2023-11-13T11:50:48.000000Z",
			updated_at: "2023-11-13T11:50:48.000000Z",
			name: "Charger",
			description:
				"Autem corporis consequatur beatae est quaerat sed. Enim enim voluptatem expedita natus sunt et. Autem sint dolor aut consequatur eum dignissimos.",
			image: "Qui consequuntur numquam vero dolore. Id voluptatem dolore sit accusamus autem blanditiis.",
			price: "4.00",
			stock: 452528,
			rating: 1,
		},
	]);
	const [page, setPage] = useState(1);

	return (
		<div className="min-h-screen max-w-[100vw] flex flex-col items-center gap-4">
			<div className="mx-2 max-w-6xl">
				<BannerComponent />
			</div>

			<div className="pb-12 mb-12 border-b-2 border-slate-300 mx-2">
				<TypeList />
			</div>

			<div className="w-full px-5 mb-24 mx-2 max-w-[1500px]">
				<BrandLogos />
			</div>

			<div className="flex flex-col md:flex-row gap-8 mb-12 mx-2">
				<div className="w-1/3 min-w-[300px] max-w-[400px] flex flex-col">
					<div className="pb-4 mb-4 border-b-2 border-slate-200">
						<AllCategories />
					</div>
					<div className="pb-4 mb-4 border-b-2 border-slate-200">
						<FilterByPrice />
					</div>
					<div className="pb-4 mb-4 border-b-2 border-slate-200">
						<FilterByLocation />
					</div>
					<div className="pb-4 mb-4 border-b-2 border-slate-200">
						<FilterByRating />
					</div>

					<div className="flex flex-col justify-center items-center w-full mt-16">
						<button className="bg-orange-400 rounded-3xl p-4 px-24 text-white font-bold max-w-[300px]">
							Filter
						</button>
						<button className=" rounded-3xl p-4 px-16 text-blue-900 font-bold max-w-[300px]">
							Reset Filters
						</button>
					</div>
				</div>
				<div>
					<HomeProductList data={data} />
				</div>
			</div>

			<div className="pb-12 mb-12 border-b-2 border-slate-300">
				<FeaturedProducts />
			</div>

			<div className="pb-12 mb-12 w-full md:px-20">
				<Pride />
			</div>

			<div className="w-screen p-4">
				<Footer />
			</div>
		</div>
	);
}
