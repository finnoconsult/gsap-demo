import { render } from '@testing-library/react';

import CustomSVG from './CustomSVG';

describe('CustomSVG', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomSVG />);
    expect(baseElement).toBeTruthy();
  });
});
