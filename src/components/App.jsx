import "../scss/App.scss";
import logo from "../images/logo.png";
import developer from "../images/web-developer.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="header_logo">
          <img src={logo} alt="Logo de un rayo entre el signo de las llaves" />
        </div>
        <nav className="header_nav">
          <ul className="header_nav_list">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="screen1">
          <section className="screen1_content">
            <h1>Hi, I'm Patricia García</h1>
            <p>Full Stack Developer</p>
          </section>
          <section className="screen1_ilustration">
            <img src={developer} alt="Ilustración de una desarrolladora web" />
          </section>
        </div>
        <div className="screen2">
          <section className="screen2_content">
            <h1>Hi, I'm Patricia García</h1>
            <p>Full Stack Developer</p>
          </section>
          <section className="screen2_ilustration">
            <img src={developer} alt="Ilustración de una desarrolladora web" />
          </section>
        </div>
      </main>
      <footer> </footer>
    </>
  );
}

export default App;
