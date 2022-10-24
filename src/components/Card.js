import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function MultiActionAreaCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500, alignItems: "center"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://picsum.photos/200/300"
                        alt="avatar pic"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Dave Pua
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is my E-Portfolio highlighting my projects and information about me.
                        Use the portfolio to contact me anytime.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Go
                    </Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    </Box>
  );
}
