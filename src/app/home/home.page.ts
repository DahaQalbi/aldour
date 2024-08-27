import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonList,
  IonLabel,
  IonTabButton,
  IonButton,
  IonInput,
  IonRow,
  IonCol,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { ApicallService } from '../apicall.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonItem,
    IonGrid,
    IonCol,
    IonRow,
    IonInput,
    IonButton,
    IonTabButton,
    IonLabel,
    IonList,
    IonContent,
    IonSelect,
    IonSelectOption,
    ReactiveFormsModule,
  ],
})
export class HomePage {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,

    private toast: ToastService
  ) {}
  public apicall: ApicallService = inject(ApicallService);
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
    console.log(this.myForm);
    this.apicall.signup(this.myForm.value).subscribe((res) => {
      if (res.status === 200) {
        this.toast.showSuccess('Data Inserted');
        this.myForm.reset();
      } else {
        this.toast.showError('Something Went Wrong');
      }
    });
  }
}
