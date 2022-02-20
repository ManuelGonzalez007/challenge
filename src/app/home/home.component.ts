import { Component, OnInit } from '@angular/core';
import { Medicamentos } from 'Models/Medicamentos';
import { Preguntas } from 'Models/Preguntas';
import { HomeService } from 'Servicio/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  meds: Medicamentos[] = [];
  rings: Medicamentos[] = [];
  patches: Medicamentos[] = [];
  todasRespuestas: Preguntas[] = [];
  indicePreguntaSeleccionada: number = -1;
  image: string = '';

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.getMeds();
    this.getRespuestas();
    this.image = '../../assets/abajo.png';
  }

  getMeds() {
    this.service.getMeds().subscribe((data) => {
      this.meds = data.data.pills;
      this.rings = data.data.rings;
      this.patches = data.data.patches;
    });
  }

  getRespuestas() {
    this.service.getRespuestas().subscribe((data) => {
      this.todasRespuestas = data.data;
    });
  }

  flechaTouch(index: number) {
    if (this.indicePreguntaSeleccionada === index) {
      this.indicePreguntaSeleccionada = -1;
      this.image = '../../assets/abajo.png';
    } else {
      this.indicePreguntaSeleccionada = index;
      this.image = '../../assets/arriba.png'
    }
  }
}
