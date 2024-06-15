import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NewRoleService } from '../../services/new-role.service';
import { RegNewRole } from 'src/app/models/newRole.model';




@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
  providers: [MessageService]
})
export class NewRoleComponent implements OnInit {
  RoleForm!: FormGroup;




  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService,
    private newRoleService: NewRoleService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
   
    this.RoleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      parents: []
      //parents: this.fb.array(this.parents.map(parent => this.createParentGroup(parent)))
    });
  }






  saveRoleClick() {
    if (this.RoleForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {
      const regNewRole: RegNewRole = {
        newRole: this.RoleForm.value.newRole,
        description: this.RoleForm.value.description
      };
      console.log('Form submitted!', regNewRole);
      this.messageService.add({ severity: 'success', summary: ' New Role Registered Successfully', detail: 'Message Content' });
    }
  }

  backToRoles() {
    this.router.navigateByUrl('/roles');
  }
}

