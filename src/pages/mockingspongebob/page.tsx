"use client";

import Image from "next/image";
import MockingSpongebob from "../../../public/img/MockinSpongebob_big_2.jpg";
import MockingSpongebobNotHidden from "../../../public/img/MockingSpongebobImg.jpg";
import React, { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import html2canvas from "html2canvas";

const Page: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Funktion zum Aktualisieren der Fensterbreite
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Aktualisiere die Fensterbreite beim ersten Rendern der Komponente
    updateWindowWidth();

    // Event-Listener hinzufügen, um die Fensterbreite bei Änderungen zu aktualisieren
    window.addEventListener("resize", updateWindowWidth);

    // Event-Listener entfernen, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []); // leeres Abhängigkeitsarray stellt sicher, dass der Effekt nur einmal beim Rendern der Komponente ausgeführt wird

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const newText = target.value;

    if (newText === "") {
      setInputText("");
    }

    const newTextWithRandomCase = newText
      .split("")
      .map((char) => {
        if (Math.random() < 0.5) {
          if (char === "s" || char === "S") {
            char = "$";
          }
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join(""); // Array von Buchstaben in einen String zusammenführen

    setInputText(newTextWithRandomCase);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inputText)
      .then(() => {
        console.log("Text wurde erfolgreich in die Zwischenablage kopiert...");
      })
      .catch((error) => {
        console.error(
          "Beim Kopieren in die Zwischenablage ist ein Fehler aufgetreten:",
          error
        );
      });
  };

  const downloadImg = () => {
    const container = containerRef.current;

    // HTML-Inhalt in Canvas rendern
    if (container) {
      // Alle CSS-Regeln, die die Größe des Containers beeinflussen, vorübergehend entfernen
      const previousStyles = container.style.cssText;
      container.style.cssText = "";

      // HTML-Inhalt in Canvas rendern, wobei die Größe des Canvas der Größe des Inhalts entspricht
      html2canvas(container, {
        width: container.offsetWidth, // Breite des Containers
        height: container.offsetHeight, // Höhe des Containers
      }).then((canvas) => {
        // Bild aus dem Canvas erhalten
        const image = canvas.toDataURL("image/png");

        // Bild herunterladen (wird im Browser angezeigt)
        const link = document.createElement("a");
        link.href = image;
        link.download = "mockingspongebob_meme.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // CSS-Regeln für den Container wiederherstellen
        container.style.cssText = previousStyles;
      });
    }
  };

  return (
    <div>
      <div
        ref={windowWidth >= 768 ? containerRef : null}
        className={`${styles.imgContainer} ${styles.hidden}`}
      >
        <div
          className={`${styles.imgOutputContainer}  ${styles.impact_font}  ${
            styles.textContainer
          } ${
            inputText.length > 180 ? styles.smallText : styles.defaultSizeText
          }`}
        >
          {inputText}
        </div>
        <div>
          <Image
            src={MockingSpongebob}
            width={200}
            height={200}
            alt="Mocking Spongebob"
            priority={true} // oder priority="high"
          />
        </div>
      </div>
      <div>
        {/* Verwende onChange statt onKeyUp, um Änderungen in Echtzeit zu erfassen */}
        <textarea className={styles.textarea} onChange={handleInputChange} />
      </div>

      <div
        ref={windowWidth < 768 ? containerRef : null}
        className={`${styles.imgContainer}`}
      >
        <div
          className={`${styles.imgOutputContainer} ${styles.textContainer} ${
            styles.impact_font
          } ${
            inputText.length > 180 ? styles.smallText : styles.defaultSizeText
          }`}
        >
          {inputText}
        </div>
        <div>
          <Image
            src={MockingSpongebobNotHidden}
            width={200}
            height={200}
            alt="Mocking Spongebob"
            priority={true} // oder priority="high"
          />
        </div>
      </div>

      <button className={styles.button} onClick={downloadImg}>
        Als Bild herunterladen
      </button>

      <button className={styles.button} onClick={copyToClipboard}>
        copyToClipboard{" "}
      </button>
    </div>
  );
};

export default Page;
