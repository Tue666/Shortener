// style
import "../App.css";

const Result = ({ generatedCode, setGeneratedCode }) => {
  const { ok, shortLink, originalLink } = generatedCode;

  const handleClearGenerated = () => {
    setGeneratedCode(null);
  };
  return (
    <div>
      {ok && (
        <div>
          <p>Link generated!</p>
          <a href={originalLink} target="_blank" rel="noopener noreferrer">
            {shortLink}
          </a>
          <button className="domain" onClick={handleClearGenerated}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
