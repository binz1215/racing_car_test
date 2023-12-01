import { Console } from '@woowacourse/mission-utils';

function outputPrint(set) {
  Object.entries(set).forEach(([key, value]) => {
    Console.print(`${key} : ${value}`);
  });
}

export { outputPrint };
