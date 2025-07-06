// context/LoadingContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import GlobalSpinner from '../components/GlobalSpinner';

type LoadingContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
  showLoader: () => void;
  hideLoader: () => void;
};

// Create context with undefined default
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Type for children props
type LoadingProviderProps = {
  children: ReactNode;
};

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading, showLoader, hideLoader }}>
      {children}
      {loading && <GlobalSpinner />}
    </LoadingContext.Provider>
  );
}

export function useLoading(): LoadingContextType {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
