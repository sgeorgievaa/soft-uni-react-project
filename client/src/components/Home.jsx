import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Catalog from "./Catalog";

export default function Home() {
    return (
        <>
            <About />

            <Catalog />
            {/* <Services /> */}

            <Testimonial />

            {/* <Contact /> */}
        </>
    );
}