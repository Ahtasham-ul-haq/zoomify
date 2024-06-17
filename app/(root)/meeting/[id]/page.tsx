"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  return <main className=""></main>;
};

export default Meeting;
