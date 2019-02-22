import React from 'react';
import TopNav from '../TopNav/TopNav';

export default function Radio() {
  return (
    <div>
      <TopNav />
        <h1 style={{ 
            backgroundColor: 'yellow',
            paddingBottom: '25px',
        }}>
        <br></br>RADIO station<br></br>
        <br></br>
        <br></br>...bip ...bip ...bip<br></br></h1>
        <h1 style={{ 
          color: 'green',
          backgroundColor: 'black',
          fontWeight: 'bold',
          border: '25px solid green',
          padding: '20px',
        }}>
            |-/(on)|
        </h1>
        <h1 style={{ 
          color: 'red',
          backgroundColor: 'black',
          fontWeight: 'bold',
          border: '25px solid red',
          padding: '20px',
        }}>
            |+/(off)|
        </h1>
    </div>
  )
}