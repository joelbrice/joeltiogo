import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('mobile menu opens and shows the contact link', () => {
  render(<App />);
  expect(screen.queryByRole('link', { name: 'Get in touch' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));

  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getAllByRole('link', { name: 'Get in touch' })[0]).toHaveAttribute(
    'href',
    'mailto:tiogojoel@gmail.com'
  );
});

test('home page introduces Joël', async () => {
  render(<App />);
  expect(
    await screen.findByRole('heading', { level: 1, name: /Joël Brice Voumo Tiogo/ })
  ).toBeInTheDocument();
});
