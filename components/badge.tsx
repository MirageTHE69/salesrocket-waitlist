import clsx from "clsx";
import React from "react";

export const Badge = ({
  children,
  className,
  type = "default",
}: {
  children: React.ReactNode;
  className?: string;
  type?: string;
}) => {
  return (
    <div
      className={clsx(
        "border rounded-full px-4 py-1 text-sm max-w-max font-outfit",
        className,
        type === "default" ? "bg-green-100 text-green-700" : ""
      )}
    >
      {children}
    </div>
  );
};
