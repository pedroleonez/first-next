import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] bg-gray-100 text-gray-800 overflow-hidden">
      <h1 className="font-bold text-3xl mb-3">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Voltar para Home.
      </Link>
    </div>
  );
}
