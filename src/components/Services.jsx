import { useState } from "react";
import { services } from "../data/siteData.js";
import AssetIcon from "./AssetIcon.jsx";

export default function Services() {
  const [activeService, setActiveService] = useState(1);

  return (
    <section id="services" className="relative bg-white py-[70px]">
      <div className="absolute inset-y-[0px] left-[0px] w-full rounded-[120px_0_120px_0] bg-cw-purple/80 lg:rounded-[350px_0_350px_0]" />
      <div className="inner relative grid items-center gap-[40px] xl:grid-cols-[664px_1fr] xl:gap-[113px]">
        <div className="order-2 grid grid-cols-1 justify-items-center gap-[24px] sm:grid-cols-2 sm:items-start sm:gap-[40px] xl:order-1">
          <div className="space-y-[24px] sm:space-y-[40px] xl:pt-[133px]">
            <ServiceCard
              service={services[0]}
              active={activeService === 0}
              onClick={() => setActiveService(0)}
            />
            <ServiceCard
              service={services[2]}
              active={activeService === 2}
              onClick={() => setActiveService(2)}
            />
          </div>
          <div className="space-y-[24px] sm:space-y-[40px]">
            <ServiceCard
              service={services[1]}
              active={activeService === 1}
              onClick={() => setActiveService(1)}
            />
            <ServiceCard
              service={services[3]}
              active={activeService === 3}
              onClick={() => setActiveService(3)}
            />
          </div>
        </div>
        <div className="order-1 xl:order-2 xl:pt-[20px]">
          <h2 className="section-title text-[34px] font-semibold leading-[37px] tracking-normal text-[#1B1B1B] sm:text-[40px] sm:leading-[43px] lg:text-[45px] lg:leading-[49px]">
            We Offer A Variety Of Services Such As
          </h2>
          <p className="section-copy mt-[30px] max-w-[543px]">
            At our company, we pride ourselves on offering a variety of services
            to meet the diverse needs of our clients. Whether you&apos;re
            looking for marketing assistance, website design, or IT support,
            we&apos;ve got you covered
          </p>
          <a
            href="#portfolio"
            className="mt-[30px] inline-flex rounded-[5px] bg-[#DAF6EB] px-[25px] py-[14.5px] text-[16px] font-normal text-cw-green transition hover:-translate-y-[2px] hover:bg-cw-green hover:text-white"
          >
            All Services
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, active, onClick }) {
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
      className={`service-card cursor-pointer outline-none ring-0 focus:outline-none focus:ring-0 ${
        active
          ? "bg-cw-green text-white shadow-[0_12px_30px_rgba(9,199,133,.3)]"
          : ""
      }`}
    >
      <AssetIcon
        src={service.icon}
        className={`h-[75px] w-[75px] transition duration-300 ${
          active ? "text-white" : "icon-box text-cw-green"
        }`}
      />
      <h3 className="mt-[14px] text-[20px] font-semibold">{service.title}</h3>
      <p
        className={`service-text mt-[14px] text-[16px] leading-[24.8px] transition duration-300 ${
          active ? "text-white/82" : "text-cw-muted"
        }`}
      >
        {service.text}
      </p>
    </article>
  );
}
