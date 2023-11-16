import "./styles.css";

import achieves from "../utils/achieves";

export default function Achieves() {
  return (
    <div className="timeline">
      {achieves.map((achieve, index) => (
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
    </div>
  );
}
