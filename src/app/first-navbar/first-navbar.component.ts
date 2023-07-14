import { Component } from '@angular/core';
import { CartserviceService } from './cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-navbar',
  templateUrl: './first-navbar.component.html',
  styleUrls: ['./first-navbar.component.css']
})
export class FirstNavbarComponent {
  constructor(private router :Router,private cartService: CartserviceService){}
  hp : any = "648b3bd899f45e630668ee3d";
  cl : any  = "648b3d4399f45e630668ee45";
  cartItems: any[] = [];
  clearcart: any[] = [];
  commandItems: any[] = [];
  commandAccepted: any[] = [];
  commandRefused: any[] = [];
  loggedIn: boolean=false;
  affiche: boolean=true;
nbrCommands  :any ;
nbrproduit :any ;
nbrproduitAccepted :any ;
test: any;
nbrproduitRefus :any ;
  ngOnInit() {
    this.getAllCommands();
    this.cartItems = this.cartService.cartItems;
    this.loadCartItemsFromLocalStorage();
    const role = localStorage.getItem('role');
    if(role=="user"){
      this.loggedIn=true;
    }else{
      this.loggedIn=false
    }
    if(role=="admin"){
      this.affiche=false;
    }
    if(role=="none"){
      this.affiche=false;
    }
    this.nbrCommands= this.commandItems.length;
    this.nbrproduit= this.cartItems.length;
    this.nbrproduitAccepted= this.commandAccepted.length;
    this.nbrproduitRefus= this.commandRefused.length;
  }
  op : boolean =false;
  category : String = "all categories";
  categories : Array <String> =["all categories","Clothing","Home","Electronics","furniture"]
  open() : void {
   this.op=true;
  }
  changer (index : number): void{
    this.category = this.categories[index];
  }
  loadCartItemsFromLocalStorage(): void {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
      this.clearcart=this.cartItems ;

    }
  }
  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }
  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
  }
  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.prixtotale;
    }
    return totalPrice;
  }
  acheter(): void {
    const role = localStorage.getItem('role');
    if(role=="user"){
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
    
      const formattedDate = currentDate.toLocaleString('en-US', options);
      const commande = {
        email:localStorage.getItem('email'),
        date: formattedDate,
        prixTT: this.calculateTotalPrice(),
        etat:"enattente",
        lignes:[...this.cartItems]
      };
      const confirmation = window.confirm('Are you sure you want to make this purchase?');
      if (confirmation) {
        this.cartService.createCommande(commande).subscribe(
          () => {
            alert('Purchase completed successfully! you can verif your commands');        
            this.clearCart();
          },
          (error) => {
            console.error('Failed to create command:', error);
          }
        );
      }

    }else{
      window.alert('Please Login as user first');        
    }
    
    
  }
  getAllCommands():void{
    
    this.cartService.getCommandItems().subscribe(
      (data) => {
        this.commandItems = data.filter((command:any) => command.email === localStorage.getItem('email'));
        this.commandAccepted = this.commandItems.filter((command:any) => command.etat === "confirme");
        this.commandRefused = this.commandItems.filter((command:any) => command.etat === "annuler");
        this.commandItems = this.commandItems.filter((command:any) => command.etat === "enattente");
      },
      (error) => {
        console.error('Failed to create command:', error);
      }
      );
    }
    removeCommand(id:any):void
  {
    const confirmation = window.confirm('Are you sure to delete this command?');
    if (confirmation) {
      
      this.cartService.removeCommand(id).subscribe(
        () => {
          window.alert('command successfully deleted!');        
        },
        (error) => {
          window.alert('command successfully deleted!');        
        }
      );
    }
  }  
logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  
    }
}
