import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import ConfugureCounter from "./components/Counter/ConfigureCounter.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [newCount, setChosenCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <ConfugureCounter onSelect={setChosenCount} />
        <Counter key={newCount} initialCount={newCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
