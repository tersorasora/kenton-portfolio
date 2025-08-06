import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const setNextIndex = (nextIndex) => {
    if(nextIndex < currentIndex){
        setDirection('left');
    }else if(nextIndex > currentIndex){
        setDirection('right');
    }
    setCurrentIndex(nextIndex);
  }

  return (
    <NavigationContext.Provider value={{ currentIndex, setCurrentIndex, setNextIndex, direction}}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);