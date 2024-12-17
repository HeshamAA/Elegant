import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { TDashboardTableHookData } from "../types/dashboardTypes";
import { TProducts } from "../types/productsTypes";
import { TUser } from "../types/authTypes";

function useDashboardTable(data: TDashboardTableHookData) {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<string>("0");
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  function isProduct(el: unknown): el is TProducts {
    return typeof el === "object" && el !== null && "title" in el && typeof (el as TProducts).title === "string";
  }
  
  function isUser(el: unknown): el is TUser {
    return typeof el === "object" && el !== null && "email" in el && typeof (el as TUser).email === "string";
  }
  
  const filteredData = Array.isArray(data) ? data.filter((el) => {
    if (isProduct(el)) {
        return el.title.toLowerCase().includes(searchValue.toLowerCase());
    } else if (isUser(el)) {
        return el.email.toLowerCase().includes(searchValue.toLowerCase());
    }
    return false;
}) : [];

  

  return {
    dispatch,
    isModalOpen,
    setIsModalOpen,
    id,
    setId,
    searchValue,
    searchHandler,
    filteredData,
    navigate,
  };
}
export default useDashboardTable;
