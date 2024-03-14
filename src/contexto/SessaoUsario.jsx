import { createContext, useContext } from 'react';

const SessaoUsarioContext = createContext({
    usarioEstaLogado: false,
    login: () => null,
    logout: () => null,
    perfil: {}
})

export const useSessaoUsarioContext = () => {
    return useContext(SessaoUsarioContext)
}

export const SessaoUsuarioProvider = ({ children }) => {
    const value = {}
    return (<SessaoUsarioContext.Provider value={value}>
        {children}
    </SessaoUsarioContext.Provider>)
}