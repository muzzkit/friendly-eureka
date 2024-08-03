import { View } from "./View";
import { User, IuserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./Usershow";

export class UserEdit extends View <User, IuserProps>{
    regionsMap(): {[key: string]: string}{
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }

    onRender(): void {
       new UserShow(this.regions.userShow, this.model).render();
       new UserForm(this.regions.userShow, this.model).render();
    }


    template(): string {
        return `
        <div>
            <div class="user-show"></div>
            <div class="user-form"></div>
        </div>
        `
    }
}