Cypress.Commands.add('bootstrap', () => {
  const style = document.createElement('style');
  style.innerHTML = `
    xr-scene {
      width: 256px;
      height: 256px;
      ---hardware-scaling-level: 1;
    }
  `;
  document.head.appendChild(style);
});
