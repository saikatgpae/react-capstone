import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Details from '../__mock__/Details';

describe('Details', () => {
  test('Can search for a post using its ID', async () => {
    render(<Details />);
    const tree = renderer.create(<Details />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
