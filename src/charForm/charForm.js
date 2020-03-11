import React, { Component } from "react";
// import { withRouter } from "react-router";
// import config from "../config";

class CreateCharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: { value: "" },
            class: { value: "" }
        }
    }
    render() {
        return (
            <div>
                <h2>Create your Character</h2>
                <form>
                    <label for="character-name-input">Name</label>
                    <input
                        type="text"
                        id="folder-name-input"
                        // onChange={e => this.updateName(e.target.value)}
                        required
                    ></input>
                    <lable for="character-class-input">Class</lable>
                    <input
                        type="text"
                        id="class-name-input"
                        requipred
                    ></input>
                    <div>
                        <button className="buttons" type="submit">
                            Submit Character
                </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default CreateCharacter;
