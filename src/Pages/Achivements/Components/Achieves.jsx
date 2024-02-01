/* eslint-disable react/prop-types */
import "./styles.css";

import achieves2023 from "../utils/achieves23";
import achieves2024 from "../utils/achieves24";

export default function Achieves({ year }) {
  return (
    <div className="timeline">
      {year === 2023 ? (
        <>
          {achieves2023.map((achieve, index) => (
            <div
              key={achieve.date}
              className={`container ${index % 2 !== 0 ? "left" : "right"}`}
            >
              <div className="content">
                <h2>{achieve.date}</h2>
                <ul>
                  {achieve.name.map((name, index) => (
                    <li key={name + index}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {achieves2024.map((achieve, index) => (
            <div
              key={achieve.date}
              className={`container ${index % 2 !== 0 ? "left" : "right"}`}
            >
              <div className="content">
                <h2>{achieve.date}</h2>
                <ul>
                  {achieve.name.map((name, index) => (
                    <li key={name + index}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
