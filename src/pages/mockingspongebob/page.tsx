import React, { useState } from "react";

const Page: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLTextAreaElement;
    const newChar = target.value[target.selectionStart - 1];

    // Wenn der neu getippte Buchstabe ein Leerzeichen ist, ignoriere ihn
    // if (newChar === " ") return;

    // Prüfe, ob der neu getippte Buchstabe in Groß- oder Kleinbuchstaben umgewandelt werden soll
    const randomNumber = Math.random();
    const newCharTransformed =
      randomNumber < 0.5 ? newChar.toUpperCase() : newChar.toLowerCase();

    // Konstruiere den neuen Eingabetext mit dem transformierten Buchstaben
    const newInputText =
      inputText.substring(0, target.selectionStart - 1) +
      newCharTransformed +
      inputText.substring(target.selectionStart);

    setInputText(newInputText);
  };

  return (
    <div>
      <div>
        <textarea onKeyUp={handleInputChange} />
      </div>
      <div>{inputText}</div>
    </div>
  );
};

export default Page;
