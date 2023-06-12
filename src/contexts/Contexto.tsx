import { createContext, useState, useEffect } from "react";
import { ContextProps, LetterProps } from "../types";
import letter from "../services/Letter";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [letters, setLetters] = useState([] as LetterProps[]);
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(()=> {
    listLetters()
  }, [])

  const listLetters = () => {
    letter.list().then(r=> {
      setLetters(r)
    }).catch(e=> {
      setErrorMessage('Ocorreu um erro ao carregar as letras do servidor.')
    })
  }

  const createLetter = (l: string) => {
    letter.create(l).then((r: any)=> {
      if(r.error){
        setErrorMessage(r.error)
        return;
      }

      if(letters.find((i: LetterProps) => i.letter === l)){
        setErrorMessage('Letra já existe')
        return;
      }

      listLetters()
      setErrorMessage('')
    }).catch(e=> {
      setErrorMessage(e.message)
    })
  }

  const removeLetter = (l: string) => {
    letter.remove(l).then((r: any) => {
      if(r.error){
        setErrorMessage(r.error)
        return;
      }

      listLetters()
    }).catch(e=> {
      setErrorMessage(e.message)
    })
  }

  const updateLetterCount = (l: string) => {
    letter.inc(l).then((r: any) => {
      if(r.error){
        setErrorMessage(r.error)
        return;
      }

      listLetters()
    }).catch(e=> {
      setErrorMessage(e.message)
    })
  }

  return (
    <Contexto.Provider value={{ letters, errorMessage, createLetter, removeLetter, updateLetterCount }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };
