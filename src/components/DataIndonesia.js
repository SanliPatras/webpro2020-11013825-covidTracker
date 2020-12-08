import React from 'react';
import axios from 'axios';
import CardIndonesia from './CardIndonesia';

class DataIndonesia extends React.Component{
    state = {
        indonesia: [],
        currentDate: null,
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('https://api.covid19api.com/summary');
        console.log(res);
        this.setState({indonesia: res.data.Global});
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
                    Jumlah kasus di Indonesia</font></p>
                
                <CardIndonesia summary = {this.state.indonesia}
                 currentDate = {this.state.currentDate}/>
            </div>
        )
    }
    
}

export default DataIndonesia;