import { Component } from '@angular/core';
export interface Element {
  userid : string;
  nom: string;
  email : string;
  telephone : String;
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent {
  displayedColumns: string[] = [ 'id','nom','email','telephone','actions'];
users : Array<any> =[
  {
    userid : "653222655659656526",
    nom :"hadil",
    email :"hadil25@gmail.com",
    telephone : "25320636"
  },
  {
    userid : "653222655659655822",
    nom :"rania",
    email :"hadi29@gmail.com",
    telephone : "25320966"
  },
  {
    userid : "653222523659656526",
    nom :"ali",
    email :"hadilpl@gmail.com",
    telephone : "25620666"
  },
  {
    userid : "653222657889656526",
    nom :"amir",
    email :"hadilg5@gmail.com",
    telephone : "25820666"
  },
  {
    userid : "653263255659656526",
    nom :"adel",
    email :"hadill5@gmail.com",
    telephone : "25360666"
  },
];
}
