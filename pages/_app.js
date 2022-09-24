import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import ContactComponent from "../components/Home/ContactComponent";
import { useRouter } from "next/router";
// import BlogState from "../context/blogContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    // <BlogState>
    <>
      <Head>
        <title>Law Simplified</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-[80vh]">
        <Component {...pageProps} />
        {!router.asPath == "/contact" && <ContactComponent />}
      </div>
      <Footer />
    </>
    //</BlogState>
  );
}

export default MyApp;
