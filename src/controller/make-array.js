import { getName, getCount } from '../view/input.js';

async function carArray() {
  const carname = await getName();
  const array = String(carname).split(',');

  return array;
}

async function countNum() {
  const rawNum = await getCount();
  const num = Number(rawNum);

  return num;
}

export { carArray, countNum };
