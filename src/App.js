
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    const urls = 'https://newsapi.org/v2/everything?q=tesla&from=2022-01-26&sortBy=publishedAt&apiKey=db8817813e1e4d249c5767c414cc19ec'
    fetch(urls)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },[]);
  // console.log(articles);
  return (
    <div >
  
      <h1>Using metarial Ui</h1>
      {
        articles.map(article => <News article ={article}></News>)
      }
     
      
    
      
   
    </div>
  );
}

export default App;
