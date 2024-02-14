import styles from "../styles/keyboad.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

interface KeyboardProps {
	addGuessedLetter: (letter: string) => void,
	inactiveLetters: string[],
	activeLetter: string[],
	disabled: boolean
}

const Keyboard = ({addGuessedLetter, inactiveLetters, activeLetter, disabled=false}: KeyboardProps) => {
 

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
		{KEYS.map(key => {
			const isActive = activeLetter.includes(key)
			const isInactive = inactiveLetters.includes(key)
			return <button disabled={isActive || isInactive || disabled} onClick={() => addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} key={key}>{key}</button>
		})}
	</div>
  );
};

export default Keyboard;
