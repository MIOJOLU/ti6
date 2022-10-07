import { Component, OnInit } from '@angular/core';
import { faCamera, faPaperclip} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  camera = faCamera;
  paperClip = faPaperclip;

  typesAccepted = ['image/png', 'image/jpeg']
  fileName = ''
  errorType = false;

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
  
    if (file) {
        if (this.typesAccepted.includes(file.type)){
          this.fileName = file.name;
          const formData = new FormData();
          formData.append("thumbnail", file);
        }else{
          this.errorType = true;
        }
      
        // this.uploadSub = upload$.subscribe(event => {
        //   if (event.type == HttpEventType.UploadProgress) {
        //     this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        //   }
        // })
    }
}


}
