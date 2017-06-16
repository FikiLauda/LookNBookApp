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
import { UpdateAccommodationComponent } from './update-accommodation/update-accommodation.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { AccomodationManagerViewComponent } from './accomodation-manager-view/accomodation-manager-view.component';
import { AccomodationUserViewComponent } from './accomodation-user-view/accomodation-user-view.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AccomodationUserListComponentComponent } from './accomodation-user-list-component/accomodation-user-list-component.component';
import { RoomUserViewComponent } from './room-user-view/room-user-view.component';
import { AccAdminListComponent } from './acc-admin-list/acc-admin-list.component';
import { AccAdminViewComponent } from './acc-admin-view/acc-admin-view.component';

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
  {path: "rooms/:Id", component: RoomListComponent},
  {path: "update/:Id/:Name/:Addr/:Desc/:Lat/:Long/:ACId/:PId/:OId", component: UpdateAccommodationComponent}
]

const StartChildRoutes = [
   {path: "login", component: LoginComponent},
   {path: "register", component: RegistrationComponent}
  ]

const AdminPanelChildRoutes = [
    {path: "countries", component: CountryListComponent, children: CountryChildRoutes},
    {path: "regions", component: RegionListComponent, children: RegionChildRoutes},
    {path: "places", component: PlaceListComponent, children: PlaceChildRoutes},
    {path: "accTypes", component: AccommodationTypeListComponent, children: AccTypesChildRoutes},
    {path: "accommodations", component: AccAdminListComponent}
  ]

const ManagerPanelChildRoutes = [
    {path: "accommodations/:Id", component: AccomodationManagerViewComponent, children: AccommChildRoutes},
    {path: "accommodations", component: AccommodationListComponent}
  ]

  const UserPanelAccChildRoutes = [
    {path: "comments/:Id", component: CommentListComponent}
  ]

  const UserPanelChildRoutes = [
    {path: "accommodations", component: AccomodationUserListComponentComponent}
  ]

const Routes = [
  {path: "start", component: StartScreenComponent, children: StartChildRoutes},
  {path: "adminPanel", component: AdminPanelComponent, children: AdminPanelChildRoutes},
  {path: "managerPanel", component: ManagerPanelComponent, children: ManagerPanelChildRoutes},
  {path: "userPanel", component:UserPanelComponent, children: UserPanelChildRoutes},
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
    RoomReservationListComponent,
    UpdateAccommodationComponent,
    UpdateRoomComponent,
    AccomodationManagerViewComponent,
    AccomodationUserViewComponent,
    UserPanelComponent,
    AccomodationUserListComponentComponent,
    RoomUserViewComponent,
    AccAdminListComponent,
    AccAdminViewComponent 
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
