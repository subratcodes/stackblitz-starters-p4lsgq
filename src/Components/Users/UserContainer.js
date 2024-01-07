import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/apiUtils';
import CommonLoader from '../Loader/CommonLoader';
import UserInfo from './UserInfo';
export default function UserContainer(props) {


  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error,setError]=useState(false);

  useEffect(()=>{
    callApi(10);
    
  },[])


  function callApi(size) {
    getUsers(`?size=${size?size:5}`).then((res) => {
      setData(res);

    }).catch((err)=>{
      console.warn("Error found Could not load data");
      setError(true);
    })
    setLoading(false);
  }

  return( <div>


    <CommonLoader loadState={loading}></CommonLoader>
    
    {data.length && data.map((info,index)=>{
      return <UserInfo key={index} data={info} ></UserInfo>;
    })}



  
  </div>

  )
}
