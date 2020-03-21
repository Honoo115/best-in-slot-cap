import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SlotForm from './slotForm'
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <SlotForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});