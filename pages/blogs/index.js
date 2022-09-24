import React from "react";
import BlogBlock from "../../components/BlogBlock";
import Header from "../../components/Header";
// import Search from "../../components/Search";
import { createClient } from "next-sanity";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <Header title="Blogs" />
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h3 className="text-center text-3xl font-semibold my-12">
          Blogs -{" "}
          <span className="text-gray-400 text-2xl">
            Keeping you updated with the claws!
          </span>
        </h3>
        {/* <Search dataArray={blogs} setFilteredData={setFilteredData} /> */}
      </div>
      <div className="w-full flex justify-evenly items-center flex-wrap">
        {blogs.map((article, index) => (
          <BlogBlock article={article} key={index} index={index} />
        ))}
      </div>
    </>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "gov5eqnr",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
