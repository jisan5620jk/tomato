import Image from "next/image";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="">
      <main className="w-full max-w-[960px] mx-auto flex flex-col justify-center">
        <div className="my-[18px]">
          <Image
            src="/tomato.png"
            alt="Site logo"
            width={102}
            height={30}
            priority
          />
        </div>
        <div className=" text-center mt-[52px]">
          <h1 className="text-[56px] font-normal [font-family:var(--font-open-sans)]">
            tomato.com
          </h1>
          <h2 className="text-3xl font-light [font-family:var(--font-open-sans)] -mt-2 mb-11">
            is a totally awesome idea still being worked on.
          </h2>
          <p className="text-3xl font-light [font-family:var(--font-open-sans)]">
            Check back later.
          </p>
        </div>

        <form
          action="https://www.hover.com/domains/results"
          className="mt-[82px] mb-[30px] mx-auto relative inline-block max-w-[460px] w-full"
          method="get"
        >
          <input
            name="serch"
            placeholder="Find a domain for your own great idea."
            type="text"
            className="w-[460px] h-10 px-[18px] py-2 [font-family:var(--font-open-sans)] text-[#283039] border border-[#d4d6d8] focus:outline-none"
          ></input>
          <button className="absolute top-0 right-0 size-10 flex justify-center items-center bg-[#3ab795] text-white border border-[#d4d6d8]">
            <FaSearch />
          </button>
        </form>
        <nav>
          <ul className="flex items-center justify-center gap-x-3.5 flex-wrap">
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Home
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/transfer_in?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Transfer
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/renew?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Renew
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/domain_pricing?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Domain Pricing
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/email?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Email
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/about?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://help.hover.com/home?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Help
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.hover.com/tools?source=parked"
                className="text-[#3ab795] transition-all duration-500 hover:text-[#283039] [font-family:var(--font-open-sans)] text-[11px] uppercase"
              >
                Your Account
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mt-[22px] flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-[5px]">
            <li>
              <a
                href="#"
                className="size-7 flex items-center justify-center rounded-full bg-[#3ab795] text-white"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="size-7 flex items-center justify-center rounded-full bg-[#3ab795] text-white"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="size-7 flex items-center justify-center rounded-full bg-[#3ab795] text-white"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <footer className="mt-[74px] border-t border-[#d4d6d8] py-7">
        <ul className="flex items-center justify-center gap-x-8 gap-y-2 flex-wrap">
          <li>
            <p className="[font-family:var(--font-open-sans)] text-sm">
              Copyright &copy; {new Date().getFullYear()} Hover
            </p>
          </li>

          <li>
            <a
              rel="nofollow"
              href="https://www.hover.com/tos?source=parked"
              className="[font-family:var(--font-open-sans)] text-sm text-[#3ab795] transition-all duration-500 hover:"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.hover.com/privacy?source=parked"
              className="[font-family:var(--font-open-sans)] text-sm text-[#3ab795] transition-all duration-500 hover:text-[#283039]"
            >
              Privacy
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
