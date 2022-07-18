import React from 'react'
import Card from './Card';
import News from './News';
import NewsModal from './NewsModal';

function Stock() {
  return (
    <div>
        <div className='row'>
        <div className='col-9'>
            <h1>What About Today ?</h1>
            <br/>
        
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

        <NewsModal/>


    </div>
  )
}

export default Stock;
