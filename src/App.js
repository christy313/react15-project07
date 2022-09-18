import React, { useState, useEffect } from "react";
import data from "./data";

import Title from "./components/Title";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";
import Article from "./components/Article";

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";

          if (personIndex === index) position = "activeSlide";
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return <Article {...person} position={position} />;
        })}
        <ButtonLeft setIndex={setIndex} index={index} />
        <ButtonRight setIndex={setIndex} index={index} />
      </div>
    </section>
  );
};

export default App;
