import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from './Models/song.model';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './song-list/song-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Mihali-canzoniere';
  loading! : boolean
  obs! : Observable<Song[]>
  data!: object
  http: HttpClient
  vettSong: Song [] = []
  
  constructor(http: HttpClient){this.http = http}
  
  makeChiamta(){
    this.loading = true
    this.obs = this.http.get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obs.subscribe(this.getData)
  }

  getData = (d : Song[] )=>{
    this.vettSong = d
    this.loading = false
    console.log(this.vettSong)
  }

  ngOnInit(): void {
    this.makeChiamta()
  }
}
