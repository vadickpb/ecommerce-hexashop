import SHOP_DATA from "../shop.data"

export const getProductsByCat = (title = 'Mens', title2 = '', title3 = '') => {
    const filterByTitle = SHOP_DATA.filter(category => category.title === title || title2 || title3);

    // return filterByTitle;
    // console.log(filterByTitle[0].items);
    // filterByTitle[0].items.map(producto => console.log(producto))
    return filterByTitle;
}