import React from 'react';

function UserInfo(props){


    return(
        <div>
            <div style={{display:'flex',color:'red', padding:'2px'}}>
            <h3> {props.data.first_name} </h3>
            <h3>{ props.data.last_name}</h3>
            </div>
        
        </div>
    )
}

export default UserInfo;