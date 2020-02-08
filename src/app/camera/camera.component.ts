import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {CommonService} from '../common.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @ViewChild('cameraContainer') container: ElementRef;

  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  loading = false;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  @Output() isCameraOpen: EventEmitter<any> = new EventEmitter();
  isMobile: boolean;

  constructor(private commonService: CommonService) {
  }

  public ngOnInit(): void {
    this.isMobile = this.commonService.isMobile();

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  get isLoading() {
    return this.loading
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.isCameraOpen.emit(false);
    this.loading = false;

  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
    this.loading = this.showWebcam;
    this.isCameraOpen.emit(this.showWebcam);
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.commonService.setImageSrc(this.webcamImage.imageAsDataUrl);
    this.showWebcam = false;
    this.commonService.openModal = true;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
    this.loading = false;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable().pipe(
      tap(() => {
        this.loading = false;
      })
    );
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable().pipe(
      tap(() => {
        this.loading = false;
      })
    );
  }

}
