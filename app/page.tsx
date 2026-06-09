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
    <section className="min-h-dvh flex justify-center items-center mx-[4%] my-16">
      {/* <div className="grid grid-cols-4 grid-rows-2 gap-8 max-w-7xl"> */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-7xl">
        {/* First, double sized cell */}
        <div className="row-span-2 bg-navy-900 rounded-2xl flex flex-col">
          <div className="bg-purple-600 rounded-2xl p-6 flex items-center sm:flex-col sm:items-start gap-4 grow">
            {/* User card */}
            <Image
              src={"/image-jeremy.png"}
              alt="Face of Jeremy"
              width={234}
              height={234}
              className="border-2 border-white rounded-full w-14 sm:w-20 aspect-square"
            />
            <div className=" sm:mt-12">
              <p className="text-navy-200 font-medium text-sm sm:text-base">
                Report for
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                Jeremy Robson
              </h2>
            </div>
          </div>

          {/* Timeframe settings: */}
          <div className="flex justify-between items-center sm:flex-col sm:items-start px-6 py-6 gap-4">
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
    </section>
  );
}
