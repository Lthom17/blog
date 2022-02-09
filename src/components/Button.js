
import { useEffect, useState } from "react";

function Button() {
    const [buttonColor, setButtonColor] = useState('purple')

        function handleClick() {
            const newButtonColor = buttonColor === 'purple' ? 'yellow' : 'purple'
            setButtonColor(newButtonColor) 
            console.log("In handleClick", buttonColor)
        
        }
    
    useEffect(() => {

       document.getElementById('button-title').innerText = 'Click the button to change the color to ' + (buttonColor === 'purple' ? 'yellow' : 'purple')
       console.log("In useEffect", buttonColor)
    
    })
    

    return(
        <div>
            <p id="button-title">Click the button to change the color to {(buttonColor === 'purple' ? 'yellow' : 'purple')}</p>
            <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>Change color</button>
        </div>
    )
}

export default Button;