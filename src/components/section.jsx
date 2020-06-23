import './section.css';
import React from 'react';


const Section = (props) => (
    <section className='greetings-section'>
        <h2>{props.headerText}</h2>
        {props.children}
    </section>
);

export default Section;