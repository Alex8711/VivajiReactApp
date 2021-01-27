import React from "react";

import 'antd/dist/antd.css';
import styles from './HomePage.module.css';
import {LockOutlined} from "@ant-design/icons";
import { blue } from '@ant-design/colors';

import { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from "react";
  

const Home = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      axios.get("https://my.vivaji.com/api/v2/123456123450/vod/videos")
        .then(res => {
          setMovies(res.data.data[0]);
  
        }).catch(console.log)
    },
      []
    );
  
  
    return (
      <section id="main-page">
        <div className='list-main-page'>
          <a href='#'>
            <h2>
              Some Info here
              {/* <FontAwesomeIcon className='arrow-list' icon={faArrowRight} /> */}
            </h2>
          </a>
          <div >
  
          {movies.map((movie, i) => {
              return (
                //<Card key={i} image={movie.poster_path} />
                //data[0].item.cover.portrait
                <img key={i} image={movie.data[0].item.cover.portrait} />
              )})
            }
  
          </div>
        </div>
      </section>
    )
  };
  
  export default Home;