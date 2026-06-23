
class JalaCard extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    const imgSrc = this.getAttribute('img-src') ?? './me-anime.png';
    const name = this.getAttribute('name') ?? 'Perea Juan sama';
    const role = this.getAttribute('role') ?? 'Senior Architect';
    const titleColor = this.getAttribute('title-color') ?? '#fff';
    const contentColor = this.getAttribute('content-color') ?? '#282828';
    const footerColor = this.getAttribute('footer-color') ?? '#ee283f';
    const cardTemplate = document.querySelector("#jala-card-template").content.cloneNode(true);
    cardTemplate.querySelector(".id-photo").src = imgSrc;
    cardTemplate.querySelector(".name").textContent = name;
    cardTemplate.querySelector(".role").textContent = role;
    cardTemplate.querySelector(".title").style.backgroundColor = titleColor;
    cardTemplate.querySelector(".content").style.backgroundColor = contentColor;
    cardTemplate.querySelector(".footer").style.backgroundColor = footerColor;

    this._root.appendChild(cardTemplate);

  }
}

customElements.define('jala-card', JalaCard)