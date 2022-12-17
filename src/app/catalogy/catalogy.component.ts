import { Component, OnInit } from '@angular/core';
import Character from './schemas/character';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-catalogy',
  templateUrl: './catalogy.component.html',
  styleUrls: ['./catalogy.component.scss']
})
export class CatalogyComponent implements OnInit {

  characters: Character[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }

}
