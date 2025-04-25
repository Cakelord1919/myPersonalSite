'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden">

      {/* 小屏提示 */}
      <div className="block 2xl:hidden text-white text-center py-20 px-8">
        This site is designed for large screens (≥1536px). Please view on a desktop.
      </div>

      {/* 大屏主界面 */}
      <div className="hidden 2xl:block">
        {/* HERO 区块 */}
        <section className="relative h-[78vh] w-full flex flex-col justify-center items-start px-[5vw] pt-[15vh]">
          <div className="absolute top-0 left-[1vw] w-[12vw] h-[5.3vh] rounded-t-[10px] border-[0.3vh] border-[#e6e86e] flex items-center z-10"></div>
          <div className="absolute top-[1.25vh] left-[1.9vw] text-[0.9vw] font-extrabold text-[#e6e86e] whitespace-nowrap z-30">
            Eric Gabriel Cheng Li
          </div>
          <div className="absolute top-[5vh] left-[1vw] w-[97vw] h-[80vh] border-t-[0.3vh] border-r-[0.3vh] border-l-[0.3vh] border-[#e6e86e] z-0"></div>
          <h1 className="text-[26vh] font-extrabold text-[#e6e86e] leading-none z-20 mt-[47vh] ml-[-4.9vw]">
            PORTFOLIO
          </h1>
        </section>

        {/* 黄色底栏 */}
        <section className="bg-[#e5e76d] w-full h-[22vh] flex justify-end pr-[2.5vw]">
          <div className="text-[1.8vw] font-extrabold text-[#181f28] mt-[2vh]">
            My Design Portfolio
          </div>
        </section>

        {/* 多边形装饰图标 */}

        <Image
        src="/img/Polygon%201.svg"
        width={500}
        height={500}
        alt="Polygon1"
        className="absolute w-[6vh] h-[6vh] top-[82vh] left-[1.2vw]"
      />

<Image
        src="/img/Polygon%201.svg"
        width={500}
        height={500}
        alt="Polygon2"
        className="absolute w-[6vh] h-[6vh] top-[86.7vh] left-[1.2vw]"
      />

