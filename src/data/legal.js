import { contact, identity } from './profile';

// Details for the Privacy page and the optional legal notice (Impressum).
export const legal = {
  name: identity.fullName,
  email: contact.email,

  // Postal address for the legal notice (Impressum). Leave empty to hide that
  // section. It must be an address where post can be served on Joël — an
  // office or address-service address works if the home address should stay
  // private; a P.O. box does not. One line per entry, e.g.
  // ['c/o Example Office Service', 'Example Street 1', '12345 City', 'Germany']
  address: [],

  updated: 'November 2026',
};
