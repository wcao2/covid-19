import React from 'react';
// import Cards from './components/Cards/Cards';
// import Cards from './components/Chart/Chart';
// import Cards from './components/Country/Country';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css'; 

import whoLogo from './images/whoLogo.jpg';

import {fetchData} from './api';

class App extends React.Component{
    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
        //console.log(data);
        this.setState({data:fetchedData});
    }

    handleCountryChange=async(country)=>{
        //fetch data
        console.log(country);

        const fetchedData=await fetchData(country);
        //console.log(fetchedData);
        this.setState({data:fetchedData,country:country});
    }

    render(){
        const {data,country}=this.state;
        //{styles.container} make sure that don't have any interference with any other CSS file
        return(
            <div className={styles.container}>
                <img className={styles.image} src={whoLogo} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;