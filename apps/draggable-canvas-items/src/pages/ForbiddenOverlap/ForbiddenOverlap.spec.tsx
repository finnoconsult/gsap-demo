import { render } from '@testing-library/react';

import ForbiddenOverlap from './ForbiddenOverlap';

describe('ForbiddenOverlap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForbiddenOverlap />);
    expect(baseElement).toBeTruthy();
  });
});
