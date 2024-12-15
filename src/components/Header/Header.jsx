import { useState } from 'react';
import { styled } from 'styled-components';
// import classes from './Header.module.css';
import logo from '/vite.svg';

styled.header`
    background-color: rebeccapurple;
`;

export default function Header() {

    const [date, setDate] = useState(new Date());
    setTimeout(() => setDate(new Date))

    return (
        <header>
            <img src={logo}></img>
            <span>Время сейчас: {date.toUTCString()}</span>
        </header>
    )
}