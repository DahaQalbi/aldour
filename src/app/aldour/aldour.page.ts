import { Component, OnInit } from '@angular/core';
import { IonContent, IonList, IonLabel, IonTabButton, IonButton, IonInput, IonRow, IonCol, IonGrid,IonSelect,IonSelectOption, IonItem, IonIcon } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-aldour',
  templateUrl: './aldour.page.html',
  styleUrls: ['./aldour.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonGrid, IonCol, IonRow, IonInput, IonButton, IonTabButton, IonLabel, IonList, IonContent,IonSelect,IonSelectOption,ReactiveFormsModule]
})
export class AldourPage implements OnInit {


  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      companyName: ['', Validators.required],
      projectName: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      officialContact: ['', Validators.required],
      propertyTypes: ['', Validators.required],
      mobileNo: ['', Validators.required],
      officeAdress: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
