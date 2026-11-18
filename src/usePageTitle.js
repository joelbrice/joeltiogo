import { useEffect } from 'react';

const SITE = 'Joël Tiogo';

// Sets the browser-tab title for the current page.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Strategy & Business Development`;
  }, [title]);
}
