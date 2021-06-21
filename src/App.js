import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import React from 'react'
import pic from './ima/image.png'
class App extends React.Component {
  state = {
    data: {},
    country:''
  }




  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data: fetchedData
    })

  }
  handelChange=async (country)=>{
    const fetchedData = await fetchData(country)
this.setState({data:fetchedData ,country:country})
console.log(fetchedData);

  }

  render() {

    const { data,country } = this.state
    // console.log(this.state.data);
    return (
      <div className={styles.container}>
<img className={styles.image} src={pic} />
        <Cards data={data} />
        <CountryPicker handelChange={this.handelChange} />
        <Chart  data={data} country={country} />
       
      </div>
    );
  }

}

export default App;
