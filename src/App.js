import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
      </header>
      <main>
        <Search />
      </main>
      <footer className="App-footer">
        <p>
          <a
            href="https://github.com/kmlaird/react-app-weather.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/kimlaird/"
            target="_blank"
          >
            Kim Laird
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
