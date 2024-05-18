"use client";
import { useEffect, useRef, useState } from "react";
import imagePickerCss from "./image-picker.module.css";
import Image from "next/image";
function Imagepicker() {
  const [pickedImage, setPickedImage] = useState(null);
  const [loadProgress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);
  function handleInputChange(e) {
    const file = e.target.files[0];
    console.log(file);
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onprogress = (e) => {
      const progress = Math.floor((e.loaded / e.total) * 100);
      setProgress(progress);
    };
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={imagePickerCss.Container}>
      <label className={imagePickerCss.Label} htmlFor="picker">
        选择图片
      </label>
      {/* input */}
      <div>
        <input
          className={imagePickerCss.myInput}
          ref={inputRef}
          onChange={handleInputChange}
          type="file"
          id="picker"
          name="picker"
          accept="image/*"
        />
      </div>
      <div className={imagePickerCss.imageWrap}>
        {!pickedImage && "no Data"}
        <div>{fileName}</div>
        <div>
          <progress value={loadProgress} />
          {loadProgress}%
        </div>
        <div className={imagePickerCss.imageContainer}>
          {pickedImage && <Image fill src={pickedImage} alt="" />}
        </div>
      </div>
    </div>
  );
}

export default Imagepicker;
