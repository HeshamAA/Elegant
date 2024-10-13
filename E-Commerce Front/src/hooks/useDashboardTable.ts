import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { TProducts } from "../types/productsTypes";
import { TUsersResponse } from "../types/authTypes";

function useDashboardTable(data: TProducts[] | TUsersResponse[]) {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<string>("0");
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredData = Array.isArray(data) ? data.filter((el) => {
    if ('title' in el) {
        return el.title.toLowerCase().includes(searchValue.toLowerCase());
    } else if ('email' in el) {
        return el.email.toLowerCase().includes(searchValue.toLowerCase());
    }
    return false; // If neither, exclude the element
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
