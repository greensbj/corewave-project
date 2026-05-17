export default function TrialBanner() {
  return (
    <section className="bg-cw-green py-[64px] md:py-[86px]">
      <div className="inner relative grid items-center gap-[32px] md:min-h-[148px] md:grid-cols-[1fr_270px]">
        <div className="text-center md:text-left">
          <h2 className="text-[32px] font-semibold leading-[37px] text-white sm:text-[38px] sm:leading-[44px] lg:text-[45px] lg:leading-[52px]">
            Don’t Worries, Start Your Free Trial Today!
          </h2>
          <a
            href="#contact"
            className="mt-[38px] inline-flex rounded-[5px] bg-cw-dark px-[25px] py-[14.5px] text-[16px] font-normal text-white transition hover:-translate-y-[2px] hover:bg-white hover:text-cw-dark"
          >
            Get Free Trial
          </a>
        </div>
        <img
          src="/assets/trial-woman.png"
          alt="Free trial"
          className="hidden w-auto object-contain md:absolute md:bottom-[-95px] md:right-[0px] md:block md:h-[365px]"
        />
      </div>
    </section>
  );
}
