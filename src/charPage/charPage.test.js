import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CharPage from './charPage'
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <CharPage />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});