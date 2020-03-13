import React from "react";
import { Link } from "react-router-dom";

function Character() {
    return (
        <section>
            <h1>RUGNARD | SHAMAN</h1>
            <div>
                <Link to='/additem'>Slot</Link>
                <Link to='/'>Go Back</Link>
            </div>
        </section>
    )
};


export default Character;