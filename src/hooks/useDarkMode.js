import { useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = enableDM => {
    const [darkMode, setdarkMode] = useLocalStorage(enableDM)

    useEffect(() => {
        if (darkMode !== enableDM){
            console.log('DARKMODE ENABLED');
            document.body.className = 'dark-mode';
         }
         else {
            console.log('DARKMODE DISABLED');
            return () => { document.body.className = ''; }
         }
    },[darkMode, setdarkMode, enableDM])
    return [darkMode, setdarkMode, enableDM];
};
