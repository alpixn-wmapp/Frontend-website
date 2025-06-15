// src/pages/UIComponentsPage.jsx

import TopBarButtons from '../components/TopBarButtons';
import AppLayout from '../layout/AppLayout';
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
    <AppLayout>
      {/* ✅ Top-right buttons only */}
      <div className="flex justify-end mb-9 w-full">
        <TopBarButtons />
      </div>

      {/* UI Theme Section */}
      <h2 className="text-xl font-bold mb-3">UI Theme</h2>
      <div className="flex gap-5 mb-12">
        {themes.map((theme, idx) => (
          <ThemeCard key={idx} label={theme} selected={theme === 'Dark'} />
        ))}
      </div>

      {/* UI Color Palette Section */}
      <h2 className="text-xl font-bold mb-3">UI Color Palette</h2>
      <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
        {colorPalettes.map((row, idx) => (
          <ColorPaletteRow key={idx} colors={row} />
        ))}
      </div>

      {/* ✅ Add Images Button styled like others */}
      <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
        <span>Add images</span>
        <span className="text-xl font-bold">＋</span>
      </button>
    </AppLayout>
  );
};

export default UIComponentsPage;
