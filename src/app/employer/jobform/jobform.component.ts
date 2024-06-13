import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/services/skill.model';
import { SkillsService } from 'src/app/services/skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { job } from 'src/app/services/job.model';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent implements OnInit {
  allSkills:skills[]=[];
  empid1:number=0; 
  constructor(private skillservice:SkillsService,
              private router:Router,
              private activatedRoute:ActivatedRoute,
            private job:JobsService) { }
  
  loaddata(){
    this.skillservice.getSkills().subscribe({
      next:(response)=>{
        this.allSkills=response;
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
   
  ngOnInit(): void {
    
  
   this.loaddata(); 
  }
  addjob(myForm:any){
    let empid1=this.activatedRoute.snapshot.paramMap.get('empid');
    console.log("the id is",empid1);
    let ids: number = Number(empid1);
    console.log("Main id is",ids);
    let newjob:job={
      jobId:0,
      employeeId:ids,
      jobDesigntion:myForm.value.desig,
      rolesandResponsibility:myForm.value.role,
      jobSalary:myForm.value.salary,
      skillsneeded:myForm.value.skills,
      eligibility:myForm.value.edu,
      experience:myForm.value.exp,
      jobCountry:myForm.value.country,
      jobState:myForm.value.state,
      jobCity:myForm.value.city,
      jobStatus:"Open"    
    }
    this.job.addjob(newjob).subscribe({
      next: (response) => {
        this.router.navigate(['empmain']);
      },
      error: (err) => {
        console.error('Error occurred:', err);
        if (err.error && err.error.errors) {
          for (let key in err.error.errors) {
            console.error(`${key}: ${err.error.errors[key]}`);
          }
        }
      }
    });
   
  }
  goto(){
    console.log("hi");
  }
}
