import {Injectable} from  '@angular/core'
import {RoomReservation} from '../room-reservation/room-reservation.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable() //nas servis se javlja da dobije "nesto"
export class RoomReservationListService
{
    constructor(private http: Http)
    {
    }

    getAll() : Observable<any>
    {
        return this.http.get("http://localhost:54042/api/RoomReservations");
    }

    getById(id: number) : Observable<any>
    {
        return this.http.get(`http://localhost:54042/api/RoomReservations/${id}`); 
    }

    create(roomRes: RoomReservation) : Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/RoomReservations/`, JSON.stringify(roomRes), opts); 
    }
	
	update(roomRes: RoomReservation, id: number)
    {
        let header = new Headers()
        header.append('Content-type','application/json');
        header.append('Authorization','Bearer ' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.put(`http://localhost:54042/api/RoomReservations/${id}`, JSON.stringify(roomRes), opts);
    }
}