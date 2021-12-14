
import Routes from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from "./styles/globalStyled"
function App() {
  return (
    
    <>
    <ToastContainer/>
    <GlobalStyle/>
    <Routes/>
    </>
  );
}

export default App;
