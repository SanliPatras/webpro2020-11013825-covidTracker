import React from 'react';
import axios from 'axios';
import CardGlobal from './CardGlobal';

class DataGlobal extends React.Component{
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
        this.setState({currentDate: res.data.Date});
        this.setState({loading: false});
    }
    render(){
        if(this.state.loading){
            return<h1>Loading...</h1>
        }
        return(
            <div style={{textAlign:'center'}}>
            <p><font size='4' face='arial' color='OrangeRed'>
                Jumlah kasus di seluruh Dunia</font></p>
            
            <CardGlobal summary = {this.state.global}
             currentDate = {this.state.currentDate}/>
        </div>
        )
    }
    
}

export default DataGlobal;