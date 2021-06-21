import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup'

import styles from './Cards.module.css'
import cx from 'classnames';
export default function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {
    if(!confirmed){
        return "Loading..."
    }else{

    }
    // console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                       Infected
                        </Typography>
                        <Typography color="textSecondary" variant="h5">
                            <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=" ,"
                            />
                        
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography  variant="body2">
                       Number  of active cases of Covid-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recover)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                       Recovered
                        </Typography>
                        <Typography color="textSecondary" variant="h5">
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=" ,"
                            />
                        </Typography>
                        <Typography color="textSecondary" >
                        {new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography  variant="body2">
                       Number  of recover cases of Covid-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Deaths
                        </Typography>
                        <Typography color="textSecondary" variant="h5">
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=" ,"
                            />
                        </Typography>
                        <Typography color="textSecondary" >
                        {new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography  variant="body2">
                       Number  of Deaths of Covid-19 
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
            
            
        </div>
    )
}
