const ColorPaletteRow = ({ colors }) => {
  return (
    <div className="flex overflow-hidden">
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-14 w-14 sm:h-14 sm:w-20"
          style={{
            backgroundColor: color,
            borderTopLeftRadius: index === 0 ? '1rem' : '0',
            borderBottomLeftRadius: index === 0 ? '1rem' : '0',
            borderTopRightRadius: index === colors.length - 1 ? '1rem' : '0',
            borderBottomRightRadius: index === colors.length - 1 ? '1rem' : '0',
          }}
          title={color}
        />
      ))}
    </div>
  );
};

export default ColorPaletteRow;