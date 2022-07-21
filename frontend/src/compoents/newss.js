import React from 'react'
 
const Newss = ({ newss }) => {
    return (
        <div>
            <center><h1>Latest News</h1></center>
            {newss.map((news) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{news.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{news.author}</h6>
                        <p class="card-text">{news.description}</p>
                      </div>
                </div>
            ))}
        </div>
    )
};
 
export default Newss;

