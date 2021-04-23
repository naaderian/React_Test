import React from 'react';
import NavItem from '../NavItem/NavItem';

const items = ["Home", "Blog", "About", "Contact"]
const Navigation = () => {
    return(
        <nav>
            <ul>
                {items.map((name, index) => {
                   return <NavItem key={index} name={name}/>
                })}
            </ul>
        </nav>
    );
}

export default Navigation;