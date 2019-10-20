import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
//吧ActivatedRoute 注入到构造函数中
//ActivatedRoute 是Angular路由器加载的每个路由器组件
//包含关于该路由，路由参数以及与该路由关联的其他数据信息
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { 
    
  }

  addToCart(product){
    window.alert('your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    //订阅路由参数并根据其productId获取商品信息
    //
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
