"use client";
import "./globals.scss";
import "./layout.scss";
import Article from "./shared/layout/article/article";
import Preloader from "./shared/layout/preloader/preloader";
import { Inter } from "next/font/google";
import { MouseEvent, useCallback, useRef } from "react";
import Wave from "./shared/layout/wave/wave";
import Head from "next/head";
import { NavigationStateProvider } from "./shared/context/navigationState";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mouseAnimationShape = useRef<HTMLDivElement>(null);

  const mouseAnimationEffect = useCallback((event: MouseEvent) => {
    if (!mouseAnimationShape.current) return;

    const mouseX = event.clientX,
      mouseY = event.clientY;
    const targetElement = event.target as HTMLElement;
    const isElementLink =
      targetElement.classList.contains("link") ||
      targetElement.closest(".link");

    if (isElementLink) {
      mouseAnimationShape.current.classList.add("on_link");
    } else {
      mouseAnimationShape.current.classList.remove("on_link");
    }

    mouseAnimationShape.current.style.left = `${mouseX}px`;
    mouseAnimationShape.current.style.top = `${mouseY}px`;
  }, []);
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body
        className={inter.className}
        onMouseMove={(event: MouseEvent) => mouseAnimationEffect(event)}
      >
        <Preloader></Preloader>
        <Wave></Wave>
        <main>
          <div ref={mouseAnimationShape} id="mouse_animation_shape"></div>
          <NavigationStateProvider>
            <Article>{children}</Article>
          </NavigationStateProvider>
        </main>
      </body>
    </html>
  );
}
