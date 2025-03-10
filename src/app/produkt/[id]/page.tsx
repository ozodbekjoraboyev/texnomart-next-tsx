"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function SeparateProductCards() {
  const { id } = useParams();
  const [product, setProduct] = useState<{
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
    large_images: string;
    loan_price: number;
    main_characters: {};
  }>();

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

  return (
    <div className="container m-auto">
      <img className="h-[300px]" src={product?.large_images[0]} alt="" />
      <p>{product?.name}</p>
    </div>
  );
}

export default SeparateProductCards;
