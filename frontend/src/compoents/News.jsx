import React from 'react'
import NewsModal from './NewsModal';

function News() {
  return (
    <div>
      <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <NewsModal/>
                </a>
    </div>
  )
}

export default News;
