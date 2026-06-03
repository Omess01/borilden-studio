const root = document.documentElement;

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const navDetails = Array.from(document.querySelectorAll('.studio-nav details'));

if (navDetails.length > 0) {
    const closeAllNavDetails = () => {
        navDetails.forEach((detail) => {
            detail.open = false;
        });
    };

    document.addEventListener('click', (event) => {
        const clickedInsideNav =
            event.target instanceof Element
            && event.target.closest('.studio-nav');

        if (!clickedInsideNav) {
            closeAllNavDetails();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAllNavDetails();
        }
    });
}

const toggleTheme = document.getElementById('toggleTheme');
const brandLogo = document.getElementById('brandLogo');

const getStoredTheme = () => {
    try {
        return localStorage.getItem('theme');
    } catch {
        return null;
    }
};

const storeTheme = (theme) => {
    try {
        localStorage.setItem('theme', theme);
    } catch {
        // Keep the toggle working when localStorage is unavailable.
    }
};

const updateThemeControl = (theme) => {
    if (!toggleTheme) {
        return;
    }

    const label =
        theme === 'dark'
            ? 'Switch to light mode'
            : 'Switch to dark mode';

    toggleTheme.setAttribute('aria-label', label);
    toggleTheme.setAttribute('title', label);
};

const updateBrandLogo = (theme) => {
    if (!brandLogo) {
        return;
    }

    const nextLogo =
        theme === 'dark'
            ? brandLogo.dataset.darkSrc
            : brandLogo.dataset.lightSrc;

    if (nextLogo && brandLogo.getAttribute('src') !== nextLogo) {
        brandLogo.setAttribute('src', nextLogo);
    }
};

const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    updateThemeControl(theme);
    updateBrandLogo(theme);
};

const prefersLightTheme =
    window.matchMedia
    && window.matchMedia('(prefers-color-scheme: light)').matches;

const storedTheme = getStoredTheme();

const initialTheme =
    storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : (prefersLightTheme ? 'light' : 'dark');

setTheme(initialTheme);

if (toggleTheme) {
    toggleTheme.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');

        const nextTheme =
            currentTheme === 'dark'
                ? 'light'
                : 'dark';

        setTheme(nextTheme);
        storeTheme(nextTheme);
    });
}