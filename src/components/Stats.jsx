import { useState } from "react";
import { stats } from "../data/siteData.js";
import AssetIcon from "./AssetIcon.jsx";

export default function Stats() {
  const [activeStat, setActiveStat] = useState(0);

  return (
    <section id="blog" className="relative bg-white py-[70px]">
      <div className="absolute inset-y-[0px] left-[0px] w-full rounded-[120px_0_120px_0] bg-cw-purple/80 lg:rounded-[350px_0_350px_0]" />
      <div className="inner relative grid items-center gap-[40px] xl:grid-cols-[1fr_562px] xl:gap-[92px]">
        <div>
          <h2 className="section-title text-[34px] font-semibold leading-[37px] tracking-normal text-[#1B1B1B] sm:text-[40px] sm:leading-[43px] lg:text-[45px] lg:leading-[49px]">
            Take Your Business <br />
            To New Heights <br />
            With Our Top Services.
          </h2>
          <p className="text-[16px] text-[#7B7B7B] section-copy mt-[20px] max-w-[550px]">
            At our company, we pride ourselves on offering a variety of services
            to meet the diverse needs of our clients. Whether you&apos;re
            looking for marketing assistance, website design, or IT support,
            we&apos;ve got you covered
          </p>
          <a
            href="#contact"
            className="green-btn !px-[25px] !py-[14.5px] text-[16px] font-semibold mt-[31px]"
          >
            Get In Touch Now
          </a>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-[24px] sm:grid-cols-2 sm:items-start sm:gap-[40px] lg:justify-items-stretch">
          <div className="w-full space-y-[24px] sm:space-y-[40px]">
            <StatCard
              stat={stats[0]}
              active={activeStat === 0}
              onClick={() => setActiveStat(0)}
            />
            <StatCard
              stat={stats[2]}
              active={activeStat === 2}
              onClick={() => setActiveStat(2)}
            />
          </div>
          <div className="w-full space-y-[24px] sm:space-y-[40px] sm:pt-[95px]">
            <StatCard
              stat={stats[1]}
              active={activeStat === 1}
              onClick={() => setActiveStat(1)}
            />
            <StatCard
              stat={stats[3]}
              active={activeStat === 3}
              onClick={() => setActiveStat(3)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, active, onClick }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`group mx-auto grid min-h-[210px] w-full max-w-[261px] cursor-pointer place-items-center rounded-[15px] p-[20px] text-center outline-none ring-0 shadow-soft transition duration-300 hover:-translate-y-[4px] hover:bg-cw-green hover:text-white hover:shadow-card focus:outline-none focus:ring-0 sm:h-[235px] lg:max-w-none ${
        active ? "bg-cw-green text-white shadow-card" : "bg-white"
      }`}
    >
      <div>
        <AssetIcon
          src={stat.icon}
          className={`mx-auto h-[75px] w-[75px] transition duration-300 group-hover:text-white ${
            active ? "text-white" : "text-cw-green"
          }`}
        />
        <p className="mt-[15px] text-[20px] font-normal">{stat.title}</p>
        <p className="text-[30px] font-normal">{stat.value}</p>
      </div>
    </article>
  );
}
