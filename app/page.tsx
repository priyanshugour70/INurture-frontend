import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SpreadSheet | Dashboard of INurture",
  description: "This is a Dashboard of INurture",
  // other metadata
};

export default function Home() {
  return (
    <main className="text-center">
      Hello, This is Priyanshu Gour..!
    </main>
  );
}
