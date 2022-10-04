import React from 'react';
import { render, screen } from '@testing-library/react';

import { ChildComponent } from './ChildComponent';

describe('ChildComponent', () => {
  it('is disabled if isLoading = true', async () => {
    render(
      <ChildComponent />
    );
    const pText = await screen.findByText('Child component');
    expect(pText).toBeInTheDocument();
  });

});
