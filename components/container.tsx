import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="max-w-screen-lg mx-auto p-4">{children}</section>;
};
