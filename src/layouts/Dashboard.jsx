import React from 'react'
import { Grid } from 'semantic-ui-react'
import Categories from './Categories'
import JobAdvertisementList from '../pages/JobAdvertisementList'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column width= {12}>
                        <JobAdvertisementList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
