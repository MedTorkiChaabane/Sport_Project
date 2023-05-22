import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SearchComponent } from './components/search/search.component';
import { AddStaduimComponent } from './components/add-staduim/add-staduim.component';
import { StoreComponent } from './components/store/store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { EditStaduimComponent } from './components/edit-staduim/edit-staduim.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';


const routes: Routes = [
  //http://localhost:4200/ => Home Component will be displayed
  {path:"", component:HomeComponent},
  //http://localhost:4200/signin => Login Component will be displayed
  {path:"login", component:LoginComponent},
  //http://localhost:4200/signup => Singup Component will be displayed
  {path:"signup", component:SingupComponent},
  //http://localhost:4200/addmatch => AddMatch Component will be displayed
  {path:"addMatch", component:AddMatchComponent},
  //http://localhost:4200/addteam=> AddTeam Component will be displayed
  {path:"addTeam", component:AddTeamComponent},
  //http://localhost:4200/dashboard=> Admin Component will be displayed
  {path:"admin", component:AdminComponent},
  //http://localhost:4200/addPlayer=> AddPlayer Component will be displayed
  {path:"addPlayer", component:AddPlayerComponent},
  {path:"matches", component:MatchesComponent},
  {path:"players", component:PlayersComponent},
  {path:"matchInfo", component:MatchInfoComponent},
  //:x parametre
  {path:"editMatch/:x", component:EditMatchComponent},
  {path:"teamInfo/:x", component:TeamInfoComponent},
  {path:"editTeam/:x", component:EditTeamComponent},
  {path:"signupAdmin", component:SignupAdminComponent},
  {path:"searchMatches", component:SearchComponent},
  {path:"addStaduim", component:AddStaduimComponent},
  {path:"addStore", component:StoreComponent},
  {path:"editStore/:id", component:StoreComponent},//travailler sur  le meme component
 // {path:"editStore/:id", component:EditStoreComponent},
  {path:"editStaduim/:id", component:EditStaduimComponent},
  {path:"searchTeam", component:SearchTeamComponent},
  {path:"playerInfo/:id", component:PlayerInfoComponent},
  {path:"editPlayer/:id", component:AddPlayerComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:"weather", component:WeatherComponent},
  {path:"reclamation", component:ReclamationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
