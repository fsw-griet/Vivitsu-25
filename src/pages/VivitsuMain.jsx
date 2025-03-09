import Highlights from "../components/Highlights";
import Vivitsu from "../components/vivitsu";
import ScrollingText from "../components/ScrollingText";
// import Domains from "../components/Domainss";
import SponsorsPage from "../components/Sponsors";
import DomainsCarousel from '../components/Domains2';
//import Laptop from "../components/LaptopDomains";

export default function VivitsuMain(){
    return(
        <div>
        <Vivitsu/>
        <Highlights/>
        <ScrollingText/>
        {/* <Domains/> */}
        <div className="container mx-auto px-4 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Domains</h2>
         <DomainsCarousel />
        {/* <Laptop/> */}
        </div>
        <SponsorsPage/>
        </div>
    );
};