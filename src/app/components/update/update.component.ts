import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    project: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {
    console.log('ss');
  }

  resetForm() {
    this.updateForm.reset();
  }

  submit() {
    // ...
  }
}
