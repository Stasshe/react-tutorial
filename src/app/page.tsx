"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page component.</p>
        <div className="flex gap-4">
          <Link href="/01" className="px-4 py-2 bg-purple-500 text-white rounded">
            Go to Page 01
          </Link>
          <Link href="/02" className="px-4 py-2 bg-orange-500 text-white rounded">
            Go to Page 02
          </Link>
        </div>
      </section>
    </>
  );
}
