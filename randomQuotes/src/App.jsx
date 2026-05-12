import useQuotes from "./hooks/useQuotes"
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const {quote} = useQuotes();
  return (
    <>
    <Nav />
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
