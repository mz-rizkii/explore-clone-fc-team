import { reverseFormation } from '../../src/utils/formation';

it('show reversed formation for away team', () => {
  const input = [
    ['22'], ['4', '2', '6', '18'], ['8', '5', '41'], ['7', '29', '19']
  ];
  
  const expected = [
    ['19', '29', '7'], [ '41', '5','8',], ['18', '6', '2', '4'], ['22']
  ]

  const result = reverseFormation(input);

  let index = 0;

  expect(result).toHaveLength(expected.length);

  for (const row of result[0]) {
    expect(row).toHaveLength(expected[0][index].length);

    index++;
  }
});