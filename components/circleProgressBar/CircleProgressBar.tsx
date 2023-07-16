import React from "react";

interface Props {
  average: number;
  className?: string;
}

const CircleProgressBar: React.FC<Props> = ({ average, className }) => {
  let progressColor = "";
  if (average < 25 && average > 0) {
    progressColor = "text-TMDB_Danger";
  } else if (average > 25 && average < 75) {
    progressColor = "text-TMDB_Warning";
  } else {
    progressColor = "text-TMDB_Success";
  }
  return (
    <section
      className={`${className} w-[50px] h-[50px] rounded-[50%] bg-TMDB_Blue_1 flex justify-center items-center`}
    >
      <span className="text-white font-extrabold relative right-[1px]">
        {average} <span className="text-[8px] absolute top-1">%</span>
      </span>
      <div className="w-[50px] h-[50px] absolute">
        <svg className="w-full h-full">
          <circle
            className={progressColor}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            r="23"
            cx="50%"
            cy="50%"
            style={{
              strokeDasharray: `${(average * 144) / 100},100`,
              transformOrigin: "center",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default CircleProgressBar;
