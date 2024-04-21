import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import IconButton  from '@mui/material/IconButton';
export default function MultiActionAreaCard({ title, description, image }) {
    return (
      <Card sx={{ maxWidth: 345, borderRadius: '16px'  }}>
        <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            style={{ borderRadius: '16px', objectFit: 'cover' }}
          />
          <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: '1rem' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton color="primary">
            <ArrowOutwardOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
