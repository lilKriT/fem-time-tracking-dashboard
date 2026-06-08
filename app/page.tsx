import Image from "next/image";

import { data } from "./data";
import Card from "./_components/Card";

const ActivityMeta = {
  Work: { color: "", icon: "" },
  Play: { color: "", icon: "" },
  Study: { color: "", icon: "" },
  Exercise: { color: "", icon: "" },
  Social: { color: "", icon: "" },
  "Self Care": { color: "", icon: "" },
};

const getActivityMeta = (title: string) => {
  return (
    ActivityMeta[title as keyof typeof ActivityMeta] ?? {
      color: "",
      icon: "",
    }
  );
};

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {/* First, double sized cell */}
        <div className="row-span-2 bg-navy-900 rounded-3xl ">
          <div className="bg-purple-600 rounded-3xl p-6 flex flex-col gap-2">
            {/* User card */}
            <Image
              src={"/image-jeremy.png"}
              alt="Face of Jeremy"
              width={234}
              height={234}
              className="border-2 border-white rounded-full w-20 aspect-square"
            />
            <p className="text-navy-200">Report for</p>
            <h2 className="text-5xl font-light">Jeremy Robson</h2>
          </div>

          {/* Timeframe settings: */}
          <div>bla bla bla bla</div>
        </div>

        {/* Cards */}
        {data.map((activity) => (
          <Card
            key={activity.title}
            title={activity.title}
            color={getActivityMeta(activity.title).color}
          />
        ))}
      </div>
      {/* 
  

  Daily
  Weekly
  Monthly

  Work
  5hrs <!-- daily -->
  Previous - 7hrs <!-- daily -->
  32hrs <!-- weekly -->
  Previous - 36hrs <!-- weekly -->
  103hrs <!-- monthly -->
  Previous - 128hrs <!-- monthly -->

  Play
  1hr <!-- daily -->
  Previous - 2hrs <!-- daily -->
  10hrs <!-- weekly -->
  Previous - 8hrs <!-- weekly -->
  23hrs <!-- monthly -->
  Previous - 29hrs <!-- monthly -->

  Study
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 7hrs <!-- weekly -->
  13hrs <!-- monthly -->
  Previous - 19hrs <!-- monthly -->

  Exercise
  1hr <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 5hrs <!-- weekly -->
  11hrs <!-- monthly -->
  Previous - 18hrs <!-- monthly -->

  Social
  1hr <!-- daily -->
  Previous - 3hrs <!-- daily -->
  5hrs <!-- weekly -->
  Previous - 10hrs <!-- weekly -->
  21hrs <!-- monthly -->
  Previous - 23hrs <!-- monthly -->

  Self Care
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  2hrs <!-- weekly -->
  Previous - 2hrs <!-- weekly -->
  7hrs <!-- monthly -->
  Previous - 11hrs <!-- monthly -->
  */}
    </section>
  );
}
