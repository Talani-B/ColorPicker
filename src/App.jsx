


import { useState } from 'react';

function Picker() {
  const [selectedColor, setSelectedColor] = useState('');

  const Color = ({ color, setSelectedColor }) => {
    return (
      <div
        className={color}
        onClick={() => setSelectedColor(color)}
      ></div>
    );
  };

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
}

export default Picker;
