import { getName, getCount } from '../view/input';

async function carArray() {
  const array = getName().split(',');

  return array;
}

async function countNum() {
  const num = Number(getCount());

  return num;
}

export { carArray, countNum };
