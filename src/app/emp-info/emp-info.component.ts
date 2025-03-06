import { Component } from '@angular/core';
import { RecordsService } from '../services/records.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css',
  providers: [RecordsService]
})
export class EmpInfoComponent {
  records: { posts: any[] } = { posts: [] };
  limit: number = 10;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getRecords();
  }



  getRecords(limit: number=10) {
    this.http.get(`https://dummyjson.com/posts?limit=${limit}`).subscribe((data: any) => {
      this.records = data;
    });
  }

}
