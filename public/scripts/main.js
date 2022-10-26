
const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

var firebaseConfig = {
    apiKey: 'AIzaSyAQKZYe4wsg_KoYz23vo9zPx0XwDHHWB-8',
    authDomain: 'nest-firebase-auth-a2aaf.firebaseapp.com',
    projectId: 'nest-firebase-auth-a2aaf',
    storageBucket: 'nest-firebase-auth-a2aaf.appspot.com',
    messagingSenderId: '648443204948',
    appId: '1:648443204948:web:09f7ef132791fd26dd64c1',
    measurementId: "G-330RCWL6XH"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class="wp-block-quote">
                <p>${quote.quote}. </p><cite>${quote.character}</cite>
            </blockquote>`;
  }

  return html;
};
