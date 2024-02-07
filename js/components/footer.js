class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<footer class="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <!-- <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"> -->
            <img src="../figures/icone.ico" width="5%">
            <!-- </a> -->
            <span class="mb-3 mb-md-0 text-body-secondary">&copy; EMX - NTD Spotify Explorer</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="https://open.spotify.com/user/u6pk0kjl27ptv0hm1eg787oqw?si=a8c2d004e1fe4dab"><i class="bi bi-1-square-fill"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://open.spotify.com/user/1152235095?si=aab8d27e68894ec9"><i class="bi bi-2-square-fill"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://pocketcall.fr"><i class="bi bi-2-square-fill"></i></a></li>
        </ul>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);