test('test enviroment should be working and NODE_ENV should be "test"', () => {
  expect(process.env.NODE_ENV).toBe('test');
});
