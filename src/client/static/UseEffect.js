import React, { useEffect } from "react";
import { useState } from "react";
import "../style/home.css"
import "../style/main.css"




  export const useFetchLanguage = (language) => {
    const [content, setContent] = useState(null);
  
    useEffect(() => {
      const fetchLanguage = async () => {
        try {
          await fetch("http://localhost:5000/sendLanguage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ selectedLanguage: language })
          });
  
          const response = await fetch("http://localhost:5000/sendLanguageJSON");
          const data = await response.json();
          setContent(data);
        } catch (err) {
          console.error("Fehler beim Laden der Sprache:", err);
        }
      };
  
      fetchLanguage();
    }, [language]);
  
    return content;
  };
  