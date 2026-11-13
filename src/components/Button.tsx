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
      className={`squircle-cta inline-flex items-center gap-1 px-3 py-2 text-sm transition-shadow duration-200 ${
        isPrimary
          ? "bg-foreground text-white hover:shadow-[-4px_4px_8px_0px_#e0e0e0] group-hover:shadow-[-4px_4px_8px_0px_#e0e0e0]"
          : "bg-surface-secondary text-foreground hover:shadow-[-4px_4px_8px_0px_#787878] group-hover:shadow-[-4px_4px_8px_0px_#787878]"
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
