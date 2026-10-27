async function loadPageSections() {
  const placeholders = document.querySelectorAll('[data-include]');

  await Promise.all(Array.from(placeholders, async (placeholder) => {
    const response = await fetch(placeholder.dataset.include);

    if (!response.ok) {
      throw new Error(`Kunde inte läsa ${placeholder.dataset.include}`);
    }

    placeholder.outerHTML = await response.text();
  }));
}

function activateNavigation() {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#nav-links');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  /* Mark active page in navigation */
  const currentPath = window.location.pathname.toLowerCase();
  if (menu) {
    menu.querySelectorAll('a').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (
        (currentPath.includes('/hem/') && href.includes('Hem')) ||
        (currentPath.includes('/tjanster/') && href.includes('Tjanster')) ||
        (currentPath.includes('/om/') && href.includes('Om')) ||
        (currentPath.includes('/kontakt/') && href.includes('Kontakt'))
      ) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* Kontaktformulär — fyll i en returadress och låt FormSubmit sköta POST-skicket */
function activateContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#contact-form-note');
  const nextUrl = form.querySelector('input[name="_next"]');

  if (new URLSearchParams(window.location.search).has('skickat')) {
    status.textContent = 'Tack! Ditt meddelande är skickat. Vi återkommer så snart vi kan.';
    status.classList.add('is-success');
    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete('skickat');
    window.history.replaceState({}, '', cleanUrl);
  }

  form.addEventListener('submit', () => {
    const redirectUrl = new URL(window.location.href);
    redirectUrl.searchParams.set('skickat', '1');
    redirectUrl.hash = 'contact-form';
    nextUrl.value = redirectUrl.toString();
    submitButton.disabled = true;
    status.textContent = 'Skickar ditt meddelande…';
  });
}

loadPageSections()
  .then(() => {
    activateNavigation();
    activateContactForm();
  })
  .catch((error) => console.error('Webbplatsens HTML-delar kunde inte läsas in.', error));
