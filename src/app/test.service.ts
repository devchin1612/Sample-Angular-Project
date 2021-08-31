import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  sportsList = [
    {
      id:1,
      name : "Tennis",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1602211844066-d3bb556e983b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbm5pc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      name : "Cricket",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1603722039047-bc9997bfa963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNyaWNrZXQlMjBzcG9ydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      name : "Volleyball",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1601512986351-9b0e01780eef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dm9sbGV5YmFsbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      name : "Football",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3RiYWxsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      name: "Badminton",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhZG1pbnRvbiUyMGdhbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
      name: "Hockey",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1573459635481-85e9012c05c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9ja2V5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:7,
      name: "Swimming",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1560090995-01632a28895b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:8,
      name: "BasketBall",
      isChecked : true,
      imagePath : "https://images.unsplash.com/photo-1594623274890-6b45ce7cf44a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }


  ]

}
