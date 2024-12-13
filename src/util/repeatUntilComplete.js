import { Console } from '@woowacourse/mission-utils';

export const repeatUntilComplete = (message) => async (validationCallback) => {
  try {
    const input = await Console.readLineAsync(`\n${message}`);
    const result = validationCallback(input);
    return result;
  } catch (error) {
    Console.print(`${error.message}\n`);
    return repeatUntilComplete(message)(validationCallback); // 재귀 호출
  }
};
