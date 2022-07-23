import { useState } from "react";

// style
import "../App.css";
// apis
import shrtcodeApi from "../apis/shrtcodeApi";

const Input = ({ currentDomain, setGeneratedCode }) => {
  const [state, setState] = useState({
    isLoading: false,
    value: "",
  });

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      value,
    });
  };
  const handleGenerate = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const response = await shrtcodeApi.shorten(state.value);
      const { ok, result } = response;
      const shortLink =
        result[`short_link${currentDomain === 1 ? "" : currentDomain}`];
      const originalLink = result.original_link;
      setGeneratedCode({
        ok,
        originalLink,
        shortLink,
      });
      setState({
        ...state,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="stack-vertical">
      <p>Enter a Link: &nbsp;</p>
      <input type="text" value={state.value} onChange={handleChangeValue} />
      {state.isLoading ? (
        "Generating..."
      ) : (
        <button className="domain" onClick={handleGenerate}>
          Generate
        </button>
      )}
    </div>
  );
};

export default Input;
