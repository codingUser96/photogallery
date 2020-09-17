import React, { useEffect, useState } from 'react';
import './App.css';
import { Urls } from './config';
import Header from './Header';
import Hearer from './Header';

const App = props => {
  const [photos, setPhotos] = useState([]);
  const [photosTotalCount, setPhotoTotalCount] = useState(0);
  useEffect(()=> {
    getPhotos();
  },[])

  const getPhotos = () => {
    fetch(Urls.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: `{
        photos{
          images {
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

  return(
    <div>
      <Header />
      <div className="fx-l-main" id="pageTop">
        <section className="fx-l-insights-intro">
          <div className="fx-l-insights-intro-container">
            <div className="fx-l-insights-heading">
              <div className="fx-l-insights-heading-container">
                <div className="fx-l-insights-heading-copy">
                  <h1 className="fx-featured-heading fx-featured-heading-thin">ABARAJITHAN PHOTOGRAPHY</h1>
                    <hr className="fx-divider fx-divider--centered"/>
                      <h4 className="subTitle">நாம் கடந்துச் செல்லும் நிகழ்வுகளும், நம்மை கடந்துச் செல்லும் நிகழ்வுகளும் - புகைப்படம்</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-2">
        <section className="fx-l-insights-tiles" id="articles" role="tabpanel" aria-labelledby="Articles" >
          <div className="fx-l-insights-tiles-container">
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
    </div>
  )
}

export default App;
