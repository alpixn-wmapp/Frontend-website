// components/ThemeCard.jsx
const ThemeCard = ({ label, selected }) => {
  // Dynamic color previews based on theme name
  const renderThemePreview = () => {
    switch (label) {
      case 'Light':
        return (
          <>
            <div className="h-4 w-20 rounded bg-[#e9ebf0] mb-2" />
            <div className="h-3 w-16 rounded bg-[#d6d8dd] mb-1" />
            <div className="h-3 w-12 rounded bg-[#d6d8dd]" />
          </>
        );
      case 'Neon':
        return (
          <>
            <div className="h-4 w-20 rounded bg-[#007aff] mb-2" />
            <div className="h-3 w-16 rounded bg-[#cce4ff] mb-1" />
            <div className="h-3 w-12 rounded bg-[#cce4ff]" />
          </>
        );
      case 'Dark':
        return (
          <>
            <div className="h-4 w-20 rounded bg-[#2d2d2d] mb-2" />
            <div className="h-3 w-16 rounded bg-[#444444] mb-1" />
            <div className="h-3 w-12 rounded bg-[#444444]" />
          </>
        );
      case 'Minimal':
        return (
          <>
            <div className="h-4 w-20 rounded bg-[#f1f2f5] mb-2" />
            <div className="h-3 w-16 rounded bg-[#e4e5e9] mb-1" />
            <div className="h-3 w-12 rounded bg-[#e4e5e9]" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-[120px] h-[120px] rounded-xl p-3 border-2 shadow-md flex flex-col items-center justify-between transition-all cursor-pointer ${
        selected ? 'border-blue-500 bg-white' : 'border-gray-300 bg-white'
      }`}
    >
      <div className="w-full flex flex-col items-center">{renderThemePreview()}</div>
      <p
        className={`text-xs font-medium mt-2 ${
          selected ? 'text-blue-600' : 'text-gray-500'
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default ThemeCard;
