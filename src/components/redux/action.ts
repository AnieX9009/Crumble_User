// action.ts
import { ADD_TO_FAV } from "./constants";

// Define the action creator with inline type for `item`
export function addToFav(item: { id: number; name: string }): { type: string; data: { id: number; name: string } } {
    return {
        type: ADD_TO_FAV,
        data: item,
    };
}
