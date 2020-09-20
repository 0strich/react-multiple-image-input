import React, { useState } from 'react';
import MultiImageInput from './lib/multi-image-input';
// import MultiImageInput from 'react-multiple-image-input';

function App() {
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  };

  const [images, setImages] = useState({});
  const [files, setFiles] = useState([]);

  console.log("images ===> ", images)
  console.log("files ===> ", files)

  return (
    <div className="App" style={{ maxWidth: '500px' }}>
      <header className="App-header">
        <MultiImageInput
          images={images}
          setImages={setImages}
          files={files}
          setFiles={setFiles}
          max={4}
          allowCrop={false}
        />
      </header>
    </div>
  );
}

export default App;
