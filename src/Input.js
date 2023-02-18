import React from 'react'
import colorNames from 'colornames';

const Input = ({
  
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
  
  }) => {
  return (
    <form onSubmit={(e) =>e.preventDefault()}>
        <label> Add Color Name : </label>
        <input 
          autoFocus
          type="text"
          placeholder='Add Color name'
          required
          value={colorValue}
          // onchange = anoymous function inside dlm af kita set color value 
          // (yang tu akn set state of color value mndemnde dlm tu)  
          onChange={(e) => {
              setColorValue(e.target.value);
              setHexValue(colorNames(e.target.value));
            
            }} 
          />
          <button
            type = "button"
            onClick={() => setIsDarkText(!isDarkText)}
            >
              Toggle Text Color
            </button>
      </form>
  )
}

export default Input