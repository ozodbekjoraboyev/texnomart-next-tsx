"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface productTypes {
  availability: string;
  brand: string;
  breadcrumbs: {
    name: string;
    slug: string;
  };
  name: string;
  code: string;
  guarantee: string;
  id: number;
  installment_price: number;
  is_can_loan_order: number;
  large_images: string[];
  loan_price: number;
  main_characters: { name: string, value: string}[]
}

function SeparateProductCards() {
  const id = Number(useParams().id);
  const [product, setProduct] = useState<productTypes>();

  useEffect(() => {
    axios
      .get(
        `
https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`
      )
      .then((res) => {
        setProduct(res.data.data.data);
        console.log(res.data.data.data);
      })
      .catch((error) => console.error("Xatolik:", error));
  }, [id]);
  if (!product) {
    return <>loading...</>;
  }
  return (
    <div className="container m-auto">
      <Image width={100} height={100} src={`${product.large_images[0]}`} alt="sss" priority/>
      <p>{product.name}</p>
    </div>
  );
}

export default SeparateProductCards;
