import { useState } from "react";
import "./works.scss";

enum WorkType {
  All = 1,
  UIUX,
  WebApps,
  VideoAnimation,
}

const accordian = [
  {
    label: "All",
    value: WorkType.All,
  },
  {
    label: "UI/UX",
    value: WorkType.UIUX,
  },
  {
    label: "Video Animation",
    value: WorkType.VideoAnimation,
  },
  {
    label: "Backend Application",
    value: WorkType.WebApps,
  },
];

const accordianWorks = [
  {
    title: "KIPS Restaurants",
    image: "kips-snap-1.png",
    liveUrl: "https://www.kipsrestaurants.com",
    type: WorkType.UIUX,
  },
  {
    title: "Hartfield Investments",
    image: "hartfield-snap-1.png",
    liveUrl: "https://www.hartfieldinvestmentsmw.com",
    type: WorkType.UIUX,
  },
  {
    title: "TopRoof Malawi",
    image: "toproof-snap-1.png",
    liveUrl: "https://toproofmw.com",
    type: WorkType.UIUX,
  },
  {
    title: "Steel World Group",
    image: "swg-snap-1.png",
    liveUrl: "https://www.steelworldgroup.com",
    type: WorkType.UIUX,
  },
  // {
  //   title: "Pipe-It",
  //   image: "pipeit-snap-1.png",
  //   liveUrl: "https://pipeitmw.com",
  //   type: WorkType.UIUX,
  // },
  {
    title: "Talin - Bulk Email System",
    image: "talin-snap-1.png",
    liveUrl: "https://talin.pinakinfund.us",
    type: WorkType.WebApps,
  },
  {
    title: "Eprocurement - Quotation & Purchase Order Management System",
    image: "eprocure-snap-1.png",
    liveUrl: "https://eprocure.squincy.com",
    type: WorkType.WebApps,
  },
  {
    title: "Healic - Hospital Management System",
    image: "healic-snap-1.png",
    liveUrl: "https://web.healic.in",
    type: WorkType.WebApps,
  },
  {
    title: "Harfield Investments - Animated Business Video",
    embedUrl: "https://www.youtube.com/embed/_orOY7ynqhI?si=jPSGZglyG25hksuW",
    liveUrl: "https://www.youtube.com/watch?v=_orOY7ynqhI",
    type: WorkType.VideoAnimation,
  },
  {
    title: "PipeIt - Animated Business Video",
    embedUrl: "https://www.youtube.com/embed/jE9zOiKnK0k?si=cSMhM3YOkaiHsNeL",
    liveUrl: "https://www.youtube.com/watch?v=jE9zOiKnK0k",
    type: WorkType.VideoAnimation,
  },
];

export default function Works({ classNames }: { classNames: string[] }) {
  const [activeTab, setActiveTab] = useState(WorkType.All);
  return (
    <div className={`page ${classNames}`}>
      <div className="section with_nav">
        <h1 className="title">Works</h1>
        <ul id="work_accordian_nav">
          {accordian.map((tab) => (
            <li
              className={tab.value === activeTab ? "active" : ""}
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <div className="content">
          {accordianWorks.map((work) => {
            return (
              (activeTab === WorkType.All || work.type === activeTab) && (
                <a
                  className="column work_detail"
                  href={work.liveUrl}
                  target="_blank"
                  key={work.type + work.title}
                >
                  {work.image && (
                    <img src={`/assets/images/works/${work.image}`} />
                  )}
                  {work.embedUrl && (
                    <iframe
                      width="560"
                      height="315"
                      src={work.embedUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  )}
                  <p className="sub_title">{work.title}</p>
                </a>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
