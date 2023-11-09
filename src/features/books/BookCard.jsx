import { Link as RouterLink } from 'react-router-dom';
import { FavouriteButton } from '../../UI/FavouriteButton';
import notFoundImg from '../../accets/not-found-img.jpg';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

export const BookCard = ({ image, title, authors, categories, id }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card
        sx={{
          width: 220,
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'translateY(-6px)' },
          position: 'relative',
          m: '0 auto',
        }}
      >
        <Link
          sx={{ textDecoration: 'none', color: 'inherit' }}
          component={RouterLink}
          to={`/books/${id}`}
        >
          <CardMedia
            sx={{
              height: 180,
              width: 'auto',
              m: '30px auto 0',
              boxShadow: '10px 10px 13px 0px rgba(0,0,0,0.75)',
              borderRadius: '5px',
            }}
            component="img"
            alt={title}
            image={image || notFoundImg}
          />

          <CardContent
            sx={{
              height: 130,
              p: '15px 10px',
            }}
          >
            <Typography
              sx={{ fontSize: '12px', textDecoration: 'underline' }}
              variant="body1"
              component="span"
            >
              {categories?.[0]}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '17px',
                m: '10px 0 5px',
              }}
              variant="h6"
              component="h6"
            >
              {title.length > 38 ? `${title.slice(0, 38)}...` : title}
            </Typography>
            <Typography sx={{ fontSize: '12px' }} variant="p" component="span">
              {authors?.[0]}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: '4px',
                right: '4px',
              }}
            >
              <FavouriteButton
                id={id}
                title={title}
                image={image}
                size="medium"
              />
            </Box>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};
