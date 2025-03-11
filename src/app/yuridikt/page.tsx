"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Yuridikt() {
  const [yuridikt, setYuridikt] = useState<
    {
      id: number;
      image: string;
      info: string | null;
      publish_date: string;
      slug: string;
      title: string | null;
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("https://gateway.texnomart.uz/api/web/v1/content/static-page")
      .then((res) => {
        console.log(res.data.data.data);
        setYuridikt(res.data.data.data);
      })
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  return (
    <div>
      {yuridikt.map((item) => (
        <>
          <div key={item.id} className="flex w-full justify-between">
            <div className=" flex gap-5  bg-blue-200  mb-4 rounded-md p-3 ">
              <Image
                width={30}
                height={30}
                src={item.image || "/placeholder.png"}
                alt="Yuridik Image"
                className="rounded-lg"
              />
              <p className="mt-2 font-semibold">{item.slug}</p>
              {/* <p className="text-gray-600">{item.title}</p> */}
              <p className=" bg-amber-600x">{item.info}</p>
            </div>
            salpm
          </div>
        </>
      ))}
    </div>
  );
}

export default Yuridikt;
