import firebase from 'firebase';

document.addEventListener("DOMContentLoader", event => {
    const app = firebase.app();
    console.log(app);
});