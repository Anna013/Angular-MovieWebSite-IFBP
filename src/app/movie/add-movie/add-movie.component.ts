import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  ganres = ["action", "basdasd", "csad", "dasd", "easdasdasd", "f", "g"];
  ganres2 = [];
  mess;

  constructor(private movieService: MovieService, private router: Router) { }


  createEvent(eventForm) {
    const movie: Movie = eventForm.value.event;

    if (movie.imageUrl === movie.ytUrl) {
      this.mess = "Image Url and trailer Url must not be the same.";
    }

    else {
      movie.ganres = this.ganres2;
      if (localStorage.getItem('tokenAdmin')) {
        this.movieService.addMovie(movie).subscribe((res) => {
          alert("event created")
          this.router.navigate(['/event/list']);
        })
      }
      else
        console.log("create error");
    }

  }

  onClick($event) {
    var str = $event.target.value;
    var bool = $event.target.checked;
    if (bool) {
      this.ganres2.push(str);
    }
    else {
      const index = this.ganres.indexOf(str);
      this.ganres2.splice(index, 1);
    }
  }

  isAdmin(): boolean {
    if (localStorage.getItem('tokenAdmin'))
      return true;
    return false;
  }

}
