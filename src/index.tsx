import { createRoot } from 'react-dom/client';
import { Root } from './Root';
// import { Provider } from "react-redux";
// import { store } from "./store/store";

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<Root/>);
