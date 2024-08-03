import express, {Request, Response} from 'express'
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRoruter';
import './controllers/loginControllers';
import './controllers/RootController';
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['fyguwehi']}))
app.use(AppRouter.getInstance())

app.listen(3000, ()=>{
    console.log('Server conected')
})