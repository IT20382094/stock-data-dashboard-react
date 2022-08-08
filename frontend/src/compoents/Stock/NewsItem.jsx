import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from '../../images/img.png';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

export default function NewsItem({
  images,
  headline,
  summary,
  author,
  created_at,
  url,
}) {
  const A1 = {
    marginRight: '40px',
    marginBottom: '40px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 20px',
    borderRadius: '5px',
    color: 'LightGray',
  };

  const A2 = {
    fontSize: '16px',
    fontFamily: 'Readex Pro',
    fontWeight: 'Regular',
    color: '#034AA6',
  };

  const A4 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    fontSize: '16px',
    fontWeight: 'Medium',
    color: 'black',
    paddingLeft: '10px',
  };

  const A5 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    color: '#979797',
    fontSize: '12px',
    fontWeight: 'Regular',
    paddingLeft: '10px',
  };

  const A6 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    color: '#000000',
    fontSize: '12px',
    fontWeight: 'Regular',
  };

  const A7 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    color: '#8E959E',
    fontSize: '12px',
    fontWeight: 'Regular',
  };

  const newsItem = (
    <React.Fragment>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {images[0] !== undefined && (
                <img src={images[0].url} width="100" height="100"></img>
              )}
              {images[0] === undefined && (
                <img src={logo} width="100" height="100"></img>
              )}
            </Grid>
            <Grid item xs={8}>
              <h4 style={A4}>{headline}</h4>
              <h6 style={A5}>{summary}</h6>
            </Grid>
            <br />
            <Grid item xs={6}>
              <h6 style={A6}>{author}</h6>
              <p style={A7}>{created_at}</p>
            </Grid>
            <Grid item xs={6}>
              <Link
                style={A2}
                variant="contained"
                href="#contained-buttons"
                onClick={() => window.open(url)}
              >
                View more
              </Link>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Card style={A1} variant="outlined">
      {newsItem}
    </Card>
  );
}
