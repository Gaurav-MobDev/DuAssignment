import {TRANSLATION_STRINGS} from '../utils';

export function fetchWithTimeout(url: string, options = {}, timeout = 8000) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(TRANSLATION_STRINGS.timeoutError));
    }, timeout);
    fetch(url, options)
      .then(response => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch(error => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}
