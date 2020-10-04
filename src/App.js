import React, {useState} from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

function Counter(init) {
  let counter = init;
  const c = function () {
    return counter++;
  };
  return c;
}

function Button(props) {
  // Хук
  let [counter, setCounter] = useState(props.children);
  // const c = Counter(0);
  // let counter = props.children;
  // const click = () => counter = c();
  return (
    <div>
      <button style={{fontSize: "30px"}}
        onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header>Hello, World!</Header>
      <Button>{0}</Button>
    </div>
  );
}

export default App;
