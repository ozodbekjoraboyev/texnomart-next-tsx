"use client";
import axios from "axios";
import { it } from "node:test";
import React, { useEffect, useState } from "react";

function Yuridikt() {
  const [yuridikt, setYuridikt] = useState<
    {
      id: number;
      image: string;
      info: null;
      publish_date: string;
      slug: string;
      title: null;
    }[]
  >();
  useEffect(() => {
    axios
      .get(
        `
https://gateway.texnomart.uz/api/web/v1/content/static-page`
      )
      .then((res) => {
        console.log(res.data.data.data);
        setYuridikt(res.data.data.data)
      });
  }, []);
  return <div className="container m-auto">
    <div>
    {yuridikt?.map(item=>{
      return <div key={item.id}>
        <div>
          <div className=" flex gap-3 p-5">
            <img src={item.image} alt="" />
          <p>{item.slug}</p>
          </div>
        </div>
      </div>
    })}
    </div>
  </div>;
}

export default Yuridikt;
