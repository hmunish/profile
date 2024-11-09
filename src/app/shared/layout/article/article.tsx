import Navbar from "./navbar/navbar";
import "./article.scss";
import Profile from "./profile/profile";
import { useRef } from "react";

export default function Article({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profileContentWrapperRef = useRef<HTMLDivElement>(null);
  const scrollToContent = () => {
    profileContentWrapperRef.current?.scroll({top: 530, behavior: "smooth"})
  };
  return (
    <section id="article">
      <Navbar onScrollToContent={scrollToContent}></Navbar>
      <div ref={profileContentWrapperRef} id="profile_content_wrapper">
        <Profile onScrollToContent={scrollToContent}></Profile>
        <div  id="content_wrapper">
          {children}
        </div>
      </div>
    </section>
  );
}
