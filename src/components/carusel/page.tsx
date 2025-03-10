"use client";

import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Carusel() {
  const [imglar, setImglar] = useState<string[]>([]);
  const [carusel, setCarusel] = useState(0);

  useEffect(() => {
    setImglar([
      "https://mini-io-api.texnomart.uz/newcontent/slider/352/1KTJ8zmxnXMzBvjTk4jCuXcKPkd251n2Xx9GL4Xn.webp",
      "https://mini-io-api.texnomart.uz/newcontent/slider/354/UUfhmmcJSCMtzLYELGhD9OgZdwWDaJm1kVTtuW6A.webp",
      "https://mini-io-api.texnomart.uz/newcontent/slider/356/4lavHjB0DmCfBwJzIoabAP309zKfjTeydsdol063.webp",
      "https://mini-io-api.texnomart.uz/newcontent/slider/347/dyFPEw5MYDBCgQSopcXyBcpOE1HVhSugUCb7V3ad.webp",
    ]);
  }, []);

  function next() {
    setCarusel((prev) => (prev + 1) % imglar.length);
  }

  function prev() {
    setCarusel((prev) => (prev - 1 + imglar.length) % imglar.length);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative container w-full px-10 m-auto overflow-hidden">
        <button
          onClick={prev}
          className="absolute top-1/2 cursor-pointer left-15 -translate-y-1/2 z-10 border border-gray-300 shadow-md rounded-full p-3 bg-white hover:bg-gray-100 active:scale-90 transition-transform"
        >
          <LeftOutlined className="text-2xl" />
        </button>

        {imglar.length > 0 && (
          <img
            className="w-[1500px]  h-[400px] mt-5 object-cover rounded-lg shadow-lg transition-transform duration-700"
            src={imglar[carusel]}
            alt="Carusel rasmi"
          />
        )}

        <button
          onClick={next}
          className="absolute top-1/2 right-15 -translate-y-1/2 z-10 border border-gray-300 shadow-md rounded-full p-3 bg-white hover:bg-gray-100 active:scale-90 transition-transform"
        >
          <RightOutlined className="text-2xl" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {imglar.map((_, index) => (
            <button
              key={index}
              onClick={() => setCarusel(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                carusel === index ? "bg-blue-500 w-7 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carusel;
