import React from 'react';
import '../style/home.css'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useFetchLanguage } from "../static/UseEffect";

function Home({ language, setLanguage }) {

  const content = useFetchLanguage(language);


  if (!content) {
    return <div>Loading...</div>;
  }
  const languageContent = content.language[0];

  return (
    <div className='mainDis'>
      {/* Header Section */}
      <Header languageChoice={languageContent} setLanguageChoice={setLanguage}/>

      {/* Welcome Section */}
      <div className='content' >
        <h1 aria-label={languageContent.Willkommen} className='welcomeFont'>
        {languageContent.Willkommen}
        </h1>
      </div>
      <div className='annaPoglitschDiv'>
        <h2 aria-label='' className='annaPoglitsch'>Anna Poglitsch.</h2>
      </div>
      <div className='mainAccessDiv'> 
        <div className='iconContainer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" stroke-width="1.5" stroke="currentColor" class="size-6" color='white'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
        </div>
        <div className='mainTextContainer'>
          <div className='titleTextContainer'>
            <h2 aria-label='Why is this website accessable?' className='titleText'>{languageContent.ÜberschriftHome1} {languageContent.ÜberschriftHome2} {languageContent.ÜberschriftHome3}</h2>
          </div>
          <div className='paragraphTextDiv'>
            <p aria-label={languageContent.TextHome} className='textParagraph'>{languageContent.TextHome}</p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer languageChoice={languageContent} />

    </div>
  );
}

export default Home;
