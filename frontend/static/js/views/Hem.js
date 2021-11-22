import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Hem");
  }

  async getHtml() {
    return `
    <h1>Hem</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae quibusdam, tempore ullam ratione ipsum <br> quaerat repellendus mollitia totam veritatis asperiores dolor odit iste consequatur repudiandae? Nisi, ipsum quasi! Eos.
    </p>
    `;
  }
}
