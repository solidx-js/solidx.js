test('dry run', () => {
  document.body.innerHTML = `<button id="button" />`;

  const button = document.getElementById('button');
  expect(button).not.toBeNull();
});
