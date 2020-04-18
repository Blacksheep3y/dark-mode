import { useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = enableDM => {
    const [darkMode, setdarkMode] = useLocalStorage(enableDM)

    useEffect(() => {
        if (enableDM === enableDM){
            console.log('DARKMODE ENABLED');
            document.body.className = 'dark-mode';
         }
         else {
            console.log('DARKMODE DISABLED');
            return () => { document.body.className = ''; }
         }
    },[setdarkMode, enableDM])
    return [darkMode, setdarkMode];
};
