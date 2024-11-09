import Navbar from "./navbar/navbar";
import "./article.scss";
import Profile from "./profile/profile";
import { useRef } from "react";

export default function Article({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const scrollToContent = () => {
    const yOffset = -62;
    const y = (contentWrapperRef.current?.getBoundingClientRect().top || 0) + window.pageYOffset + yOffset;
    contentWrapperRef.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <section id="article">
      <Navbar onScrollToContent={scrollToContent}></Navbar>
      <div id="profile_content_wrapper">
        <Profile onScrollToContent={scrollToContent}></Profile>
        <div ref={contentWrapperRef} id="content_wrapper">
          {children}
        </div>
      </div>
    </section>
  );
}
