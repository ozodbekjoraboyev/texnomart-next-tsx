"use client";
import BushCard from "@/components/BushCard/page";
import { BashCardType } from "@/components/tayp/page";
import { Pagination } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavbarPage({ item }: BashCardType) {
  const [page, setPage] = useState<[]>();
  const { slug } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=1`
      )
      .then((res) => {
        console.log(res.data.data.products);
        setPage(res.data.data.products);
      });
  }, []);
  return (
    <div className=" container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-25  pt-5 p-4">
      {page?.map((item) => {
        return (
          <>
            <BushCard item={item} />
            {/* <Pagination defaultCurrent={} total={500} />; */}
          </>
        );
      })}
    </div>
  );
}

export default NavbarPage;
