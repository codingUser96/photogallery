import React from 'react'

const Title = props => {
    return (
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
    )
}

export default React.memo(Title);