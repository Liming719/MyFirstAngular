import { Component, OnInit } from '@angular/core';
import { SignUpInfoService } from '../sign-up-info.service';
import { SignupInfo } from './SignUpInfo';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sign-up-info',
  templateUrl: './sign-up-info.component.html',
  styleUrls: ['./sign-up-info.component.scss']
})
export class SignUpInfoComponent implements OnInit {

  SignupInfoList: SignupInfo[]=[];
  constructor(
    private signupinfoService: SignUpInfoService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  private log(msg: string){
    this.messageService.add(`${msg}`);
  }

  getInfo(){
    this.signupinfoService.getSignupInfo().subscribe(infoList => this.SignupInfoList = JSON.parse(infoList));
  }

}



/*
      GUID:data.GUID,
      Name: data.Name,
      Company: data.Company,
      Position: data.Position,
      PhoneNO: data.PhoneNO,
      TelNO: data.TelNO,
      Email: data.Email,
      NumOfVisitors: data.NumOfVisitors, 
      Questions: data.Questions,
      SignupDate: data.SignupDate,
      Notify:data.Notify

*/