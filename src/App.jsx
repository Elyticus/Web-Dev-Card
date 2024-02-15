import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="hero">
      <Header image="/images/illustration-article.svg" />
      <Main
        label="Learning"
        date="  Published 21 Dec 2023"
        title="HTML & CSS foundations"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
      />
      <Footer avatar="/images/image-avatar.webp" name="Greg Hooper" />
    </div>
  );
}

export default App;
