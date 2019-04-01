import portfolio from './app/portfolio';
import header from './app/header';

window.addEventListener('load', () => {
    portfolio.init('#portfolio-items');
    header.init('#about-section');
});
