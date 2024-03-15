import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/componets/ui/card'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 900 },
  { date: '13/12', revenue: 400 },
  { date: '14/12', revenue: 2300 },
  { date: '15/12', revenue: 800 },
  { date: '16/12', revenue: 640 },
]

// Gráfico de receita no período
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            {/* Mostra no grafico a data do período horizontalmente */}
            <XAxis
              dataKey="date" // Informacao do 'data' que vai aparecer na linha do grafico na parte de baixo (eixo x). Nesse caso a prop 'date'
              axisLine={false} // Tira a linha que divide o grafico da linha
              tickLine={false} // Tira a linha que ficava nos numeros (hifen)
              dy={16} // Coloca a informacao com um padding de 16px para baixo
            />

            {/* Mostra no grafico a Receita diária no período verticalmente */}
            <YAxis
              stroke="#888"
              axisLine={false} // Tira a linha que divide o grafico da linha
              tickLine={false} // Tira a linha que ficava nos numeros (hifen)
              width={80} // Faz o elemento ocupar um espaco maior
              /* Atraves da prop 'tickFormatter' consigo receber o valor da 
              receita e devolver ela formatada */
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid
              vertical={false} // Estiliza o grafico colocando linhas guias verticais
              className="stroke-muted" // Muda a cor das linhas
            />

            {/* Definindo layout do grafico linear */}
            {/* Linha do grafico que define o up e doown da receita (revenue) */}
            <Line
              stroke={colors.violet[500]} // Muda a cor da linha do grafico (nesse caso foi usada uma cor fornecida pelo tailwindcss)
              type="linear" // Tipo de linha do grafico
              strokeWidth={2} // Grossura da linha no grafico
              dataKey="revenue" // Informacao do 'data' que vai fazer a linha do grafico subir ou descer (eixo y). Nesse caso a prop 'revenue'
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
