import React from 'react';


function CommonLoader(props){
return  (
  <h2 style={{ textAlign: 'center', border: '1px solid red' }}>
         {props.loadState?'Data Loading':'Data Loaded'}
        </h2>
)

}

export default CommonLoader;

