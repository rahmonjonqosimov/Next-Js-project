"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/features/token/tokenSlice";
import { useDispatch } from "react-redux";

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
    <div className="container">
      <div className="admin__page">
        <h3>Admin panel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <button className="log__out" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Admin;
