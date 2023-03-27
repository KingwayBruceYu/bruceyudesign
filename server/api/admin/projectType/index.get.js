import { getDatas } from '~/server/db'

export default defineEventHandler( async event => {
    return getDatas( 'projectType' , [ 'index' , 'text' ] )
})