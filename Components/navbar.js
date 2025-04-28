class SearchBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.addListeners();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .search-bar-container {
            display: flex;
            align-items: center; /* Centra verticalmente */
            gap: 30px; /* Espacio entre el logo y la barra */
            padding: 20px;
            width: 90vw;
            margin: 0 auto;
          }
  
          .logo {
            width: 40px;
            height: auto;
            cursor: pointer;
          }
  
          .search-input-container {
            display: flex;
            align-items: center;
            flex-grow: 1;
          }
  
          .search-input-container input {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            max-width: 400px;
          }
  
          .search-input-container button {
            background-color: #ff667f;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }
  
          .search-input-container button:hover {
            background-color: #e14e60;
          }

          .wpp{
          width: 30px;
          height: auto;
          cursor: pointer;
          }

          .wpplogo{
          justify-content: end;
          }

        </style>
        <div class="search-bar-container">

        <a href="../index.html">
          <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Miniso_2023.svg/1200px-Miniso_2023.svg.png" alt="Logo Miniso">
          </a>

          <div class="search-input-container">
            <input type="text" id="search" placeholder="Buscar producto..." />
            <button id="searchButton">Buscar</button>
          </div class="wpplogo">
          <img class="wpp" src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-mobile-software-icon-png-image_8704828.png" alt="wppLogo">
          <img class="wpp" src="https://cdn-icons-png.flaticon.com/512/2168/2168249.png" alt="wppLogo">
          <div>
          
          </div>
        </div>

      `;
    }
  
    addListeners() {
      const searchInput = this.shadowRoot.getElementById('search');
      const searchButton = this.shadowRoot.getElementById('searchButton');
  
      searchInput.addEventListener('input', this.searchProducts);
      searchButton.addEventListener('click', this.searchProducts);
    }
  
    searchProducts() {
      const query = this.shadowRoot.getElementById('search').value.toLowerCase();
      console.log("Buscando:", query);
      // Aquí iría tu lógica real de búsqueda
    }
  }
  
  customElements.define('search-bar', SearchBar);  