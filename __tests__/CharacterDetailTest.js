/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';

describe('Detail', () => {
  it('renders detail page', async () => {
    const { render } = await getPage({
      route: '/character-detail/1',
      query: { id: 1 },
    });

    render();
    expect(screen.getByText('Lluis Pitarch | 2021')).toBeInTheDocument();

    expect(screen.getByTestId('link-home')).toBeInTheDocument();
  });
});
