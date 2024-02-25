import Navbar from "@/scenes/navbar";
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses'
import ContactUs from '@/scenes/contactUs';
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";

function App() {
  // you can remove the <string> inferred type but it is good to be explicit. JavaScript understands that when you pass the "home" with a string type assertion, but typescript enables you to be more explicit when inferring the type you want to assign
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div className='app bg-gray-20'>
    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home
      setSelectedPage={setSelectedPage}
    />
    <Benefits
      setSelectedPage={setSelectedPage}
    />
    <OurClasses setSelectedPage={setSelectedPage}
    />
    <ContactUs setSelectedPage={setSelectedPage}
    />
    <Footer />
  </div>
}

export default App
