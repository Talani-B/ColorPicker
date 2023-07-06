import { useState } from 'react'

function Picker() {
const [selectedColor, setSelectedColor] = useState("")
const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )}
}
      <div id="colors-list">{'yellow, blue ,violet'}
      
      <div id="colors-list">
  <Color color="yelow" setSelectedColor={setSelectedColor}/>
  <Color color="blue" setSelectedColor={setSelectedColor}/>
  <Color color="violet" setSelectedColor={setSelectedColor}/>
</div>
 </div>





export default App



