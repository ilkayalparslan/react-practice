import useStore from "./store";
import ColorCard from "./components/ColorCard";

function App() {
  // Store'dan oku
  const savedPalettes = useStore((state) => state.savedPalettes);
  const savePalette = useStore((state) => state.savePalette);
  const colors = useStore((state) => state.colors);
  const generatePalette = useStore((state) => state.generatePalette);
  const deletePalette = useStore((state) => state.deletePalette);
  const notification = useStore((state) => state.notification);

  return (
    <div className="app">
      <h1 className="app-title">🎨 Color Palette Generator</h1>
      <div className="btn-group">
        <button className="generate-btn" onClick={generatePalette}>
          Generate Palette
        </button>
        <button className="save-btn" onClick={savePalette}>
          💾 Save Palette
        </button>
      </div>
      {notification && <p className="notification">{notification}</p>}

      <div className="palette">
        {colors.map((hex) => (
          <ColorCard key={hex} hex={hex} />
        ))}
      </div>
      <div className="saved-section">
        <h2 className="saved-title">Saved Palettes</h2>
        {savedPalettes.length === 0 ? (
          <p className="saved-empty">No saved palattes yet</p>
        ) : (
          savedPalettes.map((palette) => (
            <div className="saved-palette" key={palette.id}>
              {palette.colors.map((color) => (
                <div
                  className="saved-color"
                  key={color}
                  style={{ background: color }}
                />
              ))}
              <btton
                className="delete-palette-btn"
                onClick={() => deletePalette(palette.id)}
              >
                X
              </btton>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default App;
