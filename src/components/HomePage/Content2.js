import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App2() {
  const [data, setData] = useState({ data: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://my.vivaji.com/api/v2/123456123450/vod/videos',
    );
 
    setData(result.data);
  }, []);
 
  return (
    <ul>
      {data.data.map(item => (
        <li key={item.item.id}>
            
          <a href={item.item.cover.portrait}>{item.item.name}</a>
          <div><img width={"50%"} src={item.item.cover.portrait}></img></div> 
        </li>
      ))}
    </ul>
  );
}
 
export default App2;