export interface SecuritySettings {
    minUserIdLength: number;
    minPasswordLength: number;
    maxPasswordTenure: number; // Days
    passwordExpiryAlert: number; // Days
    retainPasswordHistory: number; // Days
    passwordComplexity: string; // low, medium, high
    lockoutAfter: number; // Days (consecutive invalid attempts)
    sessionTimeout: number; // Minutes (idle session)
    remarks: string;
  }