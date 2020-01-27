import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PollsCount from './PollsCount';

it('renders without crashing using enzyme shallow method', () => {
    shallow(<PollsCount />);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PollsCount />, div);
    ReactDOM.unmountComponentAtNode(div);
});
