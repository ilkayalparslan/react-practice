import { useState } from "react";

function ColorCard({ hex }) {
  const [copied, setCopied] = useState(false);

  const hexToRgb = (hex) => {
    // Baştaki # işaretini kaldırıyoruz
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="color-card" style={{ background: hex }}>
      <div className="color-info">
        <span className="color-hex">{hex}</span>
        <span className="color-rgb">{hexToRgb(hex)}</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
export default ColorCard;
