import "./globals.css";
import { Inter, Roboto, Fira_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});
const fira_sans = Fira_Sans({
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
			<body className={fira_sans.className}>{children}</body>
		</html>
	);
}
