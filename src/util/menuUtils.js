import { MENU } from '../constant/menu.js';

export const getMenuName = (menus) => menus.map((menu) => menu.name);

export const getMenuWithName = (name) => MENU.find((menu) => menu.name === name);

export const filterMenuWithType = (menus, type) =>
  menus.filter((menu) => {
    const menuWithType = getMenuWithName(menu.name);

    return menuWithType.type === type;
  });

export const getTotalMenuQuantity = (menus) => menus.reduce((totalQuantity, menu) => totalQuantity + menu.quantity, 0);
