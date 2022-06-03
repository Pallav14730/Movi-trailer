import './App.css';
import Row from './Row';
import requests from './requests';
// import Banner from './banner';
import Footer from './footer';
import Nav from './nav';


function App() {
  return (
    <div className="app">
     <Nav />
     <Row 
      title=" NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      
       />
     <Row title=" Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title=" Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title=" Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title=" Horror Movies" fetchUrl={requests.fetchHorroMovies} />
     <Row title=" Documentaries" fetchUrl={requests.fetchDocumentries} />
     <Footer />
     
     
    </div>
  );
}

export default App;
