import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PollsResults from './PollsResults';
it('renders without crashing using enzyme shallow method', () => {
    shallow(<PollsResults />);
});
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PollsResults />, div);
    ReactDOM.unmountComponentAtNode(div);
});
