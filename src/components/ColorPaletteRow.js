const ColorPaletteRow = ({ colors }) => {
  return (
    <div className="flex gap-3">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-8 h-6 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};
export default ColorPaletteRow;