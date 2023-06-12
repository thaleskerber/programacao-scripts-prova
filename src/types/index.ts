export interface LetterProps{
    letter: string;
    count: number;
}

export interface ContextProps {
    letters: LetterProps[];
    errorMessage: string | null;
    createLetter: (l: string)=> void;
    removeLetter: (l: string)=> void;
    updateLetterCount: (l: string)=> void;
}

export type Theme = {
    entrada: string
    erro: string
    rotulo: string
    fundo: string
    borda: string
    bordaHover: string
};

export interface ThemeContextProps {
    theme: Theme
};
