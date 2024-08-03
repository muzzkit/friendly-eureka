import { Model } from "./Model";
import { Attributes } from "./Attritubes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";
export interface IuserProps {
    id?: number
    name?: string;
    age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<IuserProps>{

    static buildUser(attrs: IuserProps): User{
        return new User(
            new Attributes<IuserProps>(attrs),
            new Eventing(),
            new ApiSync<IuserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, IuserProps>{
      return new Collection<User, IuserProps>(
        rootUrl,
        (json: IuserProps) => User.buildUser(json)
      )
    }

    setRandomAge(): void{
        const age = Math.round(Math.random()*100);
        this.set({age});
    }
}


