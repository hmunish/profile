import { Metadata } from "next";  
import PageWrapperClient from "./pageClient";

export const metadata: Metadata = {
  title: "Munish Halai | Full-Stack Developer",
  description: "Explore the portfolio of Munish Halai, a skilled full-stack developer specializing in web development, UI/UX design, and data-driven solutions.",
  icons: [
    {
      rel: "shortcut icon",
      href: "favicon.ico",
      type: "image/x-icon",
      url: "favicon.ico",
    },
  ]
};

export default function PageWrapper() {
  return <>
    <PageWrapperClient />
  </>
}