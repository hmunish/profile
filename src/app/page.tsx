"use client";

import { Metadata } from "next";
import "./page.scss";
import Resume from "./pages/resume/resume";
import About from "./pages/about/about";
import { useNavigationContext } from "./shared/context/navigationState";
import { NavLabel } from "./shared/context/navigationState.model";
import Works from "./pages/works/works";
import Contact from "./pages/contact/contact";
import Blogs from "./pages/blogs/blogs";

// export const metadata: Metadata = {
//   title: "Munish Halai's Portfolio",
//   description: "Munish Halai's Portfolio",
// };

export default function PageWrapper() {
  const navigationContext = useNavigationContext();

  return (
    <div id="page_wrapper">
      <About
        classNames={
          navigationContext?.state.activePage === NavLabel.About
            ? ["rotateIn"]
            : ["rotateOut"]
        }
      />

      <Resume
        classNames={
          navigationContext?.state.activePage === NavLabel.Resume
            ? ["rotateIn"]
            : ["rotateOut"]
        }
      />

      <Works
        classNames={
          navigationContext?.state.activePage === NavLabel.Works
            ? ["rotateIn"]
            : ["rotateOut"]
        }
      />

      <Blogs
        classNames={
          navigationContext?.state.activePage === NavLabel.Blog
            ? ["rotateIn"]
            : ["rotateOut"]
        }
      />

      <Contact
        classNames={
          navigationContext?.state.activePage === NavLabel.Contact
            ? ["rotateIn"]
            : ["rotateOut"]
        }
      />
    </div>
  );
}
