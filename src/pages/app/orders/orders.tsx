import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/componets/ui/button'
import { Input } from '@/componets/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/componets/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>

      {/* container com filtro e tabela */}
      <div className="space-y-2.5">
        {/* filtros da tabela */}
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        {/* tabela */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {/* -> 'E uma boa abordagem trabalhar com o tamanho das celulas de
                 uma tabela fixando o tamanho atraves dos 'th. Ex: w-[64px] */}
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                {/* -> Qdo eu nao fixo o tamanho de determinada coluna na tabela 
                 estou inferindo q a coluna ocupe o restante do espaco na linha. 
                 Ou seja, todo espaco que sobrar (nesse caso a col 'Cliente') */}
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell>

                    <TableCell className="font-mono text-xs font-medium">
                      821e78f7asdhdf128h
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      há 15 minutos
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="font-medium">
                      Tiala Fernanda de Santana Rocha
                    </TableCell>

                    <TableCell className="font-medium">R$ 149,90</TableCell>

                    {/* O nome desse botao vai mudar de acordo com o status do pedido
                    ex: Aprovar, Entregar, etc */}
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Aprovar
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
