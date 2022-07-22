import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Button from "./Components/Button";
import Cards from "./Components/Cards";
function App() {
  const log = useSelector((state) => state.counter.user);
  const [array, onarray] = useState();

  let arr = [];

  useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then((e) => e.json())
      .then((e) => {
        onarray(e);
      });
  }, []);

  if (array?.total) {
    for (let i = 0; i < array.total; i++) {
      arr.push(i + 1);
    }
  }

  return (
    <Fragment>
      <div className="App">
        {!log?.data?.id && <h1 className="default">Click on any button....</h1>}
        {log?.data?.id && <Cards />}
        <div className="index">
          {arr.map((e, i) => (
            <Button id={e} key={i} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
