import { AbstractControl } from "@angular/forms";

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value != "1234") {
                resolve({ invalidOldPassword: true });
            } else {
                resolve(null);
            }
        })
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPass = control.get('newPassword');
        let confirmPass = control.get('confirmPassword');

        if (newPass?.value != confirmPass?.value) {
            return { passwordMisMatch: true };
        } else {
            return null;
        }
    }

}