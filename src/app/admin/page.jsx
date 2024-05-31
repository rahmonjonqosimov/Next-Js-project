"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/features/token/tokenSlice";
import { useDispatch } from "react-redux";
import { PageWrapper } from "../page-wrapper";
import Link from "next/link";

const Admin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(token));
    } else {
      router.push("/login");
    }
  }, [dispatch, router]);

  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      <PageWrapper>
        <div className="path">
          <div className="url">
            <Link href={"/"}>Home / </Link>
            <Link style={{ color: "#262626" }} href={"/admin"}>
              Admin
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="admin__page">
            <h3>Admin panel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <button className="log__out" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Admin;
