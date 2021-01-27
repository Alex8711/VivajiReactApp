// just for test . this CODE is not used in the APP
/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
 
    setData(result.data);
  }, []);
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
 
export default App; */
//===========================================
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// function App() {

//   const [data2, setData] = useState({ data: [] });
  
//   useEffect(async () => {
//     const result = await axios(
//       'https://my.vivaji.com/api/v2/123456123450/vod/videos',
//     );
 
//     setData(result.data2);
//   }, []);

//   console.log(data2);

//   return (
//     <ul>
//       {data2.map(item => (
//         <li key={item.item.id}>
//           <a href={item.item.cover.portrait}>{item.item.name}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
 
// export default App;