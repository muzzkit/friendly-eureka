import { CollectionView } from "./CollectionView";
import { User, IuserProps } from "../models/User";
import {UserShow} from './Usershow';

export class UserList extends CollectionView<User, IuserProps>{
    renderItem(model:User, itemParent:Element): void{
        new UserShow(itemParent, model).render();
    }
}