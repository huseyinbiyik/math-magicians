import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Test for rendering the Header component', () => {
  it('It should render header ', () => {
    const home = renderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
