import { Component, OnInit } from '@angular/core';
import { PermitsService } from '../permits.service';
import Permit from '../models/permits';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-permit-list',
  templateUrl: './permit-list.component.html',
  styleUrls: ['./permit-list.component.css'],
})
export class PermitListComponent implements OnInit {
  constructor(private PermitService: PermitsService) {}

  permits: Permit[] = [];

  ngOnInit(): void {
    this.PermitService.getPermits().subscribe((data) => {
      this.permits = data;
      console.log(this.permits);
    });
  }

  deletePermit(id: number): void {
    if (confirm('Are you sure you want to delete this permit?'))
      this.PermitService.deletePermit(id).subscribe(() => {
        this.permits = this.permits.filter((permit) => permit.permitId !== id);
      });
  }
}
