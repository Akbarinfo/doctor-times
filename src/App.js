import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./pages/router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
