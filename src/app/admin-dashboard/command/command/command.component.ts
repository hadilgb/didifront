import { Component } from '@angular/core';
import { CartserviceService } from '../../../first-navbar/cartservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  commandItems: any[] = [];
  commandAcc : any[]=[];
  commandref : any [] = []
  name :any ;

  constructor(private location: Location ,private router :Router,private cartService: CartserviceService){}
  ngOnInit() {
    this.getAllCommands();
  }
  getAllCommands():void{
    
    this.cartService.getCommandItems().subscribe(
      (data) => {
        this.commandItems = data
        this.commandAcc = this.commandItems.filter((command:any) => command.etat === "confirme");
        this.commandref = this.commandItems.filter((command:any) => command.etat === "annuler");
        this.commandItems = this.commandItems.filter((command:any) => command.etat === "enattente");
        
      },
      (error) => {

      }
      );
    }
    getProductById(productId: any): any {
     return  this.cartService.getNameProduit(productId);
    }
    confirmerCommande(idcommande: any): void {
      const confirmAlert = window.confirm("Are you sure you want to confirm this command?");
    
      if (confirmAlert) {
        this.cartService.confirmCommande(idcommande, "confirme").subscribe(() => {
          window.alert("command was confirmed")
          window.location.reload();

        });
      }
    }
    refuserCommande(idcommande :any):void{
      const confirmAlert = window.confirm("Are you sure you want to decline this command?");
      if (confirmAlert) {

      this.cartService.confirmCommande(idcommande,"annuler").subscribe(()=>{

        window.alert("command was declined")
        window.location.reload();
      })

    } }
}
