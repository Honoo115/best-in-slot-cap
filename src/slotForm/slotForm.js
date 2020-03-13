import React, { Component } from "react";
import { Link } from "react-router-dom";

class AssignSlot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: { value: "" }
        }
    }
    render() {
        return (
            <div>
                <h2>What item is it?</h2>
                <form>
                    <label for="item-name-input">Name</label>
                    <input
                        type="text"
                        id="folder-name-input"

                        required
                    ></input>
                    <div>
                        <button className="buttons" type="submit">
                            Add Item To Slot
            </button>
                    </div>
                </form>
                <Link to='/'>Go Back</Link>
            </div>
        )
    }
}
export default AssignSlot