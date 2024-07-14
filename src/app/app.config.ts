import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDutDv4rsC_Vw__qpRVJ9sSZ4K6KoSZEJg",
  authDomain: "acore-8497e.firebaseapp.com",
  projectId: "acore-8497e",
  storageBucket: "acore-8497e.appspot.com",
  messagingSenderId: "789078148951",
  appId: "1:789078148951:web:82c6610cc0b2ff06b4e012"
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) ,
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage())
  ]
};
