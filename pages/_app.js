import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Navbarbig from "../components/Navbarbig";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="fixed top-0 z-10 w-full bg-white lg:hidden">
        <Navbar />
      </div>
      <div className="fixed top-0 z-10 hidden w-full bg-white lg:block">
        <Navbarbig />
      </div>
      <div className="w-full lg:hidden">
        <Navbar />
      </div>
      <div className="hidden w-full lg:block">
        <Navbarbig />
      </div>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
