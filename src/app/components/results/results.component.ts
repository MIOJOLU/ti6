import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImage(localStorage.getItem('id-image')).subscribe(res => {
      console.log(res);
    })
    
  }

}
