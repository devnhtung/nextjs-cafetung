
interface SectionProps {
  children: React.ReactNode,
  id?: string
  style?: string
}

const Section = ({ children, id, style }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${id === "contact" ? "bg-[#333131]" : "min-h-screen"
        } w-screen overflow-x-hidden relative px-[8rem] py-[1rem] ${style}`}
    >
      {children}
    </section>
  );
};

export default Section;
