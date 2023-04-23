import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
    const [mathches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== mathches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [mathches, query]);
    return mathches;
};

export default useMediaQuery;
