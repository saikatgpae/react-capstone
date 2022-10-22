import renderer from 'react-test-renderer';
import StateWiseData from '../__mock__/StateWiseData';

describe('StateWiseData', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StateWiseData />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
