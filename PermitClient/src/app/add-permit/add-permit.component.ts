import { Component, OnInit } from '@angular/core';
import { PermitsService } from '../permits.service';
import Permit from '../models/permits';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-permit',
  templateUrl: './add-permit.component.html',
  styleUrls: ['./add-permit.component.css'],
})
export class AddPermitComponent implements OnInit {
  permit: Permit = {} as Permit;
  showAlert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private permitService: PermitsService
  ) {}

  ngOnInit(): void {}

  add(): void {
    this.permitService.addPermit(this.permit).subscribe(() => {
      this.showAlert = !this.showAlert;
    });
  }
}
