"use client";

import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

export default function Product() {
  const { data, isLoading, error } = useSWR(
    "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product",
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="mx-auto grid w-full justify-center p-2 py-8 sm:flex sm:max-w-[1440px] sm:px-20">
      <Image
        className="relative sm:max-h-[75%]"
        loader={() => data.imageURL}
        src={data.imageURL}
        alt="product image"
        width={1000}
        height={2000}
      />
      <div className="sm:max-w-[1000px] sm:px-10">
        <h1 className="text-font-dark my-4 py-2 text-3xl">{data.title}</h1>
        <h3 className="text-font-dark border-black/5 py-2 sm:border-y">
          ${data.price}
        </h3>
        <p className="text-font-light py-8">{data.description}</p>
        <div className="pb-5 pt-10">
          <div>
            <label className="text-font-light max-w-[10px] uppercase tracking-widest">
              size
            </label>
            <label className="text-required-star">*</label>
          </div>
          <div className="py-3 uppercase">
            {data.sizeOptions.map((option: any, key: any) => (
              <button
                key={key}
                className="mr-3 border-2 border-gray-300 px-3 py-1 uppercase text-gray-400"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <button className="border-2 border-black px-4 py-2 uppercase transition-colors duration-200 ease-in-out hover:bg-black hover:text-white">
          add to cart
        </button>
      </div>
    </div>
  );
}
