import { User } from './user';
import { Company } from './Company';
import { CustomMap } from './CustomMap'

const user = new User;
const company = new Company;
const customMap = new CustomMap('map');


customMap.addMaker(user);
customMap.addMaker(company);

