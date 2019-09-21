import { useContext, useEffect } from 'react';
import { BroLocationContext } from 'contexts/BroLocation.context';

export function useBroLocation(props) {
  const { broLocation, setBroLocation } = useContext(BroLocationContext);

  useEffect(() => {
    if (!window.navigator || !window.navigator.geolocation) {
      return alert('Your browser is not supported, sorry bro!');
    }
    if (!broLocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          setBroLocation({
            long: position.coords.longitude,
            lat: position.coords.latitude
          });
        },
        () => alert('Location services must be turned on bro.')
      );

      // if (window.navigator.permissions.query) {
      //   window.navigator.permissions
      //     .query({ name: 'geolocation' })
      //     .then(res => {
      //       if (res.state === 'denied') {
      //         return alert(
      //           `Bro, you've disabled geolocation tracking. Enable it bro.`
      //         );
      //       }
      //     });
      // }
    }
  });

  return broLocation;
}
