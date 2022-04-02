import { GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";

import { AppLeft, AppRight } from "../components";
import Country from "../models/country";

// prefetch this info on the server before painting the page
export const getStaticProps: GetStaticProps = async () => {
  const countriesResponse = await fetch(
    "https://disease.sh/v3/covid-19/countries"
  );
  const countries: Promise<Country[]> = await countriesResponse.json();

  return { props: { countries } };
};

interface HomeProps extends Country {
  countries: Country[];
}

export default function Home({ countries }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Covid-19 Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <AppLeft countries={countries} />

        <AppRight />
      </Main>
    </div>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
