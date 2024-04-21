import { productData } from "@/lib/data";
import Image from "next/image";

type ProductProps = (typeof productData)[number];

export default function Product({
  name,
  price,
  description,
  imageUrl,
}: ProductProps) {
  return (
    <div className="mx-auto grid w-full justify-center p-2 py-8 sm:flex sm:max-w-[1440px] sm:px-20">
      <Image
        className="relative sm:max-h-[75%]"
        src={imageUrl}
        alt="Product Image"
      />
      <div className="px-10 sm:max-w-[1000px]">
        <h1 className="text-font-dark my-4 py-2 text-3xl">{name}</h1>
        <h3 className="text-font-dark border-black/5 py-2 sm:border-y">
          ${price}
        </h3>
        <p className="text-font-light py-8">{description}</p>
        <div className="pb-5 pt-10">
          <div>
            <label className="text-font-light max-w-[10px] uppercase tracking-widest">
              size
            </label>
            <label className="text-required-star">*</label>
          </div>
          <div className="py-3 uppercase">
            <button className="mr-3 border-2 border-gray-300 px-3 py-1 text-gray-400">
              s
            </button>
            <button className="mr-3 border-2 border-gray-200 px-2 py-1 text-gray-400">
              m
            </button>
            <button className="mr-3 border-2 border-gray-200 px-3 py-1 text-gray-400">
              l
            </button>
          </div>
        </div>
        <button className="border-2 border-black px-4 py-2 uppercase">
          add to cart
        </button>
      </div>
    </div>
  );
}
