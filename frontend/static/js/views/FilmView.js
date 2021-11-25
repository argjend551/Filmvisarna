import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Filmens titel");
  }

  async getHtml() {
    return `
    <h1>Filmens namn</h1>
  
    `;
  }
}
