import React , { useState } from 'react';
import Title from './componenets/Title';
import UploadForm from './componenets/UploadForm';
import ImageGrid from './componenets/ImagesGrid';
import Model from './componenets/Model';

function App() {

  const [selectedImg , setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
