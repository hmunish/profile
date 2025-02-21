"use client";
import "./globals.scss";
import "./layout.scss";
import Article from "./shared/layout/article/article";
import Preloader from "./shared/layout/preloader/preloader";
import { Inter } from "next/font/google";
import { MouseEvent, useCallback, useRef } from "react";
import Wave from "./shared/layout/wave/wave";
import { NavigationStateProvider } from "./shared/context/navigationState";
import { HostStateProvider } from "./shared/context/hostState";

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
      <head>
        <meta
          name="google-site-verification"
          content="mWl7NSeUeMKjAdz57opQtws18XSUe8y63rVuSRXv-JY"
        />
      </head>
      <body
        className={inter.className}
        onMouseMove={(event: MouseEvent) => mouseAnimationEffect(event)}
      >
        <Preloader></Preloader>
        <Wave></Wave>
        <main>
          <div ref={mouseAnimationShape} id="mouse_animation_shape"></div>
          <HostStateProvider>
            <NavigationStateProvider>
              <Article>{children}</Article>
            </NavigationStateProvider>
          </HostStateProvider>
          <button
            id="open-modal-btn"
            style={{ background: "#000000", color: "#ffffff" }}
          >
            Subscribe
          </button>
        </main>
        <script
          defer
          src="https://ec2-16-170-254-238.eu-north-1.compute.amazonaws.com/users/widgets/67b7fd7ebe51816f9c70efb9/script.js"
          data-widget-uuid="67b7fd7ebe51816f9c70efb9"
        ></script>
        <script
          defer
          src="https://ec2-16-170-254-238.eu-north-1.compute.amazonaws.com/users/widgets/67adef513196b9f5e713e283/script.js"
          data-widget-uuid="67adef513196b9f5e713e283"
        ></script>
      </body>
    </html>
  );
}
