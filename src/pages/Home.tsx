import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';
import { InAppBrowser } from '@ionic-native/in-app-browser'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => InAppBrowser.create('https://www.google.com')}>Open Google w/ create</IonButton>
        <IonButton onClick={() => InAppBrowser.create('https://www.google.com').show()}>Open Google w/ show</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
