import { useEffect, useState } from 'react';

export const AboutDescription = () => {
  const [licenseText, setLicenseText] = useState('');

  useEffect(() => {
    fetch('/third-party-licenses.txt')
      .then((res) => res.text())
      .then((text) => setLicenseText(text));
  }, []);

  return (
    <div>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{licenseText}</pre>
    </div>
  );
}
