import { React, useEffect, useState } from "react";
import { AppInlineEdit, AppToggleButtons2 } from "../components/ui";

const decimalSeparatorData = ["dot", "comma"];
const thousandSeparatorData = ["dot", "comma", "space"];
const numberOfDecimalData = [0, 2];

const GeneralSettings = () => {
  const [currencySymbol, setCurrencySymbol] = useState("kr");
  const [numberOfDecimal, setNumberOfDecimal] = useState(0);

  const currencyPositionData = [
    `${currencySymbol} 1,000${numberOfDecimal === 2 ? ".00" : ""}`,
    `1,000 ${currencySymbol}${numberOfDecimal === 2 ? ".00" : ""}`,
    `${currencySymbol}1,000${numberOfDecimal === 2 ? ".00" : ""}`,
    `1,000${currencySymbol}${numberOfDecimal === 2 ? ".00" : ""}`,
  ];

  const [decimalSeparator, setDecimalSeparator] = useState("dot");
  const [thousandSeparator, setThousandSeparator] = useState("comma");
  const [currencyPosition, setCurrencyPosition] = useState(
    currencyPositionData[0]
  );

  const [toggle, setToggle] = useState("");
  const handleToggleClick = (id) => {
    setToggle(id);
  };

  const handleCurrencySymbolChange = (item) => {
    setCurrencySymbol(item);
  };

  useEffect(() => {
    if (toggle === "decimal-separator-id") {
      if (decimalSeparator === "comma" && thousandSeparator === "comma") {
        setDecimalSeparator("comma");
        setThousandSeparator("dot");
      }
      if (decimalSeparator === "dot" && thousandSeparator === "dot") {
        setDecimalSeparator("dot");
        setThousandSeparator("comma");
      }
    }
    if (toggle === "thousand-separator-id") {
      if (thousandSeparator === "comma" && decimalSeparator === "comma") {
        setThousandSeparator("comma");
        setDecimalSeparator("dot");
      }
      if (thousandSeparator === "dot" && decimalSeparator === "dot") {
        setThousandSeparator("dot");
        setDecimalSeparator("comma");
      }
    }
  }, [decimalSeparator, thousandSeparator]);

  return (
    <div className="container mt-5 generalSettings common_settings">
      <div className="ms-2 mb-5">
        {/* Decimal Separator */}
        <div className="row margin-tb-20 align-items-center">
          <p className="label col-sm-6 text-dark">Decimal Separator</p>
          <div className="col-sm-6">
            <AppToggleButtons2
              data={decimalSeparatorData}
              toggleState={decimalSeparator}
              setToggleState={setDecimalSeparator}
              id="decimal-separator-id"
              handleClick={handleToggleClick}
            />
          </div>
        </div>

        {/* Thousand Separator */}
        <div className="row mt-3 margin-tb-20 align-items-center">
          <p className="label col-sm-6 text-dark">Thousand Separator</p>
          <div className="col-sm-6">
            <AppToggleButtons2
              data={thousandSeparatorData}
              toggleState={thousandSeparator}
              setToggleState={setThousandSeparator}
              id="thousand-separator-id"
              handleClick={handleToggleClick}
            />
          </div>
        </div>

        {/* Number of Decimal */}
        <div className="row mt-3 margin-tb-20 align-items-center">
          <p className="label col-sm-6 text-dark">Number of Decimal</p>
          <div className="col-sm-6">
            <AppToggleButtons2
              data={numberOfDecimalData}
              toggleState={numberOfDecimal}
              setToggleState={setNumberOfDecimal}
            />
          </div>
        </div>

        {/* Currency symbol */}
        <div className="row mt-3 margin-tb-20 align-items-center">
          <p className="label col-sm-6 text-dark">Currency symbol</p>
          <div className="col-sm-6 text-secondary">
            <AppInlineEdit
              type="text"
              value="kr"
              onChange={handleCurrencySymbolChange}
            />
          </div>
        </div>

        {/* currency position */}
        <div className="row mt-3 margin-tb-20 align-items-center">
          <p className="label col-sm-6 text-dark">Currency Position</p>
          <div className="col-sm-6">
            <AppToggleButtons2
              data={currencyPositionData}
              toggleState={currencyPosition}
              setToggleState={setCurrencyPosition}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
