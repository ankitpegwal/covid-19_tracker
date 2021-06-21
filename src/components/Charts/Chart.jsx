import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
import { fetchDailyData } from '../../api/index';
import { Typography } from '@material-ui/core'



export default function Chart({ data: { confirmed, recovered, deaths }, country }) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())


        }
        fetchApi();
        console.log(dailyData);
    }, [])
    const lineChart = (
        dailyData.length !== 0
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infected",
                            borderColor: "#3333ff",
                            fill: true
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths",
                            borderColor: "red",
                            fill: true,
                            backgroundColor: "rgba(255,0,0,0.5)"
                        }]
                    }}
                />
            ) : null
    );
    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ["Infected", "Rcovered", "Deaths"],
                        datasets: [{
                            label: "People",
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'

                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current status in ${country}` }
                    }}
                />
            ) : null
    )
    return (
        <div className={styles.container}>
            {/* <Typography variant="h2">{country}</Typography> */}
            {country ? barChart : lineChart}
        </div>
    )
}
