"use client";
import React, { useEffect, useState, memo } from "react";
import { useUserSignInMutation } from "@/lib/userApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialState = {
  username: "mor_2314",
  password: "83r5^_",
};

const LoginForm = () => {
  const router = useRouter();
  const [signIn, { data, isSuccess, isError, isLoading }] =
    useUserSignInMutation();
  const [user, setUser] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Welcome to Admin panel!");
      localStorage.setItem("token", data.token);
      router.push("/admin");
    } else if (isError) {
      toast.error("Login failed");
    }
  }, [isSuccess, isError, data, router]);

  return (
    <section>
      <div className="path">
        <div className="url">
          <Link href={"/"}>Home / </Link>
          <Link style={{ color: "#262626" }} href={"/login"}>
            Login
          </Link>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} action="" className="login__form">
          <label htmlFor="username">Username</label>
          <input
            value={user.username}
            onChange={(e) =>
              setUser((p) => ({ ...p, username: e.target.value }))
            }
            type="text"
            name="username"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={user.password}
            onChange={(e) =>
              setUser((p) => ({ ...p, password: e.target.value }))
            }
            type="password"
            name="password"
            id="password"
          />
          <button>{isLoading ? "Loading..." : "Login"}</button>
        </form>
      </div>
    </section>
  );
};

export default memo(LoginForm);
