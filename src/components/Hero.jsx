import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-cw-mint pt-[80px] lg:h-[626px] lg:pt-[0px]"
    >
      <div className="inner grid grid-cols-1 items-center gap-[32px] py-[48px] md:grid-cols-[minmax(0,1fr)_minmax(280px,422px)] md:py-[60px] lg:h-[626px] lg:py-[0px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-[0px] lg:pt-[190px]"
        >
          <h1 className="max-w-[526px] text-[38px] font-normal leading-[46px] tracking-normal text-[#1B1B1B] sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[71.5px]">
            <span className="font-light">Empower Your Team</span>
            <br />
            <span className="font-bold">With CoreWave&apos;s</span>
          </h1>
          <p className="mt-[24px] max-w-[511px] text-[17px] font-normal leading-[28px] tracking-normal text-[#717171] sm:text-[18px] lg:mt-[37px] lg:text-[20px] lg:leading-[30px]">
            Boost Productivity and Wellness in Your Organization with
            CoreWave&apos;s Advanced Tools and Techniques
          </p>
          <div className="mt-[34px] flex flex-wrap gap-[14px] sm:gap-[20px] lg:mb-[116px] lg:mt-[51px]">
            <a
              className="green-btn !px-[25px] !py-[14.5px] text-[16px] font-normal"
              href="#services"
            >
              Explore More
            </a>
            <a
              className="inline-flex items-center justify-center gap-[16px] rounded-[5px] border-[2px] border-cw-green !px-[25px] !py-[14.5px] text-[16px] font-normal text-cw-dark transition duration-300 hover:-translate-y-[2px] hover:bg-white hover:shadow-[0_8px_22px_rgba(6,174,116,.18)]"
              href="#portfolio"
            >
              <span className="grid h-[20px] w-[20px] place-items-center rounded-full bg-[#D6F5E8] text-cw-green">
                <Play
                  size={10}
                  fill="currentColor"
                  strokeWidth={0}
                  className="translate-x-[1px]"
                />
              </span>
              Watch Video
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto h-[320px] w-full max-w-[360px] md:h-[420px] md:max-w-[422px] lg:h-[561px] lg:w-[541px] lg:max-w-none"
        >
          <div className="absolute left-[50%] top-[52px] h-[260px] w-[260px] -translate-x-[50%] rounded-full bg-[#CFF9E9] md:h-[360px] md:w-[360px] lg:left-[100px] lg:top-[100px] lg:h-[463px] lg:w-[463px] lg:-translate-x-[240px]" />
          <div className="absolute left-[50%] top-[96px] h-[190px] w-[190px] -translate-x-[50%] rounded-full bg-cw-mint md:h-[280px] md:w-[280px] lg:left-[160px] lg:top-[160px] lg:h-[340px] lg:w-[340px] lg:-translate-x-[240px]" />
          <img
            src="/assets/hero-man.png"
            alt="CoreWave hero"
            className="absolute bottom-[-58px] left-[50%] h-full w-full -translate-x-[50%] object-contain md:bottom-[-72px] md:w-[420px] lg:bottom-[-45px] lg:w-[520px] lg:-translate-x-[100%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
