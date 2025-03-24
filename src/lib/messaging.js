//src/lib/messaging.js
import { db, messaging } from "./firebase";
import { doc, setDoc } from 'firebase/firestore';
import { getToken, onMessage } from 'firebase/messaging';
import { tokenToString } from "typescript";


const VAPID_KEY = "BLLn_9Ao4QaNQP9sLj6VL2T5nqthk1DUaEYNwORdZmQWLTqF86GDxK-CuR8sRv2TADiPBVACJAS8SWwEZV8Abk0";
const   FCM_TOKEN_COLLECTION ="fcmTokens";


export async function requestNotificationPermission(uid){
    console.log ('requesting notifications permissions...');
    const permission = await Notification.requestPermission();
    if(permission === 'granted'){
       await saveMessagingDeviceToken(uid);
    } else{
        console.log('unable to get permission to notify.')
    }
}


export async function saveMessagingDeviceToken(uid){
    const msg = await messaging();
    const fcmToken = await getToken(msg,{vapidKey: VAPID_KEY});

    if(fcmToken){
        console.log('Got FCM device token: ', fcmToken);
        //save device token to Firestore database
        const tokenRef = doc(db, FCM_TOKEN_COLLECTION, uid);
        await setDoc(tokenRef, {fcmToken}); //overwrites document (fcmToken) if it already exists
    } else {

    }// need to request permission to show notification
    requestNotificationPermission(uid);
    
}