import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FiltrosService } from 'src/app/servicios/filtros.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})


export class ImagenesComponent {
  selectedFile: File | null = null;
  selectedImageSrc?: string | ArrayBuffer | null = null;
  processedImage: string | null = null;
  selectedButton: string | undefined;
  imageSelected = false;

  constructor(private servicio: FiltrosService){}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imageSelected = true;
    // Display the selected image
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImageSrc = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  processImage(filterName: string) {
    if (this.selectedFile) {
      this.servicio.processImage(this.selectedFile, filterName).subscribe(
        response => {
          console.log(response);
          if (response.result === 'success') {
            this.processedImage = 'data:image/png;base64,' + response.graphic;
          } else {
            console.error('Image processing failed');
          }
        },
        error => {
          console.error('Error processing image', error);
        }
      );

    }
  }

  handleButtonClick(buttonName: string) {
    this.selectedButton = buttonName;
  }

}
