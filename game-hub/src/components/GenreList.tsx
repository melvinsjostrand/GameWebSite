import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "./hooks/useGenre";
import {
  Image,
  ListItem,
  List,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
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
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="md"
              >
                {" "}
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}{" "}
      </List>
    </>
  );
};

export default GenreList;
