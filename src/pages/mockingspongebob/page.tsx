import Image from "next/image";
import MockingSpongebob from "../../../public/img/MockingSpongebobImg.jpg";
import React, { useState, useRef } from "react";
import styles from "./page.module.css";
import html2canvas from "html2canvas";

const Page: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const newText = target.value;

    if (newText === "") {
      setInputText(""); // Funktion ignorieren, wenn das Textfeld leer ist
    }

    // Erzeuge einen neuen Text mit den möglicherweise großgeschriebenen Buchstaben
    const newTextWithRandomCase = newText
      .split("") // Text in ein Array von Buchstaben aufteilen
      .map((char) => {
        // Für jeden Buchstaben, überprüfe mit einer 50% Wahrscheinlichkeit, ob er großgeschrieben werden soll
        if (Math.random() < 0.5) {
          return char.toUpperCase(); // Großschreibung
        } else {
          return char.toLowerCase(); // Kleinschreibung
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
        width: 200, // container.offsetWidth, // Breite des Containers
        height: 200, // container.offsetHeight, // Höhe des Containers
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
      <div>
        {/* Verwende onChange statt onKeyUp, um Änderungen in Echtzeit zu erfassen */}
        <textarea className={styles.textarea} onChange={handleInputChange} />
      </div>
      <div
        ref={containerRef}
        className={`${styles.imgContainer}${styles.container}`}
      >
        <div
          className={`${styles.imgOutputContainer} ${styles.textContainer} ${
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
