import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-convert-tool',
  templateUrl: './convert-tool.component.html',
  styleUrls: ['./convert-tool.component.css']
})
export class ConvertToolComponent implements OnInit {
  convertForm: FormGroup;
  exchangRate: number;
  usdToEuro: boolean;
  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    // init all values
    this.convertForm = this.fb.group({
      euroValue: [{ value: 1, disabled: false}],
      usdValue: [{ value: null, disabled: true }]
    });

    this.exchangRate = 1.10;
    this.usdToEuro = false;
    this.calculExchange(this.getField("euroValue").value, this.getField("usdValue").value, this.usdToEuro, this.exchangRate);

    // random calcul exchangeRate
    setInterval(() => 
      { 
        let diff = (Math.floor(Math.random() * 11) - 5)/100;  
        this.exchangRate += diff;
        this.exchangRate;
        this.calculExchange(this.getField("euroValue").value, this.getField("usdValue").value, this.usdToEuro, this.exchangRate);
      }, 3000);

    // subrcribe input change val
    this.getField('euroValue').valueChanges.subscribe(val => {
      if(!this.usdToEuro){
        this.calculExchange(this.getField("euroValue").value, this.getField("usdValue").value, this.usdToEuro, this.exchangRate);
      }
    });

    this.getField('usdValue').valueChanges.subscribe(val => {
      if (this.usdToEuro) {
        this.calculExchange(this.getField("usdValue").value, this.getField("euroValue").value, this.usdToEuro, this.exchangRate);
      }
    });
  }

  private calculExchange(valOrigin: number, valDesti: number, usdToEuro: boolean, exchangRate: number ){
    if(usdToEuro){
      this.getField("euroValue").setValue(valOrigin * exchangRate );
    } else {
      this.getField("usdValue").setValue(valOrigin * exchangRate);
    }
  }

  getField(fieldPath: string): AbstractControl {
    return this.convertForm.get(fieldPath);
  }

  private getRandomexchangRateDiff(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  changeSens(){
    this.usdToEuro = !this.usdToEuro;
    if(this.usdToEuro){
      this.getField("euroValue").disable();
      this.getField("usdValue").enable();
      this.calculExchange(this.getField("usdValue").value, this.getField("euroValue").value, this.usdToEuro, this.exchangRate);
    } else {
      this.getField("usdValue").disable();
      this.getField("euroValue").enable();
      this.calculExchange(this.getField("euroValue").value, this.getField("usdValue").value, this.usdToEuro, this.exchangRate);
    }
  }

}
