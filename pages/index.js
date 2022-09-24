import React from "react";
import { Header } from "../components/Home";
import OurServices from "../components/Home/OurServices";
import Counters from "../components/Home/Counters";
import Team from "../components/Home/Team";
import Clients from "../components/Home/Clients";
import Articles from "../components/Home/Articles";
import { createClient } from "next-sanity";

const Home = ({ blogs }) => {
  return (
    <>
      <Header />
      <div className="home-sections w-full min-h-screen">
        <Counters />
        <OurServices />
        <Team />
        <Clients />
        <Articles articles={blogs} />
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "gov5eqnr",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
