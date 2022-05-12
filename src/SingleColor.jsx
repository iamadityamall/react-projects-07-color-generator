import React from "react";
import { useState, useEffect } from "react";

const SingleColor = ({ index, rgb, hexColor, weight }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      navigator.clipboard.readText(hexColor);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert, hexColor]);

  return (
    <article
      className={`border-[1px] border-black w-40 h-40 flex flex-col justify-center items-center font-mono font-semibold ${
        index > 10 && "text-white"
      }`}
      style={{ backgroundColor: `${hexColor}` }}
      onClick={() => setAlert(true)}
    >
      <p>{weight}%</p>
      <p>{hexColor}</p>
      {alert && (
        <p className="text-center text-xs mt-1 text-gray-600">
          'copied to clipboard'
        </p>
      )}
    </article>
  );
};

export default SingleColor;
