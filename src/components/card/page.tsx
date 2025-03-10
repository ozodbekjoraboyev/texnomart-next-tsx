"use client";
import { message } from "antd";
import axios from "axios";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import BushCard from "../BushCard/page";

function Cards() {
  return (
    <div className=" container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-25  pt-5 p-4">
      <BushCard />
    </div>
  );
}

export default Cards;
