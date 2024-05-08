export const reverseFormation = (formation: string[][]): string[][] => {
  let result: string[][] = [];

  let index = formation.length - 1;

  while (index >= 0) {
    result = [...result, formation[index].reverse()];

    index--;
  }

  return result;
}