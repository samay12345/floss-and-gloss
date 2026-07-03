import type { MouseEvent } from "react";

export function scrollToSection(
  e: MouseEvent<HTMLAnchorElement>,
  id: string
) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
    return;
  }
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
