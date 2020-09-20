import React, { useState } from 'react';
import MultiImageInput from './lib/multi-image-input';
// import MultiImageInput from 'react-multiple-image-input';

function App() {
  const [images, setImages] = useState({});
  const [files, setFiles] = useState([]);

  console.log(files)

  return (
    <div className="App" style={{ maxWidth: '500px' }}>
      <header className="App-header">
        <MultiImageInput
          images={images}
          setImages={setImages}
          files={files}
          setFiles={setFiles}
          addImageText={"이미지 추가"}
          max={4}
          allowCrop={false}
        />
      </header>
    </div>
  );
}

export default App;
