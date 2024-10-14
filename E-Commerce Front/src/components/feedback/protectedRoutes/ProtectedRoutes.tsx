import  { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { IProtectedRoutesProps } from "../../../types/protectedRoutesTypes";


function ProtectedRoutes({ condition, children }: IProtectedRoutesProps) {
 
  const navigate = useNavigate();
  useEffect(() => {
    if (condition) {
      navigate("/");
    }
  }, [condition]);

  return <>{children}</>;
}

export default ProtectedRoutes;
