import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../_services/account.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {User} from "../../_models/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      localStorage.set('user', response)
      this.router.navigateByUrl('/enterprises-list')
    },error => {
        this.toastr.error('Invalid Credentials!')
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  isToShow() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user.voteId === null) {
      return true;
    } else {
      return false;
    }
  }
}
