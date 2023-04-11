/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function ImageInput() {
  const [imageSrc, setImageSrc] = useState('');
  const [imageName, setImageName] = useState('');

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e: any) {
      setImageSrc(e.target.result);
      setImageName(file.name);
    };
  }

  function removeImage() {
    setImageSrc('');
    setImageName('');
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('image-dropping');
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('image-dropping');
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('image-dropping');

    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e: any) {
      setImageSrc(e.target.result);
      setImageName(file.name);
    };
  }

  return (
    <div className="file-upload">
      <button className="file-upload-btn" type="button">
        Add Image
        <input className="file-upload-input" type="file" onChange={handleImageChange} accept="image/*" />
      </button>

      {imageSrc ? (
        <div className="file-upload-content" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
          <img className="file-upload-image" src={imageSrc} alt="your image" />
          <div className="image-title-wrap">
            <button type="button" onClick={removeImage} className="remove-image">
              Remove <span className="image-title">{imageName}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="image-upload-wrap" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
          <div className="drag-text">
            <h3>Drag and drop a file or select add Image</h3>
          </div>
        </div>
      )}
    </div>
  );
}
