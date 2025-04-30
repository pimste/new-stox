import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | STOX",
  description: "Lees ons privacybeleid en hoe wij omgaan met uw persoonlijke gegevens bij STOX Boutique.",
};

export default function PrivacybeleidPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Privacybeleid</h1>
      
      <div className="prose prose-slate max-w-none text-black">
        <p className="text-lg mb-8 text-black">
          Bij STOX, gevestigd te Stationsstraat 84, 6181 AK Elsloo, respecteren wij uw privacy en dragen wij zorg voor de persoonlijke informatie die u met ons deelt. In dit privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom we deze verzamelen en wat we ermee doen. Dit privacybeleid is van toepassing op onze website (stoxwear.nl) en alle diensten die wij aanbieden.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Welke gegevens verzamelen wij</h2>
        <p>Bij STOX kunnen wij de volgende persoonlijke gegevens verzamelen:</p>
        <ul>
          <li><strong>Contactgegevens:</strong> Zoals uw naam, adres, telefoonnummer en e-mailadres.</li>
          <li><strong>Transactiegegevens:</strong> Informatie over producten die u bij ons heeft gekocht en de bijbehorende betaling.</li>
          <li><strong>Klantenservicegegevens:</strong> Informatie die u verstrekt wanneer u contact opneemt met onze klantenservice.</li>
          <li><strong>Nieuwsbriefgegevens:</strong> Indien u zich aanmeldt voor onze nieuwsbrief, verzamelen wij uw e-mailadres.</li>
          <li><strong>Websitegebruik:</strong> Informatie over hoe u onze website gebruikt, zoals browsertype, IP-adres, paginaweergaven, inloginformatie en verwijzende URL's.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Waarom wij gegevens verzamelen</h2>
        <p>Wij verzamelen en gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
        <ul>
          <li>Om uw bestelling te verwerken, te verzenden en u op de hoogte te houden over de status.</li>
          <li>Om uw vragen en verzoeken te beantwoorden en onze klantenservice te verbeteren.</li>
          <li>Om u op de hoogte te houden van nieuwe collecties, evenementen en speciale aanbiedingen, indien u hiervoor toestemming heeft gegeven.</li>
          <li>Om onze dienstverlening en website te verbeteren en aan te passen aan uw voorkeuren.</li>
          <li>Om te voldoen aan wettelijke verplichtingen, zoals fiscale bewaarplicht.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Bewaartermijn</h2>
        <p>Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld. Specifiek:</p>
        <ul>
          <li>Contactgegevens en transactiegegevens bewaren wij tot 7 jaar na uw laatste aankoop (vereist voor de Belastingdienst).</li>
          <li>Nieuwsbriefgegevens bewaren wij totdat u zich uitschrijft.</li>
          <li>Websitegebruiksgegevens worden na maximaal 26 maanden geanonimiseerd.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Delen van gegevens met derden</h2>
        <p>Wij delen uw persoonlijke gegevens alleen met derden als dit noodzakelijk is voor het uitvoeren van onze dienstverlening of om te voldoen aan een wettelijke verplichting. Dit kunnen zijn:</p>
        <ul>
          <li>Bezorgdiensten voor het afleveren van uw bestelling.</li>
          <li>Betaaldienstverleners voor het verwerken van uw betaling.</li>
          <li>IT-dienstverleners die onze systemen onderhouden.</li>
          <li>Overheidsinstanties indien wettelijk verplicht.</li>
        </ul>
        
        <p>Wij verkopen uw gegevens nooit aan derden voor marketingdoeleinden. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Cookies</h2>
        <p>Onze website gebruikt cookies om uw gebruikservaring te verbeteren. Voor meer informatie over welke cookies wij gebruiken en waarom, verwijzen wij u naar ons <a href="/cookiebeleid" className="text-primary hover:underline">Cookiebeleid</a>.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Uw rechten</h2>
        <p>Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:</p>
        <ul>
          <li><strong>Recht op inzage:</strong> U heeft het recht om te weten welke persoonlijke gegevens wij van u verwerken.</li>
          <li><strong>Recht op rectificatie:</strong> U kunt ons vragen om uw persoonlijke gegevens te corrigeren indien deze onjuist zijn.</li>
          <li><strong>Recht op vergetelheid:</strong> U kunt ons vragen om uw persoonlijke gegevens te verwijderen.</li>
          <li><strong>Recht op beperking van de verwerking:</strong> U kunt ons vragen de verwerking van uw persoonlijke gegevens tijdelijk te stoppen.</li>
          <li><strong>Recht op dataportabiliteit:</strong> U kunt ons vragen uw gegevens over te dragen aan een andere organisatie.</li>
          <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw persoonlijke gegevens.</li>
        </ul>
        
        <p>Om gebruik te maken van deze rechten, kunt u contact opnemen via info@stoxwear.nl. Wij zullen binnen 30 dagen reageren op uw verzoek.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Beveiliging</h2>
        <p>Wij nemen passende maatregelen om uw persoonlijke gegevens te beschermen tegen verlies, misbruik, onbevoegde toegang, openbaarmaking en wijziging. Onze beveiligingsmaatregelen omvatten onder andere:</p>
        <ul>
          <li>Versleutelde verbindingen (SSL) voor alle communicatie met onze website.</li>
          <li>Regelmatige updates van onze systemen en software.</li>
          <li>Toegangsbeperking tot persoonlijke gegevens voor medewerkers op basis van functie.</li>
          <li>Fysieke beveiligingsmaatregelen voor onze servers en kantoren.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Wijzigingen in dit privacybeleid</h2>
        <p>Wij kunnen dit privacybeleid van tijd tot tijd bijwerken om veranderingen in onze dienstverlening of wettelijke vereisten weer te geven. De meest recente versie is altijd beschikbaar op onze website. Wij raden u aan om regelmatig ons privacybeleid te bekijken.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Contact</h2>
        <p>Als u vragen heeft over ons privacybeleid of hoe wij omgaan met uw persoonlijke gegevens, kunt u contact met ons opnemen via:</p>
        <p>
          STOX Boutique<br />
          Stationsstraat 84<br />
          6181 AK Elsloo<br />
          Telefoon: +31 46 437 1487<br />
          E-mail: info@stoxwear.nl
        </p>

        <p className="mt-10 text-sm text-black">
          Laatst bijgewerkt: 26 juni 2024
        </p>
      </div>
    </div>
  );
} 