import Home from "./home/page";
 import About from "./about/page";

 import DownloadCVButton from "./cv/page";
import Certification from "./certification/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <div >
     <Home/>
      <DownloadCVButton/>
     <About/> 
   <Certification/>
    <Contact/>
    </div>
  );
}
