"use client";

import Image from "next/image";

import { data } from "./data";
import Card from "./_components/Card";
import { useState } from "react";

const ActivityMeta = {
  Work: { color: "bg-orange-300", icon: "bg-[url('/icon-work.svg')]" },
  Play: { color: "bg-blue-300", icon: "bg-[url('/icon-play.svg')]" },
  Study: { color: "bg-pink-400", icon: "bg-[url('/icon-study.svg')]" },
  Exercise: { color: "bg-green-400", icon: "bg-[url('/icon-exercise.svg')]" },
  Social: { color: "bg-purple-700", icon: "bg-[url('/icon-social.svg')]" },
  "Self Care": {
    color: "bg-yellow-300",
    icon: "bg-[url('/icon-self-care.svg')]",
  },
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
  const [mode, setMode] = useState<"daily" | "weekly" | "monthly">("weekly");

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-8 max-w-7xl">
        {/* First, double sized cell */}
        <div className="row-span-2 bg-navy-900 rounded-2xl flex flex-col">
          <div className="bg-purple-600 rounded-2xl p-6 flex flex-col gap-2 grow">
            {/* User card */}
            <Image
              src={"/image-jeremy.png"}
              alt="Face of Jeremy"
              width={234}
              height={234}
              className="border-2 border-white rounded-full w-20 aspect-square"
            />
            <p className="text-navy-200 mt-12 font-medium">Report for</p>
            <h2 className="text-5xl font-light">Jeremy Robson</h2>
          </div>

          {/* Timeframe settings: */}
          <div className="flex flex-col justify-center items-start px-6 py-6 gap-4">
            <button
              className={`btn ${mode === "daily" && "btn--active"}`}
              onClick={() => setMode("daily")}
            >
              Daily
            </button>
            <button
              className={`btn ${mode === "weekly" && "btn--active"}`}
              onClick={() => setMode("weekly")}
            >
              Weekly
            </button>
            <button
              className={`btn ${mode === "monthly" && "btn--active"}`}
              onClick={() => setMode("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Cards */}
        {data.map((activity) => (
          <Card
            key={activity.title}
            title={activity.title}
            color={getActivityMeta(activity.title).color}
            icon={getActivityMeta(activity.title).icon}
            mode={mode}
            timeframes={activity.timeframes}
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
