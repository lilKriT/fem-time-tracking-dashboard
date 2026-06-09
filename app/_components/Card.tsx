import { ITimeframe } from "../data";

interface CardProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  mode: "daily" | "weekly" | "monthly";
  timeframes: {
    daily: ITimeframe;
    weekly: ITimeframe;
    monthly: ITimeframe;
  };
}

const Card = ({ title, color, icon, mode, timeframes }: CardProps) => {
  const timeframe = timeframes[mode];

  return (
    <article
      className={`${color} ${icon} bg-no-repeat bg-position-[right_1rem_top_-0.5rem] rounded-2xl flex text-purple-50`}
    >
      {/* The inner frame */}
      <div className="bg-navy-900 mt-12 rounded-2xl w-full p-8 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-lg">{title}</h2>

          {/* Apparently this is better then "Image"... */}
          <img src={"/icon-ellipsis.svg"} className="cursor-pointer" />
        </div>

        <p className="text-6xl font-light mt-4">{timeframe.current}hrs</p>
        {/* Different data depending on the mode */}
        <p className="font-medium text-navy-200">
          {mode === "daily" && "Last Day"} {mode === "weekly" && "Last Week"}
          {mode === "monthly" && "Last Month"} - {timeframe.previous}hrs{" "}
        </p>
      </div>
    </article>
  );
};

export default Card;
