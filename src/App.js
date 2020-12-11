import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";

function App() {
  const [input, setInput] = useState("");
  const [isScientific, setIsScientific] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const onInputChange = (val) => {
    setInput(input + val);
  };

  const handleCalculation = () => {
    try {
      setInput(eval(input).toString());
      console.log("input", input);
    } catch (error) {
      setInput("Invalid");
    }
  };

  const handleSqreClick = () => {
    return setInput(input.toString() * input.toString());
  };

  const handleSqrtClick = () => {
    return setInput(Math.sqrt(input.toString()));
  };

  const handleSignClick = () => {
    return setInput(-input.toString());
  };

  return (
    <div className={isLightTheme ? "app-light" : "app-dark"}>
      <div className="calc-container">
        <InputField isLight={isLightTheme} input={input}></InputField>
        <div className="row">
          <Button id="1" isLight={isLightTheme} handleClick={onInputChange}>
            1
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="2">
            2
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="3">
            3
          </Button>
          {isScientific ? (
            <Button isLight={isLightTheme} handleClick={handleSignClick} id="+">
              Sign
            </Button>
          ) : (
            <Button isLight={isLightTheme} handleClick={onInputChange} id="+">
              +
            </Button>
          )}
        </div>
        <div className="row">
          <Button isLight={isLightTheme} handleClick={onInputChange} id="4">
            4
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="5">
            5
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="6">
            6
          </Button>
          {isScientific ? (
            <Button isLight={isLightTheme} handleClick={handleSqreClick} id="-">
              Sqre
            </Button>
          ) : (
            <Button isLight={isLightTheme} handleClick={onInputChange} id="-">
              -
            </Button>
          )}
        </div>
        <div className="row">
          <Button isLight={isLightTheme} handleClick={onInputChange} id="7">
            7
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="8">
            8
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="9">
            9
          </Button>
          {isScientific ? (
            <Button isLight={isLightTheme} handleClick={handleSqrtClick} id="-">
              Sqrt
            </Button>
          ) : (
            <Button isLight={isLightTheme} handleClick={onInputChange} id="*">
              *
            </Button>
          )}
        </div>
        <div className="row">
          <Button
            id="clear"
            isLight={isLightTheme}
            handleClear={() => setInput("")}
          >
            Clear
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="0">
            0
          </Button>
          <Button isLight={isLightTheme} handleClick={handleCalculation} id="=">
            =
          </Button>
          <Button isLight={isLightTheme} handleClick={onInputChange} id="/">
            /
          </Button>
        </div>
        <div className="row">
          <Button
            isLight={isLightTheme}
            handleClick={() => {
              setIsScientific(!isScientific);
            }}
            id="+"
          >
            Scientific
          </Button>
          <Button
            isLight={isLightTheme}
            handleClick={() => setIsLightTheme(true)}
            id="light"
          >
            Light Theme
          </Button>
          <Button
            isLight={isLightTheme}
            handleClick={() => setIsLightTheme(false)}
            id="dark"
          >
            Dark Theme
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
