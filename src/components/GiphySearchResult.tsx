import React from 'react';
import { useRecoilValueLoadable } from 'recoil'
import { giphySearchResult } from '../state/giphy'

export default function GiphySearchArea() {
  const result = useRecoilValueLoadable(giphySearchResult)

  if (result.state === 'loading') return <div>...</div>
  if (result.state === 'hasError') return <div>search failed</div>

  return (
    <div className='images'>
      {result.contents.map((content) => {
        const img = content.images.downsized
        return (
          <div key={img.url} className='result-item'>
            <img src={img.url} alt='' />
          </div>
        )
      })}
    </div>
  );
}
