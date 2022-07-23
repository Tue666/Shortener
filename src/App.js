import { useState } from "react";

// style
import "./App.css";
// components
import Input from "./components/Input";
import Domain from "./components/Domain";
import Result from "./components/Result";

const App = () => {
  const [generatedCode, setGeneratedCode] = useState(null);
  const [currentDomain, setCurrentDomain] = useState(1);

  const handleChangeDomain = (index) => {
    setCurrentDomain(index);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h5>Link Shorterner</h5>
        <div className="spacing" />
        <Input
          currentDomain={currentDomain}
          setGeneratedCode={setGeneratedCode}
        />
        <Domain
          currentDomain={currentDomain}
          handleChangeDomain={handleChangeDomain}
        />
        <div className="spacing" />
        <p>With this free Link zxcnbzxmc</p>
      </div>
      {generatedCode && (
        <div className="wrapper">
          <Result
            generatedCode={generatedCode}
            setGeneratedCode={setGeneratedCode}
          />
        </div>
      )}
    </div>
  );
};

export default App;
