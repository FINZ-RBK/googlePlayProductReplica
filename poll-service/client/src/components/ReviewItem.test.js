import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReviewItem from './ReviewItem';

it('renders without crashing using enzyme shallow method', () => {
    shallow(<ReviewItem />);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});
