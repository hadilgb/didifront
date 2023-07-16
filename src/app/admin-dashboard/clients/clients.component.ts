import { Component,ViewChild,OnInit ,ChangeDetectorRef} from '@angular/core';
import { ClientsService } from './clients.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorDefaultOptions} from '@angular/material/paginator';
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
  displayedColumns: string[] = [ 'iduser','nom','email','telephone','actions'];
users : any;
public dataSource : any = [];
constructor(private userservice: ClientsService) {
}
ngOnInit() {
    
  this.getclients();
}
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
applyFilter(filterValue: string) {
    
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
getclients(): void {
  
  this.userservice.getuser()
    .subscribe(
      users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(Object.values(users)); 
        this.dataSource.paginator = this.paginator;
        console.log(this.users);
       
      });

}
update(id : any){
  
  this.userservice.updateuser(id,"bla").subscribe(
    () => {
      
      window.location.reload();
    },
    (error) => {
    }
  );
}
}
