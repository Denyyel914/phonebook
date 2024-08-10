"use client";
import { msalConfig } from "@/app/msal/authConfig.js";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { InteractionStatus } from "@azure/msal-browser";
// import PageLoader from '@/components/PageLoader/Index.jsx'

const Logging = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const initializeInstance = async () => {
    await instance.initialize();
    instance.loginRedirect(msalConfig).catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      localStorage.removeItem("isLoggedIn");
      localStorage.setItem("isLoggedIn", true);
      initializeInstance();
    }
  }, []);

  return (
    <>
      <div>Auth</div>
    </>
  );
};

export default Logging;
