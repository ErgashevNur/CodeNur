import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-no-repeat bg-cover min-h-full mt-20 font-source-sans font-normal overflow-auto bg-white text-center bg-body">
      <img
        src="/404-.webp"
        alt="404 Error Page Image"
        className="max-w-[500px]"
      />
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link href="/">
        <button className="mt-6 px-8 py-3 bg-slate-600 rounded-xl text-white hover:underline">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}
