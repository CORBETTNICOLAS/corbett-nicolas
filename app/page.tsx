"use client";

import Image from "next/image";
import ExpandableTitle from "./components/ExpandableTitle";
import Script from "next/script";
import { useState } from "react";
import Link from "next/link";
// import Parallax from "react-next-parallax";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="home">
      {/* <Parallax> */}
      <Image
        className="circle"
        src="/circle2.png"
        width={1920}
        height={1080}
        alt=" Nicolas Corbett - Master student graphic design - micro-publisher - print & production ethousiast -  "
        data-parallax-offset="5"
      />
      {/* </Parallax> */}


      <div className="titles">
        <ExpandableTitle
          title="EDUCATION"
          content={
            <>
              <div className="education">
                <div className="infocont" id="MultecBlock">
                  <div className="inforow">
                    <p className="edTitle">Multimedia & Creative Technologies (Ba)</p><span className="date">2019 - 2023</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Erasmushogeschool Brussels</p><span className="place">Distinction</span>
                  </div>
                  <div className="inforow">
                    <p id="MCTuitleg">MCT is a professional bachelor’s degree
                      focussing on various multimedia applications.
                      During 3 years I majored in <span className="thinbold">live visuals, motion- & generative motion graphics </span>
                      in a 4th year I took on <span className="thinbold">front-end web development</span> aswell.</p>
                  </div>
                </div>


                <div className="infocont" id="NotMCT">
                  <div className="inforow">
                    <p className="edTitle">Graphic Design (Ba)</p><span className="date">2022 - 2025</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Sint-Lucas Academy Antwerp</p><span className="place">Great Distinction</span>
                  </div>
                </div>

                <div className="infocont">
                  <div className="inforow">
                    <p className="edTitle">Visuelle Kommunikation (Exchange)</p><span className="date">2024 - 2025</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Peter Behrens School of Arts - HSD - Düsseldorf</p><span className="place">81,25%</span>
                  </div>
                </div>
                <div className="infocont">
                  <div className="inforow">
                    <p className="edTitle">Master of Arts - Applied Context</p><span className="date">2025 - 2026</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Sint-Lucas Academy Antwerp</p><span className="place">- - - -</span>
                  </div>
                </div>
                <Image
                  className="circle3"
                  src="/circle3.png"
                  width={300}
                  height={300}
                  alt=" Brussels - Antwerp - Düsseldorf "
                  data-parallax-offset="5"
                />
              </div>
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => toggleSection(0)}
          dimmed={openIndex !== null && openIndex !== 0}
        />
        <ExpandableTitle
          title="EXPERIENCE"
          content={
            <>
              <div className="education">
                <div className="infocont">
                  <div className="inforow">
                    <p className="edTitle">Freelancing (student-statute)</p><span className="date">2021 - 2026</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Started as motion design - circling to graphic design</p><span className="place"></span>
                  </div>
                </div>
                <div className="infocont">
                  <div className="inforow">
                    <p className="edTitle">High Flying Birds - Video Post-Production</p><span className="date">2022</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Antwerp - Internship</p><span className="place"></span>
                  </div>
                </div>
                <div className="infocont">
                  <div className="inforow">
                    <p className="edTitle">Horst Arts & Music Festival - Graphic Design</p><span className="date">2023</span>
                  </div>
                  <div className="inforow">
                    <p className="place">Onkruid bv. - Vilvoorde - Internship</p><span className="place"></span>
                  </div>
                </div>
                <div className="infocont" id="humm">
                  <div className="inforow">
                    <p className="edTitle">Humm - studentjob - hospitality</p><span className="date">2021 - present</span>
                  </div>
                  <div className="inforow">
                    <p className="place">ONot graphic design but, working in hospitality is no joke!</p><span className="place"></span>
                  </div>
                </div>

                <h1 className="ref"><span>R</span><span>E</span><span>F</span><span>E</span><span>R</span>
                  <span>E</span><span>N</span><span>C</span><span>E</span><span>S</span></h1>
                <p className="reff"><span>Toon</span><span>Timmerman</span><span>-</span>
                  <span>Head</span><span>of</span><span>Communications</span><span>-</span><span>Horst</span>
                </p>
                <p className="reff">
                  <span>+</span><span>3</span><span>2</span><span>4</span><span>7</span><span>1</span>
                  <span>4</span><span>6</span><span>9</span><span>4</span><span>6</span><span>5</span>
                </p>
                <a href="mailto:toon.timmerman@onkruid.studio">
                  <p className="reff">
                    <span>t</span><span>o</span><span>o</span><span>n</span><span>.</span><span>t</span><span>i</span>
                    <span>m</span><span>m</span><span>e</span><span>r</span><span>m</span><span>a</span><span>n</span>
                    <span>n</span><span>@</span><span>o</span><span>n</span><span>k</span><span>r</span><span>u</span>
                    <span>i</span><span>d</span><span>.</span><span>s</span><span>t</span><span>u</span><span>d</span><span>i</span><span>o</span>
                  </p>
                </a>
                <p className="reff refff">
                  <span>Sofie</span><span>Wijnants</span><span>-</span><span>Lead</span><span>Graphic</span>
                  <span>Designer</span><span>(2023)</span><span>-</span><span>Horst</span>
                </p>
                <p className="reff">
                  <span>+</span><span>3</span><span>2</span><span>4</span><span>9</span><span>4</span>
                  <span>2</span><span>6</span><span>3</span><span>6</span><span>5</span><span>7</span>
                </p>
                <p className="reff">
                  <span>s</span><span>o</span><span>f</span><span>i</span><span>e</span><span>@</span>
                  <span>o</span><span>n</span><span>k</span><span>r</span><span>u</span><span>i</span>
                  <span>d</span><span>.</span><span>s</span><span>t</span><span>u</span><span>d</span>
                  <span>i</span><span>o</span>
                </p>
              </div>
            </>
          }
          isOpen={openIndex === 1}
          onToggle={() => toggleSection(1)}
          dimmed={openIndex !== null && openIndex !== 1}
        />
        <ExpandableTitle
          title="RASTERWERK"
          content={
            <>
              <div className="education">
                <p className="rstrwrkText">As of May 2025 I’ve founded a small <span className="bold">micro-publishing house</span>, Rasterwerk Publications. Starting out as a building block for my bachelor graduation project, Rasterwerk is a project I wish to further develop throughout the years. It’s meant to be a vessel for connection with all kinds of people, anyone with a story worth to tell really. The outcome of said connections should always be an <span className="bold">experimental</span> (be it in content, form or process) and <span className="bold">graphically well thought out object</span>, to see, to read, to touch.
                  <br /><br />
                  So far, Rasterwerk Publication has 2 publications on it’s name; Rasterwerk 1 - Prince Kropotkin’s cow & Rasterwerk 2 - The making of (see works).
                  <br /><br />
                  Furthermore, for portfolio purposes it’s worth noting that the creation of Rasterwerk and it’s publications are meticulously planned and crafted by myself. Not only has it opened up new design perspectives to me, it has also taken planning, financial literacy, networking, research, production and event management to a more sophisticated place for me.</p>
              </div>
              <div className="imagewrap">
                <Image
                  className="rstrimg"
                  src="/47.png"
                  width={300}
                  height={540}
                  alt=" "
                  data-parallax-offset="5"
                />
                <Image
                  className="rstrimg"
                  src="/42.png"
                  width={300}
                  height={540}
                  alt=" "
                  data-parallax-offset="5"
                />
                <Image
                  className="rstrimg"
                  src="/coverscan.png"
                  width={300}
                  height={540}
                  alt=" "
                  data-parallax-offset="5"
                />
              </div>
            </>
          }
          isOpen={openIndex === 2}
          onToggle={() => toggleSection(2)}
          dimmed={openIndex !== null && openIndex !== 2}
        />
        <ExpandableTitle
          title="ABOUT"
          content={
            <>
              <div className="education">
                <p className="AboutText">In short, I’m a 24 year old graphic design masterstudent with a professional bachelors degree in interactive motion techniques (motion-graphics, generative motion-graphics & live visuals). However it has become clear that graphic design is my main drive, <span className="bold">passion for print, publication & the cultural sector</span> have grown along the way.
                  <br /><br />
                  I’m fluent in <span className="bold">Dutch, French & English </span>and have picked up a <span className="bold">B1.1 level of German</span> (spoken & written) since my time at the Peter Behrens School of Arts in Düsseldorf.
                  <br /><br />
                  As would be expected of any graphic design student, the Adobe Creative Suite is a go to tool. Aside from that I’ve taken it upon myself to dive deep into screenprinting, risography, bookbinding/production.
                  <br /><br />
                  From my time in Brussels I’m well equiped in some <span className="bold">audiovisual techniques </span> including; projection mapping, Touchdesigner, AfterEffects, Resolume Arena (VJ software). As well as <span className="bold">web-development</span> knowledge; from HTML/CSS  to full-stack web application building through mainly React native & Next.js (Typescript).
                  <br /><br />
                  <span className="aboutSpecial"> **This website was handcoded by myself in Next.js.</span></p>
              </div>
              <Image
                className="portret"
                src="/ik.png"
                width={900}
                height={1600}
                alt=" Nicolas Corbett "
                data-parallax-offset="5"
              />
            </>
          }
          isOpen={openIndex === 3}
          onToggle={() => toggleSection(3)}
          dimmed={openIndex !== null && openIndex !== 3}
        />
      </div>

      <div className="rightWrap">

        <Link href="/works">
          <div className="works">
            <div className="workrow firstRow">
              <p id="nostripe2">WORKS</p><p id="nostripe">FILTER: Favourites</p>
              <Link className="hoverStripe" href="/works">
                <p>SEE ALL +</p>
              </Link>
            </div>
            <div className="workrow">
              <p>Prince Kropotkin&apos;s Cow - De Koe van Kropotkin.</p><p>2025</p>
            </div>
            <hr></hr>
            <div className="workrow">
              <p>Rasterwerk Publications</p><p>2025</p>
            </div>
            <hr></hr>
            <div className="workrow">
              <p>Famous Female Suicide</p><p>2025</p>
            </div>
            <hr></hr>
            {/* <div className="workrow">
            <p>Glitterstudio - interview</p><p>2025</p>
          </div>
          <hr></hr> */}
            <div className="workrow">
              <p>Contemporary Type & Where To Find It</p><p>2025</p>
            </div>
            <hr></hr>
            {/* <div className="workrow">
            <p>200 More(!) Days of Type</p><p>2025</p>
          </div>
          <hr></hr>
          <div className="workrow">
            <p>Stilte in bed - Jaela Cole</p><p>2025</p>
          </div>
          <hr></hr> */}
            <div className="workrow">
              <p>TypeGym w/ Rejane Dal Bello (DE)</p><p>2024</p>
            </div>
            <hr></hr>
            <div className="workrow">
              <p>USO Bookdesign w/ Rejane Dal Bello (DE)</p><p>2024</p>
            </div>
            <hr></hr>
            {/* <div className="workrow">
            <p>Gato Manchado (DE)</p><p>2024</p>
          </div>
          <hr></hr> */}
            {/* <div className="workrow">
            <p>Exchange Semester Portfolio</p><p>2024</p>
          </div>
          <hr></hr> */}
            <div className="workrow">
              <p>Content Magazine #02</p><p>2024</p>
            </div>
            <hr></hr>
            {/* <div className="workrow">
            <p>GraphicT - UN - NS</p><p>2024</p>
          </div>
          <hr></hr> */}
            {/* <div className="workrow">
            <p>Archive: Zum Gestalt und Züruck</p><p>2024</p>
          </div>
          <hr></hr>
          <div className="workrow">
            <p>NotSoEckmannSchrift</p><p>2023</p>
          </div>
          <hr></hr>
          <div className="workrow">
            <p>The Cheese Rolling Association - C.R.A.</p><p>2023</p>
          </div>
          <hr></hr> */}
            <div className="workrow">
              <p>Horst Arts & Music Festival</p><p>2023</p>
            </div>
            <hr></hr>
            {/* <div className="workrow">
            <p>Motion Design Portfolio</p><p>2023</p>
          </div>
          <hr></hr> */}
            <div className="workrow">
              <p>STAND. Installation</p><p>2023</p>
            </div>
            <hr></hr>
            {/* <div className="workrow">
            <p>Risograph Printing Various</p><p>- - - -</p>
          </div>
          <hr></hr>
          <div className="workrow">
            <p>Screenprinting Various</p><p>- - - -</p>
          </div>
          <hr></hr> */}
          </div>
        </Link>

        <div className="links">
          <p className="usefulLinks">tel: +32471385421</p>
          <a href="mailto:nicolas.corbett@student.kdg.be" className="usefulLinks">
            email: nicolas.corbett@student.kdg.be
          </a>
          <a href="https://www.notion.so/Nicolas-Corbett-285e1eec9e8f804b8e1efd2181471109?source=copy_link" className="usefulLinks">
            notion.so/nicolas-corbett-2024-2025
          </a>
          <a href="https://www.instagram.com/rstr.wrk/" className="usefulLinks">
            https://www.instagram.com/rstr.wrk/
          </a>
          <a href="https://www.instagram.com/nicolas.corbett/" className="usefulLinks lastlink">
            https://www.instagram.com/nicolas.corbett/
          </a>

        </div>

      </div>

    </div>
  );
}
