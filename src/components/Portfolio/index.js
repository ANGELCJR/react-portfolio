import React from 'react';

function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="Blocktivity">
                    <div class="card-body">
                        <p className="left">Blocktivity</p>
                        <a href="https://github.com/ANGELCJR/silver-tribbleAC" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>

     

            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <p className="center">CookBook</p>
                        <a href="https://github.com/ANGELCJR/G2-API-Cookbook-AC" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://hieule411.github.io/G2-API-Cookbook/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>
            

            




        </div>
    </section>
    )
}

export default Portfolio;