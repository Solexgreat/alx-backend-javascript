// accept one argument fileName (string) and return a Promise rejecting with an Error and the string
export default function uploadPhoto(filename) {
  return Promise.reject(
    new Error(`${filename} cannot be processed`),
  );
}
