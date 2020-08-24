import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {UserService} from '../../services/user.service';
import {Contact} from '../../models/contact';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [UserService, AuthGuard]
})
export class ContactsComponent implements OnInit {
  contacts: any;
  contact: Contact = new Contact();
  visibleId: string;
  searchValue = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.visibleId = '0';
    if (this.searchValue === '') {
      this.getContacts();
    }
  }

  getContacts() {
    this.userService.getUserContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  addContact(name, phone) {
    this.userService.addUserContact(name, phone).subscribe(data => {
      this.ngOnInit();
    });
  }

  deleteContact(id) {
    if (this.searchValue === '') {
      this.userService.deleteUserContact(id).subscribe(data => {
        this.ngOnInit();
      });
    } else {
      this.userService.deleteUserContact(id).subscribe(data => {
        window.location.reload();
      });
    }
  }

  editContact(id, name, phone) {
    if (this.searchValue === '') {
      this.userService.editUserContact(id, name, phone).subscribe(data => {
        this.ngOnInit();
      });
    } else {
      this.userService.editUserContact(id, name, phone).subscribe(data => {
        window.location.reload();
      });
    }
  }

  editClicked(id) {
    this.visibleId = id;
    return this.visibleId;
  }

  searchContacts(request) {
    this.searchValue = request;
    this.userService.searchUserContacts(request).subscribe(data => {
      this.contacts = data;
      this.ngOnInit();
    });
  }
}
