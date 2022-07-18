import React from 'react';
import Chart from './Chart';
import Item from './Item';

function Detail() {
  return (
    <div>
        <div className='row'>
            <div className='col-9'>
                <Chart/>
            </div>
            <div className='col-3'>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>

    </div>
  )
}

export default Detail
