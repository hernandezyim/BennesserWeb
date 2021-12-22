import { useEffect } from "react";
import { addTitle } from "../../../helpers/addTitle";

export const HomeScreen = () => {

  useEffect(() => {
    addTitle('Home');
  }, [])
  
  return <div>Home</div>;
};
