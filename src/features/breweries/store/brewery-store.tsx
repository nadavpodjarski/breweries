import { create } from "zustand";

type BreweriesStore = {
  favoriteBreweries: Record<string, any>;
  addFavoriteBrewery: (b: any) => void;
  removeFavoriteBrewery: (b: any) => void;
  removeAllFavoriteBreweries: () => void;
};

export const useBrewerisStore = create<BreweriesStore>((set) => ({
  favoriteBreweries: {},
  removeAllFavoriteBreweries: () => set(() => ({ favoriteBreweries: {} })),
  addFavoriteBrewery: (brewery) =>
    set((state) => ({
      favoriteBreweries: {
        ...state.favoriteBreweries,
        [brewery.id]: brewery,
      },
    })),
  removeFavoriteBrewery: (brewery) =>
    set((state) => ({
      favoriteBreweries: Object.entries(state.favoriteBreweries).reduce(
        (acc, [key, value]) => {
          if (key === brewery.id) return acc;
          return {
            ...acc,
            [key]: value,
          };
        },
        {}
      ),
    })),
}));
