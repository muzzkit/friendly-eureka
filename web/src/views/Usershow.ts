import { View } from "./View";
import {User, IuserProps} from '../models/User'

export class UserShow extends View <User, IuserProps>{
   template(): string{
    return `
    <div>
    <h1>User Detail</h1>
    <div> User Name: ${this.model.get('name')}</div>
    <div> User Age: ${this.model.get('age')}</div>
    </div>
    `
   }
}