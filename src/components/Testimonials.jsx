import { useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data/siteData.js";
import AssetIcon from "./AssetIcon.jsx";

export default function Testimonials() {
  const [active, setActive] = useState(1);
  return (
    <section id="testimonial" className="bg-white py-[70px] lg:py-[100px]">
      <div className="inner text-center">
        <h2 className="text-[34px] font-semibold text-[#1B1B1B] sm:text-[40px] lg:text-[45px]">
          What Our Clients Saying
        </h2>
        <div className="mb-[36px] mt-[38px] grid gap-[24px] md:grid-cols-2 xl:mb-[46px] xl:mt-[48px] xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`group w-full appearance-none rounded-[4px] border-0 bg-white p-[30px_24px_34px] text-center shadow-soft outline-none ring-0 transition duration-300 hover:-translate-y-1 hover:bg-cw-green hover:text-white hover:shadow-card focus:outline-none focus:ring-0 sm:p-[38px_34px_40px] xl:p-[45px_57px_44px] ${active === index ? "ring-1 ring-cw-green/0" : ""}`}
            >
              <div className="relative mx-auto h-[124px] w-[124px] sm:h-[148px] sm:w-[148px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <span
                  className={`absolute -left-3.5 top-5 grid h-[43px] w-[43px] place-items-center rounded-full ${index === 1 ? "bg-cw-dark" : "bg-cw-dark"} ${active === index ? "bg-cw-green" : ""} text-white transition duration-300 group-hover:bg-white group-hover:text-cw-green`}
                >
                  <AssetIcon
                    src="/assets/quote.svg"
                    className="h-[18px] w-[22px]"
                  />
                </span>
              </div>
              <h3 className="mt-[15px] text-[22px] font-semibold tracking-normal text-cw-dark transition duration-300 group-hover:text-white sm:text-[24px]">
                {item.title}
              </h3>
              <div className="mt-[4px] flex justify-center gap-[5px] text-[#FAB93C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={26} fill="currentColor" />
                ))}
              </div>
              <p className="mx-auto mt-[20px] max-w-[310px] text-[16px] text-cw-muted transition duration-300 group-hover:text-white/85">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>
              <p className="mt-[15px] text-[18px] font-bold text-cw-dark transition duration-300 group-hover:text-white">
                {item.name}
              </p>
              <p className="text-[14px] font-regular text-[#7B7B7B] transition duration-300 group-hover:text-white/80">
                {item.role}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-[36px] flex justify-center gap-[13px] lg:mt-[46px]">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              aria-label={`Show ${item.name}`}
              onClick={() => setActive(index)}
              className={`h-[10px] rounded-full transition-all ${active === index ? "w-[35px] bg-cw-green" : "w-[35px] bg-[#dddddd]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
