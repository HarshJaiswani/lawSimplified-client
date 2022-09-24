import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
  const { dataArray, setFilteredData } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    let tempArray = dataArray.filter(
      (e) =>
        e.descp.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(tempArray);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center overflow-hidden border rounded-md"
    >
      <input
        spellCheck={false}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Blogs"
        className="px py-2 ml-4 outline-none"
      />
      <span onClick={handleSearch} className="cursor-pointer">
        <AiOutlineSearch className="mr-4 text-xl text-[gray]" />
      </span>
    </form>
  );
};

export default Search;
