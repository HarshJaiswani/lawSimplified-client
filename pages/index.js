import React from "react";
import { Header } from "../components/Home";
import OurServices from "../components/Home/OurServices";
import Counters from "../components/Home/Counters";
import Team from "../components/Home/Team";
import Clients from "../components/Home/Clients";
import Articles from "../components/Home/Articles";
import { client } from "../hooks/sanityClient";

const Home = ({ blogs, services }) => {
  return (
    <>
      <Header services={services} />
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
  const query = `*[_type == "blog"][0...3]`;
  const query2 = `*[_type == "services"]`;
  const blogs = await client.fetch(query);
  const services = await client.fetch(query2);
  return {
    props: {
      blogs,
      services,
    },
  };
}
