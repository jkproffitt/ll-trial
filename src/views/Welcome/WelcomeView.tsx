import { Box, Paper, Typography } from '@mui/material';
import {  AppLink, AppView } from '@/components';
import FormField from '@/layout/components/Form';

/**
 * Renders "Welcome" view
 * url: /
 * @page Welcome
 */
const WelcomeView = () => {
  return (
    <AppView>
      <Typography variant="h4">Welcome to React App with MUI</Typography>
      <Box>
        <div>This is Welcome page, put your content here....</div>
        <div>
        Take a look on samples of components at <AppLink to="/dev">Debug Page</AppLink>
        </div>
        <div>
        The source code is available at <AppLink href="https://github.com/karpolan/react-mui-vite-ts" target='_blank'>GitHub</AppLink>
        </div>
      </Box>
      <FormField/>
    </AppView>
  );
};

export default WelcomeView;
