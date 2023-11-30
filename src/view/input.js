import { Console, MissionUtils } from '@woowacourse/mission-utils';

async function getName() {
  const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

  return carName;
}
async function getCount() {
  const count = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

  return count;
}

export { getName, getCount };
