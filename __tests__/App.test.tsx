import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import '@testing-library/jest-dom';
// import Prism from 'prismjs';
// import { describe, expect, test } from '@jest/globals'


import App from '../client/App';


describe('quick maffs test suite', () => {
  test('2 + 2 is 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('basic tests', () => {
  render(<App />);
  const welcome = screen.getByText(/Welcome/i)
  expect(welcome).toBeInTheDocument()

})