import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => (
  <div>
    {/* this will refresh again the home page i.e. it will use server side routing */}
    {/* 404!-<a href="/">Go Home</a> */}
    {/* This will use client side routing */}
    404-<Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
