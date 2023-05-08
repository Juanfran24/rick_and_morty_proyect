import { Component, OnInit } from '@angular/core';
import Character from './schemas/character';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-catalogy',
  templateUrl: './catalogy.component.html',
  styleUrls: ['./catalogy.component.scss'],
})
export class CatalogyComponent implements OnInit {
  characters: Character[] = [];
  characterName: string = '';
  searchText: string = '';
  isNotFound: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllCharacters().subscribe((data: any) => {
      this.characters = data.results as Character[];
    });
  }

  setCharacter(name: string): void {
    if (name == this.characterName) {
      this.characterName = '';
      return;
    }
    this.characterName = name;
  }

  searchCharacters(name: string): void {
    this.apiService.getCharactersFiltered(name).subscribe({
      next: (response : any) => {
        if (name === '') return alert('search is required');
        this.characters = response.results as Character[];
      },
      error: err => {
        this.isNotFound = true;
      }
    });
  }
}
