import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-auto text-white px-3">
      <div className=" relative mx-auto  py-1.5 parent">
        <div className="absolute top-0 left-0 w-fit rounded-[4rem]">
          <Image
            src="/person.png"
            alt="person"
            width={250}
            height={250}
            className=" w-[300px] h-full rounded-[4rem]"
          />
        </div>
        <div className="w-fit absolute right-0 top-0 rounded-full bg-black m-2">
          <Image
            src="/play.png"
            alt="Player"
            width={100}
            height={100}
            className="w-[75px] h-full rounded-full scale-110"
          />
        </div>
        <div className="bg-[#ff5252] right-0 top-0 w-full flex items-center justify-center gap-16 flex-1 text-right rounded-[6rem] clip-path-style ">
          <div className="flex flex-col items-end justify-center text-right border-none mt-20">
            <a className="text-3xl font-extrabold text-white mb-9" href="#">
              witt.
            </a>
            <h1 className="text-8xl font-extrabold mb-2 leading-none">
              your
              <br /> second
              <br /> brain
            </h1>
            <p className="text-base font-medium mb-8 w-fit">
              a personal assistant to
              <br /> organize, track and <br />
              document your work
            </p>
          </div>
          <div className="w-fit border-none ">
            <Image
              src="/hero.png"
              alt="Hero"
              width={450}
              height={450}
              className="max-w-full h-full rounded-lg"
            />
          </div>
          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="round">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        <button className="bg-black absolute bottom-1.5 left-0 text-white py-5 px-14 rounded-full text-lg">
          Download for Free
        </button>
      </div>
    </section>
  );
};

export default Hero;
