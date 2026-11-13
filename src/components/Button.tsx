import { asset } from "@/lib/asset";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  iconOnly?: boolean;
};

export function Button({ label, variant = "primary", iconOnly = false }: ButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[14px] px-3 py-2 text-sm [corner-shape:squircle] ${
        isPrimary ? "bg-foreground text-white" : "bg-surface-secondary text-foreground"
      }`}
    >
      {!iconOnly ? <span>{label}</span> : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(isPrimary ? "/images/arrow-white.svg" : "/images/arrow-dark.svg")}
        alt=""
        aria-hidden
        className="size-4"
      />
    </span>
  );
}
