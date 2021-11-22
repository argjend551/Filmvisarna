import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Biljetter");
  }

  async getHtml() {
    return `
    <h1>Biljetter</h1>
    <p>Här kommer att finnas funktion för att köpa biljetter</p>
    `;
  }
}
