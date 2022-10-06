import { Box } from '@mui/material';
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/Teacher';
import Header from '../src/components/Header/Header';
import List from '../src/components/List/List';

const Home: NextPage = () => {

  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Professor Zezão 1",
      photo: "https://github.com/joseaugusto0.png",
      description: "Descrição do Zezão 1",
      hour_value: 51
    },
    {
      id: 2,
      name: "Professor Zezão 2",
      photo: "https://github.com/joseaugusto0.png",
      description: "Descrição do Zezão 2",
      hour_value: 2
    },
    {
      id: 3,
      name: "Professor Zezão 3",
      photo: "https://github.com/joseaugusto0.png",
      description: "Descrição do Zezão 3",
      hour_value: 3
    },
    {
      id: 4,
      name: "Professor Zezão 4",
      photo: "https://github.com/joseaugusto0.png",
      description: "Descrição do Zezão 4",
      hour_value: 4
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <List teachers={teachers}></List>
    </Box>
  );
}

export default Home;
