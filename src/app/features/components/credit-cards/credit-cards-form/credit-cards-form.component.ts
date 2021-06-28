import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreditCardsService } from 'src/app/core/services/credit-cards/credit-cards.service';

@Component({
  selector: 'app-credit-cards-form',
  templateUrl: './credit-cards-form.component.html',
  styleUrls: ['./credit-cards-form.component.sass'],
})
export class CreditCardsFormComponent implements OnInit {
  form = this.formBuilder.group({
    number: [
      '',
      [
        Validators.required,
        Validators.maxLength(19),
        Validators.minLength(16),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    franchise: ['', Validators.required],
    due_date_year: ['', Validators.required],
    due_date_month: [
      '',
      [Validators.required, Validators.min(1), Validators.max(12)],
    ],
    verification_code: [
      '',
      [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(3),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    is_principal: [false],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreditCardsFormComponent>,
    private creditCardsService: CreditCardsService,
    private toastr: ToastrService
  ) {}

  close() {
    this.dialogRef.close();
  }

  new() {
    if (this.form.valid) {
      let creditCard = this.creditCardsService.new();
      creditCard.attributes = this.form.value;
      creditCard.save().subscribe({
        next: () => {
          this.dialogRef.close();
          window.location.reload();
        },
        error: (error) => {
          this.toastr.error(error.errors[0].detail, '¡Error!');
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {}
}
