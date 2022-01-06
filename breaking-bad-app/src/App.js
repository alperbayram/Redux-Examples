import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";
import { Heading } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="green"
              p={[10, 10]}
              _hover={{ bg: "gray.400" }}
            >
              <Heading> The Breaking Bad</Heading>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/">
                  <Text fontSize="2xl">Characters</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/quotes">
                  <Text fontSize="2xl">Quotes</Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route exact path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
