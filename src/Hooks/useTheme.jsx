import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContext/ThemeContext";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
