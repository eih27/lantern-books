// The store's product catalogue. Each book has an id, name, author, price (Indian rupees)
// and two colours used to draw its cover picture.
const PRODUCTS = [
  { id: "b1", name: "The Quiet Orchard", author: "Mira Holloway", price: 399, colors: ["#2f5d50", "#e9c46a"], tag: "Fiction" },
  { id: "b2", name: "Salt & Starlight", author: "Ade Okonkwo", price: 299, colors: ["#1d3557", "#a8dadc"], tag: "Poetry" },
  { id: "b3", name: "Small Machines", author: "Lena Varga", price: 549, colors: ["#6d2e46", "#f4a261"], tag: "Sci-Fi" },
  { id: "b4", name: "A Field Guide to Rain", author: "Tom Ashby", price: 449, colors: ["#264653", "#90be6d"], tag: "Nature" },
  { id: "b5", name: "Kitchen Table Maths", author: "Priya Raman", price: 249, colors: ["#bc4749", "#f2e8cf"], tag: "Non-fiction" },
  { id: "b6", name: "The Long Way North", author: "Jonas Eriksen", price: 499, colors: ["#3d405b", "#e07a5f"], tag: "Adventure" },
];

// Draws a simple book-cover picture as an SVG image (no image files needed).
function coverSvg(product) {
  const [bg, accent] = product.colors;
  const words = product.name.split(" ");
  const lines = [];
  // Wrap the title onto lines of roughly 12 characters.
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > 12 && line) {
      lines.push(line);
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  lines.push(line);
  const titleText = lines
    .map((l, i) => `<text x="100" y="${118 + i * 26}" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-weight="700" fill="${accent}">${l}</text>`)
    .join("");
  return `
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cover of ${product.name}">
      <rect width="200" height="280" fill="${bg}"/>
      <rect x="0" y="0" width="14" height="280" fill="#000" opacity="0.18"/>
      <circle cx="100" cy="62" r="26" fill="none" stroke="${accent}" stroke-width="3"/>
      <circle cx="100" cy="62" r="10" fill="${accent}"/>
      ${titleText}
      <line x1="60" y1="222" x2="140" y2="222" stroke="${accent}" stroke-width="2"/>
      <text x="100" y="248" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="13" letter-spacing="1" fill="${accent}">${product.author.toUpperCase()}</text>
    </svg>`;
}
