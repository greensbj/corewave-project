import { useState } from "react";
import { portfolioTabs, projects } from "../data/siteData.js";

export default function Portfolio() {
  const [active, setActive] = useState("UI/UX Design");
  return (
    <section id="portfolio" className="bg-white py-[70px] lg:py-[100px]">
      <div className="inner text-center">
        <h2 className="text-[34px] font-semibold leading-[37px] tracking-normal text-[#1B1B1B] sm:text-[40px] sm:leading-[43px] lg:text-[45px] lg:leading-[49px]">
          Our Latest Project
        </h2>
        <div className="relative mt-[33px] flex justify-start gap-[24px] overflow-x-auto pb-[25px] text-[16px] font-medium text-[#7B7B7B] [scrollbar-width:none] sm:justify-center sm:gap-[32px] lg:gap-[73px] [&::-webkit-scrollbar]:hidden">
          <span className="pointer-events-none absolute bottom-[0px] left-[50%] h-[4px] w-full max-w-[892px] -translate-x-[50%] rounded-full bg-[#CECECE]" />
          {portfolioTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative flex-none appearance-none border-[0px] bg-transparent pb-[10px] outline-none ring-0 transition hover:text-cw-green focus:outline-none focus:ring-0 ${active === tab ? "text-cw-green" : ""}`}
            >
              {tab}
              <span
                className={`pointer-events-none absolute bottom-[-25px] left-[50%] h-[4px] -translate-x-[50%] rounded-full bg-cw-green transition-all ${active === tab ? "w-[80px] sm:w-[120px] lg:w-[154px]" : "w-[0px]"}`}
              />
            </button>
          ))}
        </div>
        <div className="mt-[22px] grid gap-[28px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[18px]">
          {projects.map((project) => (
            <article key={project.title} className="group text-center">
              <div className="mx-auto mt-[40px] aspect-[424/404] w-full max-w-[424px] overflow-hidden rounded-[15px] bg-cw-soft shadow-soft lg:mt-[53px] xl:h-[404px]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-[20px] text-[22px] font-bold tracking-[-0.66px] text-cw-dark">
                {project.title}
              </h3>
              <p className="mx-auto mt-[7px] max-w-[344px] text-[16px] text-cw-muted">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </article>
          ))}
        </div>
        <button
          onClick={() => alert("All projects will be shown here.")}
          className="green-btn mt-[32px] !px-[25px] !py-[14.5px] text-[16px] font-normal"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}
