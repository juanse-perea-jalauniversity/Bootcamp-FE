
class JalaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const imgSrc = this.getAttribute('img-src') ?? './me-anime.png'
    const name = this.getAttribute('name') ?? 'Perea Juan sama'
    const role = this.getAttribute('role') ?? 'Developer'
    const titleColor = this.getAttribute('title-color') ?? '#fff'
    const contentColor = this.getAttribute('content-color') ?? '#282828'
    const footerColor = this.getAttribute('footer-color') ?? '#ee283f'

    this.shadowRoot.innerHTML = `
    <style>
    * {
      margin: 0;
    }
    .card-container {
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-area: 'jala-card';
      font-family: sans-serif;
    }
  
    .jala-card {
      grid-area: 'jala-card';
      display: flex;
      flex-direction: column;
      flex: 1;
      border: 1rem solid black;
    }
  
    .title {
      flex: 1;
      background-color: ${titleColor};
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .content {
      flex: 4;
      background-color: ${contentColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 2rem 0 2rem;
    }
  
    .id-photo {
      border-radius: 20%;
      zoom: 0.6; /* how to change image size? */
    }
  
    .name {
      color: #fff;
      font-size: 4rem;
    }
  
    .footer {
      flex: 0.8;
      background-color: ${footerColor};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 1rem 0 1rem;
    }
  
    .role {
      color: #fff;
      font-size: 3rem;
    }
    </style>
    <div class="card-container">
    <div class="jala-card">
      <div class="title">
        <img class="jala-logo" src="jala-logo.jpg" alt="jalasoft-logo">
      </div>
      <div class="content">
        <img class="id-photo" src=${imgSrc} alt="me">
        <p class="name">${name}</p>
      </div>
      <div class="footer">
        <p class="role">${role}</p>
      </div>
    </div>
  </div>
    `
  }
}

customElements.define('jala-card', JalaCard)