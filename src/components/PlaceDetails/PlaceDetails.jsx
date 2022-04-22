import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
// import LocationOnIcon from '@material-ui/icons/LocationOnIcon'
// import PhoneIcon from '@material-ui/icons/PhoneIcon'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({ place }) => {
    console.log(place)
  return (
      <Card elevation={6}>
          <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterbottom variant="h5">{place.name}
                {/* <LocationOnIcon /> */}
                {/* <PhoneIcon /> */}
                </Typography>
            </CardContent>
      </Card>
  )
}

export default PlaceDetails