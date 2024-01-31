import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {

  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";

  private id:string | null = "0";

  constructor(private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    )

    this.setValuesToComponent(this.id!)
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(
      article => article.id == id
    )[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo

  }

}
