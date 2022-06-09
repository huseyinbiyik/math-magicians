import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

describe('Test for rendering the Home Page', () => {
  it('It should render home page', () => {
    const home = renderer
      .create(<Router><Home /></Router>)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