<Image
        src="/img/Polygon%201.svg"
        width={500}
        height={500}
        alt="Polygon3"
        className="absolute w-[6vh] h-[6vh] top-[91.4vh] left-[1.2vw]"
      />
        
        {/*<img className="absolute w-[6vh] h-[6vh] top-[82vh] left-[1.2vw]" src="/img/Polygon%201.svg" />
        <img className="absolute w-[6vh] h-[6vh] top-[86.7vh] left-[1.2vw]" src="/img/Polygon%201.svg" />
        <img className="absolute w-[6vh] h-[6vh] top-[91.4vh] left-[1.2vw]" src="/img/Polygon%201.svg" />*/}

        {/* ABOUT ME 区域 */}
        <section id="about" className="w-full min-h-screen bg-[#181e27] text-[#e6e86e] mb-[2vh]">
          <div className="grid grid-rows-[auto]">
            <h2 className="text-[5.5vw] font-extrabold text-right w-full mt-0 pt-0 leading-none pr-[2vw]">About Me</h2>

            <div className="pl-[1vw] pr-[1vw] grid grid-cols-[1.95fr_3.1fr] min-h-[89.5vh]">

              {/* 左图 */}
              <div className="relative min-h-[100%] p-[1vw] border-[0.2vw] border-solid border-[#e5e76d] 
                after:content-[''] after:absolute after:bottom-[0vw] after:left-[0.2vw] 
                after:w-full after:h-[3.5vh] after:border-r-[0.4vw] after:border-solid after:border-[#181e27] after:z-0
                before:content-[''] before:absolute before:bottom-0 before:right-0 before:translate-x-[1.38vh]
                before:w-[2.4vh] before:h-[3.8vh] before:bg-[url('/img/line-end-dot.svg')] before:bg-contain before:bg-no-repeat before:z-[1]">
                <Image
                  src="/img/posta.png"
                  width={500}
                  height={800}
                  alt="My portrait"
                  className="w-full h-full object-cover relative z-10"
                />
                {/*<img className="w-full h-full object-cover relative z-10" src="/img/posta.png" />*/}
              </div>

              {/* 右文 */}
              <div className="grid grid-rows-[auto_auto_1fr] border-solid border-[0.2vw] border-l-0 border-[#e5e76d]">
                <div className="flex border-b-[0.2vw] border-solid border-[#e5e76d]">
                  <div className="w-[33vh] h-[6vw] bg-[#e5e76d] text-[#181e27] font-extrabold px-[2vh] pt-[3.7vw] text-[1.7vw]">
                    Introduction
                  </div>
                  <div className="h-[6vw] bg-[#181e27] text-[#e5e76d] font-extrabold px-[2vh] pt-[3.7vw] text-[1.7vw]">
                    https://Eric Gabriel Cheng Li
                  </div>
                </div>

                <div className="relative px-[2vh] py-[4vh] border-b-[0.2vw] border-solid border-[#e5e76d] text-[2vw]
                  after:content-[''] after:absolute after:bottom-[-0.6vw] after:left-0 
                  after:w-full after:h-[3.4vh] after:border-r-[0.75vw] after:border-solid after:border-[#181e27] after:z-0
                  before:content-[''] before:absolute before:bottom-0 before:right-0 before:translate-y-[2.75vh] before:translate-x-[-1vh]
                  before:w-[2.4vh] before:h-[3.8vh] before:bg-[url('/img/line-end-dot.svg')] before:bg-contain before:bg-no-repeat before:z-[1]">
                  Greetings, I’m a Designer with a deep passion for typography and UI/UX design. My work range covers logo, layout, illustration, game design and branding. I highly prioritize work ethic, creativity and customer needs in my work.
                </div>

                {/* 技能图标 */}
                <div className="grid grid-cols-[1.95fr_2.1fr_1.95fr]">

                  <div className="relative grid min-h-[100%] border-r-[0.2vw] border-solid border-[#e5e76d] gap-y-[3vh] px-[2vh]
                    after:content-[''] after:absolute after:bottom-0 after:left-[0.2vw] 
                    after:w-full after:h-[3.5vh] after:border-r-[0.4vw] after:border-solid after:border-[#181e27] after:z-0
                    before:content-[''] before:absolute before:bottom-0 before:right-0 before:translate-x-[1.38vh]
                    before:w-[2.4vh] before:h-[3.8vh] before:bg-[url('/img/line-end-dot.svg')] before:bg-contain before:bg-no-repeat before:z-[1]">
                    <img className="w-[7.1vw] pt-[2vh]" src="/img/html5-icon.svg" />
                    <img className="justify-self-end w-[7.1vw] -translate-y-[1vh] transform-gpu will-change-transform" src="/img/javascript-icon.svg" />
                    <img className="w-[7.1vw] -translate-y-[2vh] transform-gpu will-change-transform" src="/img/css-icon.svg" />
                  </div>

                  <div className="relative grid grid-cols-2 min-h-[100%] border-r-[0.2vw] border-solid border-[#e5e76d] gap-y-[17vh] px-[2vh] place-items-center
                    after:content-[''] after:absolute after:bottom-0 after:left-[0.2vw] 
                    after:w-full after:h-[3.5vh] after:border-r-[0.4vw] after:border-solid after:border-[#181e27] after:z-0
                    before:content-[''] before:absolute before:bottom-0 before:right-0 before:translate-x-[1.38vh]
                    before:w-[2.4vh] before:h-[3.8vh] before:bg-[url('/img/line-end-dot.svg')] before:bg-contain before:bg-no-repeat before:z-[1]">
                    <img className="justify-self-start w-[8.2vw]" src="/img/Illustrator.svg" />
                    <img className="justify-self-end w-[8.2vw]" src="/img/After%20Effects.svg" />
                    <img className="justify-self-start w-[8.2vw]" src="/img/Figma.svg" />
                    <img className="justify-self-end w-[8.2vw]" src="/img/Photoshop.svg" />
                  </div>

                  <div className="grid px-[2vh] gap-y-[3vh]">
                    <img className="justify-self-end w-[8.2vw] pt-[2vh]" src="/img/Processing.svg" />
                    <img className="w-[8.2vw] -translate-y-[1vh]" src="/img/Aseprite.svg" />
                    <img className="justify-self-end w-[8.2vw] -translate-y-[2vh]" src="/img/Eclipse.svg" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
