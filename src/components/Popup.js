import React, { useEffect, useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [cookiesPreference, setCookiesPrefernce] = useState({
    analytics: true,
    marketing: true,
  });

  const handleAcceptAll = () => {
    setCookiesPrefernce({
      analytics: true,
      marketing: true,
    });
    setShowPopup(false);
  };

  const handleAcceptSome = () => {
    setCookiesPrefernce({
      analytics: false,
      marketing: false,
    });
    setShowPopup(false);
  };
  const handleDeclineAll = () => {
    setCookiesPrefernce({
      analytics: false,
      marketing: false,
    });
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div>
          <h2>Cookie Preference</h2>
          <div>
            <input
              //   style={{ display: "none" }}
              type="checkbox"
              id="analytics"
              checked={cookiesPreference.analytics}
              onChange={() =>
                setCookiesPrefernce((prev) => ({
                  ...prev,
                  analytics: !prev.analytics,
                }))
              }
            />
            <label htmlFor="analytics">Analytics</label>
          </div>
          <div>
            <input
              //   style={{ display: "none" }}
              type="checkbox"
              id="marketing"
              checked={cookiesPreference.marketing}
              onChange={() =>
                setCookiesPrefernce((prev) => ({
                  ...prev,
                  marketing: !prev.marketing,
                }))
              }
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div>
            <button onClick={handleAcceptAll}>Accept All </button>
            <button onClick={handleAcceptSome}>Accept Selected </button>
            <button onClick={handleDeclineAll}>Decline All </button>
          </div>
        </div>
      )}
      <div>
        <h1>App Component</h1>
        <h1>Analytic</h1>
      </div>
    </div>
  );
};

export default Popup;
