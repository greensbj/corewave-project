import { footerHelp, footerServices, social } from "../data/siteData.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  const submit = (e) => {
    e.preventDefault();
    alert("Thanks! We will call you back soon.");
  };
  return (
    <footer id="contact" className="bg-white pb-[14px] pt-[70px] lg:pt-[100px]">
      <div className="inner grid gap-[40px] sm:grid-cols-2 lg:grid-cols-[1.12fr_.78fr_.78fr_1.25fr]">
        <div>
          <a href="#home" className="inline-flex transition hover:opacity-80">
            <Logo />
            
          </a>
          <p className="mt-[26px] max-w-[260px] text-[14px] font-normal leading-[28px] text-[#7B7B7B] lg:pr-[155px]">
            mukimsdesign@gmail.com
            +8801767630044
          </p>
          <div className="mt-[20px] flex gap-[8px]">
            {social.map((item) => (
              <a
                key={item}
                href="#home"
                className="grid h-[28.7px] w-[28.7px] place-items-center rounded-full bg-cw-green text-[16px] font-bold text-white transition leading-[20px] hover:-translate-y-[2px] hover:bg-cw-dark"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <FooterList title="Services" items={footerServices} href="#services" />
        <FooterList title="Help" items={footerHelp} href="#contact" />
        <div>
          <h3 className="text-[20px] font-normal text-[#1b1b1b]">Contact Us</h3>
          <form onSubmit={submit}>
            <input
              required
              type="email"
              placeholder="Enter your mail"
              className="h-[48px] mt-[30px] w-full rounded-[5px] border-[1px] border-[#BDBDBD] px-[15px] text-[14px] outline-none transition focus:border-cw-green focus:ring-[1px] focus:ring-cw-green "
            />
            <button className="green-btn !mt-[14px] font-normal text-[16px] !px-[24px] !py-[14.5px]">
              Request & Callback
            </button>
          </form>
        </div>
      </div>
      <div className="inner mt-[42px] border-t-[1px] border-[#eeeeee] pt-[13px] text-center text-[14px] text-[#7B7B7B]">
        @2023 CoreWave. All copyrights reserved
      </div>
    </footer>
  );
}

function FooterList({ title, items, href }) {
  return (
    <div>
      <h3 className="text-[20px] font-normal text-[#1b1b1b]">{title}</h3>
      <ul className="mt-[25px] space-y-[9px] text-[14px] text-[#7B7B7B]">
        {items.map((item) => (
          <li key={item}>
            <a
              href={href}
              className="inline-block transition hover:translate-x-[4px] hover:text-cw-green"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
