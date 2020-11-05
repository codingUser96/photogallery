import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Title from './Title';
import Footer from './Footer';
import ReactGA from 'react-ga';

const App = props => {
  const url = 'https://api-eu-central-1.graphcms.com/v2/ckf3f6ity0p8d01yz4kkic7oi/master';
  const [photos, setPhotos] = useState([]);
  const [photosTotalCount, setPhotoTotalCount] = useState(0);
  useEffect(()=> {
    ReactGA.initialize('G-B2YEP6FVTH');
ReactGA.pageview(window.location.pathname + window.location.search);
    getPhotos();
  },[])

  const getPhotos = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: `{
        photos (first: 8, orderBy: updatedAt_DESC){
          id
          images {
            id
            url
          }
          tags
        }
        photosConnection{
          aggregate{
            count
          }
        }
      }`
    }),
    })
      .then((res) => res.json())
      .then((data) => {
          if(data) {
            setPhotoTotalCount(data.data.photosConnection.aggregate.count);
            setPhotos(data.data.photos);
        }
      }).catch((error)=>{
        console.log(error);
      });
  }
  
  const loadMore = () => {
    let element = '';
    console.log(photos)
    if(photos[(photos.length)-1] !== undefined) {
      element = photos[(photos.length)-1].id
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: `{
        photos (after: `+`\"`+element+`\"`+`, first: 4, orderBy: updatedAt_DESC){
          id
          images {
            id
            url
          }
          tags
        }
        photosConnection{
          aggregate{
            count
          }
        }
      }`
    }),
    })
      .then((res) => res.json())
      .then((data) => {
          if(data) {
            let array = photos;
            data.data.photos.map((x) => {
              array.push(x);
            });
            setPhotos([])
            setPhotoTotalCount(data.data.photosConnection.aggregate.count);
            setPhotos(array);
        }
      }).catch((error)=>{
        console.log(error);
      });
  }

  return(
    <div>
      <Header />
      <div className="fx-l-main" id="pageTop">
        <Title />
          <div className="mb-2">
            <section className="fx-l-insights-tiles" id="articles" role="tabpanel" aria-labelledby="Articles" >
              <div className="fx-l-insights-tiles-container">
                <br></br>
                {/* <div className="searchDiv float-right">
                  <input type="text" className="form-input shutter" />&nbsp;
                  <button className="btn btn-primary">Search</button>
                </div>
                <br></br>
                <br></br> */}
                <div className="col-md-12">
                  <div className="row">   
                    {photos.map((data, i) => {
                      return (
                        <div className="col-md-3 mb-2">
                          <div key={i} className="card">
                            {(data.images !== undefined)?(
                              <img src={data.images.url} className="card-img-top w-100" alt="..."/>
                            ):(
                            <div></div>
                            )}
                            <div className="card-body">
                              { data.tags.length > 0  ? data.tags.map((e, i) => {
                                return <div className="tagSection">
                                  <span className="tags" key={i}>{e}</span>
                                </div>
                              }) : ''}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {(photosTotalCount > 0) && (photosTotalCount != photos.length)? (
          <div className="fx-btn-container">
            <button className="btn btn-primary" onClick={loadMore.bind()} >Load More</button>
          </div>
        ):(
          <span></span>
        )}  
        {(photosTotalCount > 0) ?  (
          <Footer />
        ):(
          <span></span>
        )}
    </div>
  )
}

export default App;
