import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/componets/ui/card'

const data = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarela', amount: 30 },
  { product: 'Marguerita', amount: 50 },
  { product: '4 Queijos', amount: 16 },
  { product: 'Frango frito', amount: 26 },
]
// amount -> corresponde ao total daquele produto vendido no mes

// Cores do componente Cell
const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

// Gráfico de produtos populares
export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between ">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              nameKey="product" // Nome dos produtos relacionados a cada amount
              dataKey="amount" // Dado que corresponde ao tamanho que cada fatia da pizza vai ter (amount nesse caso)
              cx="50%"
              cy="50%"
              outerRadius={86} // Determina onde termina o grafico (outerRadius so funciona com o innerRadius)
              innerRadius={64} // Determina onde comeca o grafico
              strokeWidth={8} // Aumneta a borda da pizza
              labelLine={false} // Tira a linha da Label
              label={({
                // Coloca a label no grafico
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {/* dentro desse grafico conseguimos colocar varias celulas que vao indicar cada
                uma das celulas do grafico 
                -> A unica forma que tem para customizar cada celula individualmente (cada 
                uma com seu proprio estilo) a unica forma 'e passando o componente Cell
                dentro do componente Pie */}
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]} // Cor de cada celula (cada celula vai ter uma cor diferente)
                    className="stroke-background hover:opacity-80" // Muda a cor da borda de cada celula com a mesma cor de fundo
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
