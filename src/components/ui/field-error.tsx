import React from "react";

type FieldErrorProps = {
  errors: unknown[];
};

export const FieldError: React.FC<FieldErrorProps> = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  return (
    <p className="text-xs text-destructive mt-1">
      {errors.map((err) => (err as { message?: string })?.message || String(err)).join(", ")}
    </p>
  );
};
