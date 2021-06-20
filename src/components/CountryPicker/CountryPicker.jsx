import React,{useState,useEffect} from 'react'
import { NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index.js'


export default function CountryPicker({handelChange}) {

const [fetchedCountries,setFetchedCountries] = useState([])
    useEffect(() => {
   const fetchApi = async ()=>{
    setFetchedCountries(await fetchCountries())
   }
   fetchApi()
   console.log(fetchedCountries);
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="global" onChange={(e)=>handelChange(e.target.value)}  >
<option value="global"> 
Global
</option>
{
    fetchedCountries.map((country,i)=>
    <option value={country} key={i} >{country}</option>
    )
}
            </NativeSelect>
        </FormControl>
    )
}
