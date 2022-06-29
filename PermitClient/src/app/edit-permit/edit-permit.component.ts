import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnaryFunction } from 'rxjs';
import Permit from '../models/permits';
import { PermitsService } from '../permits.service';

@Component({
  selector: 'app-edit-permit',
  templateUrl: './edit-permit.component.html',
  styleUrls: ['./edit-permit.component.css'],
})
export class EditPermitComponent implements OnInit {
  id: number | null = 0;
  permit: Permit = {} as Permit;
  showAlert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private permitService: PermitsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.permitService.getPermitById(this.id).subscribe((p) => {
      this.permit = p;
    });
  }
  update(): void {
    if (confirm('Are you sure you want to update this permit?')) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.permitService.editPermit(this.id, this.permit).subscribe(() => {
        this.showAlert = !this.showAlert;
      });
    }
  }
}
