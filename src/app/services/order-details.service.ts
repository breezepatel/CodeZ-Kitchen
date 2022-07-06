import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Cheese Grilled Sandwich",
      foodDetails:"Cheese mouthwatering sandwich with some extra cryspeeness.",
      foodPrice:149,
      foodImg:"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
    },
    {
      id:2,
      foodName:"Italian Passta",
      foodDetails:"Hot Saucy Passta with Red Paprika topped with tomatoes",
      foodPrice:179,
      foodImg:"https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80"
    },
    {
      id:3,
      foodName:"Code Egg-Z(Special Item)",
      foodDetails:"This item is our speacial one and people love to eat.",
      foodPrice:219,
      foodImg:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      foodName:"The Gujarati Thali",
      foodDetails:"A homely made pure gujarati thali. A filling sure to take you back to mom's kitchen.",
      foodPrice:189,
      foodImg:"https://images.unsplash.com/photo-1584946425231-b6d6098a109c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love.",
      foodPrice:229,
      foodImg:"https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJvd25pZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
      foodName:"ChocoLava Shake",
      foodDetails:"The delicious chocolava shake which can bring your inner child out.",
      foodPrice:249,
      foodImg:"https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ]
}
