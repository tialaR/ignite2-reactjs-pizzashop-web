import { Link, LinkProps, useLocation } from 'react-router-dom'

// NavLinkProps nesse caso esta extendendo todas as props de LinkProps
export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  // useLocation -> retorna varias infos da rota atual (inclusive o pathname = endereco q/ fica depois do dominio da rota)
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}

/* data atributes -> sao atributos que sao nativos do HTML 
que comecam com a nomenclatura "data" -> no tawind eu consigo
estilizar um elemento com base no data-atribute daquele determinado
elemento

data-current={pathname === props.to} -> Nesse caso a comparacao q esta sendo
feita 'e se a rota que eu estou atualmente 'e igual a rota  para onde meu 
link esta enviando atraves da props "to" do componente <Link /> do 
react-router-dom quer dizer q eu ja estou na rota dele (ja estou na rota
do link = current rooute) -> mostra que se o valor for true entao sera
o link ativo no momento
*/
