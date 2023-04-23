import { useState } from 'react';
import Navbar from './components/layouts/Navbar';
import useMediaQuery from './custom-hooks/useMediaQuery';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    return (
        <div className="bg-blue-950">
            <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;
