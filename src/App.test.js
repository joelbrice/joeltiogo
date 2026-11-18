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
    await screen.findByRole('heading', { level: 1, name: /Joël Tiogo/ })
  ).toBeInTheDocument();
});

test('insights articles open as full pages', async () => {
  window.history.pushState({}, '', '/insights/battery-passports');
  render(<App />);
  expect(
    await screen.findByRole('heading', { level: 1, name: /Digital Battery Passports/ })
  ).toBeInTheDocument();
  expect(screen.getByText(/is not legal advice/)).toBeInTheDocument();
  window.history.pushState({}, '', '/');
});

test('McKinsey.org Forward badge links to its Credly verification page', async () => {
  render(<App />);
  const badge = await screen.findByRole('link', { name: /McKinsey\.org Forward Program.*verify on Credly/i });
  expect(badge).toHaveAttribute(
    'href',
    'https://www.credly.com/badges/9fc66d90-473f-4d39-8a82-35baef122ade'
  );
});

test('each page sets its own browser-tab title', async () => {
  window.history.pushState({}, '', '/about');
  render(<App />);
  await screen.findByRole('heading', { level: 1, name: /Strategist with an engineer/ });
  expect(document.title).toBe('About — Joël Tiogo');
  window.history.pushState({}, '', '/');
});
