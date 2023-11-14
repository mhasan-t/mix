import {
	faCartShopping,
	faHeadphones,
	faSearch,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// export const metadata = {
// 	title: "Phonelectronics",
// 	description: "Get cool phones and electronics at affordable prices",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="pt-2 px-2 bg-slate-50">
			{/* TOPBAR */}
			<div className="flex flex-col md:flex-row md:justify-between items-center bg-blue-900 font-bold text-xl text-white p-2 md:px-8 rounded-full mb-6">
				<div>PHONELECTRONICS</div>
				<div className="flex flex-col md:flex-row md:gap-8 gap-2">
					<div className="relative w-full">
						<input
							type="text"
							placeholder="Search item here"
							className="rounded-2xl p-2 px-8 text-sm text-white bg-blue-900 brightness-125 bg-opacity-80 border-none font-medium  w-full md:w-96"
						/>
						<div className="absolute right-1 top-0 h-full flex justify-center items-center bg-orange-400 p-2 rounded-full">
							<FontAwesomeIcon
								icon={faSearch}
								fill="#000"
								height={20}
								width={20}
							/>
						</div>
					</div>

					<div className="flex gap-8 items-center justify-center">
						<div className="flex justify-between items-center">
							<FontAwesomeIcon
								icon={faHeadphones}
								fill="#000"
								height={20}
								width={20}
							/>
						</div>
						<div className="flex justify-between items-center">
							<FontAwesomeIcon
								icon={faUser}
								fill="#000"
								height={20}
								width={20}
							/>
						</div>
						<div className="flex justify-between items-center">
							<Link href="/cart">
								<FontAwesomeIcon
									icon={faCartShopping}
									fill="#000"
									height={20}
									width={20}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}
