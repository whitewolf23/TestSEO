import { useEffect } from "react";
import useGTM from "@elgorditosalsero/react-gtm-hook";
import React from "react";

const MyAwesomeComp = () => {
  const { sendDataToGTM } = useGTM();

  const handleClick = () =>
    sendDataToGTM({
      event: "awesomeButtonClicked",
      value: "imAwesome",
    });

  return (
    <div>
      <p>My Awesome Comp</p>
      <button onClick={handleClick}>My Awesome Button</button>
    </div>
  );
};

const App = () => {
  const { init } = useGTM();

  useEffect(() => init({ id: "GTM-NTGCJSR" }), []);

  return <MyAwesomeComp />;
};

export default App;
