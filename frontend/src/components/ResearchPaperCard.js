import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
  
  headingColor: {
    color: 'blue'
  },
});

const ResearchPaperCard = ({title, abstract}) => {
  const colorClass = useStyles();

    return (
      <div style={{display: 'flex', justifyContent:'center'}}>
      <Card sx={{display: 'flex', width: 1000, p:1, m:1}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} className={colorClass.headingColor} component="div">
            {title}
          </Typography>
          
          <Typography variant="body2">
            {abstract}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
  }

export default ResearchPaperCard;