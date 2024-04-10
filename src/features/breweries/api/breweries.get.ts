import axios from "axios";
import { useQuery } from "react-query";

type FetchBreweriesArgs = {
  page: number;
  pageSize: number;
  enabled?: boolean;
};

type SearchBrewerisArgs = {
  search: string;
} & FetchBreweriesArgs;

export const fetchBreweries = async ({
  page,
  pageSize,
}: FetchBreweriesArgs) => {
  const { data } = await axios.get(
    `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${pageSize}`
  );
  return data;
};

export const searchBreweries = async ({
  search,
  pageSize,
  page,
}: SearchBrewerisArgs) => {
  const { data } = await axios.get(
    `https://api.openbrewerydb.org/v1/breweries/search?query=${search}&page=${page}&per_page=${pageSize}`
  );
  return data;
};

export const useFetchBreweiers = ({
  pageSize,
  page,
  enabled,
  search,
}: SearchBrewerisArgs) =>
  search
    ? useQuery({
        queryFn: () => searchBreweries({ page, pageSize, search }),
        queryKey: ["breweiers_search", page, search],
        keepPreviousData: true,
        enabled,
      })
    : useQuery({
        queryFn: () => fetchBreweries({ page, pageSize }),
        queryKey: ["breweiers", page, search],
        keepPreviousData: true,
        enabled,
      });
