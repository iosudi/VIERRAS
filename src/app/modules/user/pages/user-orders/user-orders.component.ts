import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent implements OnInit {
  constructor(private _OrdersService: OrdersService) {}

  userOrdersInfo: any[] = [];
  sliced!: object[];
  userId: string = '';

  ngOnInit(): void {
    this._OrdersService.decodeUser();

    this.userId = this._OrdersService.userInformation.id;

    this._OrdersService.getUserOrders(this.userId).subscribe({
      next: (res) => {
        this.userOrdersInfo = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
