import React from 'react';

const Project = () => {
    const projectResponsibilities = [
        "Worked with Software Architect and Senior Developers to design and identify tech stack for the platform.",
        "Lead a team of UI developers in creating the web interface using Angular."
    ]

    const getResponsibilities = () =>{
        const data= projectResponsibilities.map (m=> {
            return <li>{m}</li>;
        });
        return data;
    };

    return (
        <div>
            Life Insurance and Medicare Supplement Platform- Lead the development on
creating a B2B2C insurance platform for customers and insurance agents using Angular
and Java on Azure.
            <ul>
                {getResponsibilities()}
            </ul>
        </div>
    );
}

export default Project;