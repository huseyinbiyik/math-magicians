import renderer from 'react-test-renderer';
import Header from '../components/Header'
import { HashRouter as Router } from 'react-router-dom';



describe('Test for rendering the Header component', () => {
  it('It should render header ', () => {
    const home = renderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
