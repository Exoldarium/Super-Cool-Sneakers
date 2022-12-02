import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);  
  
  useEffect(() => {
    function pageClickEvent(e) {
      // if ref is not null and click happens outside of our ref.current element
      if(el.current !== null && !el.current.contains(e.target)) {
        // reverse active state (it will be set to false because we want to hide our element)
        setIsActive(!isActive);
      }
    }
    
    if(isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    // remove the event listener and return the function, unless the click occurs on the ref element
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [isActive, el]); // we include the list of dependencies that are being used in the function
  
  return [isActive, setIsActive]; // we return our state
}