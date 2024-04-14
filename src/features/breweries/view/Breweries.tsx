import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BreweriesGrid } from "../components";
import { useFetchBreweiers } from "../api";
import { Button, ErrorView, Loader } from "../../../components";
import styled from "styled-components";

const DEFAULT_PAGE_SIZE = 30;

export const Breweries = () => {
  const searchValue = useRef("");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isError, isFetching } = useFetchBreweiers({
    pageSize: DEFAULT_PAGE_SIZE,
    page,
    search: searchTerm,
  });

  const onSearch = async () => {
    if (!searchValue.current.trim()) return;
    setSearchTerm(searchValue.current);
    setPage(1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const disableNext = () => {
    return data?.length < DEFAULT_PAGE_SIZE;
  };

  const disablePrevious = () => {
    return page === 1;
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchValue.current = value;
    if (!value.trim()) {
      setSearchTerm(searchValue.current);
      setPage(1);
    }
  };

  if (isError) return <ErrorView />;

  return (
    <>
      <Header>
        <SearchContainer>
          <input onChange={handleOnChange} />
          <Button onClick={onSearch}>Search</Button>
        </SearchContainer>
        <PaginationContainer>
          <Button disabled={disablePrevious()} onClick={handlePreviousPage}>
            Previous
          </Button>
          <Button disabled={disableNext()} onClick={handleNextPage}>
            Next
          </Button>
        </PaginationContainer>
      </Header>
      {isFetching || data === undefined ? (
        <Loader />
      ) : (
        <BreweriesGrid breweries={data} />
      )}
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const PaginationContainer = styled.div`
  gap: 8px;
  display: flex;
  justify-content: end;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
`;
