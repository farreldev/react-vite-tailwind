/* --------------------------- Using Card --------------------------- */

/**
 * <Card>
        <Card.Title>Hello World</Card.Title>
        <Card.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos voluptates facere placeat adipisci distinctio, laudantium illum
            officiis. Dolore culpa nihil iure nemo quidem ad dolor. Unde doloremque commodi soluta laborum.
        </Card.Body>
        <Card.Footer>
            <Button>Register</Button>
        </Card.Footer>
    </Card>
*/

/* --------------------------- End --------------------------- */

import React from 'react';

function Card({ children }) {
    return <div className={'shadow-xl bg-white dark:bg-slate-700 rounded-lg overflow-hidden'}>{children}</div>;
}

function Title({ children, customClass }) {
    return <div className={`${customClass} p-4 border-b dark:border-b-transparent flex justify-between`}>{children}</div>;
}

function Body({ children }) {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
}

function Footer({ children, customClass = 'bg-white dark:bg-transparent' }) {
    return <div className={`${customClass} p-4 border-t dark:border-none`}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
