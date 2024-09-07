"use client";

import { createContext, useState ,useEffect} from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    // userId: "",
    // name: "",
    // email: "",
    // profile_img: "",
  

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:8008/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        console.log("USER", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect (() => {
    if (! user ) {
    }
    fetchUserData();
  }, [ user ])

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};