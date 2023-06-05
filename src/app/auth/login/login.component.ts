import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userLoggedKey } from 'src/app/core/consts/storage-keys.consts';
import { AuthUser, User } from 'src/app/core/models/auth/auth.type';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AlertsService } from 'src/app/core/services/utilities/alerts.service';
import { LocalStorageService } from 'src/app/core/services/utilities/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private alertService: AlertsService,
    private formBuild: FormBuilder, 
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.setForm();
  }

  public onLogin(form: AuthUser){
    this.authService.loginUser(form).subscribe((user: User | undefined) => {
      if(user) {
        this.localStorageService.setData(userLoggedKey, user);
        this.router.navigate(['/']);
      }
      else {
       this.alertService.notifyAlert('¡Email or password was not correct!', 'warning')
      }
    });
  }

  public getValidation(controlName: string, validator: string) {
    const control = this.loginForm.get(controlName);
    return control?.touched && control.hasError(validator);
  }

  private setForm() {
    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
