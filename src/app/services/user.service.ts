import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  loginUser(login: string, password: string) {
    this.http.get('http://localhost:3000/users?login=' + login + '&password=' + password).subscribe(data => {
      if (data[0]) {
        this.authenticated = true;
      }
    });
    return this.authenticated;
  }

  addUserContact(name: string, phone: string) {
    const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU';
    const body = {avatar, name, phone};
    return this.http.post('http://localhost:3000/contacts', body);
  }

  deleteUserContact(id: string) {
    return this.http.delete('http://localhost:3000/contacts/' + id);
  }

  editUserContact(id: string, name: string, phone: string) {
    const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU';
    const body = {avatar, name, phone};
    return this.http.patch('http://localhost:3000/contacts/' + id, body);
  }

  getUserContacts() {
    return this.http.get('http://localhost:3000/contacts');
  }

  searchUserContacts(request: string) {
    return this.http.get('http://localhost:3000/contacts?q=' + request);
  }
}
