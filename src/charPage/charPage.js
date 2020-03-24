import React from "react";
import { Link } from "react-router-dom";
import "./charPage.css"

function CharPage(props) {


    let slots = props.character.slots.map((slot, key) => {
        return (
            <div key={`slot-${slot.id}`} className="slot" id={"slot" + key}>
                <Link className="slotlink" to={`/character/${slot.char_id}/slots/${slot.slot_id}`}>
                    {slot.slot_id} {slot.slot_name}
                </Link>
            </div>
        )
    })
        .sort((a, b) => {
            return a.slot_id - b.slot_id;
        });
    return (
        <section className="header">
            <div>
                {props.character.char_name} || {props.character.class_name}
            </div>
            <div ><p>Welcome {props.character.class_name}. Click a slot number and add your equipment to your loadout.</p></div>
            <div className="slotsWrapper">
                {slots}
            </div>
            <Link className="goback" to={'/'}>Go Back</Link>
        </section>

    )


}

CharPage.defaultProps = {
    character: { slots: [] }
}
export default CharPage;