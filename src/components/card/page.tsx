"use client";

import { useEffect, useState } from "react";
import BushCard from "../BushCard/page";
import axios from "axios";
import { CardsType } from "../tayp/page";


function Cards() {
  const [card, setCard] = useState<CardsType[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products`
      )
      .then((res) => {
        console.log(res.data.data.data);
        setCard(res.data.data.data);
      });
  }, []);
  return (
    <div className=" container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-25  pt-5 p-4">
      {card?.map((item) => (
        <BushCard item={item}/>
      ))}
    </div>
  );
}

export default Cards;
