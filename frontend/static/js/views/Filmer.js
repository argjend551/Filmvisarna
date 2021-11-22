import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Filmer");
  }

  async getHtml() {
    return `
    <h1>Filmer</h1>
    <p>Här kommer information om de olika filmerna som för närvarande visas att synas<br>
    </p>
    `;
  }
}
