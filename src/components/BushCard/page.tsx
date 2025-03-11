"use client";
import axios from "axios";
import ShoppingCart01Icon from "../../../public/shopping-cart-01-stroke-rounded";
import React, { useEffect, useState } from "react";
import FavouriteIcon from "../../../public/favourite-stroke-rounded";
import Link from "next/link";
import Image from "next/image";
import { BashCardType } from "../tayp/page";

function BushCard({ item }: BashCardType) {
  return (
    <>
      <div
        key={item.id}
        className="relative h-[480px] w-[290px] border border-gray-200 shadow-lg mb-5 rounded-lg p-4 flex flex-col justify-between"
      >
        <div className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-700 transition">
          <FavouriteIcon />
        </div>
        <div className="flex justify-center">
          <Link href={`/produkt/${item.id}`}>
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={item.name}
              className="object-contain rounded-md"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className="text-lg font-medium text-gray-800">{item?.name}</p>
          <p className="bg-gray-300 text-gray-700 text-center py-1 rounded-md">
            {item.axiom_monthly_price}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-900">
            {item.sale_price
              ? `${item.sale_price.toLocaleString("ru-RU")} So'm`
              : "Narx mavjud emas"}
          </p>

          <button className="border-2 border-amber-400 rounded-md p-2 hover:bg-amber-400 transition">
            <ShoppingCart01Icon className="text-gray-800" />
          </button>
        </div>
 

      </div>
    </>
  );
}

export default BushCard;
