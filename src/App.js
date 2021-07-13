/* eslint-disable react-hooks/exhaustive-deps */
import Nav from './components/Nav';
import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import News from './Screens/News';
import apiKey from './Data/apiKey';
import { Container } from '@material-ui/core';
import Progress from './components/Progress'

function App() {

  const [category, setCategory] = useState("general")
  const [news, setNews] = useState([])
  const [totalNews, setTotalNews] = useState()
  const [loading, setLoading] = useState(false)

  const newsApi = async() => {
    try {
      setLoading(true)
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`)
      setNews(response.data.articles)
      setTotalNews(response.data.totalResults)
    } catch (error) {
      setLoading(true)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    newsApi()
  }, [totalNews, category])

  return (
    <div className="App">
      <Nav setCategory={setCategory}/>
      {loading ? (
        <Container className="progress-container" maxWidth="md">
          <Progress/>
        </Container>      
      ) : (
        <News news={news} totalNews={totalNews}/>
      )} 
    </div>
  );
}

export default App;
