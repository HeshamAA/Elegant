import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

function useHome() {
  // first section
  const [seconds, setSeconds] = useState<number>(5);
  const [minutes, setMinutes] = useState<number>(54);
  const [hours, setHours] = useState<number>(15);
  const [days, setDays] = useState<number>(7);

  const timeData = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  //    third section

  const dispatch = useAppDispatch();

  const bestSellersData = useAppSelector((state) => state.bestSellers.data);

  return {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    hours,
    setHours,
    setDays,
    timeData,
    dispatch,
    bestSellersData,
  };
}

export default useHome;
