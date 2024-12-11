"use client";
import { msalConfig } from "@/app/msal/authConfig.js";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useEffect, useCallback } from "react";
import { InteractionStatus } from "@azure/msal-browser";

const Logging = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // Wrap the function in useCallback to ensure it's memoized and doesn't trigger unnecessary re-renders
  const initializeInstance = useCallback(async () => {
    try {
      await instance.initialize();
      await instance.loginRedirect(msalConfig);
    } catch (error) {
      console.log(error);
    }
  }, [instance]);

  useEffect(() => {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      localStorage.removeItem("isLoggedIn");
      localStorage.setItem("isLoggedIn", true);
      initializeInstance();
    }
  }, [isAuthenticated, inProgress, initializeInstance]);

  return (
    <>
      <div>Auth</div>
    </>
  );
};

export default Logging;
