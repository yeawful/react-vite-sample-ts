import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.js';
import './styles/index.scss'
import '@a1rth/css-normalize'

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
