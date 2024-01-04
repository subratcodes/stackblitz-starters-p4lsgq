import React from 'react';
import ThemeContext from './JokeContainer.js';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { getUsers } from '../../api/apiUtils';
import CommonLoader from '../Loader/CommonLoader';

export default function UserContainer(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    callApi(3);
  });

  function callApi(size) {
    getUsers(`?size=${size?size:5}`).then((res) => {
      console.log(res);
    }).catch((err)=>{

    })
    setLoading(false);
  }

  return( <div>
    
    <CommonLoader loadState={loading}></CommonLoader>




  
  
  
  
  </div>

  )
}
