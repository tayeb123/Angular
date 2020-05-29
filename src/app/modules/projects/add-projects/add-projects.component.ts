import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/user';
import {ProjectService} from '../../../core/services/project/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {
  private id: string;
  private managers = [''];
  private developers = [''];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService, private projectService: ProjectService,
              private activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['',],
      managers: [''],
      devolopers: ['']
    });
  }

  ngOnInit() {


    this.userService.getAllUsers()._subscribe(users => {
      this.developers = users.filter(user => user.role === 'DEVELOPER');
      this.managers = users.filter(user => user.role === 'PROJECT_MANAGER');
    });
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.id = id;
        this.projectService.findById(this.id).subscribe(project => {
          this.formGroup.patchValue(project);
          this.projectService.findManager(this.id).subscribe(manager => {
            this.formGroup.patchValue({manager: '/users/' + manager.username});
          });
          this.projectService.findDevelopers(this.id).subscribe(developers => {
            this.formGroup.patchValue({developers: developers.map(developer => '/users/' + developer.username)});
          });
        });
      }
    });
  }

  /*
    createResponsible(name){
      return new User(name,name,name,name,name,"responsible");
    }  createDeveloper(name){
      return new User(name,name,name,name,name,"developer");
    }
  */


}
