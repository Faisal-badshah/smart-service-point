import { Phone } from 'lucide-react';

const CallButton = () => {
  return (
    <a
      href="tel:+912269470420"
      className="fixed bottom-6 right-4 md:hidden z-50"
      aria-label="Call Now"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-30" />
        <div className="relative w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
          <Phone className="w-6 h-6 text-accent-foreground" />
        </div>
      </div>
    </a>
  );
};

export default CallButton;
