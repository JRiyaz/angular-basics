import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { UsersService } from "../services/users/users.service";

export class CustomEmailValidator {


    static needed(controle: AbstractControl): ValidationErrors | null {
        return controle.value.length <= 0 ? { needed: true } : null;
    }

    static unique(controle: AbstractControl): Promise<ValidationErrors | null> | null {
        const UserService = new UsersService();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return UserService.emailExists(controle.value) ? resolve({ unique: true }) : resolve(null);
            }, 3000);
        });
    }
}
