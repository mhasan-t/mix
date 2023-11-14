"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	return (
		// LOGIN PAGE
		<div className="min-h-screen bg-blue-800 text-white p-4">
			<div className="max-h-28 flex justify-between">
				<span>PHONELECTRONICS</span>

				<div className="flex gap-8 text-sm">
					<button className="">Contact Us</button>
					<button>
						<Link href="/auth">Login</Link>
					</button>
					<button className="rounded-2xl px-5 bg-orange-500">
						<Link href="/auth">Create Account</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
