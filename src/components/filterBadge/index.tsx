import React from "react";

type Props = {
  label: string;
};

export default function FilterBadge({ label }: Props) {
  return (
    <div className="flex rounded-full bg-zinc-100 px-2 py-1 lowercase">
      <span>{label}</span>
    </div>
  );
}
