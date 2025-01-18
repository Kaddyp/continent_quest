import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from './components/Layout';
import Country from './pages/Country/Country';
import CountryDetails from './pages/Country/CountryDetails';
import NoPage from './pages/NoPage/NoPage';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Country />} />
            <Route path="/country/:id" element={<CountryDetails />} />   
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </ApolloProvider>
  );
}

export default App;
