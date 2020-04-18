import { useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = enableDM => {
    const [darkMode, setdarkMode] = useLocalStorage(enableDM)

    useEffect(() => {
        var element = document.body;
        if (darkMode !== enableDM){
            console.log('DARKMODE ENABLED');
            element.className = 'dark-mode';
         }
         else {
            console.log('DARKMODE DISABLED');
            element.classList.remove("dark-mode");
         }
    },[darkMode, setdarkMode, enableDM])
    return [darkMode, setdarkMode, enableDM];
};
