import React from "react";
import { Link } from "react-router-dom";


function Main() {
    return (
        <section>
            <div>
                CHOOSE YOUR CHARACTER
                <ul>
                    <Link to="/character">
                        Rugnard | Shaman
                    </Link>
                </ul>
            </div>
            <div>
                <button>CREATE A CHARACTER</button>
            </div>
        </section>
    )
};


export default Main;