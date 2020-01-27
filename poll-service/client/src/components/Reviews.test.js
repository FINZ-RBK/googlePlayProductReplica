import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Reviews from './Reviews';

it('renders without crashing using enzyme shallow method', () => {
    shallow(<Reviews />);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Reviews />, div);
    ReactDOM.unmountComponentAtNode(div);
});
