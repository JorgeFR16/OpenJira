import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>
        Hola Mundo
      </Typography>
    </Layout>
  )
}

export default HomePage;
