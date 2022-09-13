import Image from 'next/image';
import moment from "moment";

import {Grid,GridItem} from '@chakra-ui/layout';
import { FcSportsMode,FcHome,FcStatistics } from "react-icons/fc";
import {GiSoccerBall} from "react-icons/gi";
const Player = ({ player: {Id, PFName, TName, SkillDesc, UpComingMatchesList, CCode, VsCCode, MDate} }) => (
<Grid  w='420px' p='5' paddingTop='3px' justifyContent='flex-start' cursor='pointer' >
   
<GridItem>
<Image src={`/images/${Id}.jpg`} alt={Id} width={300} height={260} />
  </GridItem>

   <GridItem w='full'>
     <GridItem alignItems='center' p='3' justifyContent='space-between' w='250px' color='blue.400'>
     <FcSportsMode /> {PFName}   <FcHome /> {TName}
     <FcStatistics /> {SkillDesc}   
     <GiSoccerBall/>
     <GridItem>{UpComingMatchesList.map((a,b)=>(
    <>
    
<GridItem key={b}>{a.CCode} vs {a.VsCCode} 
 {moment({MDate}).utc().format('DD-MM-YYYY h:mm:ss')}

</GridItem>
</>
        )
        
        )} 




  </GridItem>
  <br />

   </GridItem> 

   </GridItem>  
 </Grid>
);

export default Player;