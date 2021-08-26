import React from "react";
import './Description.scss';

const Description = ({ txtAnimation }) => {

    const changeDescription = () => {
        let description;

        if (txtAnimation === 'Search & Hire') {
            description = `press the button to search and hire a new junior front end developer (react)`;
        } else if (txtAnimation === 'Searching ...') {
            description = 'please wait a second';
        } else if (txtAnimation === 'Congratulations!') {
            description = 'you hired Dorota!'
        }
        return description
    }

    return (
        <p>{changeDescription()}</p>
    )
}

export default Description;