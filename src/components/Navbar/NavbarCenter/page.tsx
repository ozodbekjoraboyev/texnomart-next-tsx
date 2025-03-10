"use client";

import React, { useState } from "react";
import Menu01Icon from "../../../../public/menu-01-stroke-rounded";
import Cancel01Icon from "../../../../public/cancel-01-stroke-rounded";
import ShoppingCartCheckIn02Icon from "../../../../public/shopping-cart-check-in-02-stroke-rounded";
import FavouriteIcon from "../../../../public/favourite-stroke-rounded";
import UserIcon from "../../../../public/user-stroke-rounded";
import { Button, Dropdown, Input, MenuProps, Modal, Space } from "antd";
import Search from "antd/es/input/Search";
import {
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
function NAvbarCenter() {
  const [katalog, setKatalog] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleKatalog = () => {
    setKatalog((prevState) => !prevState);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: "Group title",
      children: [
        {
          key: "1-1",
          label: "1st menu item",
        },
        {
          key: "1-2",
          label: "2nd menu item",
        },
      ],
    },
    {
      key: "2",
      label: "sub menu",
      children: [
        {
          key: "2-1",
          label: "3rd menu item",
        },
        {
          key: "2-2",
          label: "4th menu item",
        },
      ],
    },
    {
      key: "3",
      label: "disabled sub menu",
      disabled: true,
      children: [
        {
          key: "3-1",
          label: "5d menu item",
        },
        {
          key: "3-2",
          label: "6th menu item",
        },
      ],
    },
  ];

  return (
    <div className="container m-auto pt-5 px-3">
      <div className=" flex  items-center gap-5 justify-between">
        <Link href={"/"}>
          {" "}
          <img
            src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
            alt=""
          />
        </Link>
        <Button
          onClick={() => {
            setKatalog(!katalog); // Holatni to‘g‘ri o‘zgartirish
            setIsModalOpen(true); // Modalni ochish
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            fontSize: "18px",
            height: "50px",
            backgroundColor: "#FBC100",
          }}
        >
          {isModalOpen ? <Cancel01Icon /> : <Menu01Icon />}
          <span className="font-semibold">Katalog</span>
        </Button>

        <Modal
          width={1400}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          bodyStyle={{ padding: "20px" }}
        >
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img
                  src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/19/a05699c9-17b3-41fb-b5c7-5e0b52db28cd.svg"
                  alt=""
                />
                Smartfonlar va gajetlar
              </Space>
            </a>
          </Dropdown>
        </Modal>

        <div className=" flex justify-between  max-w-[600px]  w-full  border-2 border-amber-500  rounded-lg  focus:ring-2 focus:ring-yellow-500 text-lg">
          <input
            className="focus:outline-none w-full pl-2"
            type="text"
            placeholder="Qidirish..."
          />
          <div className=" bg-amber-500 p-2 px-3 ">
            <SearchOutlined />
          </div>
        </div>
        <div className=" flex gap-5">
          <div className=" flex flex-col items-center pl-5 cursor-pointer">
            <UserIcon />
            <p>Kirish</p>
          </div>
          <div className=" flex flex-col items-center pl-5 cursor-pointer">
            <FavouriteIcon />
            <p>Sevimlilar</p>
          </div>
          <div className=" flex flex-col items-center pl-5 cursor-pointer">
            <ShoppingCartCheckIn02Icon />
            <p>Savatcha</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NAvbarCenter;
