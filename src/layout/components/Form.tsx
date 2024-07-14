import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import { AppButton } from '@/components';

export default function FormField() {
  return (
    <>
      <Box>
        <Paper>
          <TextField
            required
            id="filled-required"
            label="Required"
            placeholder="Search Terms"
            variant="filled"
            fullWidth
            multiline
            rows={8}
          />
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-number"
              label="Number"
              type="number"
               placeholder="how many?"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              placeholder="data"
              helperText="Some important text"
              variant="filled"
            />
          </Box>
          <AppButton color="primary">Search</AppButton>
        </Paper>
      </Box>
    </>
  );
}
