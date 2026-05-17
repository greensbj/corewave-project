export default function About() {
  return (
    <section id="about" className="bg-white py-[70px] lg:py-[100px]">
      <div className="inner grid items-center gap-[40px] lg:grid-cols-[600px_1fr]">
        <div>
          <h2 className="section-title pr-[0px] text-[34px] font-semibold leading-[37px] tracking-normal text-[#1B1B1B] sm:text-[40px] sm:leading-[43px] lg:pr-[90px] lg:text-[45px] lg:leading-[49px]">
            Experience The Power Of Corewave
          </h2>
          <p className="text-[16px] text-[#7B7B7B] section-copy mt-[29px] max-w-[550px]">
            Are you ready to take your business to the next level? Look no
            further than Corewave. Our innovative technology and expert team can
            help you unlock your business&apos;s full potential. By harnessing
            the power of Corewave, you can streamline your operations, improve
            efficiency
          </p>
          <a
            href="#services"
            className="mt-[45px] inline-flex rounded-[5px] bg-cw-mint py-[14.5px] px-[25px] text-[16px] font-normal text-cw-green transition hover:-translate-y-[2px] hover:bg-cw-green hover:text-white"
          >
            Learn More
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="aspect-[616/416] w-full max-w-[616px] overflow-hidden rounded-[30px_0_30px_30px] sm:rounded-[50px_0_50px_50px]">
            <img
              src="/assets/about-team.jpg"
              alt="CoreWave team meeting"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
