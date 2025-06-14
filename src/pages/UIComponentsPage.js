// pages/UIComponentsPage.jsx
import Sidebar from '../components/Sidebar';
import TopBarButtons from '../components/TopBarButtons';
import ThemeCard from '../components/ThemeCard';
import ColorPaletteRow from '../components/ColorPaletteRow';

const themes = ['Light', 'Neon', 'Dark', 'Minimal'];
const colorPalettes = [
  ['#fbe9e7', '#8d6e63', '#3e2723', '#ff5722'],
  ['#004d40', '#009688', '#4db6ac', '#b2dfdb'],
  ['#1565c0', '#1e88e5', '#90caf9', '#e3f2fd'],
  ['#c51162', '#f06292', '#f8bbd0', '#fce4ec'],
  ['#e0e0e0', '#9e9e9e', '#616161', '#212121'],
];

const UIComponentsPage = () => {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 ml-60 px-10 py-8 relative">
        <TopBarButtons />

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-lg font-semibold text-white">Untitled</h1>
          <p className="text-xs text-gray-500">Last edited just now</p>
        </div>

        {/* UI Theme */}
        <h2 className="text-xl font-bold mb-3">UI Theme</h2>
        <div className="flex gap-5 mb-12">
          {themes.map((theme, idx) => (
            <ThemeCard key={idx} label={theme} selected={theme === 'Dark'} />
          ))}
        </div>

        {/* UI Color Palette */}
        <h2 className="text-xl font-bold mb-3">UI Color Palette</h2>
        <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
          {colorPalettes.map((row, idx) => (
            <ColorPaletteRow key={idx} colors={row} />
          ))}
        </div>

        {/* Add Images Button */}
        <button className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition font-semibold flex items-center gap-2 border-dashed">
          Add images
          <span className="text-lg font-bold">＋</span>
        </button>
      </main>
    </div>
  );
};

export default UIComponentsPage;
