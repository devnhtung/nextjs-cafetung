"use client"

import { Ourmenu } from "@/app/constant";
import Section from "@/app/components/Section";
import CoffeeCard from "@/app/components/CoffeeCard";
import { RunningText, TitlePage } from "@/app/components/TypingText";

import { useState } from "react";

const OurMenu = () => {
  const [active, setActive] = useState("coffee3");

  return (
    <Section id="menu">
      <RunningText />
      <TitlePage title="Our Menu" />

      <div className="mt-[50px] flex flex-row min-h-[70vh] gap-2">
        {Ourmenu.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            {...coffee}
            active={active}
            handleClick={async () => await setActive(coffee.title)}
          />
        ))}
      </div>
    </Section>
  );
};

export default OurMenu;
