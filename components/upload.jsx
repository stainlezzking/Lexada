"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import { toast, Toaster } from "sonner";

const PreviewImage = function ({ url, removeProduct }) {
  return (
    <div className="col-span-1 aspect-video rounded-md relative flex items-center justify-center">
      <button
        onClick={removeProduct}
        className="absolute -top-3 -right-3 group rounded-full w-6 h-6 flex items-center justify-center bg-white shadow-sm"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.963 5.00009L0.081543 1.11863L1.11863 0.081543L5.00009 3.963L8.88154 0.081543L9.91863 1.11863L6.03718 5.00009L9.91863 8.88154L8.88154 9.91863L5.00009 6.03718L1.11863 9.91863L0.081543 8.88154L3.963 5.00009Z"
            className="fill-[#686767] group-hover:fill-pblack"
          />
        </svg>
      </button>
      <img src={url} alt="" className="w-full aspect-[4/3] object-center object-cover" />
    </div>
  );
};

const maxImages = 5;

const Dropzone = ({ productImages }) => {
  const [images, setImages] = productImages;
  const removeImage = function (id) {
    const toBeRemoved = images.find((img) => img._id == id);
    URL.revokeObjectURL(toBeRemoved.preview);
    setImages((prevImages) => {
      const wantedImages = prevImages.filter((img) => img._id !== id);
      if (toBeRemoved.main && wantedImages.length) {
        wantedImages[0].main = true;
      }
      return wantedImages;
    });
  };
  const showError = useCallback((err) => {
    toast.error(err, {
      position: "top-left",
      classNames: {
        title: "text-md font-normal",
      },
    });
  }, []);
  //   for some reason useCallback does not recognize the updated values of outside variables like images
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (images.length + acceptedFiles.length >= maxImages) return showError("Maximum images exceeded");
      if (!images.length) {
        acceptedFiles = acceptedFiles.map((file, index) => {
          if (index == 0) {
            return Object.assign(file, { main: true });
          }
          return Object.assign(file, { main: false });
        });
      }
      setImages((prevImages) => [...prevImages, ...acceptedFiles.map((data) => ({ _id: uuidv4(), file: data, preview: URL.createObjectURL(data) }))]);
    },
    [images]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".jpg"] },
    maxFiles: maxImages,
  });
  return (
    <>
      <div
        {...getRootProps({
          className:
            "cursor-pointer border border-[#CDD0D5] border-dashed py-8 px-8 text-gray67 flex flex-col justify-center items-center gap-y-5 rounded-[12px]",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="py-6">
            <svg className="w-20" viewBox="0 0 21 18" fill="none">
              <path
                d="M10.5001 9.5274L14.3188 13.3452L13.0452 14.6187L11.4001 12.9735V18H9.60005V12.9717L7.95485 14.6187L6.68135 13.3452L10.5001 9.5274ZM10.5001 1.99944e-08C12.0453 7.35929e-05 13.5367 0.568002 14.6906 1.59581C15.8445 2.62361 16.5805 4.03962 16.7587 5.5746C17.8785 5.87998 18.8554 6.56919 19.5186 7.52178C20.1819 8.47436 20.4893 9.62972 20.3871 10.786C20.2849 11.9422 19.7797 13.0257 18.9597 13.8472C18.1396 14.6687 17.057 15.1759 15.901 15.2802V13.4676C16.3151 13.4085 16.7133 13.2674 17.0724 13.0527C17.4314 12.8379 17.7441 12.5539 17.9922 12.217C18.2402 11.8801 18.4187 11.4972 18.5171 11.0906C18.6156 10.6839 18.6321 10.2618 18.5656 9.84876C18.4991 9.43572 18.351 9.04005 18.13 8.68486C17.9089 8.32967 17.6194 8.02208 17.2781 7.78002C16.9369 7.53797 16.5509 7.36631 16.1426 7.27507C15.7343 7.18383 15.312 7.17483 14.9002 7.2486C15.0411 6.5924 15.0335 5.91297 14.8778 5.2601C14.7222 4.60722 14.4225 3.99743 14.0007 3.47538C13.5789 2.95333 13.0456 2.53225 12.44 2.24298C11.8343 1.9537 11.1717 1.80357 10.5005 1.80357C9.82933 1.80357 9.16666 1.9537 8.56103 2.24298C7.95539 2.53225 7.42214 2.95333 7.00031 3.47538C6.57849 3.99743 6.27879 4.60722 6.12315 5.2601C5.96752 5.91297 5.9599 6.5924 6.10085 7.2486C5.27974 7.0944 4.43101 7.27271 3.74136 7.74429C3.05171 8.21586 2.57765 8.94209 2.42345 9.7632C2.26925 10.5843 2.44756 11.433 2.91914 12.1227C3.39072 12.8123 4.11694 13.2864 4.93805 13.4406L5.10005 13.4676V15.2802C3.94396 15.1761 2.86122 14.669 2.04107 13.8476C1.22093 13.0261 0.715545 11.9426 0.613258 10.7863C0.51097 9.63009 0.818283 8.47466 1.48148 7.522C2.14468 6.56934 3.12159 5.88005 4.24145 5.5746C4.41939 4.03954 5.15532 2.62342 6.30927 1.59558C7.46323 0.567738 8.95471 -0.000123032 10.5001 1.99944e-08Z"
                fill="black"
              />
            </svg>
            <h1 className="font-medium">Drop files here</h1>
          </div>
        ) : (
          <>
            <svg className="w-5" viewBox="0 0 21 18" fill="none">
              <path
                d="M10.5001 9.5274L14.3188 13.3452L13.0452 14.6187L11.4001 12.9735V18H9.60005V12.9717L7.95485 14.6187L6.68135 13.3452L10.5001 9.5274ZM10.5001 1.99944e-08C12.0453 7.35929e-05 13.5367 0.568002 14.6906 1.59581C15.8445 2.62361 16.5805 4.03962 16.7587 5.5746C17.8785 5.87998 18.8554 6.56919 19.5186 7.52178C20.1819 8.47436 20.4893 9.62972 20.3871 10.786C20.2849 11.9422 19.7797 13.0257 18.9597 13.8472C18.1396 14.6687 17.057 15.1759 15.901 15.2802V13.4676C16.3151 13.4085 16.7133 13.2674 17.0724 13.0527C17.4314 12.8379 17.7441 12.5539 17.9922 12.217C18.2402 11.8801 18.4187 11.4972 18.5171 11.0906C18.6156 10.6839 18.6321 10.2618 18.5656 9.84876C18.4991 9.43572 18.351 9.04005 18.13 8.68486C17.9089 8.32967 17.6194 8.02208 17.2781 7.78002C16.9369 7.53797 16.5509 7.36631 16.1426 7.27507C15.7343 7.18383 15.312 7.17483 14.9002 7.2486C15.0411 6.5924 15.0335 5.91297 14.8778 5.2601C14.7222 4.60722 14.4225 3.99743 14.0007 3.47538C13.5789 2.95333 13.0456 2.53225 12.44 2.24298C11.8343 1.9537 11.1717 1.80357 10.5005 1.80357C9.82933 1.80357 9.16666 1.9537 8.56103 2.24298C7.95539 2.53225 7.42214 2.95333 7.00031 3.47538C6.57849 3.99743 6.27879 4.60722 6.12315 5.2601C5.96752 5.91297 5.9599 6.5924 6.10085 7.2486C5.27974 7.0944 4.43101 7.27271 3.74136 7.74429C3.05171 8.21586 2.57765 8.94209 2.42345 9.7632C2.26925 10.5843 2.44756 11.433 2.91914 12.1227C3.39072 12.8123 4.11694 13.2864 4.93805 13.4406L5.10005 13.4676V15.2802C3.94396 15.1761 2.86122 14.669 2.04107 13.8476C1.22093 13.0261 0.715545 11.9426 0.613258 10.7863C0.51097 9.63009 0.818283 8.47466 1.48148 7.522C2.14468 6.56934 3.12159 5.88005 4.24145 5.5746C4.41939 4.03954 5.15532 2.62342 6.30927 1.59558C7.46323 0.567738 8.95471 -0.000123032 10.5001 1.99944e-08Z"
                fill="#686767"
              />
            </svg>
            <div className="text-[14px]">
              <p>Choose a file or drag & drop it here.</p>
              <p>JPEG, PNG, and MP4 formats, up to 50 MB.</p>
            </div>
            <button type="button" className="border border-bordegray67 rounded-lg p-2">
              Browse Files
            </button>
          </>
        )}
      </div>
      <div className="grid grid-cols-3 gap-3 py-10">
        {images.map((image) => (
          <PreviewImage url={image.preview} key={image._id} removeProduct={() => removeImage(image._id)} />
        ))}
      </div>
      <Toaster richColors />
    </>
  );
};

export default Dropzone;
