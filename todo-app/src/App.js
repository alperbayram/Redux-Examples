import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ContainerFooter from "./components/ContainerFooter";


function App() {
  return (
    <>
      <section className="todoapp">
        <Header></Header>
        <Form></Form>
        <Container></Container>
        <ContainerFooter></ContainerFooter>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
