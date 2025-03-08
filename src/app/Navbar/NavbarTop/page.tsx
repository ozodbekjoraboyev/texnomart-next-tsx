"use client";
import React, { useEffect, useState } from "react";
import Location01Icon from "../../../../public/location-01-stroke-rounded (1)";
import GlobalIcon from "../../../../public/global-stroke-rounded (1)";
import { Button, Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import axios from "axios";

function NavbarTop() {
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
        console.log(res.data.data.data);
        setShahar(res.data.data.data);
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

  const shaharItems: MenuProps["items"] = Shahar?.map((item) => ({
    key: item.id.toString(),
    label: item.name,
    onClick: () => setTanlanganShahar(item.name),
  }));

  return (
    <div className="NAvbarBG text-white p-2">
      <div className="flex gap-2 container mx-auto justify-between items-center">
        <div className="flex items-center gap-2 ">
          <Location01Icon />
          <div>
            <div>
              <Dropdown
                className="  "
                menu={{ items: shaharItems }}
                placement="bottom"
              >
                <Space>
                  <p>{tanlanganShahar}</p>
                </Space>
              </Dropdown>
            </div>
          </div>
          <div className="flex pl-12 gap-10 items-center">
            <p>Bizning do'konlarimiz</p>
            <Link href="/yuridikt">
              <Button>Yuridik shaxslar uchun</Button>
            </Link>
            <p>To'lov usullari</p>
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
