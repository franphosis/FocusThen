import Header from "./components/Header";
import Hero from "./components/Hero";
import Tasks from "./components/Tasks";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <main className="mx-auto w-full max-w-7xl px-4">
        <div className="grid min-w-0 gap-6 lg:grid-cols-2">
          <Hero />
          <Tasks />
          <Settings />
        </div>
        <article></article>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
