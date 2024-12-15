import { useRef, useState } from "react";
import Button from "../Button/Button";
import classes from "./FeedbackSection.module.css";

export function StateVsRef() {
    const input = useRef();
    // const [show, setShow] = useState(false);
    function handleKeyDown(e) {
        if(e.key === "Enter") {
            // setShow(true);
        }
    }
    return (
        <div>
            <p>{input?.current?.value}</p>
            <input ref={input} onKeyDown={handleKeyDown}></input>
        </div>
    );
}

export default function FeedbackSection(){
    
    const [name, setName] = useState("");
    const [reason, setReason] = useState("error");

    return (
        <section>
            <h3>Обратная связь</h3>
            <form className={classes.form} style={{marginBottom:"30px"}}>
                <label className={classes.label} htmlFor="name">Ваше имя</label>
                <input className={classes.input} value={name} onChange={(event) => setName(event.target.value)} id="name" type="text"></input> 

                <label className={classes.label} htmlFor="reason">Причина обращения</label>
                <select className={classes.select} value={reason} onChange={(event) => {setReason(event.target.value)}} id="reason">
                   <option value="error">Ошибка</option> 
                   <option value="help">Помощь</option> 
                   <option value="suggest">Поддержка</option> 
                </select>

                <Button onClick={(event) => {event.preventDefault();console.log(name, reason)}}>Отправить</Button>
            </form>
            <StateVsRef></StateVsRef>
        </section>
    );
}