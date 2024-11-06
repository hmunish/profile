import { useState } from "react";
import "./blogs.scss";

enum BlogType {
  All = 1,
  Technology,
  Sports,
}

const accordian = [
  {
    label: "All",
    value: BlogType.All,
  },
  {
    label: "Technology",
    value: BlogType.Technology,
  },
  {
    label: "Sports",
    value: BlogType.Sports,
  },
];

const accordianBlogs = [
  {
    title: "Starting Tech Journey",
    date: "July 20, 2023",
    description:
      "Top 2 pieces of advice I wish I knew at the beginning of my learning journey that everyone should know.",
    image: "starting-tech-journey.webp",
    liveUrl:
      "https://medium.com/@hmunish5/what-are-the-best-pieces-of-advice-that-you-would-give-someone-whos-just-beginning-their-journey-1bf06fd15ce8",
    type: BlogType.Technology,
  },
];

export default function Blogs({ classNames }: { classNames: string[] }) {
  const [activeTab, setActiveTab] = useState(BlogType.All);
  return (
    <div className={`page ${classNames}`}>
      <div className="section with_nav">
        <h1 className="title">Blogs</h1>
        <ul id="blog_accordian_nav">
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
          {accordianBlogs.map((blog) => {
            return (
              (activeTab === BlogType.All || blog.type === activeTab) && (
                <a
                  className="column blog_detail"
                  href={blog.liveUrl}
                  target="_blank"
                  key={blog.type + blog.title}
                >
                  <img src={`/assets/images/blogs/${blog.image}`} />
                  <p className="blog_date">{blog.date}</p>
                  <p className="sub_title blog">{blog.title}</p>
                  <p className="blog_description">{blog.description}</p>
                </a>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
