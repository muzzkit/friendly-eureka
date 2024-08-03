import {Request, Response } from "express";
import {get, controller, bodyValidator, post} from './decorators';




@controller('auth')
class LoginControllers{

    @get('login')
    getLogin(req: Request, res: Response): void{
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"/>
    
                    <button> Submit</button>
            </div>
            </form>
        `)
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
    const {email, password} = req.body;
    if(email==='hi@hi.com' && password === 'password'){
     //mark this person as logged in
 
     req.session = {loggedIn: true}
 
     //rdirect tehm to the root route
 
     res.redirect('/')
    }else{
     res.send('Invalid email or password')
    }
   
 };
 
        @get('/logout')
        getLogout (req:Request, res:Response)  {
            req.session = undefined;
            res.redirect('/');

        };
}