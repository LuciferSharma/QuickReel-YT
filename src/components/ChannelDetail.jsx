import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Box} from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetails = () => {

  const [channelDetail, setChannelDetail]= useState();
  const [videos,setVideos] = useState([]);

  const {id} = useParams();

  console.log(channelDetail); 

  useEffect(()=>{
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (
    <Box minHeight='95vh'>
       <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(119,0,114,1) 0%, rgba(198,0,196,1) 16%, rgba(242,67,67,1) 89%, rgba(204,0,0,1) 100%)',
          zIndex: 10,
          height: '300px',
        }}/>
        <ChannelCard ChannelDetail={channelDetail} 
       marginTop="-110px"/>
       </Box>
       <Box display="flex" p="2" >
        <Box sx={{ mr:{sm: '100px' }}}/>
          <Videos videos={videos}/>
        
       </Box>

    </Box>
  )
}

export default ChannelDetails