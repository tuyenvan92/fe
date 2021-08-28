import React, {useEffect} from "react";

export default function useResizeWindow() {
    
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  function handleResizeWindow() {
    console.log('handleResizeWindow:',handleResizeWindow)
    setIsSmallScreen(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    }
  })
    return {isSmallScreen}
}