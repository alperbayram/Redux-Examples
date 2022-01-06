import React from "react";
import { Button} from '@chakra-ui/react';

function Loading() {
  return (
    <div>
      <Button colorScheme="green" variant="solid" isLoading>
        Load more
      </Button>
    </div>
  );
}

export default Loading;
