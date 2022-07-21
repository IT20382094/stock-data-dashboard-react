import React ,{useState} from 'react'
import Card from './Card';
import News from './News';

function Stock() {

  return (
    <div>
        <div className='row'>
        <div className='col-9'>
            <h1>What About Today ?</h1>
            <br/>
        
        <div className='row'>
            <div className='col-2'>
                {<Card title="1" amount="8USD"/>}
                <br/>
            </div>
            <div className='col-2'>
            {<Card title="2" amount="16USD"/>}
            </div>
            <div className='col-2'>
            {<Card title="3" amount="20USD"/>}
            </div>
            <div className='col-2'>
                <Card title="4" amount="5USD"/>
            </div>
            <div className='col-2'>
                <Card title="5" amount="10USD"/>
            </div>

        </div>

        {/* <div className='row'>
            <div className='col-2'>
                <Card/>
                <br/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
        </div>

        <div className='row'>
            <div className='col-2'>
                <Card/>
                <br/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
        </div>

        <div className='row'>
            <div className='col-2'>
                <Card/>
                <br/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
        </div>

        <div className='row'>
            <div className='col-2'>
                <Card/>
                <br/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
            <div className='col-2'>
                <Card/>
            </div>
        </div> */}

        </div>

        <div className='col-3'>
        <News/>
        </div>

        </div>

       
        
    </div>
  )
}

export default Stock;
