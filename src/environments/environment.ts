// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCyWbltWzcmozRVGPVsanLa89ttoSfidc8',
    authDomain: 'steelkiwi-8224d.firebaseapp.com',
    databaseURL: 'https://steelkiwi-8224d.firebaseio.com',
    projectId: 'steelkiwi-8224d',
    storageBucket: 'steelkiwi-8224d.appspot.com',
    messagingSenderId: '415222958398',
    gitHub: {
      clientId: '4acd1ac1e2bbe98bce05',
      clientSecret: 'd5aaef7eb48a5830cd094a6646ae617628247db2'
    }
  }
};
