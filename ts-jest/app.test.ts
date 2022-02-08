import { TwoFer } from '../src/app'

test('no name given', () => {
  const expected = 'One for you, one for me.'
  expect(TwoFer.twoFer()).toEqual(expected)
});

test('a name given', () => {
  const expected = 'One for Alice, one for me.'
  expect(TwoFer.twoFer('Alice')).toEqual(expected)
});

test('another name given', () => {
  const expected = 'One for Bob, one for me.'
  expect(TwoFer.twoFer('Bob')).toEqual(expected)
});