import { Component, OnInit } from '@angular/core';
import { EmployerService} from 'src/app/services/employer.service';
import { empdetails} from 'src/app/services/empdetails.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent implements OnInit {

  constructor(private router:Router,
    private employer:EmployerService
  ) { }

  ngOnInit(): void {
  }
  addemployer(myForm:any){
    
    let newemployer:empdetails={
      employeeID:0,
      employeeName:myForm.value.EmpName,
      employeeCompany:myForm.value.EmpCompany,
      employeeCountry:myForm.value.EmpCountry,
      employeeState:myForm.value.EmpState,
      employeeCity:myForm.value.EmpCity,
      employeePhoneNo:myForm.value.EmpPhone,
      employeeEmail:myForm.value.EmpEmail,
      employeePassword:myForm.value.EmpPassword,
      
    }

    this.employer.addemployee(newemployer).subscribe({
     next:(response)=>{this.router.navigate(['employer/emphome'])},
     error:(err)=>{console.log(err)}
   })
   
  }
}


