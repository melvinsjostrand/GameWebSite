import getCroppedImageUrl from '../services/image-url';
import useGenres, { Genre } from './hooks/useGenre'
import { Image, ListItem, List, HStack, Spinner, Button } from '@chakra-ui/react';

interface Props {
    onSelectGenre : (genre: Genre) => void;
}


const GenreList = ({onSelectGenre} : Props) => {
    const {data, isLoading, error} = useGenres();

    if(error) return null;
    if(isLoading) return <Spinner />
  return (
    <>
      <List>
        {" "}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="10px"
                boxSize="40px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button onClick= {() => onSelectGenre(genre)}variant='link' fontSize="md"> {genre.name}</Button>
            </HStack>
          </ListItem>
        ))}{" "}
      </List>
    </>
  );
}

export default GenreList