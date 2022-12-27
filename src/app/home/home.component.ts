import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../_services/users.service";
import {User} from "../_models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router,
              private usersService: UsersService) { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterModel(event: boolean) {
    this.registerMode = event;
  }

  isUserLogged () {
    const user = localStorage.getItem('user')

    if (user === null) {
      return true;
    } else {
      return false;
    }
  }

  isVoted() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user === null) {
      return true;
    } else {
      return false;
    }
  }

  isToShow() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user.voteId === null) {
      return true;
    } else {
      return false;
    }
  }

  private getUser() {
    this.usersService.getUser(this.user.email).subscribe(updatedUser => {
      localStorage.setItem('user', JSON.stringify(updatedUser))
    });
  }
}
