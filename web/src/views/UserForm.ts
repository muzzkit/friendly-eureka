import {User, IuserProps} from '../models/User';
import {View} from './View';
export class UserForm extends View<User, IuserProps>{
  

    eventsMap(): {[key: string]: () => void}{
        this.model.get('name')
        return {  
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }

    onSaveClick = (): void=> {
        this.model.save
    }
    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if(input){
            const name = input?.value;
            this.model.set({name})
        }
    }
    onSetAgeClick = (): void =>{
       this.model.setRandomAge()
    }

   


    template(): string {
        return `
        <div>
            <h1>
             User Form
            </h1>
            <div> User name: ${this.model.get('name')}</div>
            <div> User name: ${this.model.get('age')}</div>
            <Input placeholder="${this.model.get('name')}" />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random age</button>
            <button class="save-model"> Save User</button>
        </div>
        `
    }

}