"use client";
import React from "react";
import { useRouter } from "next/navigation"; // instead of  "next/router" (because this is part of the old pages router)!

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
