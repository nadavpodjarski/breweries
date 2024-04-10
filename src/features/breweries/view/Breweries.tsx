import { ChangeEvent, useEffect, useState } from "react";
import { BreweriesGrid } from "../components";
import { useFetchBreweiers, useSearchBreweiers } from "../api";
import { Button, ErrorView, Loader } from "../../../components";
import styled from "styled-components";

const DEFAULT_PAGE_SIZE = 20;

export const Breweries = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchData, setShowSearchData] = useState(false);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);

  const {
    data = [],
    isError,
    isFetching,
  } = useFetchBreweiers({
    pageSize: DEFAULT_PAGE_SIZE,
    page,
    enabled: !showSearchData,
  });

  const {
    data: searchData = [],
    isError: isSearchError,
    isFetching: isSearchFetching,
    refetch: searchRefetch,
  } = useSearchBreweiers({
    pageSize: DEFAULT_PAGE_SIZE,
    search: searchValue,
    page: searchPage,
    enabled: false,
  });

  const onSearch = () => {
    if (!searchValue.trim()) return;
    setShowSearchData(true);
    setSearchPage(1);
  };

  useEffect(() => {
    if (showSearchData && searchValue.trim()) {
      searchRefetch();
    }
  }, [searchPage, showSearchData, searchRefetch]);

  const handlePrevious = () => {
    if (showSearchData) {
      setSearchPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    } else {
      setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    }
  };

  const handleNextPage = () => {
    if (showSearchData) {
      setSearchPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const disableNext = () => {
    if (showSearchData) return searchData?.length < DEFAULT_PAGE_SIZE;
    return data?.length < DEFAULT_PAGE_SIZE;
  };

  const disablePrevious = () => {
    if (showSearchData) return searchPage === 1;
    return page === 1;
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const trimmedValue = value.trim();
    setSearchValue(trimmedValue);
    if (!trimmedValue) {
      setShowSearchData(false);
      setPage(1);
      setSearchPage(1);
    }
  };

  if (isError || isSearchError) return <ErrorView />;

  return (
    <>
      <Header>
        <SearchContainer>
          <input value={searchValue} onChange={handleOnChange} />
          <Button onClick={onSearch}>Search</Button>
        </SearchContainer>
        <PaginationContainer>
          <Button disabled={disablePrevious()} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={disableNext()} onClick={handleNextPage}>
            Next
          </Button>
        </PaginationContainer>
      </Header>
      {isFetching || isSearchFetching ? (
        <Loader />
      ) : (
        <BreweriesGrid breweries={showSearchData ? searchData : data} />
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
