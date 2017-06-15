import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { LoginComponent } from './login/login.component';
import { RegionComponent } from './region/region.component';
import { RegionListComponent } from './region-list/region-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PlaceComponent } from './place/place.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { AccommodationTypeComponent } from './accommodation-type/accommodation-type.component';
import { AccommodationTypeListComponent } from './accommodation-type-list/accommodation-type-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { MapComponent } from './map/map.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { AgmCoreModule } from '@agm/core';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ManagerPanelComponent } from './manager-panel/manager-panel.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { UpdateRegionComponent } from './update-region/update-region.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';
import { UpdateAccTypeComponent } from './update-acc-type/update-acc-type.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { RoomReservationListComponent } from './room-reservation-list/room-reservation-list.component';

const CountryChildRoutes = [
   {path: "update/:Id/:Name/:Code", component: EditCountryComponent}
  ]

const RegionChildRoutes = [
   {path: "update/:Id/:Name/:CId", component: UpdateRegionComponent}
  ]

const PlaceChildRoutes = [
   {path: "update/:Id/:Name/:RId", component: UpdatePlaceComponent}
  ]

  const AccTypesChildRoutes = [
   {path: "update/:Id/:Name", component: UpdateAccTypeComponent}
  ]

const AccommChildRoutes = [
  {path: "rooms/:Id", component: RoomListComponent}
]

const StartChildRoutes = [
   {path: "login", component: LoginComponent},
   {path: "register", component: RegistrationComponent}
  ]

const AdminPanelChildRoutes = [
    {path: "countries", component: CountryListComponent, children: CountryChildRoutes},
    {path: "regions", component: RegionListComponent, children: RegionChildRoutes},
    {path: "places", component: PlaceListComponent, children: PlaceChildRoutes},
    {path: "accTypes", component: AccommodationTypeListComponent, children: AccTypesChildRoutes}
  ]

const ManagerPanelChildRoutes = [
    {path: "accommodations", component: AccommodationListComponent, children: AccommChildRoutes},
  ]

const Routes = [
  {path: "start", component: StartScreenComponent, children: StartChildRoutes},
  {path: "adminPanel", component: AdminPanelComponent, children: AdminPanelChildRoutes},
  {path: "managerPanel", component: ManagerPanelComponent, children: ManagerPanelChildRoutes},
  {path: "other", redirectTo:"start"},
  ]

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryComponent,
    LoginComponent,
    RegionComponent,
    RegionListComponent,
    RegistrationComponent,
    AdminPanelComponent,
    PlaceComponent,
    PlaceListComponent,
    AccommodationTypeComponent,
    AccommodationTypeListComponent,
    CommentComponent,
    CommentListComponent,
    RoomComponent,
    RoomListComponent,
    AccommodationComponent,
    MapComponent,
    AccommodationListComponent,
    MapComponent,
    StartScreenComponent,
    ManagerPanelComponent,
    EditCountryComponent,
    UpdateRegionComponent,
    UpdatePlaceComponent,
    UpdateAccTypeComponent,
    RoomReservationComponent,
    RoomReservationListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCuClu0_n67jJhhQViC3RhgLzm6EZrKeIE'}),
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
