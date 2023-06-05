import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() sidebarIsOpen: boolean = true;
  @Input() isLogged = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public logout() {
    this.authService.logoutUser().pipe(takeUntil(this.unsubscribe$))
    .subscribe(resp => resp && this.router.navigate(['/login'])).add(() => {
      this.unsubscribe$.next(); 
      this.unsubscribe$.complete(); //It is terminated since it is not a real http request
    })
  }
}
