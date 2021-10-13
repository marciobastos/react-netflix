import React from 'react';
import { useEffect, useState } from 'react';

import '../../App.css';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';
import MovieRow from '../../components/MovieRow';
import Tmdb from '../../Tmdb';


const Page = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);
      // pegando o featured

      let originals = list.filter( i=> i.slug === 'originals');
      let randomChoosen = Math.floor(Math.random() * (originals[0].items.results.length));
      let choosen = originals[0].items.results[randomChoosen];
      
      let choosenInfo = await Tmdb.getMovieInfo(choosen.id, 'tv');

      //console.log(choosenInfo);
    
      setFeaturedData(choosenInfo);
    }
    loadAll();
    //console.log(movieList);
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }
      else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])



    return (
        <div className="page">

          <Header black={blackHeader}/>

          {featuredData && 
            <FeaturedMovie item={featuredData} />
          }

          <section className="lists">
            {movieList.map((i, k) => (
                <MovieRow key={k} title={i.title} items={i.items}/>
            ))}
          </section>
              <footer>
                Feito com <span role="img" aria-label="coracao">❤️</span><br/>
                Direitos de imagem para Netflix<br/>
                Dados pegos do site Themoviedb.org
              </footer>

              {movieList.length <= 0 &&
                <div className="loading">
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"/>
              </div>
              }
          </div>
    )
}
export default Page;