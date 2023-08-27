import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/categories");
  }, [navigate]);

  return <></>;
}

export default MainPage;
