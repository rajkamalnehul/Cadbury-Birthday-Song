import { useSelector } from "react-redux";

export const useTabSelector = () => useSelector((state) => state.tab.tab);
