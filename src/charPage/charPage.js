import React from "react";
import { Link } from "react-router-dom";
import "./charPage.css"

function CharPage(props) {
    

    let slots =  props.character.slots.map((slot => {
        return (
            <div  key={`slot-${slot.id}`}  className="slot">
                <Link to={`/character/${slot.char_id}/slots/${slot.slot_id}`}>
                    {slot.slot_id} {slot.slot_name}
                </Link>
            </div>
        )
    }))
    return (
        <section>
            <div>
                {props.character.char_name} || {props.character.class_name}
            </div>
            <div className="slotsWrapper">
                {slots}
            </div>
            <Link to={'/'}>Go Back</Link>
        </section>

    )


}

CharPage.defaultProps = {
    character: { slots: [] }
}
export default CharPage;