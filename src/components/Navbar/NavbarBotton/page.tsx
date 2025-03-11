"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NAvbarBotton() {
  const [aksiyalar, setAksiyalar] = useState<
    {
      title: string;
      slug: string;
    }[]
  >();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/header/top-categories`)
      .then((res) => {
        // console.log(res.data.data.data);
        setAksiyalar(res.data.data.data);
      });
  }, []);
  return (
    <div className=" flex justify-between container m-auto pt-5 px-5">
      {aksiyalar?.map((item) => {
        return (
          <div key={item.slug}>
            <Link href={`/navbarpage/${item.slug}`} key={item.slug}>
              <div>
                <p>{item.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default NAvbarBotton;
