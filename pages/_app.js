import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "../components/MainLayout";
import "../globals.css";
import Whatsapp from "../components/Whatsapp";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <MainLayout>
      <Component {...pageProps} />
      <Whatsapp />
    </MainLayout>
  );
}

export default MyApp;
