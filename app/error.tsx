"use client";
import React from "react";

interface Props {
  error: Error;
}

// In a real app, you'd probably want to log the error to an error reporting service.
const ErrorPage = ({ error }: Props) => {
  return <div>An unexpected error occurred.</div>;
};

export default ErrorPage;
