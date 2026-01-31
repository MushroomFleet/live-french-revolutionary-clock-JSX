import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe } from 'lucide-react';

const FrenchRevolutionaryTime = () => {
  const [language, setLanguage] = useState('en'); // en, de, es
  
  // Complete translations for all UI elements
  const translations = {
    en: {
      title: "Revolutionary Calendar",
      subtitle: "Decimal Time of the French Republic",
      decimalTime: "Decimal Time",
      hoursMinutesSeconds: "10 hours · 100 minutes · 100 seconds",
      dateRevolutionary: "Revolutionary Date",
      yearOfRepublic: "Year of the Republic",
      decade: "Decade",
      dayNamed: "Named Day",
      poeticMonths: "The Twelve Poetic Months",
      footer1: "Established September 22, 1792 · Days named after nature, animals, minerals and agricultural tools",
      footer2: "Each year: 12 months × 30 days + 5 complementary days (6 leap years)",
      monthMeanings: {
        "Vendémiaire": "Grape Harvest",
        "Brumaire": "Mist",
        "Frimaire": "Frost",
        "Nivôse": "Snow",
        "Pluviôse": "Rain",
        "Ventôse": "Wind",
        "Germinal": "Germination",
        "Floréal": "Flower",
        "Prairial": "Meadow",
        "Messidor": "Harvest",
        "Thermidor": "Heat",
        "Fructidor": "Fruit"
      }
    },
    de: {
      title: "Revolutionärer Kalender",
      subtitle: "Dezimalzeit der Französischen Republik",
      decimalTime: "Dezimalzeit",
      hoursMinutesSeconds: "10 Stunden · 100 Minuten · 100 Sekunden",
      dateRevolutionary: "Revolutionäres Datum",
      yearOfRepublic: "Jahr der Republik",
      decade: "Dekade",
      dayNamed: "Benannter Tag",
      poeticMonths: "Die zwölf poetischen Monate",
      footer1: "Gegründet am 22. September 1792 · Tage benannt nach Natur, Tieren, Mineralien und Landwirtschaftswerkzeugen",
      footer2: "Jedes Jahr: 12 Monate × 30 Tage + 5 Komplementartage (6 Schaltjahre)",
      monthMeanings: {
        "Vendémiaire": "Traubenernte",
        "Brumaire": "Nebel",
        "Frimaire": "Frost",
        "Nivôse": "Schnee",
        "Pluviôse": "Regen",
        "Ventôse": "Wind",
        "Germinal": "Keimung",
        "Floréal": "Blume",
        "Prairial": "Wiese",
        "Messidor": "Ernte",
        "Thermidor": "Wärme",
        "Fructidor": "Frucht"
      }
    },
    es: {
      title: "Calendario Revolucionario",
      subtitle: "Tiempo Decimal de la República Francesa",
      decimalTime: "Tiempo Decimal",
      hoursMinutesSeconds: "10 horas · 100 minutos · 100 segundos",
      dateRevolutionary: "Fecha Revolucionaria",
      yearOfRepublic: "Año de la República",
      decade: "Década",
      dayNamed: "Día Nombrado",
      poeticMonths: "Los Doce Meses Poéticos",
      footer1: "Establecido el 22 de septiembre de 1792 · Días nombrados según la naturaleza, animales, minerales y herramientas agrícolas",
      footer2: "Cada año: 12 meses × 30 días + 5 días complementarios (6 años bisiestos)",
      monthMeanings: {
        "Vendémiaire": "Cosecha de Uva",
        "Brumaire": "Niebla",
        "Frimaire": "Escarcha",
        "Nivôse": "Nieve",
        "Pluviôse": "Lluvia",
        "Ventôse": "Viento",
        "Germinal": "Germinación",
        "Floréal": "Flor",
        "Prairial": "Pradera",
        "Messidor": "Cosecha",
        "Thermidor": "Calor",
        "Fructidor": "Fruta"
      }
    }
  };

  const flags = {
    en: '🇬🇧',
    de: '🇩🇪',
    es: '🇪🇸'
  };

  const t = translations[language];
  // All 365 days with their revolutionary names
  const dailyNames = [
    // Vendémiaire (Grape Harvest) - Sept 22 - Oct 21
    "Raisin", "Safran", "Châtaigne", "Colchique", "Cheval", "Balsamine", "Carotte", "Amarante", "Panais", "Cuve",
    "Potimarron", "Réséda", "Âne", "Oignon", "Épée", "Baselle", "Bette", "Betterave", "Courge", "Concombre",
    "Radis", "Mûrier", "Comestible", "Chanterelle", "Raifort", "Tubercule", "Toile", "Endive", "Graine", "Lablab",
    
    // Brumaire (Mist) - Oct 22 - Nov 20
    "Truffé", "Bigarre", "Poireau", "Épinard", "Huitre", "Céleri", "Féve", "Lentille", "Noix", "Pommier",
    "Cresson", "Chêne", "Corail", "Cendre", "Cognassier", "Figuier", "Noisetier", "Olivier", "Ronce", "Réglisse",
    "Ail", "Noix", "Noix de Galle", "Noisetier", "Fragon", "Phlomis", "Cade", "Ail", "Noisetier", "Buis",
    
    // Frimaire (Frost) - Nov 21 - Dec 20
    "Chicoree", "Néflier", "Noisetier", "Châtaigne", "Lupin", "Coton", "Réséda", "Mâcre", "Paméla", "Houblon",
    "Sorgho", "Échalote", "Myrrhe", "Noix", "Potimarron", "Réséda", "Estragon", "Frêne", "Chêne Vert", "Galèga",
    "Noisetier", "Épine-Vinette", "Noix", "Châtaigne", "Noisetier", "Amande", "Noisette", "Noisetier", "Ail", "Houblon",
    
    // Nivôse (Snow) - Dec 21 - Jan 19
    "Paille", "Fumier", "Salpetre", "Tuyau", "Asperge", "Glaçon", "Pluie", "Chaleur", "Froid", "Givre",
    "Poivre", "Bruyère", "Feuilles", "Charbon", "Fer", "Fonte", "Naphte", "Soufre", "Bitume", "Granit",
    "Lave", "Lie", "Sel", "Nitre", "Houille", "Soufre", "Granit", "Lave", "Bitume", "Soufre", "Charbon",
    
    // Pluviôse (Rain) - Jan 20 - Feb 18
    "Vesou", "Cresson", "Persil", "Cochlearia", "Poireau", "Thon", "Saumon", "Escargot", "Sauce", "Maquereaux",
    "Saumon", "Trout", "Persil", "Poireau", "Radis", "Cerfeuil", "Chicorée", "Estragon", "Fenouil", "Crevette",
    "Persil", "Poireau", "Radis", "Cerfeuil", "Poireau", "Carotte", "Betterave", "Poireau", "Estragon", "Fenouil",
    
    // Ventôse (Wind) - Feb 19 - Mar 20
    "Amandier", "Pissenlit", "Peuplier", "Fumerae", "Fumette", "Amande", "Amandier", "Alisier", "Apricot", "Asperge",
    "Amandier", "Betterave", "Bourgeon", "Bouleau", "Châtaignier", "Camélia", "Cerisier", "Chêne", "Chêne-Liège", "Châtaigne",
    "Cognassier", "Cerfeuil", "Chervis", "Châtaignier", "Chèvrefeuille", "Corail", "Courge", "Crocus", "Croûte", "Cyclamen",
    
    // Germinal (Germination) - Mar 21 - Apr 19
    "Primevère", "Platane", "Asperge", "Tulipe", "Poule", "Poireau", "Ail", "Epinard", "Violette", "Anémone",
    "Pensée", "Bourgeon", "Choufleur", "Betterave", "Crocus", "Narcisse", "Oseille", "Fritillaire", "Tulipe", "Anemone",
    "Jacinthe", "Ruchette", "Sauge", "Ail", "Aulne", "Aune", "Ancolie", "Anthémis", "Aperge", "Arum",
    
    // Floréal (Flower) - Apr 20 - May 19
    "Rose", "Chêne", "Fougère", "Aubépine", "Rossignol", "Muguet", "Champignon", "Hyacinthe", "Bec-de-Grue", "Lychnis",
    "Pivoine", "Ancolie", "Muflier", "Cerfeuil", "Pensée", "Pivoine", "Lilas", "Anémone", "Pensée", "Muflier",
    "Muscari", "Giroflée", "Tulipe", "Aubépine", "Tulipe", "Alysse", "Myosotis", "Ornithogale", "Pivoine", "Rhéa",
    
    // Prairial (Meadow) - May 20 - Jun 18
    "Luzerne", "Pivoine", "Bouleau", "Rossignol", "Papillon", "Cerfeuil", "Pensée", "Bouleau", "Papillon", "Caille",
    "Muguet", "Tulipe", "Sauge", "Oseille", "Ficaire", "Mauve", "Myrte", "Anis", "Pensée", "Pivoine",
    "Renoncule", "Scabiose", "Friandise", "Reine-Marguerite", "Renoncule", "Romaine", "Richefeuille", "Rhubarbe", "Renoncule", "Rhapontic",
    
    // Messidor (Harvest) - Jun 19 - Jul 18
    "Seigle", "Avoine", "Oignon", "Véronique", "Mulet", "Romaine", "Cresson", "Benoîte", "Quintefeuille", "Chariot",
    "Seigle", "Blé", "Chalumeau", "Epeautre", "Bourrache", "Valériane", "Carotte", "Amarante", "Panais", "Guimauve",
    "Miellée", "Caille-Lait", "Sainfoin", "Avoine", "Pavot", "Pastel", "Pivot", "Poule", "Pois", "Persil",
    
    // Thermidor (Heat) - Jul 19 - Aug 17
    "Épeautre", "Bouillon-Blanc", "Melon", "Ivraie", "Baudrier", "Guimauve", "Carotte", "Pariétaire", "Panais", "Chariot",
    "Blé", "Chalumeau", "Absinthe", "Épilobe", "Œillet", "Carotte", "Sarriette", "Statice", "Scabieuse", "Safran",
    "Camomille", "Cataire", "Clématite", "Charline", "Cératelle", "Cyclope", "Cyprès", "Citronnelle", "Clarté", "Clavaire",
    
    // Fructidor (Fruit) - Aug 18 - Sep 21
    "Raisin", "Figue", "Mûre", "Noix", "Truffe", "Cerise", "Pasteque", "Abricot", "Basilic", "Belier",
    "Cassis", "Cerfeuil", "Cerises", "Châtaigne", "Châtaignier", "Chanterelle", "Champignon", "Chataigne", "Châtaignier", "Chausson",
    "Courge", "Choux", "Champignon", "Copeau", "Corail", "Coriandre", "Cornichon", "Courge", "Cristal", "Crustacé",
    "Dahlia", "Daphné", "Dattier", "Datura", "Daulphin", "Dé", "Décalogue", "Dédale", "Delfin", "Dentelaire"
  ];

  const monthNames = [
    { name: "Vendémiaire", meaning: "Grape Harvest", color: "from-purple-600 to-red-600" },
    { name: "Brumaire", meaning: "Mist", color: "from-gray-600 to-slate-600" },
    { name: "Frimaire", meaning: "Frost", color: "from-blue-500 to-cyan-500" },
    { name: "Nivôse", meaning: "Snow", color: "from-cyan-400 to-blue-400" },
    { name: "Pluviôse", meaning: "Rain", color: "from-blue-600 to-teal-600" },
    { name: "Ventôse", meaning: "Wind", color: "from-teal-500 to-green-500" },
    { name: "Germinal", meaning: "Germination", color: "from-green-500 to-emerald-500" },
    { name: "Floréal", meaning: "Flower", color: "from-emerald-500 to-pink-500" },
    { name: "Prairial", meaning: "Meadow", color: "from-pink-500 to-rose-500" },
    { name: "Messidor", meaning: "Harvest", color: "from-yellow-500 to-orange-500" },
    { name: "Thermidor", meaning: "Heat", color: "from-orange-500 to-red-500" },
    { name: "Fructidor", meaning: "Fruit", color: "from-red-500 to-rose-600" }
  ];

  const [time, setTime] = useState({
    decimalHours: 0,
    decimalMinutes: 0,
    decimalSeconds: 0,
  });

  const [date, setDate] = useState({
    year: 0,
    month: 0,
    day: 0,
    dayName: "",
    monthName: "",
    decade: 0,
  });

  useEffect(() => {
    const calculateRevolutionaryTime = () => {
      const now = new Date();
      
      // Convert standard time to decimal time
      const totalMs = now.getHours() * 3600000 + 
                      now.getMinutes() * 60000 + 
                      now.getSeconds() * 1000 + 
                      now.getMilliseconds();
      
      const msPerDay = 86400000;
      const msPerDecimalHour = msPerDay / 10;
      const msPerDecimalMinute = msPerDecimalHour / 100;
      const msPerDecimalSecond = msPerDecimalMinute / 100;

      const decimalHours = Math.floor(totalMs / msPerDecimalHour) % 10;
      const remainder1 = totalMs % msPerDecimalHour;
      const decimalMinutes = Math.floor(remainder1 / msPerDecimalMinute) % 100;
      const remainder2 = remainder1 % msPerDecimalMinute;
      const decimalSeconds = Math.floor(remainder2 / msPerDecimalSecond) % 100;

      setTime({
        decimalHours: String(decimalHours).padStart(1, '0'),
        decimalMinutes: String(decimalMinutes).padStart(2, '0'),
        decimalSeconds: String(decimalSeconds).padStart(2, '0'),
      });

      // Convert Gregorian date to Revolutionary calendar
      // Revolutionary calendar started Sept 22, 1792 = 1/1/1
      const startDate = new Date(1792, 8, 22); // Sept 22, 1792
      const daysSinceStart = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
      
      // Calculate year (approximate, doesn't account for leap year rules)
      const year = Math.floor(daysSinceStart / 365.25) + 1;
      const dayOfYear = daysSinceStart % 365 + 1;
      
      // Calculate month (30 days per month)
      let month, dayOfMonth;
      if (dayOfYear <= 360) {
        month = Math.ceil(dayOfYear / 30);
        dayOfMonth = ((dayOfYear - 1) % 30) + 1;
      } else {
        // Complementary days
        month = 13;
        dayOfMonth = dayOfYear - 360;
      }

      const monthIndex = month === 13 ? 11 : month - 1;
      const dayName = dailyNames[dayOfYear - 1] || "Jour inconnu";

      setDate({
        year,
        month,
        day: dayOfMonth,
        dayName,
        monthName: monthNames[monthIndex]?.name || "Mois inconnu",
        meaning: monthNames[monthIndex]?.meaning || "",
        decade: Math.ceil(dayOfMonth / 10),
        gradient: monthNames[monthIndex]?.color || "from-gray-600 to-gray-700",
      });
    };

    calculateRevolutionaryTime();
    const interval = setInterval(calculateRevolutionaryTime, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12">
      {/* Background decorative pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
                           linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Language Toggle Menu */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-3 bg-slate-800 bg-opacity-80 backdrop-blur rounded-full p-2 border border-slate-600">
            {Object.entries(flags).map(([lang, flag]) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-4 py-2 rounded-full font-serif text-lg transition-all ${
                  language === lang
                    ? 'bg-yellow-500 text-slate-900 shadow-lg'
                    : 'text-yellow-200 hover:text-yellow-100 hover:bg-slate-700'
                }`}
                title={lang.toUpperCase()}
              >
                {flag}
              </button>
            ))}
          </div>
        </div>

      {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-2 tracking-tight">
            Calendrier Révolutionnaire
          </h1>
          <p className="text-yellow-300 text-lg font-light italic">
            {t.subtitle}
          </p>
        </div>

        {/* Decimal Time Clock */}
        <div className="bg-gradient-to-br from-yellow-900 via-yellow-800 to-amber-900 rounded-2xl p-8 mb-8 shadow-2xl border-2 border-yellow-600">
          <div className="text-center">
            <div className="text-yellow-100 text-sm font-serif mb-4 uppercase tracking-widest">
              {t.decimalTime}
            </div>
            <div className="text-7xl md:text-8xl font-serif text-yellow-300 font-bold tracking-tighter font-mono mb-4"
                 style={{ fontVariantNumeric: 'tabular-nums' }}>
              {time.decimalHours}:{time.decimalMinutes}:{time.decimalSeconds}
            </div>
            <div className="text-yellow-200 text-sm font-serif">
              {t.hoursMinutesSeconds}
            </div>
          </div>
        </div>

        {/* Date Display */}
        <div className={`bg-gradient-to-br ${date.gradient} rounded-2xl p-10 mb-8 shadow-2xl border-2 border-yellow-600`}>
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Calendar className="w-6 h-6" />
              <span className="text-sm font-serif uppercase tracking-widest">{t.dateRevolutionary}</span>
            </div>
            
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-serif font-bold mb-3">
                {date.day} {date.monthName}
              </div>
              <div className="text-2xl md:text-3xl font-serif text-yellow-100 mb-2">
                {t.yearOfRepublic.replace("Year", "")} {date.year} {t.yearOfRepublic.split("Year").pop()}
              </div>
              <div className="text-lg text-yellow-50 font-light italic">
                {date.meaning && `(${date.meaning})`}
              </div>
            </div>

            <div className="bg-black bg-opacity-30 rounded-lg p-6 mb-6">
              <div className="text-yellow-100 text-xs font-serif uppercase tracking-widest mb-2">
                {t.decade} {date.decade} / {t.dayNamed}
              </div>
              <div className="text-3xl md:text-4xl font-serif italic text-yellow-200">
                {date.dayName}
              </div>
            </div>

            <div className="text-sm text-yellow-100 font-serif">
              {date.monthName} — {date.meaning} — {t.poeticMonths.split(" ").slice(0, -3).join(" ")} {date.month}/12
            </div>
          </div>
        </div>

        {/* Month Legend */}
        <div className="bg-slate-800 bg-opacity-80 backdrop-blur rounded-2xl p-8 border border-slate-600">
          <h2 className="text-2xl font-serif text-yellow-300 mb-8 text-center">
            {t.poeticMonths}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthNames.map((month, idx) => (
              <div key={idx} className="bg-slate-700 bg-opacity-60 p-4 rounded-lg border border-slate-600 hover:border-yellow-500 transition-colors">
                <div className={`text-sm font-bold bg-gradient-to-r ${month.color} bg-clip-text text-transparent mb-1`}>
                  {month.name}
                </div>
                <div className="text-yellow-100 text-xs font-serif italic">
                  {t.monthMeanings[month.name] || month.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center text-slate-400 text-xs font-serif">
          <p>{t.footer1}</p>
          <p className="mt-2">{t.footer2}</p>
        </div>
      </div>
    </div>
  );
};

export default FrenchRevolutionaryTime;
