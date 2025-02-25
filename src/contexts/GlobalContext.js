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
  switch (action.type) {
    case "TOGGLE_LIGADO":
      return { ...state, ligado: !state.ligado };
    case "DEFINIR_USUARIO":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const definirUsuario = (usuario) => {
  //   dispatch({
  //     type: "DEFINIR_USUARIO",
  //     payload: usuario,
  //   });
  // };

  // const toggleLigado = () => {
  //   dispatch({ type: "TOGGLE_LIGADO" });
  // };
  const definirUsuario = useCallback((usuario) => {
    dispatch({
      type: "DEFINIR_USUARIO",
      payload: usuario,
    });
  }, []);

  const toggleLigado = useCallback(() => {
    dispatch({ type: "TOGGLE_LIGADO" });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      ligado: state.ligado,
      definirUsuario,
      toggleLigado,
    }),
    [state.user, state.ligado, definirUsuario, toggleLigado]
  );
  //console.log("Contexto atualizado:", memoizedValue);

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  );
};
