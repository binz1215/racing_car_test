import { Console } from '@woowacourse/mission-utils';
import GoOrNot from '../model/go_or_not.js';

function output(set) {
  Object.entries(set).forEach(([key, value]) => {
    Console.print(`${key} : ${value}`);
  });
}

export { output };
