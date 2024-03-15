import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  )
  /* Se o usuario ja tinha selecionado algum tema 
    a aplicacao anteriormente esse tema fica guardado dentro do
    localStorage. Por isso quando esse componente 'e inicializado
    buscamos no localStorage p verificar se existe algum tema
    la dentro. Caso ja tenha a aplicacao usa o tema armazenado 
    caso contrario ele usa o defaultTheme. Que no caso dessa aplicacao
    trocamos para ser o tema dark. */

  useEffect(() => {
    const root = window.document.documentElement
    /* Nesse caso estamos pegando o documento HTML do nosso projeto
      documentElement -> 'e basicamente o documento HTML (arquivo
      index.html da nossa aplicacao) */

    // Isso para posteriormente adicionar ou remover a classe light e dark

    root.classList.remove('light', 'dark')
    /* Nesse trecho de codigo sempre por padrao estou removendo todas
    as classes de tema ('light' e 'dark') */

    // BUSCA DO TEMA NO SISTEMA DO USUARIO
    if (theme === 'system') {
      /* Depois ele busca se o tema for o tema 'system' (que 'e para 
      pegar o tema do usuario)
      Depois usa o 'matchMedia' que 'e uma funcao js onde podemos 
      passar uma media query do css e ai ele me retorna true ou false.
      Isso atraves desse 'matches' p ver se ele bate ou nao.
      Entao ele ta procurando atraves da media query css se o usuario 
      usa o tema dark no SISTEMA dele (se sim continua com o tema dark
      se nao usa o tema light) */
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      // AQUI O TEMA 'E ADICIONADO COM BASE NO TEMA DO SISTEMA DO USUARIO
      /* Aqui acontece a mesma coisa o q ele faz 'e ir no root (arquivo index.html)
        e adiciona a classe que foi a selecionada pelo usuario por tema */
      root.classList.add(systemTheme)
      return
    }

    // AQUI O TEMA 'E ADICIONADO COM BASE NA ESCOLHA DO USUARIO
    /* Depois disso o que ele faz 'e ir no root (arquivo index.html)
      e adiciona a classe que foi a selecionada pelo usuario por tema */
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      // Atualiza o tema no Atualiza o tema no localStorage
      localStorage.setItem(storageKey, theme)
      // Atualiza o tema no Atualiza o tema no meu estado
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// useTheme -> funcao helper para abstrair a utilizacao do useContext nas telas
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
