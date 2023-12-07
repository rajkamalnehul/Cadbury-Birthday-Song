import { useSelector } from "react-redux";

export const useDetailsSelector = () => useSelector((state) => state.details);
