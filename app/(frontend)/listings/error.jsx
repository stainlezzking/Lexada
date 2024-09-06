"use client"; // Error boundaries must be Client Components
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-300">500 Server Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">An Error Occured!</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{error.message}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => reset()}
            className=" bg-white text-main py-[13px] px-[40px] rounded-[5px] mx-auto block w-fit hover:bg-main hover:text-primary"
          >
            Retry
          </button>
        </div>
      </div>
    </main>
  );
}
