"use client";
import React from "react";

interface Props {
  error: Error;
}

// In a real app, you'd probably want to log the error to an error reporting service (like sentri.io).
const ErrorPage = ({ error }: Props) => {
  console.log("Error", error);

  return <div>An unexpected error occurred.</div>;
};

export default ErrorPage;
