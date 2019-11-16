import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PollsRepresentation from './PollsRepresentation';
it('renders without crashing using enzyme shallow method', () => {
    shallow(<PollsRepresentation />);
});
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PollsRepresentation />, div);
    ReactDOM.unmountComponentAtNode(div);
});
