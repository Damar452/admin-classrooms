import { Injectable } from '@angular/core';
import { AuthUser, User } from '../../models/auth/auth.type';
import { Observable, of } from 'rxjs';
import { userList } from 'src/app/mocks/user.mock';
import { LocalStorageService } from '../utilities/local-storage.service';
import { userLoggedKey } from '../../consts/storage-keys.consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService) { }

  public loginUser(userForm: AuthUser): Observable<User | undefined> {
    const userByEmail = this.getUserByEmail(userForm.email);
    const verifiedUser = userByEmail?.password === userForm.password;
    if(verifiedUser) {
      return of(userByEmail);
    } else {
      return of(undefined);
    }
  }

  public logoutUser() {
    this.localStorageService.removeData(userLoggedKey);
    return of(true);
  }

  public validateUserLogged(): boolean {
    const userLogged = this.localStorageService.getData(userLoggedKey);
    if(!userLogged) return false;
    const userByEmail =  this.getUserByEmail(userLogged.email);
    return userLogged.password === userByEmail?.password;
  }

  private getUserByEmail(email: string) {
    return userList.find((user) => user.email === email);
  }
}
