import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiTypePokemonService } from '../../../services/api-type-pokemon.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss'],
})
export class EditTypeComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiTypePokemonService: ApiTypePokemonService
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      type: ['', [Validators.required]],
    });
  }

  add(): void {
    this.apiTypePokemonService
      .add(this.editForm.value)
      .subscribe((data) => this.router.navigate(['/pokemon']));
  }
}
