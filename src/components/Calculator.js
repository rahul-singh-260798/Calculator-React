import { useState } from "react";
import Styles from "../Styles/Calculator.module.css";
import { Ellipsis } from "react-awesome-spinners";

const Calculator = () => {
  const [display, setDisplay] = useState(""); // display bar state
  const [loader, setLoader] = useState(false); // loader state

  //handled every button click except sum , clear
  const handleClick = (e) => {
    setDisplay(display.concat(e.target.name));
  };

  // function for clearing results
  const handleClear = (e) => {
    setDisplay("");
  };

  //function to remove last element from result
  const handleBackspace = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  //main function which handles evaluation
  const handleEval = () => {
    setLoader(true);

    try {
      let ans = eval(display).toString();
      if (ans) {
        setTimeout(() => {
          setLoader(false);
          setDisplay(ans);
        }, 2500);
      }
    } catch (err) {
      const errorMessage = "Error! Please give correct Inputs..";
      setDisplay(errorMessage);
      setLoader(false);
    }
  };

  // returns loader component if loader state is true
  if (loader) {
    return (
      <>
        <div className={Styles.loader}>
          <h1>Please wait... Calculating!</h1>
          <Ellipsis />
        </div>
      </>
    );
  }

  // returns calculator JSX if loader state is false
  return (
    <>
      <div className={Styles.heading}>React Calculator Coding Ninjas Test</div>
      <div className={Styles.container}>
        <form>
          <input className={Styles.input} type="text" value={display} />
        </form>

        <div className={Styles.keypad}>
          <button
            className={Styles.highlight}
            onClick={handleClear}
            id={Styles.clear}
          >
            Clear
          </button>
          <button
            className={Styles.highlight}
            onClick={handleBackspace}
            id={Styles.backspace}
          >
            C
          </button>
          <button className={Styles.highlight} name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className={Styles.highlight} name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className={Styles.highlight} name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className={Styles.highlight} name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button
            className={Styles.highlight}
            onClick={handleEval}
            id={Styles.result}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
