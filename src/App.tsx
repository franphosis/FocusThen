import Header from "./components/Header";
import Hero from "./components/Hero";
import Tasks from "./components/Tasks";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-4">
        <Hero />
        <Tasks />
        <article>
          <Settings></Settings>
        </article>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
