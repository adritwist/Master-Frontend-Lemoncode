import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Character } from './Character';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/character/:id" element={<Character />} />
            </Routes>
        </>
    )
}