import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';
import type { NextPage } from 'next'
import List from '../src/components/List/List';
import { useIndex } from '../src/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
    teachersList, 
    name, setName, 
    email, setEmail, 
    selectedTeacher, setSelectedTeacher,
    bookClass,
    message, setMessage
  } = useIndex()

  return (
    <>
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <List 
          teachers={teachersList}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        ></List>
      </Box>

      <Dialog 
        open={selectedTeacher !== null} 
        fullWidth 
        PaperProps={{sx:{p: 5}}}
        onClose={() => setSelectedTeacher(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Digite o nome" 
              type='text' 
              onChange={(e) => setName(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Digite o e-mail" 
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancel</Button>
          <Button onClick={() => bookClass()}>Book Class</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={message}
        open={message.length>0}
        autoHideDuration={2500}
        onClose={()=> setMessage('')}
      />
    </>
  );
}

export default Home;
