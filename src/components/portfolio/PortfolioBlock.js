import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} sx = {{ width: 700,
         height: 560}} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} sx ={{ml: 20,mt:15,mr:10}}src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '1.3rem',"margin-top":'20px',"margin-left":'40px'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;