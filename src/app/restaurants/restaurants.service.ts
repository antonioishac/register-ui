import { Restaurant } from "./restaurant/restaurant.model";

import { CACTUS_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantService {

    // feito anteriormente antes da construção da API
    // rests: Restaurant[] = [
    //     {
    //       id: "bread-bakery",
    //       name: "Bread & Bakery",
    //       category: "Bakery",
    //       deliveryEstimate: "25m",
    //       rating: 4.9,
    //       imagePath: "assets/img/restaurants/breadbakery.png"
    //     },
    //     {
    //       id: "burger-house",
    //       name: "Burger House",
    //       category: "Hamburgers",
    //       deliveryEstimate: "100m",
    //       rating: 3.5,
    //       imagePath: "assets/img/restaurants/burgerhouse.png"
    //     }
    //   ]

    constructor(private http: HttpClient){}

    restaurants(): Observable<Restaurant[]> {

      //feito anteriormente antes da construção da API
      //return this.rests;

      return this.http.get<Restaurant[]>(`${CACTUS_API}/restaurants`)
      .pipe(map(data => data))
      .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant> {
      return this.http.get<Restaurant>(`${CACTUS_API}/restaurants/${id}`)
        .pipe(map(data => data))
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurants(id: string): Observable<any> {
      return this.http.get<any>(`${CACTUS_API}/restaurants/${id}/reviews`)
        .pipe(map(data => data))
        .catch(ErrorHandler.handleError)
    }
}