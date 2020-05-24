import React from "react";
import UserLayout from "./userlayout";
import Userinfo from "../components/UserInfo";

export default function usersummary() {
  return (
    <div>
      <UserLayout>
        <Userinfo />
      </UserLayout>
    </div>
  );
}
