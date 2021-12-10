import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IonInput, IonButton } from '@ionic/react'
import { giphyQuery } from '../state/giphy';

export default function GiphySearchArea() {
  // TODO: useRefで取得する
  const setQ = useSetRecoilState(giphyQuery)
  const [q, setQuery] = useState('')
  const onPress = () => {
    setQ(q)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>Search keyword</div>
      <div>
        <IonInput onIonChange={(e) => setQuery(e.detail.value!)} value={q} color='light' className='search-input' />
        <IonButton color='secondary' onClick={onPress}>OK</IonButton>
      </div>
    </div>
  );
}
