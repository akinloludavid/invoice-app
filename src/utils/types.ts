import React from "react";

export interface IChildren {
  children: React.ReactNode;
}

export interface IStatus {
  status: "pending" | "paid" | "draft" | any;
}

export interface ICreateInvoice {
  setShowCreateInvoice: (e: boolean) => void;
  id?: string;
  invoice?: Record<string, any>;
}

export interface IFormList {
  name: string;
  quantity: string | number;
  price: string | number;
  total: string | number;
}
