// components/ThemeCard.jsx
const ThemeCard = ({ label, selected }) => (
  <div
    className={`w-28 h-20 rounded-md border-2 p-2 ${
      selected ? 'border-white' : 'border-gray-600'
    } bg-white cursor-pointer hover:border-blue-500`}
  >
    <div className="w-full h-3/5 bg-gray-300 rounded mb-1" />
    <p className="text-xs text-black text-center">{label}</p>
  </div>
);
export default ThemeCard;