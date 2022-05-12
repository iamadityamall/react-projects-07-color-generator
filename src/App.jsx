import React from "react";
import Values from "values.js";
import { useState } from "react";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("#222");
  const [isError, setIsError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#FF5E00").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you pressed generate button");
    try {
      let newColorList = new Values(color).all(10);
      console.log(newColorList);
      setColorList(newColorList);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex flex-col mt-10 py-10 md:flex-row justify-center items-center capitalize">
        <h3 className="text-2xl p-5 font-bold font-mono text-green-400">color generator</h3>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={color}
            placeholder="#222"
            onChange={(e) => setColor(e.target.value)}
            className={`border-2 p-5 border-black ${
              isError && "border-red-500 border-2"
            }`}
          />
          <button type="submit" className="px-5 text-2xl text-white bg-green-600/70 ml-5 rounded-sm capitalize">generate</button>
        </form>
      </section>
      <section className="flex flex-wrap mx-10 md:space-x-0 mb-10 space-y-1 justify-center items-end ">
        {colorList.map((color, index) => {
          const hexColor = `#${color.hex}`;
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={hexColor}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
