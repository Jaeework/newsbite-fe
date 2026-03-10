import { useEffect } from "react";
import { useAppDispatch } from "../features/hooks";
import {
  clearUserState,
  loginWithToken,
  setUser,
} from "../features/user/userSlice";

const RefreshHandler = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginWithToken());
  }, [dispatch]);

  useEffect(() => {
    const handleLogout = () => {
      dispatch(clearUserState());
    };
    window.addEventListener("auth:logout", handleLogout);
    return () => window.removeEventListener("auth:logout", handleLogout);
  }, [dispatch]);

  useEffect(() => {
    const handleRefreshSuccess = (e: Event) => {
      const user = (e as CustomEvent).detail.user;
      dispatch(setUser(user));
    };
    window.addEventListener("refresh:success", handleRefreshSuccess);
    return () =>
      window.removeEventListener("refresh:success", handleRefreshSuccess);
  }, [dispatch]);

  return null;
};

export default RefreshHandler;
