import React, { createContext, useState, ReactNode, useContext } from 'react';

// Type definition for a dish
type Dish = {
  id: string;
  name: string;
  description: string;
};

// Type definition for context
type FavouritesContextType = {
  favourites: Dish[];
  addFavourite: (dish: Dish) => void;
  removeFavourite: (id: string) => void;
};

// Create the context
const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

// Provider component
export const FavouritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<Dish[]>([]);

  const addFavourite = (dish: Dish) => {
    if (!favourites.find(item => item.id === dish.id)) {
      setFavourites([...favourites, dish]);
    }
  };

  const removeFavourite = (id: string) => {
    setFavourites(favourites.filter(item => item.id !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

// Custom hook for using the context
export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
