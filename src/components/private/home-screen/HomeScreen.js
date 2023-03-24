import React from "react";
import Banner from "../../banner/Banner";
import "./HomeScreen.css";
import Nav from "../../private/Nav/Nav";
import Rows from "../../private/rows/Rows";
import requests from "../../../Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Romantic Movies"  fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default HomeScreen;
