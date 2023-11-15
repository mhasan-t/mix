import "./globals.css";
import { Fira_Sans, Quicksand } from "next/font/google";

const fira_sans = Fira_Sans({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});
const quicksand = Quicksand({
	weight: ["300", "400", "500", "700"],
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
			<body className={quicksand.className}>{children}</body>
		</html>
	);
}
