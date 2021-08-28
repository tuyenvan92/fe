<<<<<<< HEAD
import React, {useEffect} from "react";

export default function useResizeWindow() {
    
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  function handleResizeWindow() {
    console.log('handleResizeWindow:',handleResizeWindow)
=======
import { useState, useEffect } from 'react';

const useResizeWindow = (allowResize = false) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResizeWindow() {
>>>>>>> 40c5ff226e42765e30a16be95610841e6d64875d
    setIsSmallScreen(window.innerWidth < 768)
  }

  useEffect(() => {
<<<<<<< HEAD
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    }
  })
    return {isSmallScreen}
}
=======
    if(!allowResize) return;

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    }
  },[])

  return {
    isSmallScreen
  }
}

export default useResizeWindow;
>>>>>>> 40c5ff226e42765e30a16be95610841e6d64875d
