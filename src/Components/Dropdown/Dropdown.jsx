import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select'

const Dropdown = ({ options, handleChange }) => {


    return (
        <>
            <Select styles={{
                option: provided => ({
                    ...provided,
                    color: 'black'
                }),
            }}
                options={options}
                onChange={handleChange} />
        </>
    );
};

export default Dropdown;