import { ThemeProvider } from "./contexts";
import { Provider } from "./contexts/Contexto";
import Principal from "./pages/Principal";

export default function App() {
  return (
    <Provider>
      <ThemeProvider>
        <Principal />
      </ThemeProvider>
    </Provider>
  );
}

