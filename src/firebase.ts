import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {}

const config = {
    apiKey: 'AIzaSyDSO19_0FrrZI2l7o8RhL4XnhTbg-1Vxxs',
    databaseURL: 'https://scb-hack.firebaseio.com',
    projectId: 'scb-hack'
}

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export const db = firebase.firestore();