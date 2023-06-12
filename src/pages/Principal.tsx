import styled from "styled-components";
import { useState } from "react";
import { useContexto, useTheme } from "../hooks";
import { LetterProps } from "../types";

export default function Principal() {
  const [letter, setLetter] = useState("");
  const context = useContexto()
  const { theme } = useTheme();

  const handleUpdateCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: LetterProps) => {
    e.preventDefault()

    context.updateLetterCount(item.letter)
  }

  const handleCreateLetter = () => {
    context.createLetter(letter)
  }

  const handleRemoveLetter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: LetterProps) => {
    e.preventDefault()

    context.removeLetter(item.letter)
  }

  return (
      <BoxSld theme={theme}>
        <InputSld 
          theme={theme} 
          placeholder="Digite a letra e <enter>" 
          value={letter} 
          onChange={(e)=>setLetter(e.target.value.toUpperCase())}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
                handleCreateLetter()
            }
         }} />
        {context.errorMessage !== '' && (
          <MessageSld theme={theme}>{context.errorMessage}</MessageSld>
        )}
        {context.letters.map((item: LetterProps) => (
          <ButtonSld 
            key={item.letter} 
            theme={theme} 
            onClick={(e) => handleUpdateCount(e, item)} 
            onContextMenu={(e) => handleRemoveLetter(e, item)}>
            {item.letter} | {item.count}
          </ButtonSld>
        ))}
      </BoxSld>
  );
}

const BoxSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ButtonSld = styled.button`
  color: ${(props) => props.theme.rotulo};
  background-color: ${(props) => props.theme.fundo};
  border: 1px solid ${(props) => props.theme.borda};
  font-size: 18px;
  padding: 10px 0px;
  margin: 5px 0px;
  width: 200px;
  border-radius: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: ${(props) => props.theme.entrada};
    border-color: ${(props) => props.theme.bordaHover};
  }
`;

const InputSld = styled.input.attrs({ type: "text" })`
  border: 1px solid ${(props) => props.theme.borda};
  font-size: 16px;
  padding: 10px;
  margin: 5px 0px;
  width: 200px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const MessageSld = styled.p`
  color: ${(props) => props.theme.erro};
  font-size: 18px;
`;
