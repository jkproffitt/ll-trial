import { FunctionComponent, ReactNode } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
  title?: string;
}

/**
 * Renders TopBar composition
 * @component TopBar
 */
const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = '', ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={
        {
          boxShadow: 'none'
        }
      }
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }} variant='dense'>
        {startNode}
        <Typography
          variant="h6"
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
          component='div'
        >
          {title}
        </Typography>
        

        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
