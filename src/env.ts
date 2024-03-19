/* ARQUIVO QUE VALIDA AS VARIAVEIS AMBIENTE 
NA APLICACAO ANTES DE UTILIZARMOS ELAS */
import { z } from 'zod'

// -> O zood auxilia nessa validacao 
const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)
// -> import.meta.env -> local de onde vem as variaveis ambiente do vite
// -> O parse valida o schema (se bate com as variaveis definidas ou nao)