import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import notFoundImg from '../accets/cover-not-found.jpg';

export const BookCard = ({ image, title, authors, categories, id }) => {
  return (
    <Grid item xs={4} md={3}>
      <Card sx={{ maxWidth: 220 }}>
        <Link
          sx={{ textDecoration: 'none', color: 'inherit' }}
          component={RouterLink}
          to={`/books/${id}`}
        >
          <CardMedia
            sx={{ height: 180, width: 'auto', pt: '30px', m: '0 auto 0' }}
            component="img"
            alt={title}
            image={image || notFoundImg}
          />

          <CardContent
            sx={{
              height: 90,
              p: '15px 10px',
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
              {title.length > 50 ? `${title.slice(0, 50)}...` : title}
            </Typography>
            <Typography sx={{ fontSize: '12px' }} variant="p" component="span">
              {authors?.[0]}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};
