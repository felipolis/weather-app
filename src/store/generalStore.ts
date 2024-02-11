import { create } from "zustand"
import { persist } from "zustand/middleware"

interface GeneralState {
  selectedApi: string
  latitude: number
  longitude: number
  lastSearchedQuery: string
  history: Array<Array<number>>

  changeSelectedApi: () => void
  setLatitude: (latitude: number) => void
  setLongitude: (longitude: number) => void
  setLastSearchedQuery: (lastSearchedQuery: string) => void
  appendHistory: (latitude: number, longitude: number) => void
}

export const useGeneralStore = create<GeneralState>()(
  persist(
    (set) => ({
      selectedApi: "OPEN_WEATHER", // ou "OPEN_WEATHER" ou "OPEN_METEO"
      latitude: 0,
      longitude: 0,
      lastSearchedQuery: "",
      history: [],

      changeSelectedApi: () => {
        set((state) => {
          return {
            selectedApi: state.selectedApi === "OPEN_WEATHER" ? "OPEN_METEO" : "OPEN_WEATHER"
          }
        })
      },
      setLatitude: (latitude: number) => set({ latitude }),
      setLongitude: (longitude: number) => set({ longitude }),
      setLastSearchedQuery: (lastSearchedQuery: string) => set({ lastSearchedQuery }),
      appendHistory: (latitude: number, longitude: number) => {
        set((state) => {
          return {
            history: [[latitude, longitude], ...state.history]
          }
        })
      }
      
    }),
    {
      name: "general-store",
    }
  )
)