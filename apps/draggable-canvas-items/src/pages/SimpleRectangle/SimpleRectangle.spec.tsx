import { render } from '@testing-library/react';

import SimpleRectangle from './SimpleRectangle';

describe('SimpleRectangle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleRectangle />);
    expect(baseElement).toBeTruthy();
  });
});
