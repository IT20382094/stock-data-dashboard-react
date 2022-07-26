import React ,{useState} from 'react'
import Card from './Card';
import News from './News';

function Stock() {

  return (
    <div style={{
        backgroundColor: "gray"
      }}>
        <h1 style={{color: "black", padding: "40px", fontSize:"80px",marginBottom:"50px"}}>Welcome To Stock Dashboard</h1>
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
            <div style={{paddingLeft:"40px"}} className='col-8'>
                <Card/>
                <br/>
            </div>
            
            {/* <div className='col-1'>
            <view style={{height: '100%',width:'20px', backgroundColor: '#909090'}}></view>
            </div> */}
            <div style={{paddingRight:"40px"}}className='col-4'>
                <News/>
            </div> 
        </div>
    </div>
  )
}

export default Stock;
