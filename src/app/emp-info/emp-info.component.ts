import { Component } from '@angular/core';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css',
  providers: [RecordsService]
})
export class EmpInfoComponent {

  infoRecive1: string[] = [];
  infoRecive2: string[] = [];
  infoRecive3: string[] = [];

  constructor(private ourservice: RecordsService) { }

  getInfoFromServiceClass1() {
    this.infoRecive1 = this.ourservice.getInfo1();
  }
  getInfoFromServiceClass2() {
    this.infoRecive2 = this.ourservice.getInfo2();
  }
  getInfoFromServiceClass3() {
    this.infoRecive3 = this.ourservice.getInfo3();
  }

}
