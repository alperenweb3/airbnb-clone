import "./App.css";
import data from "./data";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Headline from "./components/Headline";
import Card from "./components/Card";

function App() {
  const Cards = data.map((CardData) => {
    return <Card data={CardData} />;
  });
  return (
    <div className="App">
      <Header />
      <Hero />
      <Headline />
      <div className="container">
        <div className="card__wrapper">{Cards}</div>
      </div>
    </div>
  );
}

export default App;
