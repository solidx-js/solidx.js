import { html } from 'lit';

describe('dry.cy.tsx', () => {
  it('playground', () => {
    cy.mount(html`<div>hello world</div>`);
  });
});
