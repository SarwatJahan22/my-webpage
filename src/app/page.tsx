import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Footer from "./components/Footer";

const Home = () => {
    return(
        <div>
            <Header/>
            
            {/*Hero Section */}
<Hero/>
 {/*About Me Section*/}

 <section
 id="about" className="p-10 md:p-14 bg-gradient-to-b from-pink-300 to-indigo-400 text-gray-950">

<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-300 to-indigo-400 text-gray-950 p-10">
  <h1 className="text-6xl font-bold text-blue-500 mb-4">About Me</h1>
  

    <p className="text-center text-lg">
    As a beginner-level front-end and back-end developer, I am on a thrilling journey of discovery,
     delving into the world of artificial intelligence and Metaverse 3.0 from Sindh Governer House
     Through my course, I am gaining invaluable skills that bridge the gap between creating intuitive user
      interfaces and robust server-side functionalities. This blend of learning has me not only coding and 
      building dynamic websites and applications but also exploring the cutting-edge technologies that will shape our
       digital future. Every day is a new adventure, filled with challenges and triumphs, 
    as I work towards mastering the art of development in this rapidly evolving tech landscape.
    </p>
</div>
 </section>
 {/*Portfolio Section */} 

 <section 
   id="portfolio"
   className="md:p-16 p-10 bg-purple-400 text-gray-900"
 >
            <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
            Portfolio
          </h2>

   <div className="container mx-auto py-10">
        <h2 className="text-2xl mb-8">Some projects which I completed to show my basic skills as a learning developer are here to showcase my journey in this field.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg hover:bg-slate-400">
                <h2 className="text-4xl mb-4">Project 1</h2>
                <p className="text-xl">Weather App</p>
            </div>
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg hover:bg-slate-400">
                <h2 className="text-4xl mb-4">Project 2</h2>
                <p className="text-xl">To Do List</p>
            </div>
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg hover:bg-slate-400">
                <h2 className="text-4xl mb-4">Project 3</h2>
                <p className="text-xl">Currency Converter</p>
            </div>
        </div>
    </div>
    </div>
 </section>
{/*Contact Section*/}
<section
id= "contact"
 className="p-10 md: p-15 bg-gradient-to-tr from-blue-400 via-pink-200 to bg-orange-300 ">
          <div className="container mx-0 bg-orange-200 p-5 shadow-lg rounded-lg transition hover:bg-purple-200 transform hover:scale-110 max-xl:">
          <h2 className="text-5xl md:text-3-xl font-semibold text-black mb-7">
            Contact Me
          </h2>
          <p className="text-lg text-black md:text-xl mb-5">
I am available for exchange any project related matters. Feel free to contact me via mail at:
            <a
              href="mailto:sarwatj2022@gmail.com"
className="text-red-400"            >
              {" "}
             sarwatj2022@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;