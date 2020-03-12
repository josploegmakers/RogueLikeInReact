import React from 'react';
import { Grid, Typography, IconButton, Divider } from '@material-ui/core';
import { Testscreen, Testportrait } from '../media';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './layoutstyle.css'; 

function Layout() {
    const imageResp = {
        width: "100%",
        height: "100%"
    }
    const asciiMap = {
        fontFamily: "monospace",
        whiteSpace: "pre-wrap"
    }
    return (
        <div style={{padding: 35}}>
            <Grid container direction="row" allignContent="center" spacing={5}>
                <Grid item xs={12}>
                    <Typography variant='h4' align='center'>Night Watch</Typography>
                    <Typography variant='h6' align='center'>Roguelike in React</Typography>
                    <Divider /><br/>
                </Grid>
                <Grid item xs={7}>
                    <img style={imageResp} src={Testscreen} alt='test screen' class="responsive"/>
                </Grid>
                <Grid container xs={5}>
                    <div style={asciiMap}>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
                    x                               x<br/>     
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    x                               x<br/>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                    <Divider />
                    <p>Other information I guess Other information I guess Other information I guess Other information I guess Other information I guess Other information I guess Other information I guess Other information I guess Other information I guess Other information I guess </p>
                </Grid>
                <Grid item xs={3}>
                    <img style={imageResp} src={Testportrait} alt='test portrait'/>
                </Grid>
                <Grid container xs={5}>
                    <p>Player information</p>
                </Grid>
                <Grid container xs={4}>
                    <IconButton> <ArrowBackIcon /> </IconButton>
                    <IconButton> <ArrowUpwardIcon /> </IconButton>
                    <IconButton> <ArrowDownwardIcon /> </IconButton>
                    <IconButton> <ArrowForwardIcon /> </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout;