import { useState } from "react";

export const usePagination = (elements = [], elementsXpage = 0) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  let elementsPaginate = [];

  if (search) {
    elements = elements.filter((e) =>
      e.nombreCompleto.toLowerCase().includes(search.toLowerCase())
    );
  }

  const pageCount = Math.ceil(elements?.length / elementsXpage);

  for (let index = 0; index < pageCount; index++) {
    elementsPaginate[index] = elements?.filter(
      (_, i) => i < (index + 1) * elementsXpage && i >= index * elementsXpage
    );
  }

  const nextPage = () => setCurrentPage((p) => p + 1);
  const prevPage = () => setCurrentPage((p) => p - 1);
  const enterPage = (p) => setCurrentPage(p);
  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };
  let data = elementsPaginate[currentPage];

  return [
    data,
    pageCount,
    currentPage,
    search,
    nextPage,
    prevPage,
    enterPage,
    onSearchChange,
  ];
};
