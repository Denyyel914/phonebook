"use client";
import axios from "axios";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { msalConfig } from "./authConfig";
import { useRouter } from "next/navigation";

import AppLayout from "../layouts/AppLayout";
// import { msalConfig } from '@/features/authentication/config/authConfig'

const MsalRoute = (props) => {
  let isLoggedIn = false;
  let withToken = false;

  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      isLoggedIn = localStorage.getItem("isLoggedIn");
      withToken = localStorage.getItem("withToken");
    }
  }, []);

  // const dispatch = useDispatch()
  //   const fetchTimeline = async () => {
  //     const response = await api.get('/kudos/timeline')
  //     if (response.data.success === true) {
  //       setTimeline(response.data.data)
  //       addTimelineSubData(response.data.data)
  //     }
  //   }
  //   const fetchUserInfo = async () => {
  //     const response = await api.get('/info')
  //     if (response.data.success === true) {
  //       const user = response.data.data.user
  //       setUserInfo(user)
  //       localStorage.setItem('accepted-terms', user.accepted_terms)
  //       localStorage.setItem('locale', response.data.data.locale)
  //       localStorage.setItem('kudos-name', user.kudos_name)
  //       if (user.accepted_terms === null) {
  //         navigate('/terms-and-condition')
  //       } else {
  //         fetchTimeline()
  //         window.location.href = ${import.meta.env.VITE_APP_URL}/
  //       }
  //     }
  //   }

  const handleLogin = async (token) => {
    const res = await axios
      .post("http://127.0.0.1:8081/auth/token", {
        token,
      })
      .catch((error) => {
        console.log(error.response.data.error);
        localStorage.clear();
        navigate.push("/login");
      });

    localStorage.removeItem("token");
    if (res.data.access_token) {
      const authToken = res.data.access_token;
      localStorage.setItem("token", authToken);

      // dispatch(getUserInformation())

      // fetchTimeline()

      //   const response = await languageApi.get('languages/jive')
      //   if (response.data.success) {
      //     localStorage.setItem('languageTranslation', JSON.stringify(response.data.data))
      //   }
      //   fetchUserInfo()
      setWithToken(true);
    }
  };

  const setLoggedInStatus = (value) => {
    localStorage.removeItem("isLoggedIn");
    localStorage.setItem("isLoggedIn", value);
  };

  const setWithToken = (value) => {
    localStorage.removeItem("withToken");
    localStorage.setItem("withToken", value);
  };

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setLoggedInStatus(true);
      setWithToken(true);
    } else {
      if (!isAuthenticated && !isLoggedIn) {
        navigate.push("/auth");
      }

      if (isAuthenticated) {
        const account = accounts[0];
        instance
          .acquireTokenSilent({
            ...msalConfig.auth,
            account,
          })
          .then((response) => {
            if (response && response.idToken) {
              setWithToken(true);
              // handleLogin(response.idToken)
            }
          })
          .catch((err) => {
            console.error(err);
            localStorage.clear();
            navigate("/error"); // Add redirection to error 404 page
          });
      }
    }
  }, [isAuthenticated]);

  return (
    <>
      {/* {
            // eslint-disable-next-line react/prop-types

          isAuthenticated || isAuthenticated === true ?  */}
      <AppLayout>{props.children}</AppLayout>
    </>
  );
};

export default MsalRoute;
