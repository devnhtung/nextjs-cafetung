import Section from "@/app/components/Section"
import { RunningText, TitlePage } from "@/app/components/TypingText"
import DessertCard from "@/app/components/DessertCard"
import { Desserts } from "@/app/constant"

const Dessert = () => {
  return (
    <Section id="dessert">
      <RunningText />
      <TitlePage title="Desserts & Beverages" />
      <div className="mt-[50px] min-h-[70vh] grid grid-cols-4 gap-[2px] mb-16">
        {Desserts.map((item, index) => (
          <DessertCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  )
}

export default Dessert