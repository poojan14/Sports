import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Player from '../components/Player';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ title1, title2, desc,buttonText, linkName }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src='/1.jpg'alt="football" width={500} height={300} />
    <Box p='5'>

      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc}</Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({playerData}) => (
  
  <Box>
    <Banner
      title1='FootBall'
      title2='Info'
      desc1=' Explore exciting players data'
      buttonText='Explore Players'
      linkName='/search?players-infos'
    />   
        <Flex flexWrap='wrap'>
      {playerData.map((player) => <Player player={player} key={player.Id} />)}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const playerData = await fetchApi(`${baseUrl}`);

  return {
    props: {
playerData: playerData?.playerList
    },
  };
}

export default Home;

