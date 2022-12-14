// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SIGN_UP_URL: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
  SIGN_IN_URL: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
  production: false,
  firebaseAPIKey: "AIzaSyDW3xEbh0Bpdonam8fU9qgSs5fOKXdq7c0",
  ytAPIKey: "AIzaSyDW3xEbh0Bpdonam8fU9qgSs5fOKXdq7c0"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
