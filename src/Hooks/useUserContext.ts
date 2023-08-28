import { useContext } from "react";
import { UserContext } from "../Providers";

const useUserContext = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export default useUserContext;
