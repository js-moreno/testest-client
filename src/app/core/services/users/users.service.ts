import { Injectable } from '@angular/core';
import { Service, Resource } from 'ngx-jsonapi';

export class User extends Resource {
  public attributes = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  };
}

@Injectable({
  providedIn: 'root',
})
export class UsersService extends Service<User> {
  public resource = User;
  public type = 'users';
}
