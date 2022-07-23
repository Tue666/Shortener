// style
import "../App.css";

const domains = [
  { index: 1, value: "shrtcode.de" },
  { index: 2, value: "9qr.de" },
  { index: 3, value: "shiny.link" },
];

const Domain = ({ currentDomain, handleChangeDomain }) => {
  return (
    <div className="stack-vertical">
      <p>Short domain: &nbsp;</p>
      {domains.map((domain) => {
        const { index, value } = domain;
        return (
          <button
            className={`domain ${currentDomain === index ? "active" : ""}`}
            key={index}
            onClick={() => handleChangeDomain(index)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Domain;
