import { UserMenu } from "components/UserMenu/UserMenu";
import { OpenMenuBtn } from "components/OpenMenuBtn/OpenMenuBtn";
import { useState, useEffect } from 'react';

export const MatchMediaWrapper = () => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
     useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 420px)");
    setIsNarrowScreen(mediaWatcher.matches);
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
      }
    } else {
      mediaWatcher.addEventListener(updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener(updateIsNarrowScreen)
      }
    }
    
     }, [isNarrowScreen]);
    return isNarrowScreen ? <OpenMenuBtn/> : <UserMenu/>;
}