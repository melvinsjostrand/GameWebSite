import getCroppedImageUrl from '../services/image-url';
import useGenres from './hooks/useGenre'
import { Image, ListItem, List, HStack,Text } from '@chakra-ui/react';

const GenreList = () => {
    const {data} = useGenres();
  return (
    <>
      <List>
        {" "}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image borderRadius='10px'boxSize='40px' src={getCroppedImageUrl(genre.image_background)}/>
                <Text fontSize='lg'> {genre.name}</Text>
                </HStack>
          </ListItem>
        ))}{" "}
      </List>
    </>
  );
}

export default GenreList