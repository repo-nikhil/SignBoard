import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-signature-board',
  templateUrl: './signature-board.component.html',
  styleUrls: ['./signature-board.component.scss']
})
export class SignatureBoardComponent implements AfterViewInit {
  
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  context!: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d')!;
    this.context.lineWidth = 2;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';
  }


  drawing: boolean = false;
  lastPos!: { x: number; y: number; };

  handleMouseDown(event: MouseEvent) {
    this.drawing = true;
    this.lastPos = this.getMousePos(event);
  }

  handleMouseUp() {
    this.drawing = false;
  }

  handleMouseMove(event: MouseEvent) {
    if (this.drawing) {
      const mousePos = this.getMousePos(event);
      this.context.beginPath();
      this.context.moveTo(this.lastPos.x, this.lastPos.y);
      this.context.lineTo(mousePos.x, mousePos.y);
      this.context.stroke();
      this.lastPos = mousePos;
    }
  }

  getMousePos(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  saveSignature() {
    const dataURL = this.canvas.nativeElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    link.click();
  }

}
