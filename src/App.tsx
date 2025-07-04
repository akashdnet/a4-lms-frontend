import { Outlet, useLocation } from "react-router";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/shared/Footer";
import Books from '@/app/books'

function App() {
  const location = useLocation()

  console.log("Current path:", location.pathname)
  return (
    <>
    <Toaster richColors position="top-right" />
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar/>
      </header>

      <main className="flex-1">
        
      {
        location.pathname=='/'?<Books/>:<></>
      }


        
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
    </>
  );
}

export default App;
