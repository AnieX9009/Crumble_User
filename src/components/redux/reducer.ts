import { ADD_TO_FAV } from "./constants";

// Define the type for a favorite item
interface FavouriteItem {
    id: number;
    name: string;
    image: any;
}

// Define the type for your action
interface Action {
    type: string;
    data: FavouriteItem;
}

// Define the initial state as an array of FavouriteItem
const initialState: FavouriteItem[] = [];

// Reducer function
export const reducer = (state = initialState, action: Action): FavouriteItem[] => {
    switch (action.type) {
        case ADD_TO_FAV:
            // Check if the item is already in the favorites
            const isAlreadyFavourite = state.some(item => item.id === action.data.id);
            
            // If the item is already in favorites, return the current state
            if (isAlreadyFavourite) {
                return state;
            }
            
            // Add the new item to the state
            return [...state, action.data];

        default:
            return state;
    }
};
