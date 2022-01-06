import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
} from "@chakra-ui/react";

function Detail() {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]));
  }, [char_id]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <card style={{ width: 1200 }}>
        {char && (
          <Table variant="striped" size="md" colorScheme="green">
            <TableCaption>{char.category}</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize="2xl">Image</Th>
                <Th fontSize="2xl">Name</Th>
                <Th fontSize="2xl">Nickname</Th>
                <Th fontSize="2xl">Status</Th>
                <Th fontSize="2xl">Occupation</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Image
                    borderRadius="2xl"
                    boxSize="200px"
                    src={char.img}
                    alt={char.name}
                  />
                </Td>
                <Td fontSize="xl">{char.name}</Td>
                <Td fontSize="xl">{char.nickname}</Td>
                <Td fontSize="xl">{char.status}</Td>
                <Td fontSize="xl">{char.occupation}</Td>
              </Tr>
            </Tbody>
          </Table>
        )}
      </card>
    </div>
  );
}

export default Detail;
