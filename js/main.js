/**
 * Portfolio with interactive definitions library
 */

(function () {
  'use strict';

  const yearEl = document.getElementById('year');
  const searchInput = document.getElementById('term-search');
  const definitionList = document.getElementById('definition-list');

  const definitions = [
    {
      term: 'Accessibility',
      description: 'Design and code that make web experiences usable for people with a wide range of abilities and assistive tools.',
    },
    {
      term: 'Design system',
      description: 'A shared set of components, patterns, and styles that help create consistent design and faster development.',
    },
    {
      term: 'Responsive design',
      description: 'A layout approach that adapts the interface across screen sizes using flexible grids, images, and media queries.',
    },
    {
      term: 'Semantic HTML',
      description: 'Using meaningful HTML elements that describe content structure and improve accessibility, SEO, and maintainability.',
    },
    {
      term: 'UI state',
      description: 'The current visual and interactive status of a component, such as loading, error, active, or disabled.',
    },
    {
      term: 'Progressive enhancement',
      description: 'A strategy that starts with a reliable base experience and adds richer layers for browsers that support advanced features.',
    },
    {
      term: 'Performance',
      description: 'Optimizing code, assets, and network behavior so pages load quickly and feel responsive on every device.',
    },
    {
      term: 'Typography',
      description: 'The art of arranging type to make content readable, attractive, and aligned with a brand’s visual tone.',
    },
  ];

  function renderDefinitions(filter = '') {
    const query = filter.trim().toLowerCase();
    const filtered = definitions.filter((item) => {
      return (
        item.term.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    });

    if (!definitionList) {
      return;
    }

    if (filtered.length === 0) {
      definitionList.innerHTML = '<div class="definition-card"><h3>No matches found</h3><p>Try another keyword like "design" or "accessibility."</p></div>';
      return;
    }

    definitionList.innerHTML = filtered
      .map(
        (item) =>
          `<article class="definition-card">
            <h3>${item.term}</h3>
            <p>${item.description}</p>
          </article>`
      )
      .join('');
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      renderDefinitions(event.target.value);
    });
  }

  renderDefinitions();
})();
