"use client";
import BushCard from "@/components/BushCard/page";
import { BashCardType, CurrentType } from "@/components/tayp/page";
import { Pagination } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavbarPage() {
  const [page, setPage] = useState<CurrentType>();
  const [currentPage, setCurrentPage] = useState(1);
  const { slug } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
      )
      .then((res) => {
        console.log(res.data.data);
        setPage(res.data.data);
      });
  }, [currentPage]);
  return (
    <div className=" container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-25  pt-5 p-4">
      {page?.products.map((item) => {
        return (
          <div key={item.id}>
            <BushCard item={item} />
            
          </div>
        );
      })}
      <div>
        
        <Pagination
          pageSize={20}
          defaultCurrent={currentPage}
          total={page?.total}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}

export default NavbarPage;
