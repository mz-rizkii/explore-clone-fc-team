import { LineUpOnField } from "../types/LineupOnField";

export interface DrawFieldHelper {
  drawField: (formation: string[][], isHomeTeam?: boolean) => LineUpOnField[],
  maxRow: number,
  fieldConfig: ({ total: number, indexes: number[] })[]
}

const drawField = (formation: string[][], isHomeTeam?: boolean): LineUpOnField[] => {
  const maxRow = 8;

  let index = 0;

  const result: LineUpOnField[] = [];

  const rowIndexes = [
    { total: 4, indexes: [0, 2, 4, 6] },
    { total: 5, indexes: [0, 1, 3, 5, 7] }
  ].find((item) => item.total === formation.length);

  let playerIndex = 0;

  while (index < maxRow) {
    const darkColor = index % 2 === (isHomeTeam ? 0 : 1); 

    if (rowIndexes?.indexes.includes(index)) {
      result.push({ darkColor, players: formation[playerIndex] });

      playerIndex++;
    } else {
      result.push({ darkColor });
    }

    index++;
  }

  return result;
};

export const drawer: DrawFieldHelper = {
  drawField,
  maxRow: 8,
  fieldConfig: [
    { total: 4, indexes: [0, 2, 4, 6] },
    { total: 5, indexes: [0, 1, 3, 5, 7] }
  ]
}  