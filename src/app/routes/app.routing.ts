import { Role } from './../helpers/rol';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../components/module-geo/login/login.component';
import { UsuarioComponent } from '../components/module-geo/usuario/usuario.component';
import { HomeComponent } from '../components/module-geo/home/home.component';
import { ConfiguracionComponent } from '../components/module-geo/configuracion/configuracion.component';
import { RutaComponent } from '../components/module-geo/ruta/ruta.component';
import { AuthGuard } from '../helpers/auth.guard';
import { DispositivoComponent } from '../components/module-geo/dispositivo/dispositivo.component';
import { AcopioComponent } from '../components/module-geo/acopio/acopio.component';
import { ReportesComponent } from '../components/module-geo/reportes/reportes.component';
import { ConductorComponent } from '../components/module-geo/conductor/conductor.component';
import { VehiculoComponent } from '../components/module-geo/vehiculo/vehiculo.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
    { path: 'home', component: HomeComponent },
    { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.SUPERVISOR] } },
    { path: 'dispositivo', component: DispositivoComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
    // { path: 'ruta', component: RutaComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
    { path: 'acopio', component: AcopioComponent },
    { path: 'conductor', component: ConductorComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.SUPERVISOR] } },
    { path: 'vehiculos', component: VehiculoComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.SUPERVISOR] } },
    { path: '***', component: HomeComponent }
];

export const appRouteingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
