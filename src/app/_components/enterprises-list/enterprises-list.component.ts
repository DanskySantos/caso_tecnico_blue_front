import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EnterprisesService} from "../../_services/enterprises.service";
import {Enterprise} from "../../_models/enterprise";
import {VoteService} from "../../_services/vote.service";
import {SendVote} from "../../_models/sendVote";
import {VoteResponse} from "../../_models/voteResponse";
import {UsersService} from "../../_services/users.service";
import {User} from "../../_models/user";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-enterprises-list',
  templateUrl: './enterprises-list.component.html',
  styleUrls: ['./enterprises-list.component.css']
})
export class EnterprisesListComponent implements OnInit {

  form: FormGroup;
  enterprisesList: Enterprise[];
  user: User = JSON.parse(localStorage.getItem('user'));
  public showMyMessage = false

  constructor(private voteService: VoteService,
              private usersService: UsersService,
              private enterprisesService: EnterprisesService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUser();
    this.configurarForm();
    this.listEnterprises();
    this.isVoted();
  }

  private getUser() {
    this.usersService.getUser(this.user.email).subscribe(updatedUser => {
      localStorage.setItem('user', JSON.stringify(updatedUser))
    });
  }

  private configurarForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      image: new FormControl('')
    });
  }

  private listEnterprises() {
    this.enterprisesService.listEnterprises().subscribe(enterprises => {
      this.enterprisesList = <Enterprise[]>enterprises;
    });
  }

  isVoted() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user.voteId === null) {
      return this.showMyMessage = true;
    } else {
      return this.showMyMessage = false;
    }
  }

  async vote(enumName: string) {
    const send: SendVote = {
      user: JSON.parse(localStorage.getItem('user')),
      enterprise: enumName
    };
    await this.voteService.vote(send).subscribe((res: VoteResponse) => {
      console.log(res)
        setTimeout(() => {
          this.showMyMessage = false
        }, 3000)
    },error => {
      console.log(error)
      this.toastr.error('You already voted!')
    });

  }
}
