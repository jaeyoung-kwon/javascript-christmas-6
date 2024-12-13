import { MENU } from '../constant/menu.js';

export const getAllMenuName = () => MENU.map((menu) => menu.name);

export const filterWithKeyValue = (key, value) => MENU.filter((menu) => menu[key] !== value);
