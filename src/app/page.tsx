import { Metadata } from "next";  
import PageWrapperClient from "./pageClient";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Munish Halai | Software Development Engineer",
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
  const hostname = headers().get('host') || '';
  return <>
    <PageWrapperClient />
  </>
}