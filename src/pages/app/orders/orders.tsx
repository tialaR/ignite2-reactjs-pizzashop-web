import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/componets/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/componets/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        {/* container com filtro e tabela */}
        <div className="space-y-2.5">
          {/* filtros da tabela */}
          <OrderTableFilters />

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
                  return <OrderTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
