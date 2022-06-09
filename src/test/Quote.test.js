import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Test for quote page', () => {
  it('It should render quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
