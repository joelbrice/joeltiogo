import { render, screen } from '@testing-library/react';
import Privacy from './components/Privacy';

// Pretend an address has been filled in, to check the legal notice appears.
jest.mock('./data/legal', () => ({
  legal: {
    name: 'Test Person',
    email: 'test@example.com',
    address: ['c/o Example Office', 'Example Street 1', '12345 City', 'Germany'],
    updated: 'November 2026',
  },
}));

test('legal notice appears once an address is set', () => {
  render(<Privacy />);
  expect(screen.getByRole('heading', { level: 1, name: 'Legal notice & privacy' })).toBeInTheDocument();
  expect(screen.getByText(/pursuant to § 5 DDG and § 18 MStV/)).toBeInTheDocument();
  expect(screen.getByText(/Example Street 1/)).toBeInTheDocument();
});
