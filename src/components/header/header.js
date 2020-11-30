import React from 'react';
import './header.scss';

export default function Header(props) {
    return (<h1>Header component with title prop: {props.title}</h1>);
}
