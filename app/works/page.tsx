"use client"

import React from 'react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Work {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    hoverimage: string;
    types: srting[];
}

const works: Work[] = [
    {
        id: 1,
        title: "Prince Kropotkin's Cow - De Koe van Kropotkin",
        date: "2025",
        description: "De Koe van Kropotkin is a curated re-publication of Peter McArthur's 'The Affable Stranger' from 1920. A 140mm x 210mm book including multiple riso-prints and other mixed graphic techniques All production design and distribution was carefully crafted by rasterwerk to reduce cost and to share the publication with you at a reasonable price. Going at a staggering amount of 50 editions! After 5-ish months the culmination of all my labor, De Koe van Kropotkin is officially ready to meet you. Drilling 3900 holes, sewing 650 signatures together, folding & collating 1300 sheets of paper carrying 5200 printed pages.",
        image: "/work1.png",
        hoverimage: "/hover1.gif",
        types: ["publication", "risography"]
    },
    {
        id: 2,
        title: "Rasterwerk Publications",
        date: "2025",
        description: "As of May 2025 I’ve founded a small micro-publishing house, Rasterwerk Publications. Starting out as a building block for my bachelor graduation project, Rasterwerk is a project I wish to further develop throughout the years. It’s meant to be a vessel for connection with all kinds of people, anyone with a story worth to tell really. The outcome of said connections should always be an experimental (be it in content, form or process) and graphically well thought out object, to see, to read, to touch. So far, Rasterwerk Publication has 2 publications on it’s name; Rasterwerk 1 - Prince Kropotkin’s cow & Rasterwerk 2 - The making of(see works). Furthermore, for portfolio purposes it’s worth noting that the creation of Rasterwerk and it’s publications are meticulously planned and crafted by myself.Not only has it opened up new design perspectives to me, it has also taken planning, financial literacy, networking, research, production and event management to a more sophisticated place for me.",
        image: "/work2.png",
        hoverimage: "/hover2.png",
        types: ["identity", "publishing", "production"]
    },
    {
        id: 3,
        title: "Famous Female Suicide",
        date: "2025",
        description: "Famous Female Suicide is de aankomende voorstelling van Luna Schepens (@luna__schepens). Een portret van vrouwelijke schrijfsters in een surrealistische editorial fotoshoot, Een ode aan taal, fictie en vrouwelijk kunstenaarschap. Poster 420mm x 594mm Web banner 1066px x 600px Te vinden in en rond @de_studio en op destudio.com/nl/project/famous-female-suicide",
        image: "/work3.png",
        hoverimage: "/hover3_1.gif",
        types: ["Poster", "Theatre", "Freelance"]
    },
    {
        id: 4,
        title: "Glitterstudio - interview",
        date: "2025",
        description: "Had a fun little interview with Glitterstudio - Den Haag, made a riso-publications from it. Nothing serious just some fun & games.",
        image: "/work4.gif",
        hoverimage: "/hover4.gif",
        types: ["Interview", "Publication", "Risography"]
    },
    {
        id: 5,
        title: "Contemporary Type & Where To Find It",
        date: "2025",
        description: "Contemporary Type & where to Find it is a continuation of experimental typeresearch performed in 2024 at the Peter Behrens School of Arts, Düsseldorf. The goal is to create type by means of experiment, here performed by iteration after iteration on receiptpaper.",
        image: "/work5.png",
        hoverimage: "/hoverrr5_1.gif",
        types: ["Publication", "Typography", "Drawing", "Experimentation"]
    },
    {
        id: 6,
        title: "Stilte in bed - Jaela Cole",
        date: "2025",
        description: "-",
        image: "/work6.png",
        hoverimage: "/work6.png",
        types: ["Bookcover", "Freelance"]
    },
    {
        id: 7,
        title: "TypeGym w/ Rejane Dal Bello (DE)",
        date: "2024",
        description: "During my exchange in Düsseldorf Germany, I developed 200 different Type-Experiments under the supervision of Rejane Dal Bello, This resulted in a 200-page publication and some type experiments were used to create an animated video and album cover. (not displayed here).",
        image: "/work7.png",
        hoverimage: "/hover7.jpg",
        types: ["Typography", "Editorial", "Motion"]
    },
    {
        id: 8,
        title: "USO Bookdesign w/ Rejane Dal Bello (DE)",
        date: "2024",
        description: "Bookdesign class under mentorship of Rejane Dal Bello. USO: Unidentified Student Object. Topic: UNSEEN. This means compiling a book about a person you want to make seen, only with created materials. My book was about rural & traditional knifesmiths in the forgone industrial glory town of Solingen (Germany).",
        image: "/work8.png",
        hoverimage: "/hover8.jpg",
        types: ["Editorial", "Publication"]
    },
    {
        id: 9,
        title: "Gato Manchado (DE)",
        date: "2024",
        description: "Restaurant concept assignment under supervision of Miltiadis Kontogiannis, owner of studiomateriality.com, from concept to the space to the visual identity of the restaurant. Main delivarable: presentation with visuals to bring the fictive space alive.",
        image: "/work9.png",
        hoverimage: "/hover9.png",
        types: ["Identity", "Branding", "Interior"]
    },
    {
        id: 10,
        title: "Exchange Semester Portfolio",
        date: "2024",
        description: "Portfolio website to go on erasmus in Düsseldorf - Peter Behrens School of Arts - https://nicolascorbett-portfolio.onrender.com/",
        image: "/work10.png",
        hoverimage: "/work10.png",
        types: ["Webdesign", "Webdevelopment"]
    },
    {
        id: 11,
        title: "Content Magazine #02",
        date: "2024",
        description: "First real editorial design assignment at Sint-Lucas, had alot of fun",
        image: "/work11.png",
        hoverimage: "/hover11.jpg",
        types: ["Editorial", "Typography", "Screenprint"]
    },
    {
        id: 12,
        title: "GraphicT - UN - NS",
        date: "2024",
        description: "Screenprinted T-shirt comprised of NS & UN logos, marbled color print technique. Tried and tested in real nightlife.",
        image: "/work12.png",
        hoverimage: "/work12.jpg",
        types: ["Screenprint", "Merchandise"]
    },
    {
        id: 13,
        title: "Archive: Zum Gestalt und Züruck",
        date: "2024",
        description: "Presented in this archive are a series of vintage articles collected mainly for their media-specific design aspects but also for some, their design qualities. This archive takes a dive into the medium of popular-media magazines, which knew a sudden and steady rise from the early sixties and onward. There one twist however. Not a single dot, pixel or stripe of content found in this space is an original. This archive of vintage once 'faux' magazines have been reduced to their pure design-forms, after which they were given a new, contemporary and one might hope relevant interpretation. Zum gestalt und zurück, as the name might suggest, reduces vintage magazines to a purer 'form', focused on composition, use of typography and materiality. These magazines, gaining popularity in the early 60's rapidly devolved into a mass media source of sensational, shocking, intrusive and erotic articles/stories. Out of the medium sprung goliaths such as Playboy, Penthouse, High Society, Modern Man and many more. These goliaths are often revered as a combination of intellectual reading material and sexually explicit content. Even more so it goes without saying that these magazines did retain a certain quality in graphic design aswell. Aside from those it is worth noting that within the quality range of magazines in this epoch, almost asthough like in the age of the New Typographers; incredible experimentation, compositions and typical styles can be found. This archive condemns the sexualisation of women or any human being for that matter in any way shape or form. Instead it's goal is to extract what graphic progress & experiment was made in this late twentieth century medium. In this extraction, the last step is then to transform the ridded content into topical, contemporary and in our view content of great importance. In doing so we've been zum gestalt und zurück.",
        image: "/work13.png",
        hoverimage: "/hover13.png",
        types: ["Archival", "Webdevelopment", "Editorial"]
    },
    {
        id: 14,
        title: "NotSoEckmannSchrift",
        date: "2023",
        description: "TypeDesign & risoprinted type specimen",
        image: "/work14.png",
        hoverimage: "/work14.gif",
        types: ["Typography", "Risography"]
    },
    {
        id: 15,
        title: "The Cheese Rolling Association - C.R.A.",
        date: "2023",
        description: "Identity design for fictive sportsclub - Gloucester Cheeserolling - Flag, cards, gameposter, tone of voice, letterhead, motion-graphic",
        image: "/work15.png",
        hoverimage: "/hover15.png",
        types: ["Identity"]
    },
    {
        id: 16,
        title: "Motion Design Portfolio",
        date: "2023",
        description: "Motion design portfolio from freelancing before graphic design studies - https://nicolas-corbett-motion-design.onrender.com/",
        image: "/work16.png",

        hoverimage: "/hover16.png",
        types: ["Motion", "Webdevelopment", "Freelance"]
    },
    {
        id: 18,
        title: "STAND. Installation",
        date: "2022",
        description: "My graduation project at Erasmus Hogeschool Brussel - Multimedia- & communicationtechnologies entailed a visual installation made in touchdesigner and executed with DMX-light fixtures, projection mapping and built surfaces. Theoretically based on the work of Peter Zumthor's 'Atmospheres', it tries to translate Zumthor's principles into how multimedia can play and exagerate said principles.",
        image: "/work17.png",
        hoverimage: "/hover17.jpg",
        types: ["Motion", "Live-visuals"]
    },
    {
        id: 19,
        title: "Horst Arts & Music Festival (Internship) (5 months)",
        date: "2023",
        description: "Voluntary internship. Got to work with the lovely visual identity of 'Ronny & Johny' alongside a great and experienced festival team. Designed the official festival timetable, artist (instagram) assets, general animation videos, printed advertisements & lots of festival signage.",
        image: "/work18.png",
        hoverimage: "/work18.jpg",
        types: ["Identity", "Signage", "Motion", "internship", "Festival Production"]
    },
    {
        id: 20,
        title: "Screenprinting Various",
        date: "- - - -",
        description: "From basic screenprinting to textile to 4 colour to marbled prints",
        image: "",
        hoverimage: "/work19_1.gif",
        types: ["Production", "Experimentation"]
    },

];

