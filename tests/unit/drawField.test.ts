import { drawer } from '../../src/utils/drawField';

it('draw line up to field', () => {
  const input = [
    ['22'], ['4', '2', '6', '18'], ['8', '5', '41'], ['7', '29', '19']
  ];

  const expected = [1, 4, 3, 3];

  const { drawField, maxRow, fieldConfig } = drawer;

  const result = drawField(input, true);

  console.log(result);

  expect(result).toHaveLength(maxRow);

  let itemIndex = 0;

  for (const index of fieldConfig[0].indexes) {
    expect(result[index]).toHaveProperty('players');
    expect(result[index].players).toHaveLength(expected[itemIndex]);
    itemIndex++;
  }
});