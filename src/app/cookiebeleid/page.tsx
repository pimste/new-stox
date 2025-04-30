import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiebeleid | STOX",
  description: "Bekijk ons cookiebeleid om te begrijpen hoe STOX cookies gebruikt om uw webervaring te verbeteren.",
};

export default function CookiebeleidPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Cookiebeleid</h1>
      
      <div className="prose prose-slate max-w-none text-black">
        <p className="text-lg mb-8 text-black">
          Op onze website stoxwear.nl maken wij gebruik van cookies. Een cookie is een eenvoudig klein bestandje dat met pagina's van deze website wordt meegestuurd en door uw browser op de harde schijf van uw computer, tablet, telefoon, etc. wordt opgeslagen. Dit cookiebeleid legt uit welke cookies wij gebruiken en waarom.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Welke cookies gebruiken wij?</h2>
        <p>Wij gebruiken de volgende soorten cookies op onze website:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Functionele cookies</h3>
        <p>Dit zijn cookies die noodzakelijk zijn om de website naar behoren te laten functioneren. Deze cookies worden gebruikt om bepaalde gebruikers- en voorkeursinstellingen te bewaren, om het gebruik van de winkelwagen mogelijk te maken, en om inloggegevens op te slaan. Zonder deze cookies kunnen bepaalde onderdelen van de website niet goed werken.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Analytische cookies</h3>
        <p>Wij gebruiken analytische cookies om inzicht te krijgen in het gebruik van onze website. Deze informatie gebruiken wij om onze website verder te ontwikkelen en te verbeteren voor onze bezoekers. Deze cookies verzamelen onder andere de volgende gegevens:</p>
        <ul>
          <li>Het aantal bezoekers op onze website</li>
          <li>Hoe lang een bezoeker op onze website is</li>
          <li>Welke pagina's bezoekers bekijken</li>
          <li>Via welke weg bezoekers op onze website terechtkomen</li>
        </ul>
        <p>Wij maken gebruik van Google Analytics, waarbij uw IP-adres geanonimiseerd wordt verwerkt. Wij hebben Google Analytics privacyvriendelijk ingesteld volgens de richtlijnen van de Autoriteit Persoonsgegevens. Dit betekent dat:</p>
        <ul>
          <li>We een verwerkersovereenkomst met Google hebben afgesloten</li>
          <li>'Gegevens delen' met Google hebben uitgezet</li>
          <li>Het laatste octet van het IP-adres is gemaskeerd</li>
          <li>De functie 'Gegevens delen met Google-producten en -diensten' is uitgezet</li>
          <li>We geen gebruik maken van andere Google-diensten in combinatie met Google Analytics-cookies</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Marketing- en personalisatiecookies</h3>
        <p>Deze cookies stellen ons in staat om gepersonaliseerde advertenties te tonen op platforms zoals Facebook, Instagram en Google. Ze onthouden uw bezoek aan onze website en delen deze informatie met derden zoals adverteerders. Deze cookies zijn alleen actief als u hier toestemming voor geeft in de cookiemelding die u ziet wanneer u onze website voor het eerst bezoekt.</p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Hoe lang blijven cookies opgeslagen?</h2>
        <p>De bewaartermijn van cookies verschilt per type:</p>
        <ul>
          <li><strong>Sessiecookies:</strong> Deze worden verwijderd zodra u uw browser sluit.</li>
          <li><strong>Permanente cookies:</strong> Deze blijven op uw apparaat staan tot ze verlopen of totdat u ze verwijdert. Onze functionele cookies worden maximaal 2 jaar bewaard.</li>
          <li><strong>Analytische cookies:</strong> Google Analytics cookies worden maximaal 26 maanden bewaard.</li>
          <li><strong>Marketing cookies:</strong> Deze worden maximaal 2 jaar bewaard.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies uitzetten en verwijderen</h2>
        <p>U kunt cookies uitzetten of verwijderen via uw browser. Hieronder vindt u links naar uitleg over het aanpassen van de cookie-instellingen in de meest gebruikte browsers:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=nl" target="_blank" className="text-primary hover:underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" className="text-primary hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" className="text-primary hover:underline">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/browsegegevens-verwijderen-in-microsoft-edge-8a0a0251-9c0e-972f-acb0-1c8acb65004a" target="_blank" className="text-primary hover:underline">Microsoft Edge</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cookievoorkeur wijzigen</h2>
        <p>Wanneer u onze website voor het eerst bezoekt, wordt u gevraagd uw cookievoorkeuren in te stellen. U kunt deze voorkeuren op elk moment wijzigen door op de link "Cookievoorkeuren aanpassen" te klikken in de footer van onze website.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Specifieke cookies die wij gebruiken</h2>
        <p>Hieronder vindt u een overzicht van de cookies die wij gebruiken:</p>
        <table className="mt-4 mb-8 min-w-full divide-y divide-gray-200 text-black">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Cookie</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Doel</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Bewaartermijn</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">_ga</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Analytisch</td>
              <td className="px-6 py-4 text-sm text-black">Wordt gebruikt door Google Analytics om gebruikers te onderscheiden</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">2 jaar</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">_gid</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Analytisch</td>
              <td className="px-6 py-4 text-sm text-black">Wordt gebruikt door Google Analytics om gebruikers te onderscheiden</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">24 uur</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">_gat</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Analytisch</td>
              <td className="px-6 py-4 text-sm text-black">Wordt gebruikt door Google Analytics om de verzoeksnelheid te beperken</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">1 minuut</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">stox_session</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Functioneel</td>
              <td className="px-6 py-4 text-sm text-black">Houdt de sessie van de gebruiker bij en bewaart winkelwagenitems</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Sessie</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">cookie_preferences</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Functioneel</td>
              <td className="px-6 py-4 text-sm text-black">Slaat de cookievoorkeuren van de gebruiker op</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">1 jaar</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">_fbp</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Marketing</td>
              <td className="px-6 py-4 text-sm text-black">Wordt gebruikt door Facebook voor het bijhouden van bezoeken over websites</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">3 maanden</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Wijzigingen in dit cookiebeleid</h2>
        <p>Wij behouden ons het recht voor om wijzigingen aan te brengen in dit cookiebeleid. Elke aanpassing zal op deze pagina worden gepubliceerd. We raden u aan dit cookiebeleid regelmatig te raadplegen, zodat u altijd op de hoogte bent van de inhoud van het geldende cookiebeleid.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Vragen en contact</h2>
        <p>Als u vragen heeft over de manier waarop wij met cookies omgaan, dan kunt u contact met ons opnemen via:</p>
        <p>
          STOX Boutique<br />
          Stationsstraat 84<br />
          6181 AK Elsloo<br />
          Telefoon: +31 46 437 1487<br />
          E-mail: info@stoxwear.nl
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Verband met privacybeleid</h2>
        <p>
          Ons <a href="/privacybeleid" className="text-primary hover:underline">privacybeleid</a> geeft meer informatie over hoe wij omgaan met de persoonsgegevens die wij verzamelen onder andere via cookies.
        </p>

        <p className="mt-10 text-sm text-black">
          Laatst bijgewerkt: 26 juni 2024
        </p>
      </div>
    </div>
  );
} 