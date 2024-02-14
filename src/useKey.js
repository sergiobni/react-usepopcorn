import { useEffect } from 'react';

export function useKey(key, action) {
  useEffect(() => {
    //Para event listeners tenemos que forzar la eliminación para que no se acumulen cada vez que se llaman, para ello creamos una función separada que llamaremos primero a ejecutar como listener y luego poder referenciar para destruir
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }
    document.addEventListener('keydown', callback);

    return function () {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
}
