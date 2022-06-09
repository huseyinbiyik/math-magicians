import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Test for Calculator page', () => {
  it('It should render Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
