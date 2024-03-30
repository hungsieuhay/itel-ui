"use client";

interface ChipProps {
  label: string;
}

export const Chip = ({ label }: ChipProps) => {
  return (
    <div className="px-3 py-1 bg-red-100 rounded-full">
      <p className="text-red-500 text-sm font-medium">{label}</p>
    </div>
  );
};
