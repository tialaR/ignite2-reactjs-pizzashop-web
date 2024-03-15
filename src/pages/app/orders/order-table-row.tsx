import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/componets/ui/button'
import { Dialog, DialogTrigger } from '@/componets/ui/dialog'
import { TableCell, TableRow } from '@/componets/ui/table'

import { OrderDetails } from './order-details'

// interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              {/* className="sr-only" -> Acessibilidade -> serve p leitores de tela */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          {/* OrderDetails -> componente que contem todas as informacoes do 
          pedido (DialogContent) 
          Aqui o componente DialogContent foi abstraido desse arquivo para 
          que o mesmo nao ficasse enorme ocupando muito espaco nesse arquivo */}
          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        821e78f7asdhdf128h
      </TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">Diego Schell Fernandes</TableCell>

      <TableCell className="font-medium">R$ 149,90</TableCell>

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
}
