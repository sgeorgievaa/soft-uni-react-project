import About from "../about/About";
import Testimonial from "../testimonial/Testimonial";
import Catalog from "../catalog/Catalog";
import { useLatestBook } from "../../api/bookApi";

export default function Home() {
    const {latestBooks} = useLatestBook();

    console.log(latestBooks);
    
    return (
        <>
            <About />

            <Catalog />

            {/* <Testimonial /> */}
        </>
    );
}