import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './mainPage'


const character = [ 
    [
        {
            "id": 1,
            "char_name": "rugnard",
            "class_name": "shaman",
            "slots": [
                {
                    "id": 1,
                    "slot_name": "Mishundare, Circlet of the Mind Flayer",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 1
                },
                {
                    "id": 2,
                    "slot_name": "Cloak of the Brood Lord",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 2
                },
                {
                    "id": 3,
                    "slot_name": "Deep Earth Spaulders",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 3
                },
                {
                    "id": 4,
                    "slot_name": "Cloak of the Brood Lord",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 4
                },
                {
                    "id": 5,
                    "slot_name": "Robe of Volatile Power",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 5
                },
                {
                    "id": 6,
                    "slot_name": "Bracers of Arcane Accuracy",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 6
                },
                {
                    "id": 7,
                    "slot_name": "Flarecore Leggings",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 7
                },
                {
                    "id": 8,
                    "slot_name": "Gauntlets of Ten Storms",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 8
                },
                {
                    "id": 9,
                    "slot_name": "Firemaw`s Clutch",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 9
                },
                {
                    "id": 10,
                    "slot_name": "Snowblind Shoes",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 10
                },
                {
                    "id": 11,
                    "slot_name": "Ring of Spellpower",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 11
                },
                {
                    "id": 12,
                    "slot_name": "Band of Forced Concentration",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 12
                },
                {
                    "id": 13,
                    "slot_name": "Neltharions Tear",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 13
                },
                {
                    "id": 14,
                    "slot_name": "Tailisman of Ephermeral Power",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 14
                },
                {
                    "id": 15,
                    "slot_name": "High Warlord`s Spellblade",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 15
                },
                {
                    "id": 16,
                    "slot_name": "Therazane`s Touch",
                    "checked": true,
                    "char_id": 1,
                    "slot_id": 16
                },
                {
                    "id": 17,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 1,
                    "slot_id": 17
                }
            ]
        },
        {
            "id": 7,
            "char_name": "Mormontt",
            "class_name": "Paladin",
            "slots": [
                {
                    "id": 103,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 1
                },
                {
                    "id": 104,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 2
                },
                {
                    "id": 105,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 4
                },
                {
                    "id": 106,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 3
                },
                {
                    "id": 107,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 5
                },
                {
                    "id": 108,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 7
                },
                {
                    "id": 109,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 6
                },
                {
                    "id": 110,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 8
                },
                {
                    "id": 111,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 9
                },
                {
                    "id": 112,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 10
                },
                {
                    "id": 113,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 11
                },
                {
                    "id": 114,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 12
                },
                {
                    "id": 115,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 14
                },
                {
                    "id": 116,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 13
                },
                {
                    "id": 117,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 15
                },
                {
                    "id": 118,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 17
                },
                {
                    "id": 119,
                    "slot_name": null,
                    "checked": false,
                    "char_id": 7,
                    "slot_id": 16
                }
            ]
        }
    ]
]





it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MainPage character={character}/>
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});