import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Prices } from "./components/Prices";

import "./global.css";

function App() {
    return (
        <>
            <Intro />
            <Features />
            <Prices />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
