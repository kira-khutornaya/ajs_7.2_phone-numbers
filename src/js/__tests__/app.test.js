import validatePhoneNumber from '../app';

describe('validatePhoneNumber: ', () => {
  test.each([
    ['12345678901', '+12345678901'],
    ['+79832121056', '+79832121056'],
    ['89832121077', '+79832121077'],
    ['+1(234)567-8901', '+12345678901'],
    ['+1 (234) 567-89-01', '+12345678901'],
    ['+7-909-217-1135', '+79092171135'],
    ['8 916 212-10-56', '+79162121056'],
    ['839832121056', '+839832121056'],
    ['12345654646545646', false],
    ['1234', false],
    ['gasdfg89001', false],
  ])('should expect for \'%s\' a value \'%s\'', (str, expected) => {
    expect(validatePhoneNumber(str)).toBe(expected);
  });
});
