export class holaMundo extends HTMLElement {
  constructor() {
    super();
    this.name;
    this.surname;
  }

  static get observedAttributes() {
    return ["name", "surname"]
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
    switch (nameAtr) {
      case "name":
          this.name = newValue;
        break;
      case "surname":
          this.surname = newValue;
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <div>
        <h1>Hola ${this.name} ${this.surname}</h1>
        <p>Esto es un párrafo</p>
      </div>
    `;
    this.style.color = "tomato";
    this.style.fontFamily ="sans-serif";
  }
}
