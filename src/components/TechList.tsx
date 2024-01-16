import { List, ListItem, ListItemText } from '@mui/material';

export const TechList = () => {
  return (
    <List>
      {[
        'HTML',
        'CSS',
        'TypeScript',
        'React',
        'React Router',
        'Redux Toolkit',
        'Redux Persist',
        'Material UI',
        'Axios',
        'Html React Parser',
        'Notistack',
      ].map((tech) => (
        <ListItem key={tech}>
          <ListItemText sx={{ textAlign: 'center' }} primary={tech} />
        </ListItem>
      ))}
    </List>
  );
};
