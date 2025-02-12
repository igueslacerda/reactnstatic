import {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from "react";

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

  const definirUsuario = useCallback((usuario) => {
    dispatch({
      payload: {
        user: usuario,
      },
    });
  }, []);

  const toggleLigado = useCallback(() => {
    dispatch({
      payload: {
        ligado: !state.ligado,
      },
    });
  }, [state.ligado]);

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      ligado: state.ligado,
      definirUsuario,
      toggleLigado,
    }),
    [state.user, state.ligado, definirUsuario, toggleLigado]
  );

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  );
};
