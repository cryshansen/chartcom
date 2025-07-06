// useCaptcha.tsx
import { useRef, useState, useEffect } from "react";
/** note navigate to the recaptcha site for the right key to the right environment Below is production crystalhansenartographicCOM */
const SITE_KEY_DEV = "6LcyqIcaAAAAANohSerPkxKeT2KgvseGpudPhFPi";
/** local host has 2 in my account tbd */
declare global {
  interface Window {
    grecaptcha?: {
      render: (container: string | HTMLElement, parameters: any) => number;
      reset: (id?: string | number) => void;
      getResponse: (id?: string | number) => string;
    };
  }
}

let scriptLoading = false;
let grecaptchaReady = false;
const grecaptchaReadyCallbacks: (() => void)[] = [];

function loadGrecaptcha(callback: () => void) {
  if (grecaptchaReady) return callback();

  grecaptchaReadyCallbacks.push(callback);

  if (!scriptLoading) {
    scriptLoading = true;

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const waitForGrecaptcha = setInterval(() => {
        if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
          clearInterval(waitForGrecaptcha);
          grecaptchaReady = true;
          grecaptchaReadyCallbacks.forEach(cb => cb());
        }
      }, 100);
    };

    document.body.appendChild(script);
  }
}

export default function useCaptcha() {
  const captchaRef = useRef<HTMLDivElement>(null);
  const [captchaId, setCaptchaId] = useState<number | null>(null);

  useEffect(() => {
    loadGrecaptcha(() => {
      if (captchaRef.current && captchaId === null) {
        // prevent double rendering by checking if there's a child node
        if (captchaRef.current.childNodes.length > 0) {
          console.warn("reCAPTCHA already rendered in element");
          return;
        }

        try {
          const id = window.grecaptcha!.render(captchaRef.current, {
            sitekey: SITE_KEY_DEV,
          });
          setCaptchaId(id);
        } catch (e) {
          console.error("reCAPTCHA render error:", e);
        }
      }
    });
  }, [captchaId]);

  return { captchaRef, captchaId };
}
