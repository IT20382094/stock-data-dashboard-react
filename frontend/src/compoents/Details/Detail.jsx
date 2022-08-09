import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ChartL from './Chart';
import '../../App.css';
import { detailContainer } from '../../Containers/DetailContainer';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Detail() {
  const { title, title2 } = useParams();
  const commonData = detailContainer.useContainer();
  const A2 = {
    textAlign: 'left',
    paddingLeft: '40px',
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    fontSize: '30px',
  };
  const A3 = {
    width: '900px',
    height: '500px',
    marginBottom: '40px',
    marginLeft: '40px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #000000',
  };
  const A4 = {
    marginBottom: '40px',
    marginRight: '40px',
    marginLeft: '40px',
    width: '361px',
    height: '460px',
    backgroundColor: '#E4EDEC',
    borderRadius: '8px',
    padding: '20px',
  };
  const A5 = {
    fontFamily: 'Readex Pro',
    fontSize: '24px',
    fontWeight: 'Regular',
    marginBottom: '35px',
    textAlign: 'left',
  };
  const A6 = {
    fontFamily: 'Readex Pro',
    fontSize: '20px',
    fontWeight: 'Regular',
    marginBottom: '35px',
    textAlign: 'left',
  };
  const A7 = {
    fontFamily: 'Readex Pro',
    fontSize: '20px',
    fontWeight: 'Regular',
    color: '#737373',
    textAlign: 'right',
  };

  const A8 = {
    fontFamily: 'Readex Pro',
    fontSize: '24px',
    fontWeight: 'Regular',
    marginBottom: '35px',
    textAlign: 'right',
  };

  const last = Array.isArray(commonData) ? commonData.slice(-1) : [];

  const DetailItem = (
    <React.Fragment>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <h1 style={A2}>
                <Link to={'/'}>
                  <ArrowCircleLeftIcon />
                </Link>
                Average prices of {title}/{title2}
              </h1>
              <br />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <div style={A3}>
                  <div className="chart">
                    <ChartL />
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                {last?.map((lastItem) => {
                  return (
                    <div style={A4}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A5}>Current Average Price</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A8}>{lastItem.vw}</h1>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A6}>Open Price</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A7}>{lastItem.o}</h1>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A6}>High Price</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A7}>{lastItem.h}</h1>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A6}>Low Price</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A7}>{lastItem.l}</h1>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A6}>Close Price</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A7}>{lastItem.c}</h1>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A6}>Volume</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A7}>{lastItem.v}</h1>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h1 style={A6}>Number of Trades</h1>
                        </Grid>
                        <Grid item xs={6}>
                          <h1 style={A7}>{lastItem.n}</h1>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </React.Fragment>
  );

  return <Card variant="outlined">{DetailItem}</Card>;
}
