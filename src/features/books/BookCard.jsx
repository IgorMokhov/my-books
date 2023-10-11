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
  Tooltip,
  Typography,
} from '@mui/material';

export const BookCard = ({ image, title, authors, categories, id }) => {
  return (
    <Grid item xs={4} md={3}>
      <Card
        sx={{
          maxWidth: 220,
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'translateY(-6px)' },
          position: 'relative',
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
              height: 120,
              p: '15px 10px',
              // position: 'relative',
            }}
          >
            <Typography
              sx={{ fontSize: '12px', textDecoration: 'underline' }}
              variant="p"
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
              {title.length > 40 ? `${title.slice(0, 40)}...` : title}
            </Typography>
            <Typography sx={{ fontSize: '12px' }} variant="p" component="span">
              {authors?.[0]}
            </Typography>
            <Box sx={{ position: 'absolute', top: '0px', right: '0px' }}>
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
