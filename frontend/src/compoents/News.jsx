import React from 'react'
import NewsModal from './NewsModal';

function News(s) {
  let value=s
  return (
    <div>
      <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">{value.title}</p>
                  <NewsModal value={value.title}/>
                </a>
    </div>
  )
}

export default News;
