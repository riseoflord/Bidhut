
import { firebaseApp } from "../services/firebase";
import { Alert } from "react-native";
import * as firebase from "firebase";

export const onfbLogin = (provider) => {
    let token = firebase.auth.FacebookAuthProvider.credential(provider.credentials.token),
        success;
    const {navigate} = this.props.navigation;

    success = firebaseApp.auth().signInWithCredential(token)
              .then((data)=> {return true;})
              .catch((error) => {return false;});
    return success;
};

export const onfbLoginFound = (provider) => {
    console.log(provider);
};

export const onfbLoginNotFound = (provider) => {

};
export const onfbLogout = (provider) => {


};

export const onfbCancel = (provider) => {

};
export const onfbPermissionsMissing = (provider) => {


};