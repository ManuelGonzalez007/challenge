import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Medicamentos } from 'Models/Medicamentos';
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
  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.getMeds();
  }

  getMeds() {
    this.service.getMeds().subscribe((data) => {
      this.meds = data.data.pills;
      this.rings = data.data.rings;
      this.patches = data.data.patches;
    });
  }
}
