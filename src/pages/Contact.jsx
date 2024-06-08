
import Stack from 'react-bootstrap/Stack';

export default function COntact() {
    return (
        <Stack gap={3}>
          <div className="p-2">Please reach out at <b><a href="mailto:advikasharma2016@outlook.com?subject=AwesomeArtAndDecor" target="_top">advikasharma2016@outlook.com</a></b> for placing your order.</div>
          <div className="p-2">Payment Options</div>
          <div className="p-2"><b>Paypal:gaurava3@gmail.com</b></div>
          <div className="p-2"><b>Venmo:Gaurava-Sharma</b></div>
        </Stack>
      );
  }