import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
//import { userInfo } from 'node:os';
import { AuthService } from '../../services/auth.service';
import {FireBaseService, IEmployee} from '../../services/fire-base.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss', './add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  public detailsform: FormGroup;
  public employeeList: IEmployee[] = [];
 public CurrentemployeeList = [];
  public employeeDetails: IEmployee;
  sideBarOpen = true;
  uid;

  constructor(private fb: FormBuilder,
    private modalService: NgbModal,
    private firebaseService: FireBaseService,
    private authservice: AuthService, public db: AngularFireDatabase) { 
     // this.uid = localStorage.getItem("uid");
    }

  ngOnInit(): void {
    this.get_Employees();
    //const uID = this.authservice.currentUserId;
    this.uid=this.authservice.currentUserId();
    //console.log(this.UserUid);
    console.log(this.uid);
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  get_Employees()  {
    this.firebaseService.getEmployees().subscribe((res) => {
      this.employeeList = res.map((employee) => {
        return {
          ...employee.payload.doc.data() as IEmployee,
          id: employee.payload.doc['id'],

        } as IEmployee;
      });
      console.log(this.employeeList);
      this.uid=this.authservice.currentUserId();
        console.log(this.uid);
     // this.employeeList= this.employeeList.filter((ele:any) =>{ele.userUid ==this.uid});
      // this.employeeList==[];
      this.CurrentemployeeList = [];
     this.employeeList.forEach(el =>{
       
      if(el.userUid == this.uid)
      {
        console.log(el);
        
        //this.CurrentemployeeList.unshift(el);
        //if (this.CurrentemployeeList.indexOf(el) == -1)
         this.CurrentemployeeList.push(el);
      }//this.CurrentemployeeList.push(el);
    })
       console.log(this.CurrentemployeeList);
      
    });
   /* this.uid=this.authservice.currentUserId();
        console.log(this.uid);
        console.log(this.employeeList);
    this.employeeList.forEach(el =>{
      if(el.userUid == this.uid)
      {
        console.log(el);
        this.CurrentemployeeList.push(el);
      }//this.CurrentemployeeList.push(el);
    });console.log(this.CurrentemployeeList);*/
  }


  openModal(content: TemplateRef<any>, employeeId: string): void {
    this.employeeDetails = this.employeeList.find((employee: IEmployee) => employee['id'] === employeeId);

    this.formInit(this.employeeDetails);
    this.modalService.open(content, {backdrop: 'static', centered: true});
  }

  formInit(data: IEmployee) {
    this.detailsform = this.fb.group({
      /*name: [data ? data.name : '', Validators.required],
      phone: [data ? data.phone : '', Validators.required],
      class: [data ? data.class : '', Validators.required],
      tenthpercentage: [data ? data.tenthpercentage : '', Validators.required],
      twelvepercentage: [data ? data.twelvepercentage : '',],
      diploma: [data ? data.diploma : '',],
      sgpa: [data ? data.sgpa : '',Validators.required],
      internship: [data ? data.internship : '',],
      links: [data ? data.links : '',],
      email: [data ? data.email : '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ])
      ]*/
      userUid:[data ? data.userUid : '',Validators.required],
      name: [data ? data.name : '',Validators.required],
      phone: [data ? data.phone : '',Validators.required],
      class: [data ? data.class : '',Validators.required],
      tenthpercentage: [data ? data.tenthpercentage : '',Validators.required],
      twelvepercentage: [data ? data.twelvepercentage : '',Validators.required],
      diploma: [data ? data.diploma : '',Validators.required],
      sgpa: [data ? data.sgpa : '',Validators.required],
      internship: [data ? data.internship : '',Validators.required],
      links: [data ? data.links : '',Validators.required],
      email:[data ? data.email : '',Validators.required],
    });
  }

  addEmployee() {
    console.log(this.detailsform.value);
    this.firebaseService.addEmployee(this.detailsform.value).then(resp => {
      
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  updateEmployee(employeeId: string): void {
    this.firebaseService.updateEmployee(employeeId, this.detailsform.value).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  deleteEmployee(employeeId: string): void {
    this.firebaseService.deleteEmployee(employeeId).then();
  }


}
