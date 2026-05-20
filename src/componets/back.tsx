import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="px-4 py-2 bg-gray-500 text-white rounded"
    >
      Back
    </Link>
  );
}
