import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number // Pagina atual (comecando do index 0)
  totalCount: number // Numero total de registros
  perPage: number // Numero total de registros por pagina
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  // Calculo p descobrir o numero total de paginas da tabela
  // Math.ceil() -> Metodo que arredonda o calculo p cima
  // || 1 -> Caso o calculo nao retorne um numero valido retorno 1 pagina
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        {/* pagina atual (current page) */}
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        {/* botoes da paginacao */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4" />
            {/* className="sr-only" -> Acessibilidade (usado p leitores de tela) */}
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
            {/* className="sr-only" -> Acessibilidade (usado p leitores de tela) */}
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
            {/* className="sr-only" -> Acessibilidade (usado p leitores de tela) */}
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4" />
            {/* className="sr-only" -> Acessibilidade (usado p leitores de tela) */}
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
