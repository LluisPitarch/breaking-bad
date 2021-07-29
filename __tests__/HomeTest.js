/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';

describe('Home page', () => {
  it('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(
      screen.getByText('Which one is you favourite character?')
    ).toBeInTheDocument();

    expect(screen.getByTestId('link-home')).toBeInTheDocument();
  });
});
