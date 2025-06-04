import { Component, Input } from '@angular/core';
import { Song } from '../Models/song.model';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() canz! : Song
  @Input() dets! : Song[]

  dettagli(){
    this.dets.push(new Song(this.canz.data_uscita, this.canz.durata, this.canz.title))
    console.log(this.dets)
  }
}
