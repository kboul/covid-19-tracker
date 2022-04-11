import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";

import { AppLeft, AppRight } from "../components";
import { baseUrl } from "../constants";
import { useStore } from "../hooks";
import { Cases, Country, AllCountryInfo } from "../models";

// prefetch this info on the server before painting the page
export const getStaticProps: GetStaticProps = async () => {
  const countriesResponse = await fetch(`${baseUrl}/countries`);
  const countries = await countriesResponse.json();

  const allCountryInfoResponse = await fetch(`${baseUrl}/all`);
  const allCountryInfo = await allCountryInfoResponse.json();

  const lastDaysCasesResponse = await fetch(
    `${baseUrl}/historical/all?lastdays=120`
  );
  const lastDaysCases = await lastDaysCasesResponse.json();

  return {
    props: { allCountryInfo, countries, lastDaysCases }
  };
};

interface HomeProps extends Country {
  allCountryInfo: AllCountryInfo;
  countries: Country[];
  lastDaysCases: Cases;
}

export default function Home({
  allCountryInfo,
  countries,
  lastDaysCases
}: HomeProps) {
  const setCountries = useStore(state => state.setCountries);
  const setAllCountryInfo = useStore(state => state.setAllCountryInfo);
  const setLastDaysCases = useStore(state => state.setLastDaysCases);

  useEffect(() => {
    setCountries(countries);
    setAllCountryInfo(allCountryInfo);
    setLastDaysCases(lastDaysCases);
  }, []);

  return (
    <>
      <Head>
        <title>Covid-19 Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <AppLeft />

        <AppRight />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  padding: 20px;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
