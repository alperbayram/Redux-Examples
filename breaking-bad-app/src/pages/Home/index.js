import { useEffect } from "react";
import Masonry from "react-masonry-css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Error from "../Error";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={6}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`char/${character.char_id}`}>
              <img
                alt={character.name}
                src={character.img}
                className="character"
              />
              <div className="char_name">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>
      <div className="btn-more">
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <Button
            onClick={() => dispatch(fetchCharacters(nextPage))}
            colorScheme="green"
            variant="solid"
          >
            Load more({nextPage})
          </Button>
        )}
        {!hasNextPage && <div>There is nothing to be shown.</div>}
      </div>
    </div>
  );
}

export default Home;
