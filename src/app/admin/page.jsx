"use client";
import React from "react";
import { redirect } from "next/navigation";

const Admin = () => {
  const isLogin = localStorage.getItem("token");
  if (!isLogin) {
    redirect("/login");
  }
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
        <button className="log__out"> Log out</button>
      </div>
    </div>
  );
};

export default Admin;
