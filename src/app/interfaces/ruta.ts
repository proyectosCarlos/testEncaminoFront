export class Ruta {
    id?: number
    nombre: string
    descripcion: string
    moto: string
    calificacion: string
    latOrigen: string
    lngOrigen: string
    latFinal: string
    lngFinal: string
    created_at?: string
    updated_at?: string     

    
    constructor(nombre='', descripcion='', moto='', calificacion='', latOrigen='' , lngOrigen='',
    latFinal='', lngFinal=''){
        this.nombre= nombre
        this.descripcion= descripcion
        this.moto= moto
        this.calificacion = calificacion
        this.latOrigen= latOrigen
        this.lngOrigen = lngOrigen
        this.latFinal = latFinal
        this.lngFinal = lngFinal  
          
       }
}
