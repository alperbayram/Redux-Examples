import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import Error from "../Error";
import Loading from "../Loading";
import { Heading, Text } from "@chakra-ui/react";

function Quotes() {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch]);

  if (error) {
    return <Error />;
  }
  return (
    <div>
      <Heading p={[5, 5]}>Quotes</Heading>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        quotes.map((quotes) => (
          <Text fontSize="lg" p={[5, 5]} key={quotes.quote_id}>
            <q>{quotes.quote}</q> <strong>{quotes.author}</strong>
          </Text>
        ))}
      <Text p={[5, 5]} textAlign={["center"]} fontSize="2xl">
        {" "}
        Quotes: {quotes.length}
      </Text>
    </div>
  );
}

export default Quotes;
