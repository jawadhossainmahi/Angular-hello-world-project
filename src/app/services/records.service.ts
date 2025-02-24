import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["jawad Hossain Mahi", "242002023", "male"]
  info2: string[] = ["Nafiza Ahmed Nabila", "242002024", "female"]
  info3: string[] = ["Farishta", "242002025", "female"]

  getInfo1(): string[] {
    return this.info1
  }
  getInfo2(): string[] {
    return this.info2
  }
  getInfo3(): string[] {
    return this.info3
  }
  constructor() { }
}
