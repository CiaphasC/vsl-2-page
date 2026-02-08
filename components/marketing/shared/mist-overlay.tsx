import { cn } from "@/lib/utils";

interface MistOverlayProps {
  variant?: "card" | "media";
}

export function MistOverlay({ variant = "card" }: MistOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("mist-overlay", variant === "media" ? "media-mist" : "card-mist")}
    />
  );
}
