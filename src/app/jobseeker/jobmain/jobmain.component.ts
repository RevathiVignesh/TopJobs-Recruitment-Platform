import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';
import { jsdetails } from 'src/app/services/jsdetails.model';
import { job } from 'src/app/services/job.model';
import { JobsService } from 'src/app/services/jobs.service';
import { EmployerService } from 'src/app/services/employer.service';
import { empdetails } from 'src/app/services/empdetails.model';
import { application } from 'src/app/services/application.model';
import { ApplicationsService } from 'src/app/services/applications.service';
@Component({
  selector: 'app-jobmain',
  templateUrl: './jobmain.component.html',
  styleUrls: ['./jobmain.component.css']
})
export class JobmainComponent implements OnInit {
  jsdet:jsdetails={
    jsId:0,
    jsName:"",
    jsCountry:"",
    jsState:"",
    jsCity:"",
    jsGender:"",
    jsPhoneNo:"",
    jsEmail:"",
    jsPassword:""
  }

  alljobs:job[]=[];
allemp:empdetails[]=[];
  constructor(private activatedRoute:ActivatedRoute,
    private jobseeker:JobseekerService,
    private jobservice:JobsService,
    private empservice:EmployerService,
    private appservice:ApplicationsService
  ) { }

  loaddata(){
    this.jobservice.getjob().subscribe({
      next:(response)=>{
        this.alljobs=response;
        console.log(response);
        this.alljobs.forEach(job => {
          this.stvalue[job.jobId] = "Apply";
          this.isDisabled[job.jobId] = false;
        });
        console.log("ST VALUE",this.stvalue)
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this.empservice.getemployee().subscribe({
      next:(response)=>{
        this.allemp=response;
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  filterValue="";
  filterValue2=""
     
  stvalue: { [jobId: number]: string } = {};
  isDisabled: { [jobId: number]: boolean } = {};
  ngOnInit(): void {
    this.loaddata();
   
    let email=this.activatedRoute.snapshot.paramMap.get('jsemail');
    if(email!=null)
      this.jobseeker.getjsbyemail(email).subscribe({
        next: (response) => {
          console.log('API response:', response);
          this.jsdet = response;
          console.log('Employerdet updated:', this.jsdet);
          console.log("ID is",this.jsdet.jsId);

        },
        error: (err) => console.log('Error occurred:', err)
      });
      
  }
 
  jsid1=this.jsdet.jsId;
  application(jobid:number){
    console.log("The Jobseeker id is",this.jsdet.jsId);
    console.log("The Job id is",jobid);
     this.stvalue[jobid] = "Applied";
     this.isDisabled[jobid] = true;

     let newapplication:application={
      applicationId:0,
      jobId:jobid,
      jsId:this.jsdet.jsId,
      status:"No" //Waiting
    }
    this.appservice.addapplication(newapplication).subscribe({
      next:(response)=>{},
      error:(err)=>{console.log(err)}
    })
  }

}
