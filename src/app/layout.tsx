import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Phonelectronics",
	description: "Get cool phones and electronics at affordable prices",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
