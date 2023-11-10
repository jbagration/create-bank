export type SecurityFormType =
    | {
          currentPassword: string
          password: string
          confirmPassword: string
          securityQuestion: string
          securityAnswer: string
      }
    | { [key: string]: string }
