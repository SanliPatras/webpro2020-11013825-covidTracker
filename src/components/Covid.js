import React, { Component } from 'react';

class Covid extends Component {
    constructor() {
        super()
        this.state = {
            menus : [
                {label: 'DataGlobal', path: "/"},
                {label: 'DataIndonesia', path: "/DataIndonesia"},
                {label: 'DataProvinsi', path: "/DataProvinsi"},
            ]
        }
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                 <ul>
                <h1>Covid Tracker</h1>
                { this.state.menus.map(menu => (
                    <li style={styles.menuLi}> 
                    <p><b>
                    <a href={`${menu.path}`}> {menu.label} </a>
                    </b></p>
                   
                    </li>
                ))}
            </ul>
            </div>
           
        )
    }
}

const styles = {
    menuLi: {

        display: 'inline-block',
        padding: '10px'
    }
}

export default Covid;