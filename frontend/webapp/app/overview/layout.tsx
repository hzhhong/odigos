"use client";
import { Menu } from "@/components/side.menu";
import theme from "@/styles/palette";
import React from "react";

const LAYOUT_STYLE = {
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundColor: theme.colors.light_dark,
};

const CHILDREN_STYLE = {
  width: "100%",
  height: "93%",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={LAYOUT_STYLE}>
      <Menu />
      <div style={CHILDREN_STYLE}>{children}</div>
    </div>
  );
}
