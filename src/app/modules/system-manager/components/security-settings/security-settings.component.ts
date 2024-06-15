import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecuritySettings } from 'src/app/models/securitySettings.model';
import { SecuritySettingsService } from '../../services/security-settings.service';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.scss'],
  providers: [MessageService]
})
export class SecuritySettingsComponent {
  securitySettingsForm!: FormGroup;
  constructor(private fb: FormBuilder, private messageService: MessageService, private securitySettingsService: SecuritySettingsService) { }

  // securitySettings: SecuritySettings | undefined;
  validationMessages = {
    minUserIdLength: {
      required: 'Minimum User ID length is required.'
    }
  }

  ngOnInit() {
    this.securitySettingsForm = this.fb.group({
      minUserIdLength: ['', Validators.required],
      minPasswordLength: ['', Validators.required],
      maxPasswordTenure: ['', Validators.required],
      passwordExpiryAlert: ['', Validators.required],
      retainPasswordHistory: ['', Validators.required],
      passwordComplexity: ['low', Validators.required],
      lockoutAfter: ['', Validators.required],
      sessionTimeout: ['', Validators.required],
      remarks: ['']
    });

    // this.securitySettingsService.getSecuritySettings()
    //   .subscribe(settings => this.securitySettingsForm.patchValue(settings));
  }
  saveSecuritySettings() {
    if (this.securitySettingsForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const securitySettings: SecuritySettings = {
        minUserIdLength: this.securitySettingsForm.value.minUserIdLength,
        minPasswordLength: this.securitySettingsForm.value.minPasswordLength,
        maxPasswordTenure: this.securitySettingsForm.value.maxPasswordTenure,
        passwordExpiryAlert: this.securitySettingsForm.value.passwordExpiryAlert,
        retainPasswordHistory: this.securitySettingsForm.value.retainPasswordHistory,
        passwordComplexity: this.securitySettingsForm.value.passwordComplexity,
        lockoutAfter: this.securitySettingsForm.value.lockoutAfter,
        sessionTimeout: this.securitySettingsForm.value.sessionTimeout,
        remarks: this.securitySettingsForm.value.remarks
      };

      // Submit the securitySettings object to your service or backend
      console.log('Form submitted!', securitySettings);
      this.messageService.add({ severity: 'success', summary: 'Settings Saved Successfull', detail: 'Message Content' });
    }
  }

  cancelClick() {

  }
}
