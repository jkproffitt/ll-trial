import {  AppView } from '@/components';
import { Grid } from '@mui/material';

/**
 * Renders "About" view
 * url: /about
 * @page About
 */
const AboutView = () => {

  return (
    <AppView>
      <Grid item xs={12} md={3}>
        <div>
         test
        </div>
        <div>
          these
        </div>
      </Grid>
    </AppView>
  );
};

export default AboutView;
