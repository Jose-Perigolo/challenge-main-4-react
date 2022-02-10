import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import React from 'react';

export default function Home(): JSX.Element {

  const fetchImages = ({ pageParam = null }) => api.get('/api/images', { params: { after: pageParam}})

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchImages
    // TODO AXIOS REQUEST WITH PARAM
    ,
    {
      getNextPageParam: (result) => { return result.data.after || null}
    }
    // TODO GET AND RETURN NEXT PAGE PARAM
  );
  
  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    return data?.pages.map(page => page.data).map(page => page.data).flat()
  }, [data]);

  console.log(formattedData);

  // TODO RENDER LOADING SCREEN
  if (isLoading) {
    return (
      <Loading/>
    )
  }
  // TODO RENDER ERROR SCREEN
  else if (isError) {
    return (
      <Error/>
    )
  }

  return (
    <>
      <Header />
      <React.StrictMode>
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {
        hasNextPage && 
        <Button my={10} isLoading={isFetchingNextPage} loadingText='Carregando...' onClick={() => fetchNextPage()}>Carregar mais</Button>
        }
      </Box>
      </React.StrictMode>
    </>
  );
}
