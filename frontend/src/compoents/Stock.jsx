import React ,{useState} from 'react'
import Card from './Card';
import News from './News';

function Stock() {

  return (
    <div>
        <h1 style={{color: "red", padding: "40px", fontSize:"80px",marginBottom:"50px", backgroundColor: "lightblue"}}>Welcome To Stock Dashboard</h1>
        <div className='row'>
        <div className='col-8'>
            <h1>What About Today ?</h1>
            <br/>
        </div>
        <div className='col-4'>
            <h1>Latest News</h1>
            <br/>
        </div>
        </div>
        
        <div className='row'>
            <div className='col-8'>
                <Card/>
                <br/>
            </div>
            {/* <div className='col-2'>
                <Card title="Ethereum" amount="16USD"/>
            </div>
            <div className='col-2'>
                <Card title="Ripple" amount="20USD"/>
            </div>
            <div className='col-2'>
                <Card title="Litecoin" amount="5USD"/>
            </div> */}
            <div className='col-4'>
                <News/>
            </div> 
        </div>
    </div>
  )
}

export default Stock;
