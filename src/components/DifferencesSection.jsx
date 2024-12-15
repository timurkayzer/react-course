import { useState } from "react";
import Button from "./Button/Button";



export default function DifferencesSection() {
    const [activeButton, setActiveButton] = useState(0);
    const BUTTON_TEXT = {
        btn1: "This is button 1",
        btn2: "This is button 2",
        btn3: "This is button 3"
      }
    return (
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button handleClick={()=>setActiveButton("btn1")} isActive={activeButton === "btn1"}>Да</Button>
          <Button handleClick={()=>setActiveButton("btn2")} isActive={activeButton === "btn2"}>вроде</Button>
          <Button handleClick={()=>setActiveButton("btn3")} isActive={activeButton === "btn3"}>Ничем</Button>
            {activeButton ? <p>{BUTTON_TEXT[activeButton]}</p> : ""}
            {!activeButton && <p>Press the button</p>}
        </section>
    )
}