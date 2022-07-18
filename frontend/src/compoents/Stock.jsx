import React ,{useState} from 'react'
import Card from './Card';
import News from './News';
import Detail from './Detail';

function Stock() {
  return (
    <div>
        <div className='row'>
        <div className='col-9'>
            <h1>What About Today ?</h1>
            <br/>
        
        <div className='row'>
            <div className='col-2'>
                <Card title="1"/>
                <br/>
            </div>
            <div className='col-2'>
                <Card title="2"/>
            </div>
            <div className='col-2'>
                <Card title="3"/>
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

        </div>

        <div className='col-3'>
            
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Latest News</h1>
              <div class="list-group">
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
              </div>

            </div>
          </div>
        </div>

        </div>
        <Detail/>


    </div>
  )
}

export default Stock;
