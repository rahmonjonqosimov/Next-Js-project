"use client";
import React, { useEffect, useState } from "react";
import { useUserSignInMutation } from "@/lib/userApi";
import { toast } from "react-toastify";
const initialState = {
  username: "mor_2314",
  password: "83r5^_",
};
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [signIn, { data, isSuccess, isLoading }] = useUserSignInMutation();
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Welcome to Admin panel !");
      router.push("/admin");
      localStorage.setItem("token", data.token);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="" className="login__form">
        <label htmlFor="username">Username</label>
        <input
          value={user.username}
          onChange={(e) => setUser((p) => ({ ...p, username: e.target.value }))}
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={user.password}
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
          type="password"
          name="password"
          id="password"
        />
        <button>{isLoading ? "Loading..." : "Login"}</button>
      </form>
    </div>
  );
};

export default LoginForm;
