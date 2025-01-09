import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HandleReturn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const completedDtcId = params.get("completedDTC");

    if (completedDtcId) {
      localStorage.setItem("completedDTC", completedDtcId);
    }

    navigate("/");
  }, [location, navigate]);

  return null;
};

export default HandleReturn;
