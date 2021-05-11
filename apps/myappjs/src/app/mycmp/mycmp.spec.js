import { render } from '@testing-library/react';
import Mycmp from './mycmp';
describe('Mycmp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mycmp />);
    expect(baseElement).toBeTruthy();
  });
});
