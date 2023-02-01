import React, { useState, useEffect, Component } from "react";
import "./TopContainer.css"

const TopContainer = () => {

    const DATA = [
        { id: 1, value: "PMT" },
        { id: 2, value: "ALERT SATISTICS" },
        { id: 3, value: "MODEL PERFORMNACE" },
        { id: 4, value: "ALERT MANAGEMENT PAGE" },
    ];

    const [elements, setElements] = useState(DATA);
    const [selectedID, setSelectedID] = useState(); // you could set a default id as well

    const handleClick = (id) => {
        setSelectedID(id);
    };

    const getSelectedClass = (id) => (selectedID === id ? "selected" : "notselected");

    return (
        <div class="top-container-wrapper">

            {elements.map((el) => (
                <div
                    key={el.id}
                    class={`top-container-conten ${getSelectedClass(el.id)}`}
                    onClick={() => handleClick(el.id)}

                >
                    {el.value}
                </div>

            ))}
        </div>
    );
}


export default TopContainer;