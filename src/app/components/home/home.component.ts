import { Component, OnInit } from '@angular/core';
import { faCamera, faPaperclip, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private imageService: ImageService) { }
  camera = faCamera;
  paperClip = faPaperclip;
  spinner = faSpinner;

  typesAccepted = ['image/png', 'image/jpeg']
  fileName = ''
  errorType = false;
  selectedFile?: Image;
  loading = false;
  status ='';

  ngOnInit(): void {
  }


  processFile(imageInput: any) {
    this.loading = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new Image(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          localStorage.setItem('id-image', JSON.parse(res)._id)
          this.status = 'loaded';
          this.loading = false;
        },
        (err) => {
          this.status = 'error';
          this.loading = false;
        })
    });

    reader.readAsDataURL(file);
  }


}
