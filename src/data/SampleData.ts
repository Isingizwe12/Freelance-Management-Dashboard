import {Client,Project,Payment} from '../types/models';

export const clients:Client[]=[
    {id:'c1',name:'Alice Johnson',country:'USA',email:'jane@example.com'},
    {id:'c2',name:'Bob Smith',country:'Canada'},
    
];

export const projects:Project[]=[
{id:'p1',clientId:'c1',title:'Website Development',budget:5000,status:'in-progress',paymentStatus:'unpaid'},
{id:'p2',clientId:'c2',title:'Mobile App Design',budget:3000,status:'completed',paymentStatus:'paid'},
];

export const payments:Payment[]=[
    {projectId:'p1',amount:2000,date:'2023-10-01T10:00:00Z'},
    {projectId:'p2',amount:3000,date:'2023-09-15T12:00:00Z'},
];