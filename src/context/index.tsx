import {
    createContext,
    ReactNode,
    useContext, useState
} from "react";

type Props = {
  children?: ReactNode;
};

type ContextProps = {
  isHard: boolean;
  setHardMode: () => void;
  setEasyMode: () => void;
};

const SettingsContext = createContext<ContextProps>({
  isHard: false,
  setHardMode: () => {},
  setEasyMode: () => {},
});

export function SettingsProvider({ children }: Props) {
  const [isHard, setIsHard] = useState(false);

  function setHardMode() {
    setIsHard(true);
  }

  function setEasyMode() {
    setIsHard(false);
  }

  return (
    <SettingsContext.Provider
      value={{
        isHard,
        setHardMode,
        setEasyMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSetting() {
  const data = useContext(SettingsContext);

  if (!data) {
    throw new Error("Settings must be provided");
  }

  return data;
}
