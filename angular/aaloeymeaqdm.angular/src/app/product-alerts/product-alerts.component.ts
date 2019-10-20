import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
//@Component 装饰器。这表明它下面的类是一个组件。
//它提供了有关该组件的元数据，包括它的模板、样式和选择器。
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
//组件定义中还包含一个导出类（ ProductAlertsComponent ）
//，用于处理该组件的功能。
export class ProductAlertsComponent implements OnInit {
  //一个带 @Input 装饰器的 product 属性
  //。@Input 装饰器指出其属性值是从组件的父组件传入
   @Input() product; 
   //@Output 装饰器和一个事件发射器（EventEmitter）实例
   //le定义一个名为 notify 的属性 
   @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
