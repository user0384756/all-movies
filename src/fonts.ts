// Font loader — appends Google Fonts <link> to document head
export default function loadFonts() {
  if (typeof document === "undefined") return;
  const id = "pulse-fonts";
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
  document.head.appendChild(link);
}