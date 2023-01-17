import React from 'react';

function Card({ children }) {
    return <div className={'shadow-xl bg-white rounded-lg overflow-hidden'}>{children}</div>;
}

function Title({ children, styleClass }) {
    return <div className={`${styleClass} p-4 border-b`}>{children}</div>;
}

function Body({ children }) {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
}

function Footer({ children, styleClass = 'bg-slate-100 hover:bg-slate-200' }) {
    return <div className={`${styleClass} p-4`}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
