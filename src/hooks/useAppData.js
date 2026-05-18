import { useContext } from 'react';
import { AppDataContext } from '../contexts/AppDataContext';

function useAppData() {
    const context = useContext(AppDataContext);

    if (context === null) {
        throw new Error(
            'useAppData: AppDataProvider non trovato. '
        );
    }

    return context;
}

export default useAppData;