// useCaptcha.ts
import { useRef, useState, useEffect } from "react";

const SITE_KEY_DEV = "xxx";


declare global {
  interface Window {
    grecaptcha: {
      getResponse: (id?: string | number) => string;
      reset: (id?: string | number) => void;
      render: (container: string | HTMLElement, parameters: any) => number;
    };
  }
}
let scriptLoaded = false;
export default function useCaptcha() {
  const captchaRef = useRef<HTMLDivElement>(null);
  const [captchaId, setCaptchaId] = useState<number | null>(null);
  const [captchaRendered, setCaptchaRendered] = useState(false);

  useEffect(() => {
    const renderCaptcha = () => {
      if (
        window.grecaptcha &&
        captchaRef.current &&
        captchaId === null &&
        !captchaRendered
      ) {
        try{
            const id = window.grecaptcha.render(captchaRef.current, {
              sitekey: SITE_KEY_DEV,
            });
            setCaptchaId(id);
            setCaptchaRendered(true);
        }catch (e){
              console.error("reCAPTCHA render error:", e);
        }
      }

    };
  
     if (!scriptLoaded) {
      scriptLoaded = true;

      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = renderCaptcha;
      document.body.appendChild(script);
    } else {
      // if already loaded, render directly
      renderCaptcha();
    }
  }, [captchaId, captchaRendered]);


  

  return { captchaRef, captchaId };
}
