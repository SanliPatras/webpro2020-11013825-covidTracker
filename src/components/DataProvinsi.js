import React from 'react';
import axios from 'axios';

import Countries from './CardProvinsi';

class DataProvinsi extends React.Component{
    state = {
        countries: [],
        global: [],
        currentDate: null,
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('https://api.covid19api.com/summary');
        console.log(res);
        this.setState({countries: res.data.Countries});
        this.setState({global: res.data.Global});
        this.setState({loading: false});
    }
    render(){
        if(this.state.loading){
            return<h1>Loading...</h1>
        }
        return(
            <div style={{textAlign:'center'}}>
                <p><font size='4' face='arial' color='OrangeRed'>
                    Jumlah kasus Per-Provinsi di Indonesia</font></p>
                <table>
                    <thead>
                        <tr>
                            <th>Provinsi di Indonesia</th>
                            <th>Total Positif</th>
                            <th>Total Meninggal</th>
                            <th>Total Sembuh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(country => (<Countries countries = {country} key={country.Countries} />))}
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default DataProvinsi;