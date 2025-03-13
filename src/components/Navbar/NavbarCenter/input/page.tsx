import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ProduktType = {
  id: number;
  image: string;
  name: string;
};

function SearchInput() {
  const [input, setInput] = useState("");
  const [inputPage, setInPutPage] = useState<ProduktType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!input.trim()) {
      setInPutPage([]);
      return;
    }

    const fetchData = setTimeout(() => {
      setLoading(true);
      axios
        .get("https://gateway.texnomart.uz/api/common/v1/search/header", {
          params: { q: input },
        })
        .then((res) => {
          setInPutPage(res.data.data.products);
          console.log(res.data.data);
        })
        .catch(() => setInPutPage([]))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(fetchData);
  }, [input]);

  return (
    <div className="relative w-full max-w-[600px]">
      <div className="flex justify-between border-2 border-amber-500 rounded-lg text-lg w-full bg-white">
        <input
          value={input}
          className="focus:outline-none w-full pl-2 py-2 text-gray-700"
          type="text"
          placeholder="Qidirish..."
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="bg-amber-500 p-2 px-3 text-white cursor-pointer">
          <SearchOutlined />
        </div>
      </div>

      {input && inputPage.length > 0 && (
        <div className="absolute left-0 w-full bg-white  mt-1 rounded-lg shadow-lg h-[500px] overflow-y-auto z-50">
          {inputPage.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2 hover:bg-amber-100 cursor-pointer transition-all duration-200"
            >
              <Image
                width={50}
                height={50}
                src={item.image}
                alt={item.name}
                className="object-contain rounded-xl     w-20  h-12"
              />
              <span className="text-gray-700 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <p className="text-center mt-2 text-gray-500">Yuklanmoqda...</p>
      )}
    </div>
  );
}

export default SearchInput;