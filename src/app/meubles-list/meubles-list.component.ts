import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meubles-list',
  templateUrl: './meubles-list.component.html',
  styleUrls: ['./meubles-list.component.css']
})
export class MeublesListComponent implements OnInit {
  titre:string="Liste des candidats";
  date:string="13 : Novembre";
  meubles = [
    {libelle:'table',img:'../assets/table.jpg',prixTTC:47, neuf:true},
    {libelle:'armoire',img:'../assets/armoire.jpg',prixTTC:258.5, neuf:false },
    {libelle:'fauteuil',img:'../assets/fauteuil.jpg',prixTTC:113.8, neuf:true}
    ];
    prixoriginal1(){
      this.meubles[0]
    }
    prixoriginal2(){
      this.meubles[1]
    }
    prixoriginal3(){
      this.meubles[2]
    }
    nbneuf(){
      let somme=0;
      let somme2=0;
      for (let i=0;i<this.meubles.length;i++){
        this.meubles[i]
         if(this.meubles[i].neuf=== true){
           somme++;
         }
         else{
           somme2++;
         }
      }
      return somme;
      return somme2;
    }
  constructor() { }

  ngOnInit() {
  }
}
