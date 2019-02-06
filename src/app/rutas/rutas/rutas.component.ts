import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { latLng, tileLayer, circle, marker, polygon } from 'leaflet';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Ruta } from 'src/app/interfaces/ruta';
import { NgForm } from '@angular/forms';
import { Opinion } from 'src/app/interfaces/opinion';


@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class RutasComponent implements OnInit {

  latOrigen = 3.4284331947489153
  lngOrigen=	-76.519775390625

  latFinal= 4.250551318687781
  lngFinal=	-75.92926025390625

  idruta = 0

  opinion: Opinion = new Opinion


  // options = {
  //   layers: [
  //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; OpenStreetMap contributors'
  //     }),
    
  //    // marker([ 46.879966, -121.726909 ],{ interactive: true, draggable: true})
  //   ],   

  //   zoom: 7,
  //   center: latLng([ 46.879966, -121.726909 ])
  // };

  // layers= [
  //   marker([ 46.879966, -121.726909 ],{ interactive: true, draggable: true}).on('dragend', function(event){
  //     let lat = event.target._latlng.lng
  //     console.log(lat)
  //   })
  // ]




  constructor(config: NgbModalConfig, public modalService: NgbModal, public servicio: ServiciosService) { }

  open(content) {
    this.modalService.open(content);
  }
  currentRate = 8; 


  options = {
  layers: [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }),  
  
  ],   

  zoom: 7,
  center: latLng([ 2.943040910055132, -75.8056640625 ])
};

layers= [
  marker([ this.latOrigen, this.lngOrigen ]),

  marker([ this.latFinal, this.lngFinal ]),
]

  ngOnInit() {
    this.servicio.obtenerRutas()
    .subscribe(res=>{
      this.servicio.rutas = res as Ruta[]
    })
  }

  seleccionarCliente(ruta: Ruta){
    this.servicio.rutaSeleccionada = ruta
    this.latOrigen = parseInt(ruta.latOrigen)
    this.lngOrigen = parseInt(ruta.lngOrigen)
    this.latFinal = parseInt(ruta.latFinal)
    this.lngFinal = parseInt(ruta.lngFinal)
    this.idruta =  ruta.id
    
  }

  guardarOpinion(form: NgForm){   

    this.servicio.guardarOpinion(this.opinion)
    .subscribe(
      res=>{console.log(res)}
    )
  }



}
