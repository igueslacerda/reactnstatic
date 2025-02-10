import { useContext, createContext, useReducer, useMemo } from "react";

const GlobalContext = createContext({});

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

const initialState = {
  user: "",
  ligado: false,
};

function reducer(state, action) {
  return {
    ...state,
    ...action.payload,
  };
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const definirUsuario = (usuario) => {
    dispatch({
      payload: {
        user: usuario,
      },
    });
  };

  const toggleLigado = (ligado) => {
    dispatch({
      payload: {
        ligado: !ligado,
      },
    });
  };

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      ligado: state.ligado,
      definirUsuario,
      toggleLigado,
    }),
    [state.user, state.ligado]
  );

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  );
};
