class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <a href="../index.html" class="navbar-brand mb-0 h1">
                <img class="d-inline-block align-top" src="../figures/icone.ico" width="30" height="30" />
                Home
            </a>

            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" class="navbar-toggler"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Highlights
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a href="/pages/whereEurope.html" class="dropdown-item">Albums</a></li>
                        <li><a href="/pages/whatEurope.html" class="dropdown-item">Playlists</a></li>
                        <li><a href="/pages/whatShould.html" class="dropdown-item">Scores</a></li>
                        <li><a href="/pages/tunisia.html" class="dropdown-item">Read</a></li>
                        </ul>
                </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link">
                            Highlights
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Legal
                        </a>
                    </li>
                </ul>
            </div>
            <form class="d-flex">
                <input type="text" class="form-control me-2">
                <button type="submit" class="btn btn-outline-success">
                    search
                </button>
            </form>
        </div>
    </nav>
</header>
    `;
    }
}

customElements.define('header-component', Header);