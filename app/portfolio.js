const BASE_IMG_PATH = './style/assets/';

export default {
    items: [
        {
            title: 'Warner Bros. Pictures',
            imgPath: `${BASE_IMG_PATH}thumbnail-wb-pictures.jpg`,
            link: 'https://www.warnerbros.com/studio/divisions/warner-bros-pictures'
        },
        {
            title: 'Warner Bros. Home Entertainment',
            imgPath: `${BASE_IMG_PATH}thumbnail-wb-home.jpg`,
            link: 'https://www.warnerbros.com/studio/divisions/home-entertainment'
        },
        {
            title: 'Hollywood Records',
            imgPath: `${BASE_IMG_PATH}thumbnail-hollywood-records.jpg`,
            link: 'https://nation.com'
        },
        {
            title: 'Walt Disney Pictures',
            imgPath: `${BASE_IMG_PATH}thumbnail-walt-disney-pictures.png`,
            link: 'https://gopher.com'
        },
        {
            title: 'Starz',
            imgPath: `${BASE_IMG_PATH}thumbnail-starz.jpg`,
            link: 'https://gopher.com'
        },
    ],

    createItem(title, imgPath, link) {
        const anchor = document.createElement('a');
        const el = document.createElement('div');
        anchor.href = link;
        anchor.target = '_blank';
        el.classList.add('portfolio-item');
        el.style.backgroundImage = `url("${imgPath}")`;
        anchor.append(el);
        return anchor;
    },

    generate(id) {
        this.items.forEach(item => {
            const portfolioContainer = document.querySelector(id);
            const { title, imgPath, link } = item;
            const el = this.createItem(title, imgPath, link);
            portfolioContainer.append(el)
        });
    },

    init(id) {
        this.generate(id);
    }
}
