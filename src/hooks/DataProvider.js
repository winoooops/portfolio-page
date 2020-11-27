import React, { createContext, useContext, useEffect, useState, useReducer } from "react"
import dummieData from '../data.json'

const DataContext = createContext()

export function DataProvider({ children }) {

  return <DataContext.Provider value={{ projects: dummieData.projects, skills: dummieData.skills }} >
    {children}
  </DataContext.Provider>

}

export const useData = () => useContext(DataContext)
