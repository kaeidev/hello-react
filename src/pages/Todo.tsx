import { Search } from "../components/Search";
import { useState } from "react";
export const Todo = () => {
  const [keywords, setKeywords] = useState<null | string>(null);
  return (
    <>
      Todo:
      {keywords}
      <Search
        onChange={(val) => {
          setKeywords(val);
        }}
      />
    </>
  );
};
