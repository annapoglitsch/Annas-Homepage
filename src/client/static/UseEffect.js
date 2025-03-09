import React, { useEffect } from "react";
import { useState } from "react";
import "../style/home.css"
import "../style/main.css"


export const useFetchLanguage = (languageChoice) => {
    const [content, setContent] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/sendLanguageJSON?language=${languageChoice}`);
          const data = await response.json();
          setContent(data);
          console.log("MyDATR",data);
        } catch (error) {
          console.error("Error fetching language data:", error);
        }
      };
  
      if (languageChoice) {
        fetchData();
      }
    }, [languageChoice]);
  
    return content;
  };
