import Image from "next/image";
import { RunningText, TitlePage } from "@/app/components/TypingText";
import Section from "@/app/components/Section";

const About = () => {
  return (
    <Section id="about" style="py-0 overflow-hidden border border-top border-[#333131]">
      <div className="h-screen grid grid-cols-2">
        <div className="flex justify-center items-center h-[600px] ">
          <Image
            src="/image/coffee-shop.png"
            alt="coffee-shop"
            height={1200}
            width={600}
            className="h-[90%] w-[90%] rounded-lg object-cover "
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#333131] z-0" >
          <div className="z-50 py-2 px-10 relative flex flex-col justify-start ">
            <RunningText color="#7d7d7d" align="left" />
            <TitlePage title="About Tung" color="#e8e8e8" align="left" />
            <div className="mt-8 text-[#e8e8e8] text-lg font-regular text-justify">
              <p className="opacity-90"></p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
