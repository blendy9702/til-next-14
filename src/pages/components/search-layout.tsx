import React, { ReactNode, useState } from "react";
import styles from "./search-layout.module.css";
import { useRouter } from "next/router";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    console.log(search);
    if (search.trim() === "") {
      alert("검색어를 입력하세요.");
      return;
    }
    router.push(`/search?keyword=${search}`);
    setSearch("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={handleSubmit}>검색</button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SearchLayout;
