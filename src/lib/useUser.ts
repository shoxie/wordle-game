import { User } from "@/types";
import { useState, useEffect } from "react";
import { createUser, getUserData } from "./api";

export function useUser() {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    solved: 0,
  });

  useEffect(() => {
    if (!localStorage) return;
    checkData();
    async function checkData() {
      if (user.id) return;
      const localData = localStorage.getItem("userData");
      const data = localData ? JSON.parse(localData) : null;

      if (!data) {
        console.log("wtf");
        // const newUser = await createUser();
        // localStorage.setItem("userData", JSON.stringify(newUser));
        // setUser(newUser)
      } else {
        const user = await getUserData(data.id);
        localStorage.setItem("userData", JSON.stringify(user));
        setUser(user);
      }
    }
  });

  return user;
}
