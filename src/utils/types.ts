import React from "react";

export interface IChildren {
  children: React.ReactNode;
}

export interface IStatus {
  status: "pending" | "paid" | "draft" | any;
}
