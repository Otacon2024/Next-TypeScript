"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

// In a real app, you'd probably want to log the error to an error reporting service (like sentri.io).
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
