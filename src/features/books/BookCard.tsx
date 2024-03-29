import { Link as RouterLink } from 'react-router-dom';
import { FavouritesBtn } from '../../UI/FavouritesBtn';
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
import { AppBook } from '../../types';

interface BookCardProps extends AppBook {}

export const BookCard = ({
  image,
  title,
  authors,
  categories,
  id,
}: BookCardProps) => {
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
              maxWidth: 130,
              width: 'auto',
              m: '30px auto 0',
              boxShadow: '10px 10px 13px 0px rgba(0,0,0,0.75)',
              borderRadius: '5px',
            }}
            component="img"
            alt={title || 'No image'}
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
              {categories?.[0] || 'No categories'}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '17px',
                m: '5px 0',
              }}
              variant="h6"
              component="h6"
            >
              {title.length > 38
                ? `${title.slice(0, 38)}...`
                : title || 'No title'}
            </Typography>
            <Typography
              sx={{ fontSize: '12px', lineHeight: 1.2 }}
              variant="body1"
              component="p"
            >
              {authors?.[0] || 'No authors'}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: '4px',
                right: '4px',
              }}
            >
              <FavouritesBtn
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
