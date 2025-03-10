"use client";
import React, { useEffect, useState } from "react";
import Location01Icon from "../../../../public/location-01-stroke-rounded (1)";
import GlobalIcon from "../../../../public/global-stroke-rounded (1)";
import { Button, Dropdown, MenuProps,  Space } from "antd";
import Link from "next/link";
import axios from "axios";

function NavbarTop() {
  type shaharType = {
    id: number;
    name: string;
    slug: string;
    show_in_list: boolean;
    near_region_id: number;
}
  const [language, setLanguage] = useState("UZ");
  const [Shahar, setShahar] = useState<shaharType[]>();
  const [tanlanganShahar, setTanlanganShahar] = useState("Toshkent");
  useEffect(() => {
    axios
      .get(
        `
https://gw.texnomart.uz/api/web/v1/region/regions-list`
      )
      .then((res) => {
        setShahar(res.data.data.data);
      })
      .catch((error) => {
        console.error("Ma'lumot olishda xatolik:", error);
      });
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "uz",
      label: "UZ",
      onClick: () => setLanguage("UZ"),
    },
    {
      key: "ru",
      label: "RU",
      onClick: () => setLanguage("RU"),
    },
  ];

  const shaharItems: MenuProps["items"] = Shahar
  ? Shahar.map((item) => ({
      key: item.id.toString(),
      label: item.name,
      onClick: () => setTanlanganShahar(item.name),
    }))
  : [];

  return (
    <div className="NAvbarBG text-white p-2">
      <div className="flex gap-2 container mx-auto justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Location01Icon />
          <div>
            <div>
              <Dropdown menu={{ items: shaharItems }} placement="bottom">
                <Space>
                  <p>{tanlanganShahar}</p>
                </Space>
              </Dropdown>
            </div>
          </div>
          <div className="flex pl-12 gap-10 items-center">
          <p>Bizning do&#39;konlarimiz</p>
            <Link href="/yuridikt">
              <Button>Yuridik shaxslar uchun</Button>
            </Link>
            <p>To&#39;lov usullari</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <p>Aloqa markazi:</p>
          <p>+99871 209 99 44</p>
          <Dropdown
            className=" border-2 rounded-xl px-1 justify-between ml-5 "
            menu={{ items }}
            placement="bottom"
          >
            <Space>
              <p>{language}</p>
              <GlobalIcon />
            </Space>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
