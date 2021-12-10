import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Giphy.css';
import GiphySearchArea from '../components/GiphySearchArea';
import GiphySearchResult from '../components/GiphySearchResult';

const Giphy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Giphy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <GiphySearchArea />
        <GiphySearchResult />
      </IonContent>
    </IonPage>
  );
};

export default Giphy;
