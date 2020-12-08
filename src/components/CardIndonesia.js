import React from 'react';

class CardIndonesia extends React.Component {

  render() {
    const {summary, currentDate} = this.props;
    return (
      <div className="row">
        <div className="TotalConfirmed">
          <h4>Total Positif</h4>
    <h1>{summary.TotalConfirmed}</h1>
    <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        
        <div className="TotalDeaths">
          <h3>Total Meninggal</h3>
    <h1>{summary.TotalDeaths}</h1>
    <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        
        <div className="TotalRecovered">
          <h3>Total Sembuh</h3>
    <h1>{summary.NewRecovered}</h1>
    <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
      </div>
    )
  }
}

export default CardIndonesia;