const Works = () => {
    const [hoveredWork, setHoveredWork] = useState<Work | null>(null);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    return (
        <div>
            <div className="workrow firstRow">
                <p id='WORKSS'>WORKS</p> <p id='headerType'>(type)</p> <Link className="closePage" href="/">
                    <p>X</p>
                </Link>

            </div>
            <hr />
            <div className="worktable">
                {works.map((work) => (
                    <div className="worktablerow"
                        key={work.id}
                        onMouseEnter={() => setHoveredWork(work)}
                        onMouseLeave={() => setHoveredWork(null)}
                        onClick={() => setSelectedWork(work)}
                    >
                        <p className="workTitle">{work.title}</p>
                        <div className="alignment">
                            <div className="types">
                                {work.types.map((type, i) => (
                                    <span className="typeSpan"
                                        key={i}
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                            <p className="workdate">
                                {work.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Hover image (positioned absolutely, on top of everything) */}
            {hoveredWork && (
                <div className="HoverImagecontainer">
                    <Image
                        src={hoveredWork.hoverimage}
                        alt={hoveredWork.title}
                        width={450}
                        height={200}
                        className="HoverImage"
                    />
                </div>
            )}
            {/* Modal overlay */}
            {selectedWork && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-top justify-end z-50"
                    onClick={() => setSelectedWork(null)}
                >
                    <p className="closeWork">X</p>

                    <div
                        className="haha"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="titleC">
                            <div className="titleClose">
                                <h1 className="selectedTitle">{selectedWork.title}</h1>

                            </div>
                            <p className="description">{selectedWork.description}</p>
                        </div>
                        <Image
                            src={selectedWork.image}
                            alt={selectedWork.title}
                            width={800}
                            height={250}
                            className="selectedImage"
                        />

                    </div>
                </div>
            )}
        </div>
    )
}

export default Works