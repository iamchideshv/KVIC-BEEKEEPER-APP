/**
 * KVIC Beekeeper Application - Multi-Language Logic & Data Simulation
 * Supports: English, Hindi, Tamil, Telugu, Kannada, Malayalam
 * Designed for Indian Farmers under National Honey Mission (KVIC)
 */

// --- 6 INDIAN LANGUAGES DICTIONARY ---
const i18n = {
  en: {
    kvicSub: "Khadi & Village Industries Commission • KVIC",
    honeyMission: "National Honey Mission",
    brandHighlight: "Bee Mitra",
    navHome: "My Hives",
    navHealth: "Health Status",
    navHarvest: "Harvest Forecast",
    navHelp: "Expert Help",
    liveSensorsBadge: "LIVE SENSORS",
    speakBtn: "Listen",
    selectHive: "Your Hives",
    addHiveBtn: "+ Add New Box",
    conditionTitle: "Overall Hive Health",
    safeLabel: "Healthy",
    warningLabel: "Caution",
    dangerLabel: "Danger",
    honeyForecast: "Honey Harvest Forecast",
    harvestDaysLabel: "Days to Harvest",
    daysUnit: "days",
    expectedQtyLabel: "Expected Honey Yield",
    kgUnit: "kg",
    marketValuePrefix: "Est. Value: ₹",
    liveSensorsTitle: "Live Sensor Readings",
    liveSensorsSubtitle: "Auto-synced every 30 seconds via IoT Sensors",
    tempTitle: "Temperature",
    tempIdealHint: "Ideal Zone: 33°C - 36°C",
    humidityTitle: "Moisture & Humidity",
    humidityIdealHint: "Ideal Zone: 50% - 65%",
    diseaseTitle: "Disease & Pest Check",
    remedyBtn: "View Remedy ",
    colonyTitle: "Bee Colony Activity",
    normalStatus: "Normal",
    activeStatus: "Active",
    noDisease: "Clean & Safe",
    diseaseAlert: "Disease Alert!",
    soundLabel: "Sound: ",
    soundCalm: " (Calm)",
    chipForaging: "High Foraging",
    chipQueen: "Queen Safe & Laying",
    chipSwarm: "Swarm Threat: Very Low",
    needHelpTitle: "Need Help? Speak to KVIC Honey Expert",
    needHelpDesc: "Free consultation, disease diagnosis & honey market advisory",
    tollFreeLabel: "Toll Free: 1800-180-1551",
    timingLabel: "9:00 AM to 6:00 PM (Mon-Sat)",
    callBtn: "Call Expert",
    demoTitle: "Sensor Simulator",
    demoHint: "Press buttons to simulate different hive scenarios:",
    demoNormal: "All Normal",
    demoHeat: "High Heat (38°C)",
    demoDisease: "Varroa Alert",
    demoHarvest: "Honey Ready",
    voiceStart: "Speaking now...",
    voiceFinished: "Completed",
    modalTitleSuffix: " Cure Guide",
    modalSub: "KVIC Certified Treatment Protocol",
    modalOk: "Understood",
    newHiveAdded: "New Hive Box Added Successfully!",
    deleteModalTitle: "Delete Hive Box",
    deleteModalSub: "Confirmation Required",
    deletePrompt: "Are you sure you want to delete this hive box?",
    deleteIrreversible: "This hive and its sensor data will be permanently removed.",
    confirmDeleteBtn: "Yes, Delete Box",
    cancelBtn: "Cancel",
    cannotDeleteLast: "You must keep at least one hive box active.",
    initiatedLabel: "Initiated:",
    addHiveModalTitle: "Add New Hive Box",
    addHiveModalSub: "Set up telemetry for a new bee box",
    hiveNameLabel: "Hive Box Name:",
    hiveNamePlaceholder: "e.g. Hive 4 (Sunflower Field)",
    hiveNameHint: "Include location or crop for easy tracking",
    initiatedDateLabel: "Initiation Date:",
    hiveDateHint: "Date when this hive box was set up",
    addBoxConfirmBtn: "+ Add Hive Box",
    emptyNameAlert: "Please enter a name for the hive box.",
    hiveBoxesBtn: "Hive Boxes",
    allHivesModalTitle: "All Hive Boxes",
    allHivesModalSub: "Tap any box to select & monitor",
    closeBtn: "Close",
    drawerProfileTitle: "Beekeeper Profile",
    drawerViewProfile: "View Profile",
    drawerViewDetailsClose: "Hide Details",
    drawerCertifiedBadge: "Certified Beekeeper",
    drawerHives: "My Hive Boxes",
    drawerLanguage: "Select Language",
    drawerTerms: "Terms & Conditions",
    drawerPrivacy: "Privacy Policy",
    drawerContact: "Contact Us & Support",
    drawerLogout: "Logout",
    drawerNameLabel: "Beekeeper Name",
    drawerRegIdLabel: "KVIC Registration ID",
    drawerLocationLabel: "Location",
    drawerLocationVal: "Saharanpur, Uttar Pradesh",
    drawerActiveBoxesLabel: "Active Hive Boxes",
    drawerMissionLabel: "Certification Status",
    drawerFollowUs: "National Honey Mission • Govt. of India",
    lightModeLabel: "Light Mode",
    activeBoxesSuffix: "Boxes Active",
    termsModalTitle: "Terms & Conditions",
    privacyModalTitle: "Privacy Policy",
    contactModalTitle: "Helpline & Expert Support"
  },
  hi: {
    kvicSub: "खादी एवं ग्रामोद्योग आयोग • KVIC",
    honeyMission: "राष्ट्रीय मधुमक्खी पालन मिशन",
    brandHighlight: "मधुमक्खी मित्र",
    navHome: "मेरी पेटियाँ",
    navHealth: "स्वास्थ्य",
    navHarvest: "शहद निकालें",
    navHelp: "सहयोग",
    liveSensorsBadge: "सक्रिय सेंसर",
    speakBtn: "सुनें",
    selectHive: "आपकी पेटियाँ",
    addHiveBtn: "+ नया बॉक्स जोड़ें",
    conditionTitle: "पेटी की स्थिति",
    safeLabel: "बढ़िया",
    warningLabel: "ध्यान दें",
    dangerLabel: "खतरा",
    honeyForecast: "शहद तैयार होने का अनुमान",
    harvestDaysLabel: "तैयार होने में बाकी",
    daysUnit: "दिन",
    expectedQtyLabel: "अनुमानित शहद वजन",
    kgUnit: "किलो",
    marketValuePrefix: "अनुमानित मूल्य: ₹",
    liveSensorsTitle: "पेटी के मुख्य माप",
    liveSensorsSubtitle: "आईओटी सेंसर द्वारा हर ३० सेकंड में अपडेट",
    tempTitle: "तापमान",
    tempIdealHint: "उचित सीमा: 33°C - 36°C",
    humidityTitle: "नमी व आर्द्रता",
    humidityIdealHint: "उचित सीमा: 50% - 65%",
    diseaseTitle: "रोग और कीट जांच",
    remedyBtn: "उपचार देखें ",
    colonyTitle: "मक्खियों की गतिविधि",
    normalStatus: "सामान्य",
    activeStatus: "सक्रिय",
    noDisease: "रोग मुक्त",
    diseaseAlert: "रोग चेतावनी!",
    soundLabel: "ध्वनि: ",
    soundCalm: " (शांत)",
    chipForaging: "पराग संचय",
    chipQueen: "रानी सुरक्षित",
    chipSwarm: "झुंड खतरा: ना के बराबर",
    needHelpTitle: "मदद चाहिए? KVIC विशेषज्ञ से बात करें",
    needHelpDesc: "मुफ्त परामर्श, रोग निदान एवं शहद बिक्री सहायता",
    tollFreeLabel: "टोल फ्री नंबर: 1800-180-1551",
    timingLabel: "सुबह ९:०० से शाम ६:०० बजे तक",
    callBtn: "कॉल करें",
    demoTitle: "सेंसर टेस्ट टूल",
    demoHint: "अलग-अलग स्थिति की जांच के लिए बटन दबाएं:",
    demoNormal: "सब सामान्य",
    demoHeat: "तेज गर्मी (38°C)",
    demoDisease: "वरोआ रोग",
    demoHarvest: "शहद तैयार",
    voiceStart: "बोल रहे हैं...",
    voiceFinished: "सुन लिया",
    modalTitleSuffix: " निवारण निर्देश",
    modalSub: "KVIC प्रमाणित उपचार निर्देशिका",
    modalOk: "समझ गया",
    newHiveAdded: "नई पेटी सफलतापूर्वक जोड़ी गई!",
    deleteModalTitle: "पेटी हटाएं",
    deleteModalSub: "पुष्टि आवश्यक है",
    deletePrompt: "क्या आप वाकई इस मधुमक्खी पेटी को हटाना चाहते हैं?",
    deleteIrreversible: "यह पेटी और इसका लाइव डेटा स्थायी रूप से हटा दिया जाएगा।",
    confirmDeleteBtn: "हाँ, हटाएं",
    cancelBtn: "रद्द करें",
    cannotDeleteLast: "आपकी मधुमक्खीशाला में कम से कम एक पेटी सक्रिय रहनी चाहिए।",
    initiatedLabel: "स्थापना:",
    addHiveModalTitle: "नया बॉक्स जोड़ें",
    addHiveModalSub: "नई पेटी के लिए नाम व स्थापना तिथि दर्ज करें",
    hiveNameLabel: "पेटी का नाम:",
    hiveNamePlaceholder: "उदा. पेटी ४ (सरसों खेत)",
    hiveNameHint: "पहचान के लिए स्थान या फसल का नाम लिख सकते हैं",
    initiatedDateLabel: "स्थापना तिथि:",
    hiveDateHint: "जिस दिन यह पेटी खेत में स्थापित की गई थी",
    addBoxConfirmBtn: "+ पेटी जोड़ें",
    emptyNameAlert: "कृपया पेटी का नाम दर्ज करें।",
    hiveBoxesBtn: "पेटियाँ",
    allHivesModalTitle: "आपकी मधुमक्खी पेटियाँ",
    allHivesModalSub: "देखने के लिए किसी भी पेटी पर टैप करें",
    closeBtn: "बंद करें",
    drawerProfileTitle: "मधुमक्खी पालक प्रोफ़ाइल",
    drawerViewProfile: "प्रोफ़ाइल देखें",
    drawerViewDetailsClose: "विवरण छिपाएं",
    drawerCertifiedBadge: "प्रमाणित मधुमक्खी पालक",
    drawerHives: "मेरी मधुमक्खी पेटियाँ",
    drawerLanguage: "भाषा चुनें",
    drawerTerms: "नियम एवं शर्तें",
    drawerPrivacy: "गोपनीयता नीति",
    drawerContact: "संपर्क व सहायता",
    drawerLogout: "लॉग आउट",
    drawerNameLabel: "पालक का नाम",
    drawerRegIdLabel: "KVIC पंजीयन संख्या",
    drawerLocationLabel: "स्थान",
    drawerLocationVal: "सहारनपुर, उत्तर प्रदेश",
    drawerActiveBoxesLabel: "सक्रिय पेटियाँ",
    drawerMissionLabel: "प्रमाणन स्थिति",
    drawerFollowUs: "राष्ट्रीय मधुमक्खी पालन मिशन • भारत सरकार",
    lightModeLabel: "लाइट मोड",
    activeBoxesSuffix: "सक्रिय पेटियाँ",
    termsModalTitle: "नियम एवं शर्तें",
    privacyModalTitle: "गोपनीयता नीति",
    contactModalTitle: "हेल्पलाइन व विशेषज्ञ सहायता"
  },
  ta: {
    kvicSub: "காதர் மற்றும் கிராமத் தொழில்கள் ஆணையம் • KVIC",
    honeyMission: "தேசிய தேனீ வளர்ப்பு பணி",
    brandHighlight: "தேனீ மித்ரா",
    navHome: "என் பெட்டிகள்",
    navHealth: "ஆரோக்கியம்",
    navHarvest: "தேன் அறுவடை",
    navHelp: "உதவி",
    liveSensorsBadge: "நேரடி சென்சார்",
    speakBtn: "கேட்கவும்",
    selectHive: "உங்கள் பெட்டிகள்",
    addHiveBtn: "+ புதிய பெட்டி சேர்",
    conditionTitle: "பெட்டியின் ஆரோக்கிய நிலை",
    safeLabel: "நன்று",
    warningLabel: "கவனம்",
    dangerLabel: "ஆபத்து",
    honeyForecast: "தேன் அறுவடை மதிப்பீடு",
    harvestDaysLabel: "அறுவடைக்கு மீதமுள்ளவை",
    daysUnit: "நாட்கள்",
    expectedQtyLabel: "எதிர்பார்க்கப்படும் தேன் எடை",
    kgUnit: "கிலோ",
    marketValuePrefix: "மதிப்பிடப்பட்ட விலை: ₹",
    liveSensorsTitle: "நேரடி சென்சார் அளவீடுகள்",
    liveSensorsSubtitle: "IoT சென்சார்கள் மூலம் ஒவ்வொரு 30 வினாடிக்கும் புதுப்பிக்கப்படுகிறது",
    tempTitle: "வெப்பநிலை",
    tempIdealHint: "சரியான வரம்பு: 33°C - 36°C",
    humidityTitle: "ஈரப்பதம்",
    humidityIdealHint: "சரியான வரம்பு: 50% - 65%",
    diseaseTitle: "நோய் மற்றும் பூச்சி சோதனை",
    remedyBtn: "சிகிச்சை பார்க்க ",
    colonyTitle: "தேனீக்களின் செயல்பாடு",
    normalStatus: "இயல்பு",
    activeStatus: "சுறுசுறுப்பு",
    noDisease: "நோய் அற்றது",
    diseaseAlert: "நோய் எச்சரிக்கை!",
    soundLabel: "ஒலி: ",
    soundCalm: " (அமைதி)",
    chipForaging: "தீவிர மகரந்த சேகரிப்பு",
    chipQueen: "ராணி தேனீ பாதுகாப்பானது",
    chipSwarm: "கூட்டம் பிரிதல் ஆபத்து: மிகக் குறைவு",
    needHelpTitle: "உதவி தேவையா? KVIC நிபுணரிடம் பேசவும்",
    needHelpDesc: "இலவச ஆலோசனை, நோய் தடுப்பு மற்றும் தேன் விற்பனை உதவி",
    tollFreeLabel: "கட்டணமில்லா எண்: 1800-180-1551",
    timingLabel: "காலை 9:00 முதல் மாலை 6:00 வரை",
    callBtn: "அழைக்கவும்",
    demoTitle: "சென்சார் டெஸ்ட் கருவி",
    demoHint: "பல்வேறு நிலைகளை சோதிக்க பொத்தான்களை அழுத்தவும்:",
    demoNormal: "அனைத்தும் நன்று",
    demoHeat: "கடும் வெப்பம் (38°C)",
    demoDisease: "வரோவா நோய் எச்சரிக்கை",
    demoHarvest: "தேன் தயார் (அறுவடை)",
    voiceStart: "பேசுகிறது...",
    voiceFinished: "முடிந்தது",
    modalTitleSuffix: " தீர்வு வழிகாட்டி",
    modalSub: "KVIC அங்கீகரிக்கப்பட்ட சிகிச்சை நெறிமுறை",
    modalOk: "புரிந்தது",
    newHiveAdded: "புதிய தேனீ பெட்டி வெற்றிகரமாக சேர்க்கப்பட்டது!",
    deleteModalTitle: "பெட்டியை நீக்கு",
    deleteModalSub: "உறுதிப்படுத்தல் தேவை",
    deletePrompt: "இந்தப் பெட்டியை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteIrreversible: "இந்த பெட்டி மற்றும் சென்சார் தரவு நிரந்தரமாக நீக்கப்படும்.",
    confirmDeleteBtn: "ஆம், நீக்கு",
    cancelBtn: "ரத்து செய்",
    cannotDeleteLast: "குறைந்தது ஒரு பெட்டியாவது செயலில் இருக்க வேண்டும்.",
    initiatedLabel: "தொடங்கிய நாள்:",
    addHiveModalTitle: "புதிய பெட்டி சேர்க்க",
    addHiveModalSub: "புதிய பெட்டியின் பெயர் மற்றும் தேதி",
    hiveNameLabel: "பெட்டியின் பெயர்:",
    hiveNamePlaceholder: "எ.கா. பெட்டி 4 (சூரியகாந்தி தோட்டம்)",
    hiveNameHint: "அடையாளத்திற்காக இடம் அல்லது பயிர் பெயரை எழுதலாம்",
    initiatedDateLabel: "தொடங்கிய தேதி:",
    hiveDateHint: "தோட்டத்தில் பெட்டி வைக்கப்பட்ட நாள்",
    addBoxConfirmBtn: "+ பெட்டி சேர்",
    emptyNameAlert: "தயவுசெய்து பெட்டியின் பெயரை உள்ளிடவும்.",
    hiveBoxesBtn: "பெட்டிகள்",
    allHivesModalTitle: "உங்கள் தேனீ பெட்டிகள்",
    allHivesModalSub: "பார்க்க ஏதேனும் ஒரு பெட்டியைத் தட்டவும்",
    closeBtn: "மூடு",
    drawerProfileTitle: "தேனீ வளர்ப்பாளர் சுயவிவரம்",
    drawerViewProfile: "சுயவிவரம் காண்க",
    drawerViewDetailsClose: "விவரங்களை மறை",
    drawerCertifiedBadge: "சான்றளிக்கப்பட்ட வளர்ப்பாளர்",
    drawerHives: "என் தேனீ பெட்டிகள்",
    drawerLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
    drawerTerms: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    drawerPrivacy: "தனியுரிமைக் கொள்கை",
    drawerContact: "தொடர்பு மற்றும் உதவி",
    drawerLogout: "வெளியேறு",
    drawerNameLabel: "வளர்ப்பாளர் பெயர்",
    drawerRegIdLabel: "KVIC பதிவு எண்",
    drawerLocationLabel: "இடம்",
    drawerLocationVal: "சஹாரன்பூர், உத்திரபிரதேசம்",
    drawerActiveBoxesLabel: "செயலில் உள்ள பெட்டிகள்",
    drawerMissionLabel: "சான்றிதழ் நிலை",
    drawerFollowUs: "தேசிய தேனீ வளர்ப்பு பணி • இந்திய அரசு",
    lightModeLabel: "லைட் பயன்முறை",
    activeBoxesSuffix: "செயலில் உள்ள பெட்டிகள்",
    termsModalTitle: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    privacyModalTitle: "தனியுரிமைக் கொள்கை",
    contactModalTitle: "உதவி மையம்"
  },
  te: {
    kvicSub: "ఖాదీ మరియు గ్రామ పరిశ్రమల కమిషన్ • KVIC",
    honeyMission: "జాతీయ తేనెటీగల పెంపకం మిషన్",
    brandHighlight: "తేనెటీగ మిత్ర",
    navHome: "నా పెట్టెలు",
    navHealth: "ఆరోగ్య స్థితి",
    navHarvest: "తేనె కోత",
    navHelp: "సహాయం",
    liveSensorsBadge: "లైవ్ సెన్సార్లు",
    speakBtn: "వినండి",
    selectHive: "మీ పెట్టెలు",
    addHiveBtn: "+ కొత్త పెట్టెను జోడించండి",
    conditionTitle: "పెట్టె ఆరోగ్య స్థితి",
    safeLabel: "సురక్షితం",
    warningLabel: "శ్రద్ధ వహించండి",
    dangerLabel: "ప్రమాదం",
    honeyForecast: "తేనె కోత అంచనా",
    harvestDaysLabel: "కోతకు మిగిలిన రోజులు",
    daysUnit: "రోజులు",
    expectedQtyLabel: "అంచనా వేసిన తేనె బరువు",
    kgUnit: "కిలో",
    marketValuePrefix: "అంచనా విలువ: ₹",
    liveSensorsTitle: "ప్రత్యక్ష సెన్సార్ రీడింగ్‌లు",
    liveSensorsSubtitle: "IoT సెన్సార్ల ద్వారా ప్రతి 30 సెకన్లకు నవీకరించబడుతుంది",
    tempTitle: "ఉష్ణోగ్రత",
    tempIdealHint: "సరైన పరిధి: 33°C - 36°C",
    humidityTitle: "తేమ",
    humidityIdealHint: "సరైన పరిధి: 50% - 65%",
    diseaseTitle: "వ్యాధి మరియు తెగులు తనిఖీ",
    remedyBtn: "చికిత్స చూడండి ",
    colonyTitle: "ఈగల కార్యాచరణ",
    normalStatus: "సాధారణం",
    activeStatus: "చురుకుగా ఉంది",
    noDisease: "వ్యాధి రహితం",
    diseaseAlert: "వ్యాధి హెచ్చరిక!",
    soundLabel: "శబ్దం: ",
    soundCalm: " (ప్రశాంతం)",
    chipForaging: "పుప్పొడి సేకరణ",
    chipQueen: "రాణి ఈగ సురక్షితం",
    chipSwarm: "సమూహం విడిపోయే ప్రమాదం: లేదు",
    needHelpTitle: "సహాయం కావాలా? KVIC నిపుణుడితో మాట్లాడండి",
    needHelpDesc: "ఉచిత సలహా, వ్యాధి నిర్ధారణ మరియు తేనె విక్రయ సహాయం",
    tollFreeLabel: "టోల్ ఫ్రీ: 1800-180-1551",
    timingLabel: "ఉదయం 9:00 నుండి సాయంత్రం 6:00 వరకు",
    callBtn: "కాల్ చేయండి",
    demoTitle: "సెన్సార్ టెస్ట్ సాధనం",
    demoHint: "వివిధ పరిస్థితులను పరీక్షించడానికి బటన్లను నొక్కండి:",
    demoNormal: "అంతా సాధారణం",
    demoHeat: "అధిక వేడి (38°C)",
    demoDisease: "వరోవా తెగులు హెచ్చరిక",
    demoHarvest: "తేనె సిద్ధంగా ఉంది",
    voiceStart: "మాట్లాడుతోంది...",
    voiceFinished: "పూర్తయింది",
    modalTitleSuffix: " నివారణ మార్గదర్శిని",
    modalSub: "KVIC ధృవీకరించిన చికిత్స పద్ధతి",
    modalOk: "అర్థమైంది",
    newHiveAdded: "కొత్త తేనెటీగల పెట్టె విజయవంతంగా జోడించబడింది!",
    deleteModalTitle: "పెట్టెను తొలగించండి",
    deleteModalSub: "నిర్ధారణ అవసరం",
    deletePrompt: "మీరు ఖచ్చితంగా ఈ తేనెటీగల పెట్టెను తొలగించాలనుకుంటున్నారా?",
    deleteIrreversible: "ఈ పెట్టె మరియు సెన్సార్ డేటా శాశ్వతంగా తొలగించబడుతుంది.",
    confirmDeleteBtn: "అవును, తొలగించు",
    cancelBtn: "రద్దు చేయండి",
    cannotDeleteLast: "కనీసం ఒక పెట్టె అయినా సక్రియంగా ఉండాలి.",
    initiatedLabel: "ప్రారంభ తేది:",
    addHiveModalTitle: "కొత్త పెట్టెను జోడించండి",
    addHiveModalSub: "పెట్టె పేరు మరియు ప్రారంభ తేది",
    hiveNameLabel: "పెట్టె పేరు:",
    hiveNamePlaceholder: "ఉదా. పెట్టె 4 (పొద్దుతిరుగుడు చేను)",
    hiveNameHint: "సులభంగా గుర్తించడానికి ప్రదేశం లేదా పంట పేరు రాయవచ్చు",
    initiatedDateLabel: "ప్రారంభించిన తేది:",
    hiveDateHint: "ఈ పెట్టెను పొలంలో ఉంచిన తేదీ",
    addBoxConfirmBtn: "+ పెట్టెను జోడించు",
    emptyNameAlert: "దయచేసి పెట్టె పేరును నమోదు చేయండి.",
    hiveBoxesBtn: "పెట్టెలు",
    allHivesModalTitle: "మీ తేనెటీగల పెట్టెలు",
    allHivesModalSub: "వీక్షించడానికి ఏదైనా పెట్టెపై నొక్కండి",
    closeBtn: "మూసివేయి",
    drawerProfileTitle: "తేనెటీగల పెంపకందారు ప్రొఫైల్",
    drawerViewProfile: "ప్రొఫైల్ చూడండి",
    drawerViewDetailsClose: "వివరాలను దాచండి",
    drawerCertifiedBadge: "ధృవీకరించబడిన పెంపకందారు",
    drawerHives: "నా తేనెటీగల పెట్టెలు",
    drawerLanguage: "భాషను ఎంచుకోండి",
    drawerTerms: "నిబంధనలు మరియు షరతులు",
    drawerPrivacy: "గోప్యతా విధానం",
    drawerContact: "మమ్మల్ని సంప్రదించండి & మద్దతు",
    drawerLogout: "లాగ్ అవుట్",
    drawerNameLabel: "పెంపకందారు పేరు",
    drawerRegIdLabel: "KVIC నమోదు సంఖ్య",
    drawerLocationLabel: "ప్రాంతం",
    drawerLocationVal: "సహారన్‌పూర్, ఉత్తర ప్రదేశ్",
    drawerActiveBoxesLabel: "క్రియాశీల పెట్టెలు",
    drawerMissionLabel: "మిషన్ ధృవీకరణ",
    drawerFollowUs: "నేషనల్ హనీ మిషన్ • భారత ప్రభుత్వం",
    lightModeLabel: "లైట్ మోడ్",
    activeBoxesSuffix: "క్రియాశీల పెట్టెలు",
    termsModalTitle: "నిబంధనలు మరియు షరతులు",
    privacyModalTitle: "గోప్యతా విధానం",
    contactModalTitle: "మద్దతు కేంద్రం"
  },
  kn: {
    kvicSub: "ಖಾದಿ ಮತ್ತು ಗ್ರಾಮೋದ್ಯೋಗ ಆಯೋಗ • KVIC",
    honeyMission: "ರಾಷ್ಟ್ರೀಯ ಜೇನುಸಾಕಣೆ ಅಭಿಯಾನ",
    brandHighlight: "ಜೇನು ಮಿತ್ರ",
    navHome: "ನನ್ನ ಪೆಟ್ಟಿಗೆಗಳು",
    navHealth: "ಆರೋಗ್ಯ ಸ್ಥಿತಿ",
    navHarvest: "ಜೇನು ಕೊಯ್ಲು",
    navHelp: "ಸಹಾಯ",
    liveSensorsBadge: "ಲೈವ್ ಸೆನ್ಸಾರ್",
    speakBtn: "ಕೇಳಿ",
    selectHive: "ನಿಮ್ಮ ಪೆಟ್ಟಿಗೆಗಳು",
    addHiveBtn: "+ ಹೊಸ ಪೆಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    conditionTitle: "ಪೆಟ್ಟಿಗೆಯ ಆರೋಗ್ಯ ಸ್ಥಿತಿ",
    safeLabel: "ಸುರಕ್ಷಿತ",
    warningLabel: "ಗಮನಿಸಿ",
    dangerLabel: "ಅಪಾಯ",
    honeyForecast: "ಜೇನು ಕೊಯ್ಲಿನ ಅಂದಾಜು",
    harvestDaysLabel: "ಕೊಯ್ಲಿಗೆ ಉಳಿದ ದಿನಗಳು",
    daysUnit: "ದಿನಗಳು",
    expectedQtyLabel: "ನಿರೀಕ್ಷಿತ ಜೇನುತೂಕ",
    kgUnit: "ಕೆಜಿ",
    marketValuePrefix: "ಅಂದಾಜು ಮೌಲ್ಯ: ₹",
    liveSensorsTitle: "ಲೈವ್ ಸೆನ್ಸಾರ್ ಅಳತೆಗಳು",
    liveSensorsSubtitle: "IoT ಸಂವೇದಕಗಳ ಮೂಲಕ ಪ್ರತಿ 30 ಸೆಕೆಂಡಿಗೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ",
    tempTitle: "ತಾಪಮಾನ",
    tempIdealHint: "ಸೂಕ್ತ ಮಿತಿ: 33°C - 36°C",
    humidityTitle: "ತೇವಾಂಶ",
    humidityIdealHint: "ಸೂಕ್ತ ಮಿತಿ: 50% - 65%",
    diseaseTitle: "ರೋಗ ಮತ್ತು ಕೀಟ ಪರೀಕ್ಷೆ",
    remedyBtn: "ಚಿಕಿತ್ಸೆ ನೋಡಿ ",
    colonyTitle: "ಜೇನುನೊಣಗಳ ಚಟುವಟಿಕೆ",
    normalStatus: "ಸಾಮಾನ್ಯ",
    activeStatus: "ಚುರುಕಾಗಿದೆ",
    noDisease: "ರೋಗಮುಕ್ತ",
    diseaseAlert: "ರೋಗ ಎಚ್ಚರಿಕೆ!",
    soundLabel: "ಶಬ್ದ: ",
    soundCalm: " (ಶಾಂತ)",
    chipForaging: "ಪರಾಗ ಸಂಗ್ರಹ ಚುರುಕು",
    chipQueen: "ರಾಣಿ ನೊಣ ಸುರಕ್ಷಿತ",
    chipSwarm: "ಗುಂಪು ವಿಭಜನೆ ಅಪಾಯ: ಇಲ್ಲ",
    needHelpTitle: "ಸಹಾಯ ಬೇಕೇ? KVIC ತಜ್ಞರೊಂದಿಗೆ ಮಾತನಾಡಿ",
    needHelpDesc: "ಉಚಿತ ಸಲಹೆ, ರೋಗ ತಪಾಸಣೆ ಮತ್ತು ಜೇನು ಮಾರಾಟ ಸಹಾಯ",
    tollFreeLabel: "ಟೋಲ್ ಫ್ರೀ ಸಂಖ್ಯೆ: 1800-180-1551",
    timingLabel: "ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ ಸಂಜೆ 6:00 ರವರೆಗೆ",
    callBtn: "ಕರೆ ಮಾಡಿ",
    demoTitle: "ಸೆನ್ಸಾರ್ ಪರೀಕ್ಷಾ ಸಾಧನ",
    demoHint: "ವಿವಿಧ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಬಟನ್‌ಗಳನ್ನು ಒತ್ತಿ:",
    demoNormal: "ಎಲ್ಲವೂ ಸಹಜ",
    demoHeat: "ತೀವ್ರ ಶಾಖ (38°C)",
    demoDisease: "ವರೋವಾ ರೋಗ ಎಚ್ಚರಿಕೆ",
    demoHarvest: "ಜೇನುತುಪ್ಪ ಸಿದ್ಧವಾಗಿದೆ",
    voiceStart: "ಮಾತನಾಡುತ್ತಿದೆ...",
    voiceFinished: "ಮುಗಿದಿದೆ",
    modalTitleSuffix: " ಪರಿಹಾರ ಮಾರ್ಗದರ್ಶಿ",
    modalSub: "KVIC ಪ್ರಮಾಣೀಕೃತ ಚಿಕಿತ್ಸಾ ನಿಯಮಗಳು",
    modalOk: "ಅರ್ಥವಾಯಿತು",
    newHiveAdded: "ಹೊಸ ಜೇನು ಪೆಟ್ಟಿಗೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!",
    deleteModalTitle: "ಪೆಟ್ಟಿಗೆಯನ್ನು ಅಳಿಸಿ",
    deleteModalSub: "ದೃಢೀಕರಣ ಅಗತ್ಯವಿದೆ",
    deletePrompt: "ನೀವು ಖಚಿತವಾಗಿ ಈ ಜೇನು ಪೆಟ್ಟಿಗೆಯನ್ನು ಅಳಿಸಲು ಬಯಸುವಿರಾ?",
    deleteIrreversible: "ಈ ಪೆಟ್ಟಿಗೆ ಮತ್ತು ಸಂವೇದಕ ಡೇಟಾವನ್ನು ಶಾಶ್ವತವಾಗಿ ತೆಗೆದುಹಾಕಲಾಗುತ್ತದೆ.",
    confirmDeleteBtn: "ಹೌದು, ಅಳಿಸಿ",
    cancelBtn: "ರದ್ದುಮಾಡಿ",
    cannotDeleteLast: "ಕನಿಷ್ಠ ಒಂದು ಪೆಟ್ಟಿಗೆಯಾದರೂ ಸಕ್ರಿಯವಾಗಿರಬೇಕು.",
    initiatedLabel: "ಪ್ರಾರಂಭ ದಿನಾಂಕ:",
    addHiveModalTitle: "ಹೊಸ ಪೆಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    addHiveModalSub: "ಪೆಟ್ಟಿಗೆಯ ಹೆಸರು ಮತ್ತು ದಿನಾಂಕ",
    hiveNameLabel: "ಪೆಟ್ಟಿಗೆಯ ಹೆಸರು:",
    hiveNamePlaceholder: "ಉದಾ. ಪೆಟ್ಟಿಗೆ 4 (ಸೂರ್ಯಕಾಂತಿ ಹೊಲ)",
    hiveNameHint: "ಸುಲಭ ಗುರುತಿಸುವಿಕೆಗಾಗಿ ಸ್ಥಳ ಅಥವಾ ಬೆಳೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಬಹುದು",
    initiatedDateLabel: "ಪ್ರಾರಂಭ ದಿನಾಂಕ:",
    hiveDateHint: "ಈ ಪೆಟ್ಟಿಗೆಯನ್ನು ತೋಟದಲ್ಲಿ ಸ್ಥಾಪಿಸಿದ ದಿನಾಂಕ",
    addBoxConfirmBtn: "+ ಪೆಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    emptyNameAlert: "ದಯವಿಟ್ಟು ಪೆಟ್ಟಿಗೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
    hiveBoxesBtn: "ಪೆಟ್ಟಿಗೆಗಳು",
    allHivesModalTitle: "ನಿಮ್ಮ ಜೇನು ಪೆಟ್ಟಿಗೆಗಳು",
    allHivesModalSub: "ವೀಕ್ಷಿಸಲು ಯಾವುದೇ ಪೆಟ್ಟಿಗೆಯನ್ನು ಸ್ಪರ್ಶಿಸಿ",
    closeBtn: "ಮುಚ್ಚಿ",
    drawerProfileTitle: "ಜೇನುಸಾಕಣೆದಾರರ ಪ್ರೊಫೈಲ್",
    drawerViewProfile: "ಪ್ರೊಫೈಲ್ ವೀಕ್ಷಿಸಿ",
    drawerViewDetailsClose: "ವಿವರಗಳನ್ನು ಮರೆಮಾಡಿ",
    drawerCertifiedBadge: "ಪ್ರಮಾಣೀಕೃತ ಸಾಕಣೆದಾರ",
    drawerHives: "ನನ್ನ ಜೇನು ಪೆಟ್ಟಿಗೆಗಳು",
    drawerLanguage: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    drawerTerms: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    drawerPrivacy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    drawerContact: "ಸಂಪರ್ಕ ಮತ್ತು ಬೆಂಬಲ",
    drawerLogout: "ಲಾಗ್ ಔಟ್",
    drawerNameLabel: "ಸಾಕಣೆದಾರರ ಹೆಸರು",
    drawerRegIdLabel: "KVIC ನೋಂದಣಿ ಸಂಖ್ಯೆ",
    drawerLocationLabel: "ಸ್ಥಳ",
    drawerLocationVal: "ಸಹಾರನ್‌ಪುರ, ಉತ್ತರ ಪ್ರದೇಶ",
    drawerActiveBoxesLabel: "ಸಕ್ರಿಯ ಪೆಟ್ಟಿಗೆಗಳು",
    drawerMissionLabel: "ಮಿಷನ್ ಪ್ರಮಾಣೀಕರಣ",
    drawerFollowUs: "ರಾಷ್ಟ್ರೀಯ ಜೇನು ಮಿಷನ್ • ಭಾರತ ಸರ್ಕಾರ",
    lightModeLabel: "ಲೈಟ್ ಮೋಡ್",
    activeBoxesSuffix: "ಸಕ್ರಿಯ ಪೆಟ್ಟಿಗೆಗಳು",
    termsModalTitle: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    privacyModalTitle: "ಗೌಪ್ಯತಾ ನೀತಿ",
    contactModalTitle: "ಸಹಾಯವಾಣಿ ಕೇಂದ್ರ"
  },
  ml: {
    kvicSub: "ഖാദി ആൻഡ് വില്ലേജ് ഇൻഡസ്ട്രീസ് കമ്മീഷൻ • KVIC",
    honeyMission: "ദേശീയ തേനീച്ച വളർത്തൽ ദൗത്യം",
    brandHighlight: "തേനീച്ച മിത്ര",
    navHome: "എന്റെ പെട്ടികൾ",
    navHealth: "ആരോഗ്യ നില",
    navHarvest: "തേൻ വിളവെടുപ്പ്",
    navHelp: "സഹായം",
    liveSensorsBadge: "തത്സമയ സെൻസർ",
    speakBtn: "കേൾക്കുക",
    selectHive: "നിങ്ങളുടെ പെട്ടികൾ",
    addHiveBtn: "+ പുതിയ പെട്ടി ചേർക്കുക",
    conditionTitle: "പെട്ടിയുടെ ആരോഗ്യ നില",
    safeLabel: "സുരക്ഷിതം",
    warningLabel: "ശ്രദ്ധിക്കുക",
    dangerLabel: "അപകടം",
    honeyForecast: "തേൻ വിളവെടുപ്പ് കണക്കുകൂട്ടൽ",
    harvestDaysLabel: "വിളവെടുപ്പിന് ബാക്കി",
    daysUnit: "ദിവസങ്ങൾ",
    expectedQtyLabel: "പ്രതീക്ഷിക്കുന്ന തേൻ ഭാരം",
    kgUnit: "കിലോ",
    marketValuePrefix: "കണക്കാക്കിയ വില: ₹",
    liveSensorsTitle: "തത്സമയ സെൻസർ അളവുകൾ",
    liveSensorsSubtitle: "IoT സെൻസറുകൾ വഴി ഓരോ 30 സെക്കൻഡിലും പുതുക്കുന്നു",
    tempTitle: "താപനില",
    tempIdealHint: "അനുയോജ്യമായ പരിധി: 33°C - 36°C",
    humidityTitle: "ഈർപ്പം",
    humidityIdealHint: "അനുയോജ്യമായ പരിധി: 50% - 65%",
    diseaseTitle: "രോഗ, കീട പരിശോധന",
    remedyBtn: "ചികിത്സ കാണുക ",
    colonyTitle: "തേനീച്ചകളുടെ പ്രവർത്തനം",
    normalStatus: "സാധാരണം",
    activeStatus: "സജീവമാണ്",
    noDisease: "രോഗരഹിതം",
    diseaseAlert: "രോഗ മുന്നറിയിപ്പ്!",
    soundLabel: "ശബ്ദം: ",
    soundCalm: " (ശാന്തം)",
    chipForaging: "പൂമ്പൊടി ശേഖരണം സജീവം",
    chipQueen: "റാണി ഈച്ച സുരക്ഷിതമാണ്",
    chipSwarm: "കൂട്ടം പിരിയൽ ഭീഷണി: ഇല്ല",
    needHelpTitle: "സഹായം വേണോ? KVIC വിദഗ്ദ്ധനോട് സംസാരിക്കുക",
    needHelpDesc: "സൗജന്യ ഉപദേശം, രോഗ നിർണ്ണയം, തേൻ വിപണന സഹായം",
    tollFreeLabel: "ടോൾ ഫ്രീ നമ്പർ: 1800-180-1551",
    timingLabel: "രാവിലെ 9:00 മുതൽ വൈകുന്നേരം 6:00 വരെ",
    callBtn: "വിളിക്കുക",
    demoTitle: "സെൻസർ ടെസ്റ്റ് ടൂൾ",
    demoHint: "വ്യത്യസ്ത സാഹചര്യങ്ങൾ പരിശോധിക്കാൻ ബട്ടൺ അമർത്തുക:",
    demoNormal: "എല്ലാം സാധാരണമാണ്",
    demoHeat: "കഠിനമായ ചൂട് (38°C)",
    demoDisease: "വരോവ രോഗ മുന്നറിയിപ്പ്",
    demoHarvest: "തേൻ തയ്യാറാണ്",
    voiceStart: "സംസാരിക്കുന്നു...",
    voiceFinished: "പൂർത്തിയായി",
    modalTitleSuffix: " പരിഹാര നിർദ്ദേശങ്ങൾ",
    modalSub: "KVIC അംഗീകൃത ചികിത്സാ രീതി",
    modalOk: "മനസ്സിലായി",
    newHiveAdded: "പുതിയ പെട്ടി വിജയകരമായി ചേർത്തു!",
    deleteModalTitle: "പെട്ടി ഇല്ലാതാക്കുക",
    deleteModalSub: "സ്ഥിരീകരണം ആവശ്യമാണ്",
    deletePrompt: "തീർച്ചയായും ഈ തേനീച്ച പെട്ടി ഇല്ലാതാക്കണമെന്നുണ്ടോ?",
    deleteIrreversible: "ഈ പെട്ടിയും സെൻസർ ഡാറ്റയും ശാശ്വതമായി നീക്കം ചെയ്യപ്പെടും.",
    confirmDeleteBtn: "അതെ, ഇല്ലാതാക്കുക",
    cancelBtn: "റദ്ദാക്കുക",
    cannotDeleteLast: "കുറഞ്ഞത് ഒരു പെട്ടിയെങ്കിലും സജീവമായി ഉണ്ടായിരിക്കണം.",
    initiatedLabel: "തുടങ്ങിയ തീയതി:",
    addHiveModalTitle: "പുതിയ പെട്ടി ചേർക്കുക",
    addHiveModalSub: "പെട്ടിയുടെ പേരും തീയതിയും",
    hiveNameLabel: "പെട്ടിയുടെ പേര്:",
    hiveNamePlaceholder: "ഉദാ. പെട്ടി 4 (സൂര്യകാന്തി തോട്ടം)",
    hiveNameHint: "തിരിച്ചറിയാൻ സ്ഥലമോ വിളയോ നൽകാം",
    initiatedDateLabel: "തുടങ്ങിയ തീയതി:",
    hiveDateHint: "പെട്ടി സ്ഥാപിച്ച തീയതി",
    addBoxConfirmBtn: "+ പെട്ടി ചേർക്കുക",
    emptyNameAlert: "ദയവായി പെട്ടിയുടെ പേര് നൽകുക.",
    hiveBoxesBtn: "പെട്ടികൾ",
    allHivesModalTitle: "നിങ്ങളുടെ തേനീച്ച പെട്ടികൾ",
    allHivesModalSub: "കാണാൻ ഏതെങ്കിലും പെട്ടിയിൽ തൊടുക",
    closeBtn: "അടയ്ക്കുക",
    drawerProfileTitle: "തേനീച്ച വളർത്തുകാരൻ പ്രൊഫൈൽ",
    drawerViewProfile: "പ്രൊഫൈൽ കാണുക",
    drawerViewDetailsClose: "വിശദാംശങ്ങൾ മറയ്ക്കുക",
    drawerCertifiedBadge: "സർട്ടിഫൈഡ് വളർത്തുകാരൻ",
    drawerHives: "എന്റെ തേനീച്ച പെട്ടികൾ",
    drawerLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    drawerTerms: "നിബന്ധനകളും വ്യവസ്ഥകളും",
    drawerPrivacy: "സ്വകാര്യതാ നയം",
    drawerContact: "ഞങ്ങളെ ബന്ധപ്പെടുക & പിന്തുണ",
    drawerLogout: "ലോഗ് ഔട്ട്",
    drawerNameLabel: "വളർത്തുകാരന്റെ പേര്",
    drawerRegIdLabel: "KVIC രജിസ്ട്രേഷൻ ഐഡി",
    drawerLocationLabel: "സ്ഥലം",
    drawerLocationVal: "സഹാരൻപൂർ, ഉത്തർപ്രദേശ്",
    drawerActiveBoxesLabel: "സജീവ പെട്ടികൾ",
    drawerMissionLabel: "മിഷൻ സർട്ടിഫിക്കേഷൻ",
    drawerFollowUs: "ദേശീയ തേനീച്ച മിഷൻ • ഭാരത സർക്കാർ",
    lightModeLabel: "ലൈറ്റ് മോഡ്",
    activeBoxesSuffix: "സജീവ പെട്ടികൾ",
    termsModalTitle: "നിബന്ധനകളും വ്യവസ്ഥകളും",
    privacyModalTitle: "സ്വകാര്യതാ നയം",
    contactModalTitle: "സഹായ കേന്ദ്രം"
  }
};

const languagesMeta = {
  en: { name: "English", flag: "", speechLang: "en-IN", ttsCode: "en" },
  hi: { name: "हिंदी", flag: "", speechLang: "hi-IN", ttsCode: "hi" },
  ta: { name: "தமிழ்", flag: "", speechLang: "ta-IN", ttsCode: "ta" },
  te: { name: "తెలుగు", flag: "", speechLang: "te-IN", ttsCode: "te" },
  kn: { name: "ಕನ್ನಡ", flag: "", speechLang: "kn-IN", ttsCode: "kn" },
  ml: { name: "മലയാളം", flag: "", speechLang: "ml-IN", ttsCode: "ml" }
};

let currentLang = localStorage.getItem('kvic_beekeeper_lang') || 'hi';

// --- MULTILINGUAL HIVE DATA STORE ---
const hivesData = [
  {
    id: 1,
    initiatedDate: "2026-01-15",
    name: {
      en: "Hive 1 (Garden Box)",
      hi: "पेटी १ (बगीचा)",
      ta: "பெட்டி 1 (தோட்டம்)",
      te: "పెట్టె 1 (తోట)",
      kn: "ಪೆಟ್ಟಿಗೆ 1 (ತೋಟ)",
      ml: "പെട്ടി 1 (തോട്ടം)"
    },
    score: 94,
    statusLevel: "safe",
    statusText: {
      en: "All Good & Healthy",
      hi: "सब कुछ बढ़िया है",
      ta: "அனைத்தும் நலமாக உள்ளது",
      te: "అంతా బాగుంది & ఆరోగ్యకరం",
      kn: "ಎಲ್ಲವೂ ಉತ್ತಮವಾಗಿದೆ",
      ml: "എല്ലാം നന്നായിരിക്കുന്നു"
    },
    subtext: {
      en: "Colony is safe, stable and thriving",
      hi: "पूरी पेटी सुरक्षित और सामान्य है",
      ta: "கூடு பாதுகாப்பாகவும் நிலையாகவும் உள்ளது",
      te: "కాలనీ సురక్షితంగా మరియు స్థిరంగా ఉంది",
      kn: "ವಸಾಹತು ಸುರಕ್ಷಿತ ಮತ್ತು ಸ್ಥಿರವಾಗಿದೆ",
      ml: "കോളനി സുരക്ഷിതവും സ്ഥിരവുമാണ്"
    },
    tip: {
      en: "Temperature & humidity are optimal. Queen bee is actively laying eggs.",
      hi: "तापमान और नमी बिल्कुल सही है। रानी मक्खी अंडे दे रही है।",
      ta: "வெப்பநிலையும் ஈரப்பதமும் சரியாக உள்ளன. ராணி தேனீ முட்டையிடுகிறது.",
      te: "ఉష్ణోగ్రత మరియు తేమ సరైన స్థాయిలో ఉన్నాయి. రాణి ఈగ గుడ్లు పెడుతోంది.",
      kn: "ತಾಪಮಾನ ಮತ್ತು ತೇವಾಂಶ ಸರಿಯಾಗಿದೆ. ರಾಣಿ ನೊಣ ಮೊಟ್ಟೆ ಇಡುತ್ತಿದೆ.",
      ml: "താപനിലയും ഈർപ്പവും അനുയോജ്യമാണ്. റാണി ഈച്ച മുട്ടയിടുന്നു."
    },
    temp: 34.5,
    tempStatus: "safe",
    humidity: 58,
    humStatus: "safe",
    diseaseDetected: false,
    diseaseName: {
      en: "No Disease - Safe Colony",
      hi: "कोई रोग नहीं - पेटी सुरक्षित है",
      ta: "நோய் இல்லை - பாதுகாப்பான பெட்டி",
      te: "వ్యాధి లేదు - సురక్షితమైన కాలనీ",
      kn: "ಯಾವುದೇ ರೋಗವಿಲ್ಲ - ಸುರಕ್ಷಿತ ಪೆಟ್ಟಿಗೆ",
      ml: "രോഗമില്ല - സുരക്ഷിതമായ പെട്ടി"
    },
    diseaseRemedyPreview: {
      en: "No Varroa mites or fungus found. Colony is robust and healthy.",
      hi: "कोई वरोआ माइट (Mites) या फफूंदी नहीं मिली। रानी मक्खी सुरक्षित है।",
      ta: "வரோவா பூச்சிகள் அல்லது பூஞ்சை இல்லை. ராணி பாதுகாப்பாக உள்ளது.",
      te: "వరోవా మైట్స్ లేదా ఫంగస్ కనిపించలేదు. రాణి ఈగ సురక్షితం.",
      kn: "ಯಾವುದೇ ವರೋವಾ ಮಿಟೆ ಅಥವಾ ಶಿಲೀಂಧ್ರ ಕಂಡುಬಂದಿಲ್ಲ. ರಾಣಿ ಸುರಕ್ಷಿತವಾಗಿದೆ.",
      ml: "വരോവ മൈറ്റുകളോ ഫംഗസോ കണ്ടെത്തിയില്ല. റാണി സുരക്ഷിതമാണ്."
    },
    remedySteps: {
      en: [
        "Clean bottom board screen tray once a week.",
        "Ensure fresh drinking water source is nearby in shade.",
        "Maintain routine observation without disturbing the brood."
      ],
      hi: [
        "सप्ताह में एक बार नीचे की ट्रे की सफाई करें।",
        "छायादार स्थान पर साफ पानी का बर्तन रखें।",
        "अनावश्यक रूप से पेटी का ढक्कन बार-बार न खोलें।"
      ],
      ta: [
        "வாரத்திற்கு ஒருமுறை கீழ் தட்டை சுத்தம் செய்யவும்.",
        "நிழலான இடத்தில் சுத்தமான தண்ணீர் வைக்கவும்.",
        "தேவையற்ற முறையில் பெட்டியை அடிக்கடி திறக்க வேண்டாம்."
      ],
      te: [
        "వారానికి ఒకసారి అడుగున ఉన్న ట్రేని శుభ్రం చేయండి.",
        "నీడ ఉన్న ప్రదేశంలో తాజా తాగునీటి పాత్రను ఉంచండి.",
        "అనవసరంగా తరచుగా పెట్టెను తెరవకండి."
      ],
      kn: [
        "ವಾರಕ್ಕೊಮ್ಮೆ ಕೆಳಗಿನ ಬೋರ್ಡ್ ಟ್ರೇ ಅನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ.",
        "ನೆರಳಿರುವ ಸ್ಥಳದಲ್ಲಿ ಶುದ್ಧ ಕುಡಿಯುವ ನೀರಿನ ಪಾತ್ರೆ ಇರಿಸಿ.",
        "ಅನಗತ್ಯವಾಗಿ ಪೆಟ್ಟಿಗೆಯನ್ನು ಪದೇ ಪದೇ ತೆರೆಯಬೇಡಿ."
      ],
      ml: [
        "ആഴ്ചയിൽ ഒരിക്കൽ താഴത്തെ ട്രേ വൃത്തിയാക്കുക.",
        "തണലുള്ള സ്ഥലത്ത് ശുദ്ധമായ കുടിവെള്ളം കരുതുക.",
        "ആവശ്യമില്ലാതെ അടിക്കടി പെട്ടി തുറക്കരുത്."
      ]
    },
    beeStatus: {
      en: "Queen Active • High Foraging",
      hi: "रानी सक्रिय • पराग लाना जारी",
      ta: "ராணி சுறுசுறுப்பு • மகரந்த சேகரிப்பு தீவிரம்",
      te: "రాణి చురుకుగా ఉంది • అధిక పుప్పొడి సేకరణ",
      kn: "ರಾಣಿ ಸಕ್ರಿಯ • ಪರಾಗ ಸಂಗ್ರಹ",
      ml: "റാണി സജീവം • ഉയർന്ന പൂമ്പൊടി ശേഖരണം"
    },
    beeSound: {
      en: "Sound: 180 Hz (Calm & Normal)",
      hi: "ध्वनि: 180 Hz (शांत व सामान्य)",
      ta: "ஒலி: 180 Hz (அமைதியான ஒலி)",
      te: "శబ్దం: 180 Hz (ప్రశాంతం & సాధారణం)",
      kn: "ಶಬ್ದ: 180 Hz (ಶಾಂತ ಮತ್ತು ಸಾಮಾನ್ಯ)",
      ml: "ശബ്ദം: 180 Hz (ശാന്തവും സാധാരണവും)"
    },
    harvestDays: 9,
    harvestStatus: {
      en: "Ripening Soon",
      hi: "शीघ्र पकने वाला",
      ta: "விரைவில் அறுவடை",
      te: "త్వరలో కోతకు సిద్ధం",
      kn: "ಶೀಘ್ರದಲ್ಲೇ ಕೊಯ್ಲು",
      ml: "ഉടൻ വിളവെടുക്കാം"
    },
    expectedQty: 8.5,
    priceEstimate: 2550
  },
  {
    id: 2,
    initiatedDate: "2026-02-08",
    name: {
      en: "Hive 2 (Mustard Field)",
      hi: "पेटी २ (सरसों खेत)",
      ta: "பெட்டி 2 (கடுகு தோட்டம்)",
      te: "పెట్టె 2 (ఆవాల చేను)",
      kn: "ಪೆಟ್ಟಿಗೆ 2 (ಸಾಸಿವೆ ಹೊಲ)",
      ml: "പെട്ടി 2 (കടുക് പാടം)"
    },
    score: 72,
    statusLevel: "warn",
    statusText: {
      en: "High Heat (Needs Attention)",
      hi: "तापमान अधिक है (ध्यान दें)",
      ta: "வெப்பம் அதிகம் (கவனம் தேவை)",
      te: "ఉష్ణోగ్రత ఎక్కువ (శ్రద్ధ వహించండి)",
      kn: "ಹೆಚ್ಚಿನ ತಾಪಮಾನ (ಗಮನಿಸಿ)",
      ml: "കൂടിയ ചൂട് (ശ്രദ്ധിക്കുക)"
    },
    subtext: {
      en: "Hive temperature rising, provide shade",
      hi: "पेटी में गर्मी बढ़ रही है, छाया करें",
      ta: "பெட்டியில் வெப்பம் கூடுகிறது, நிழல் செய்யவும்",
      te: "పెట్టెలో వేడి పెరుగుతోంది, నీడ ఏర్పాటు చేయండి",
      kn: "ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ಶಾಖ ಹೆಚ್ಚುತ್ತಿದೆ, ನೆರಳು ಕಲ್ಪಿಸಿ",
      ml: "പെട്ടിയിൽ ചൂട് കൂടുന്നു, തണൽ നൽകുക"
    },
    tip: {
      en: "Bees are fanning actively to cool down. Place wet jute cloth over box.",
      hi: "मधुमक्खियां पंख चलाकर हवा कर रही हैं। पेटी पर गीली बोरी रखें।",
      ta: "தேனீக்கள் சிறகடித்து குளிர்விக்கின்றன. பெட்டியின் மேல் ஈரமான சாக்கு வைக்கவும்.",
      te: "ఈగలు రెక్కలాడిస్తూ చల్లబరుస్తున్నాయి. పెట్టెపై తడి గోనెపట్టాను ఉంచండి.",
      kn: "ಜೇನುನೊಣಗಳು ರೆಕ್ಕೆ ಬೀಸಿ ತಂಪು ಮಾಡುತ್ತಿವೆ. ಪೆಟ್ಟಿಗೆಯ ಮೇಲೆ ಒದ್ದೆ ಗೋಣಿಚೀಲ ಇರಿಸಿ.",
      ml: "തേനീച്ചകൾ ചിറകടിച്ചു തണുപ്പിക്കുന്നു. പെട്ടിക്ക് മുകളിൽ നനഞ്ഞ ചാക്ക് ഇടുക."
    },
    temp: 37.8,
    tempStatus: "warn",
    humidity: 44,
    humStatus: "warn",
    diseaseDetected: false,
    diseaseName: {
      en: "Mild Heat Stress Alert",
      hi: "हल्की गर्मी का तनाव (Heat Stress)",
      ta: "லேசான வெப்ப அழுத்தம் (Heat Stress)",
      te: "తేలికపాటి వేడి ఒత్తిడి (Heat Stress)",
      kn: "ಮಧ್ಯಮ ಶಾಖದ ಒತ್ತಡ (Heat Stress)",
      ml: "ചെറിയ ചൂട് സമ്മർദ്ദം (Heat Stress)"
    },
    diseaseRemedyPreview: {
      en: "High sun exposure. Immediate shading & water recommended.",
      hi: "अधिक धूप के कारण पेटी गर्म है। तुरंत छाया का प्रबंध करें।",
      ta: "கடுமையான வெயில் படுகிறது. உடனே நிழல் அமைக்கவும்.",
      te: "తీవ్రమైన ఎండ తగులుతోంది. వెంటనే నీడను ఏర్పాటు చేయండి.",
      kn: "ಬಿಸಿಲು ಹೆಚ್ಚಾಗಿದೆ. ತಕ್ಷಣ ನೆರಳಿನ ವ್ಯವಸ್ಥೆ ಮಾಡಿ.",
      ml: "ശക്തമായ വെയിൽ ഏൽക്കുന്നു. ഉടൻ തണൽ ക്രമീകരിക്കുക."
    },
    remedySteps: {
      en: [
        "Place a wet jute bag or straw thatch roof over hive.",
        "Widen hive entrance slightly for cross ventilation.",
        "Place clean fresh water source nearby in shaded area."
      ],
      hi: [
        "पेटी के ऊपर गीली जूट की बोरी या घास की छतरी लगाएं।",
        "पेटी के प्रवेश द्वार को थोड़ा और खोलें ताकि हवा आ सके।",
        "पास में ताजे पानी का बर्तन अवश्य रखें।"
      ],
      ta: [
        "பெட்டியின் மேல் ஈரமான சணல் சாக்கு அல்லது புல் கூரை வைக்கவும்.",
        "காற்று செல்ல நுழைவு வழியை சற்று பெரிதாக்கவும்.",
        "அருகில் நிழலில் சுத்தமான தண்ணீர் பாத்திரம் வைக்கவும்."
      ],
      te: [
        "పెట్టెపై తడి గోనె సంచి లేదా గడ్డి కప్పును ఉంచండి.",
        "గాలి వెళ్లేందుకు ప్రవేశ ద్వారాన్ని కాస్త వెడల్పు చేయండి.",
        "దగ్గరలో నీడలో మంచినీటి పాత్రను ఉంచండి."
      ],
      kn: [
        "ಪೆಟ್ಟಿಗೆಯ ಮೇಲೆ ಒದ್ದೆಯಾದ ಗೋಣಿಚೀಲ ಅಥವಾ ಹುಲ್ಲಿನ ಛಾವಣಿ ಹಾಕಿ.",
        "ಗಾಳಿಯಾಡಲು ಪ್ರವೇಶ ದ್ವಾರವನ್ನು ಸ್ವಲ್ಪ ವಿಸ್ತರಿಸಿ.",
        "ಹತ್ತಿರದಲ್ಲಿ ನೆರಳಿರುವ ಕಡೆ ಸ್ವಚ್ಛ ಕುಡಿಯುವ ನೀರು ಇರಿಸಿ."
      ],
      ml: [
        "പെട്ടിക്ക് മുകളിൽ നനഞ്ഞ ചാക്കോ പുല്ലിന്റെ മേൽക്കൂരയോ ഇടുക.",
        "വായുസഞ്ചാരത്തിനായി പ്രവേശന ദ്വാരം ചെറുതായി വികസിപ്പിക്കുക.",
        "തണലിൽ സമീപത്തായി ശുദ്ധജലം വെയ്ക്കുക."
      ]
    },
    beeStatus: {
      en: "Aggressive Fanning to Cool",
      hi: "पंखा चला रही हैं (Fanning)",
      ta: "குளிர்விக்க சிறகடிக்கின்றன",
      te: "చల్లబరిచేందుకు రెక్కలు ఆడిస్తున్నాయి",
      kn: "ತಂಪಾಗಿಸಲು ವೇಗವಾಗಿ ರೆಕ್ಕೆ ಬಡಿಯುತ್ತಿವೆ",
      ml: "തണുപ്പിക്കാൻ ചിറകടിക്കുന്നു"
    },
    beeSound: {
      en: "Sound: 245 Hz (Agitated / Fast Wing Fanning)",
      hi: "ध्वनि: 245 Hz (व्यस्त फड़फड़ाहट)",
      ta: "ஒலி: 245 Hz (வேகமான சிறகடிப்பு)",
      te: "శబ్దం: 245 Hz (వేగంగా రెక్కల శబ్దం)",
      kn: "ಶಬ್ದ: 245 Hz (ರೆಕ್ಕೆಯ ವೇಗದ ಶಬ್ದ)",
      ml: "ശബ്ദം: 245 Hz (വേഗതയേറിയ ചിറകടി ശബ്ദം)"
    },
    harvestDays: 14,
    harvestStatus: {
      en: "Maturing",
      hi: "परिपक्व हो रहा है",
      ta: "முதிர்ச்சியடைகிறது",
      te: "పరిపక్వం చెందుతోంది",
      kn: "ಪಕ್ವವಾಗುತ್ತಿದೆ",
      ml: "പാകമാകുന്നു"
    },
    expectedQty: 6.0,
    priceEstimate: 1800
  },
  {
    id: 3,
    initiatedDate: "2026-02-28",
    name: {
      en: "Hive 3 (Litchi Orchard)",
      hi: "पेटी ३ (लीची बाग)",
      ta: "பெட்டி 3 (லிச்சி தோட்டம்)",
      te: "పెట్టె 3 (లిచీ తోట)",
      kn: "ಪೆಟ್ಟಿಗೆ 3 (ಲಿಚಿ ತೋಟ)",
      ml: "പെട്ടി 3 (ലിച്ചി തോട്ടം)"
    },
    score: 38,
    statusLevel: "danger",
    statusText: {
      en: "Varroa Mite Attack (Critical)",
      hi: "वरोआ माइट रोग (तत्काल ध्यान दें)",
      ta: "வரோவா பூச்சி தாக்குதல் (அவசரம்)",
      te: "వరోవా మైట్ దాడి (అత్యవసరం)",
      kn: "ವರೋವಾ ಕೀಟ ದಾಳಿ (ತುರ್ತು)",
      ml: "വരോവ മൈറ്റ് ബാധ (അടിയന്തിരം)"
    },
    subtext: {
      en: "Immediate mite control treatment needed",
      hi: "तुरंत माइट निवारक उपचार करें",
      ta: "உடனடி பூச்சிக் கட்டுப்பாடு சிகிச்சை தேவை",
      te: "వెంటనే నివారణ చర్యలు తీసుకోండి",
      kn: "ತಕ್ಷಣ ಕೀಟ ನಿಯಂತ್ರಣ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯ",
      ml: "ഉടൻ കീടനിയന്ത്രണ ചികിത്സ ആവശ്യമാണ്"
    },
    tip: {
      en: "Red mites detected on worker bees. Use thymol strips immediately.",
      hi: "श्रमिक मक्खियों पर लाल माइट्स देखे गए हैं। तुरंत थाइमोल पट्टी का उपयोग करें।",
      ta: "வேலைக்காரத் தேனீக்களில் சிவப்புப் பூச்சிகள் காணப்படுகின்றன. உடனே தைமால் பயன்படுத்தவும்.",
      te: "కూలీ ఈగలపై ఎర్రటి పురుగులు కనిపించాయి. వెంటనే థైమోల్ వాడండి.",
      kn: "ಕೆಲಸಗಾರ ನೊಣಗಳ ಮೇಲೆ ಕೆಂಪು ಕೀಟಗಳು ಕಂಡುಬಂದಿವೆ. ತಕ್ಷಣ ಥೈಮೋಲ್ ಬಳಸಿ.",
      ml: "തൊഴിലാളി ഈച്ചകളിൽ ചുവന്ന ചെള്ളുകൾ കാണുന്നു. ഉടൻ തൈമോൾ ഉപയോഗിക്കുക."
    },
    temp: 35.0,
    tempStatus: "safe",
    humidity: 68,
    humStatus: "warn",
    diseaseDetected: true,
    diseaseName: {
      en: "Varroa Destructor Mite Parasite",
      hi: "वरोआ माइट परजीवी कीट (Varroa Mite)",
      ta: "வரோவா ஒட்டுண்ணி பூச்சி (Varroa Mite)",
      te: "వరోవా పరాన్నజీవి పురుగు (Varroa Mite)",
      kn: "ವರೋವಾ ಪರಾವಲಂಬಿ ಕೀಟ (Varroa Mite)",
      ml: "വരോവ പരാദ കീടം (Varroa Mite)"
    },
    diseaseRemedyPreview: {
      en: "Red parasitic mites spotted. Immediate thymol strip treatment required!",
      hi: "पेटी में लाल परजीवी माइट्स पाए गए हैं। तुरंत थाइमोल स्ट्रिप उपचार करें!",
      ta: "தேனீக்களில் சிவப்பு ஒட்டுண்ணி பூச்சிகள் உள்ளன. உடனே தைமால் இடவும்!",
      te: "ఈగలపై ఎర్రటి పురుగులు కనిపించాయి. వెంటనే చికిత్స ప్రారంభించండి!",
      kn: "ಜೇನುನೊಣಗಳ ಮೈಮೇಲೆ ಕೆಂಪು ಕೀಟಗಳು ಕಂಡುಬಂದಿವೆ. ತಕ್ಷಣ ಚಿಕಿತ್ಸೆ ನೀಡಿ!",
      ml: "തേനീച്ചകളിൽ ചുവന്ന പരാദ കീടങ്ങൾ കാണപ്പെടുന്നു. ഉടൻ ചികിത്സിക്കുക!"
    },
    remedySteps: {
      en: [
        "1. Insert KVIC approved Thymol Strips on top frames.",
        "2. Apply Formic Acid pads in the evening per guidelines.",
        "3. Clean screen bottom board to discard fallen mites.",
        "4. Call KVIC toll-free helpline 1800-180-1551 for doctor guidance."
      ],
      hi: [
        "१. KVIC प्रमाणित 'थाइमोल स्ट्रिप' (Thymol Strips) पेटी के ऊपरी फ्रेम पर रखें।",
        "२. फॉर्मिक एसिड पैड का प्रयोग शाम के समय करें (निर्देशानुसार)।",
        "३. नीचे की जालीदार ट्रे (Screen Bottom Board) साफ करें ताकि गिरे हुए माइट्स बाहर हो जाएं।",
        "४. निशुल्क परामर्श हेतु KVIC हेल्पलाइन १८००-१८०-१५५१ पर कॉल करें।"
      ],
      ta: [
        "1. KVIC அங்கீகரித்த 'தைமால் ஸ்ட்ரிப்' (Thymol Strips) மேல் சட்டங்களில் வைக்கவும்.",
        "2. ஃபார்மிக் அமில பேடுகளை மாலையில் வழிமுறைகளின்படி பயன்படுத்தவும்.",
        "3. கீழே விழுந்த பூச்சிகளை அகற்ற கீழ் தட்டை சுத்தம் செய்யவும்.",
        "4. உதவிக்கு KVIC இலவச எண் 1800-180-1551 ஐ அழைக்கவும்."
      ],
      te: [
        "1. పై ఫ్రేమ్‌లపై KVIC ధృవీకరించిన 'థైమోల్ స్ట్రిప్స్' ఉంచండి.",
        "2. సాయంత్రం వేళల్లో ఫార్మిక్ యాసిడ్ ప్యాడ్‌లను నియమాలకు అనుగుణంగా వాడండి.",
        "3. రాలిపోయిన పురుగులను తొలగించడానికి దిగువ ట్రేని శుభ్రం చేయండి.",
        "4. ఉచిత సహాయం కోసం KVIC హెల్ప్‌లైన్ 1800-180-1551 కి కాల్ చేయండి."
      ],
      kn: [
        "1. KVIC ಪ್ರಮಾಣೀಕೃತ 'ಥೈಮೋಲ್ ಸ್ಟ್ರಿಪ್ಸ್' ಅನ್ನು ಮೇಲ್ಭಾಗದ ಫ್ರೇಮ್‌ಗಳಲ್ಲಿ ಇರಿಸಿ.",
        "2. ಸಂಜೆಯ ವೇಳೆ ಮಾರ್ಗಸೂಚಿಯಂತೆ ಫಾರ್ಮಿಕ್ ಆಸಿಡ್ ಪ್ಯಾಡ್‌ಗಳನ್ನು ಬಳಸಿ.",
        "3. ಬಿದ್ದ ಕೀಟಗಳನ್ನು ಹೊರಹಾಕಲು ಕೆಳಗಿನ ಪರದೆಯ ಬೋರ್ಡ್ ಸ್ವಚ್ಛಗೊಳಿಸಿ.",
        "4. ಉಚಿತ ಸಲಹೆಗಾಗಿ KVIC ಸಹಾಯವಾಣಿ 1800-180-1551 ಗೆ ಕರೆ ಮಾಡಿ."
      ],
      ml: [
        "1. മുകളിലെ ഫ്രെയിമുകളിൽ KVIC അംഗീകൃത 'തൈമോൾ സ്ട്രിപ്പുകൾ' വെയ്ക്കുക.",
        "2. നിർദ്ദേശപ്രകാരം വൈകുന്നേരങ്ങളിൽ ഫോർമിക് ആസിഡ് പാഡുകൾ ഉപയോഗിക്കുക.",
        "3. വീണ കീടങ്ങളെ നീക്കം ചെയ്യാൻ താഴത്തെ ട്രേ വൃത്തിയാക്കുക.",
        "4. വിദഗ്ദ്ധ സഹായത്തിനായി KVIC ടോൾ ഫ്രീ നമ്പർ 1800-180-1551 വിളിക്കുക."
      ]
    },
    beeStatus: {
      en: "Agitated • Defense Mode",
      hi: "अशांत • सुरक्षा मोड में",
      ta: "பதட்டம் • தற்காப்பு நிலை",
      te: "ఆందోళన • రక్షణ మోడ్",
      kn: "ಅಶಾಂತ • ರಕ್ಷಣಾ ಮೋಡ್",
      ml: "അസ്വസ്ഥം • പ്രതിരോധത്തിൽ"
    },
    beeSound: {
      en: "Sound: 310 Hz (Stressed Buzz)",
      hi: "ध्वनि: 310 Hz (चिंताजनक)",
      ta: "ஒலி: 310 Hz (அழுத்தமான சத்தம்)",
      te: "శబ్దం: 310 Hz (ఒత్తిడితో కూడిన రొద)",
      kn: "ಶಬ್ದ: 310 Hz (ಒತ್ತಡದ ಶಬ್ದ)",
      ml: "ശബ്ദം: 310 Hz (സമ്മർദ്ദ ശബ്ദം)"
    },
    harvestDays: 24,
    harvestStatus: {
      en: "Delayed Harvest",
      hi: "धीमा विकास",
      ta: "தாமதமான அறுவடை",
      te: "ఆలస్యమైన కోత",
      kn: "ವಿಳಂಬವಾದ ಕೊಯ್ಲು",
      ml: "വൈകുന്ന വിളവെടുപ്പ്"
    },
    expectedQty: 3.5,
    priceEstimate: 1050
  }
];

let selectedHiveId = 1;
let synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
let currentUtterance = null;
let currentAudio = null;
let isSpeaking = false;

if (synth && typeof synth.addEventListener === 'function') {
  synth.addEventListener('voiceschanged', () => {
    try { synth.getVoices(); } catch (e) { }
  });
}

// Helper to get translated string for a hive object field
// Helper to format hive initiated date
function formatHiveDate(dateStr, lang) {
  if (!dateStr) return "";
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);
      if (!isNaN(d.getTime())) {
        const localeMap = {
          en: 'en-IN',
          hi: 'hi-IN',
          ta: 'ta-IN',
          te: 'te-IN',
          kn: 'kn-IN',
          ml: 'ml-IN'
        };
        const loc = localeMap[lang] || 'en-IN';
        return d.toLocaleDateString(loc, { day: '2-digit', month: 'short', year: 'numeric' });
      }
    }
  } catch (e) { }
  return dateStr;
}

function getHiveText(hive, fieldKey) {
  if (!hive || !hive[fieldKey]) return "";
  if (typeof hive[fieldKey] === 'object') {
    return hive[fieldKey][currentLang] || hive[fieldKey]['en'] || hive[fieldKey]['hi'] || "";
  }
  return hive[fieldKey];
}

// --- INITIALIZATION ---
function initApp() {
  applyLanguage(currentLang);
  setupEventListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Switch language across the whole app
function selectLanguage(langCode) {
  if (!i18n[langCode]) return;
  currentLang = langCode;
  localStorage.setItem('kvic_beekeeper_lang', langCode);
  applyLanguage(langCode);

  // Close dropdown menu
  const menu = document.getElementById('langDropdownMenu');
  const wrapper = document.getElementById('langDropdownWrapper');
  if (menu) menu.classList.add('hidden');
  if (wrapper) wrapper.classList.remove('open');
}

// Apply chosen language to UI
function applyLanguage(langCode) {
  const meta = languagesMeta[langCode] || languagesMeta['hi'];

  // Update button label and flag
  const currentLangLabel = document.getElementById('currentLangLabel');
  const currentLangFlag = document.getElementById('currentLangFlag');
  if (currentLangLabel) currentLangLabel.textContent = meta.name;
  if (currentLangFlag) currentLangFlag.textContent = meta.flag;

  // Update active state in dropdown list
  document.querySelectorAll('.lang-option').forEach(opt => {
    if (opt.getAttribute('data-lang') === langCode) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Update all [data-i18n] DOM elements
  const dict = i18n[langCode] || i18n['hi'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render components with language text
  renderHiveTabs();
  renderCurrentHive();

  const profileCurrentLangName = document.getElementById('profileCurrentLangName');
  if (profileCurrentLangName) {
    const meta = languagesMeta[langCode] || languagesMeta['hi'];
    profileCurrentLangName.textContent = meta.name;
  }

  if (typeof updateStarterScreenUI === 'function') {
    updateStarterScreenUI(langCode);
  }
}

// Pending hive ID to delete
let pendingDeleteHiveId = null;

// Select Hive & bring recently viewed hive to front of dashboard
function selectHive(hiveId) {
  selectedHiveId = hiveId;

  // Bring the recently viewed hive in front of hive box dashboard
  const idx = hivesData.findIndex(h => h.id === hiveId);
  if (idx > 0) {
    const [viewedHive] = hivesData.splice(idx, 1);
    hivesData.unshift(viewedHive);
  }

  renderHiveTabs();
  renderCurrentHive();
  stopSpeech();

  // Scroll hive tabs to front so recently viewed hive is immediately visible
  const container = document.getElementById('hiveTabsContainer');
  if (container) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

// Render Hive selection tabs
function renderHiveTabs() {
  const countBadge1 = document.getElementById('hiveCountBadge');
  if (countBadge1) countBadge1.textContent = hivesData.length;

  const container = document.getElementById('hiveTabsContainer');
  if (!container) return;
  container.innerHTML = '';

  hivesData.forEach(hive => {
    const tab = document.createElement('div');
    tab.className = `hive-tab ${hive.id === selectedHiveId ? 'active' : ''}`;
    tab.setAttribute('role', 'button');
    tab.setAttribute('tabindex', '0');

    let dotClass = '';
    if (hive.statusLevel === 'warn') dotClass = 'warn';
    if (hive.statusLevel === 'danger') dotClass = 'alert';

    const hiveName = getHiveText(hive, 'name');
    const formattedDate = formatHiveDate(hive.initiatedDate || '2026-01-15', currentLang);
    tab.innerHTML = `
      <span class="hive-tab-dot ${dotClass}"></span>
      <div class="hive-tab-info">
        <span class="hive-tab-label">${hiveName}</span>
        <span class="hive-tab-date"><span class="cal-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span> ${formattedDate}</span>
      </div>
      <button class="hive-delete-btn" type="button" title="Delete ${hiveName}" data-hive-id="${hive.id}" aria-label="Delete ${hiveName}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    `;

    // Click tab to select hive and bring it to front
    tab.addEventListener('click', (e) => {
      if (e.target.closest('.hive-delete-btn')) return;
      selectHive(hive.id);
    });

    // Delete button click
    const delBtn = tab.querySelector('.hive-delete-btn');
    if (delBtn) {
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDeleteHiveModal(hive.id);
      });
    }

    container.appendChild(tab);
  });
}

// Open Delete Confirmation Modal
function openDeleteHiveModal(hiveId) {
  const dict = i18n[currentLang] || i18n['hi'];
  if (hivesData.length <= 1) {
    alert(dict.cannotDeleteLast || "You must keep at least one hive box active.");
    return;
  }

  const hive = hivesData.find(h => h.id === hiveId);
  if (!hive) return;

  pendingDeleteHiveId = hiveId;
  const hiveName = getHiveText(hive, 'name');

  const deleteModal = document.getElementById('deleteHiveModal');
  const badgeName = document.getElementById('deleteHiveBadgeName');
  const modalMsg = document.getElementById('deleteModalMessage');
  const modalTitle = document.getElementById('deleteModalTitle');
  const confirmBtn = document.getElementById('confirmDeleteBtn');
  const cancelBtn = document.getElementById('cancelDeleteBtn');

  if (badgeName) badgeName.textContent = hiveName;
  if (modalMsg) modalMsg.textContent = `${dict.deletePrompt || "क्या आप वाकई इस पेटी को हटाना चाहते हैं?"} (${hiveName})`;
  if (modalTitle) modalTitle.textContent = dict.deleteModalTitle || "पेटी हटाएं (Delete Hive)";
  if (confirmBtn) confirmBtn.textContent = dict.confirmDeleteBtn || "हाँ, हटाएं (Confirm Delete)";
  if (cancelBtn) cancelBtn.textContent = dict.cancelBtn || "रद्द करें (Cancel)";

  if (deleteModal) deleteModal.classList.remove('hidden');
}

// Close Delete Confirmation Modal
function closeDeleteHiveModal() {
  pendingDeleteHiveId = null;
  const deleteModal = document.getElementById('deleteHiveModal');
  if (deleteModal) deleteModal.classList.add('hidden');
}

// Confirm Delete Action
function confirmDeleteHive() {
  if (pendingDeleteHiveId === null) return;
  if (hivesData.length <= 1) {
    closeDeleteHiveModal();
    return;
  }

  const deletedId = pendingDeleteHiveId;
  const idx = hivesData.findIndex(h => h.id === pendingDeleteHiveId);
  if (idx !== -1) {
    hivesData.splice(idx, 1);
    if (window.FirebaseBridge) {
      window.FirebaseBridge.deleteHive(deletedId);
    }
  }

  // If deleted hive was selected, pick the first available hive
  if (selectedHiveId === pendingDeleteHiveId) {
    selectedHiveId = hivesData[0].id;
  }

  closeDeleteHiveModal();
  renderHiveTabs();
  renderCurrentHive();
  stopSpeech();
}

// Render selected Hive's complete dashboard
function renderCurrentHive() {
  const hive = hivesData.find(h => h.id === selectedHiveId) || hivesData[0];
  const dict = i18n[currentLang] || i18n['hi'];

  // 1. Condition Card
  const masterCard = document.getElementById('masterConditionCard');
  if (masterCard) {
    masterCard.className = `master-condition-card status-${hive.statusLevel}`;
  }

  const scoreElem = document.getElementById('conditionScore');
  if (scoreElem) scoreElem.textContent = hive.score;

  const statusTextElem = document.getElementById('conditionStatusText');
  if (statusTextElem) statusTextElem.textContent = getHiveText(hive, 'statusText');

  const subtextElem = document.getElementById('conditionSubtext');
  if (subtextElem) subtextElem.textContent = getHiveText(hive, 'subtext');

  const initiatedDateElem = document.getElementById('hiveInitiatedDate');
  if (initiatedDateElem) {
    initiatedDateElem.textContent = formatHiveDate(hive.initiatedDate || '2026-01-15', currentLang);
  }

  const tipElem = document.getElementById('farmerTipText');
  if (tipElem) tipElem.textContent = getHiveText(hive, 'tip');

  // Dynamic Glowing Status Beacon (No emojis)
  const emojiBox = document.getElementById('conditionEmojiBox');
  if (emojiBox) {
    emojiBox.className = `condition-beacon-wrap beacon-${hive.statusLevel}`;
    emojiBox.innerHTML = `
      <div class="beacon-pulse-core"></div>
      <div class="beacon-pulse-ring ring-1"></div>
      <div class="beacon-pulse-ring ring-2"></div>
      <div class="beacon-pulse-ring ring-3"></div>
    `;
  }

  // Green to Red Gradient cursor line position
  const cursorPercent = Math.max(6, Math.min(92, 100 - hive.score));
  const healthCursor = document.getElementById('healthCursor');
  const cursorBubble = document.getElementById('cursorBubble');
  if (healthCursor) healthCursor.style.left = `${cursorPercent}%`;
  if (cursorBubble) cursorBubble.textContent = `${hive.score}%`;

  // 2. Honey Harvest Countdown & Expected Quantity
  const daysNum = document.getElementById('harvestDaysNumber');
  if (daysNum) daysNum.textContent = hive.harvestDays;

  const harvestStatusPill = document.getElementById('harvestStatusPill');
  if (harvestStatusPill) harvestStatusPill.textContent = getHiveText(hive, 'harvestStatus');

  // Ring progress (Circumference ~ 251 for r=40)
  const ring = document.getElementById('harvestProgressCircle');
  if (ring) {
    const readyRatio = Math.max(0, Math.min(1, (30 - hive.harvestDays) / 30));
    const dashoffset = 251 - (readyRatio * 251);
    ring.style.strokeDashoffset = dashoffset;
  }

  // Honey Qty
  const qtyNum = document.getElementById('honeyQtyNumber');
  if (qtyNum) qtyNum.textContent = hive.expectedQty;

  const priceText = document.getElementById('marketValueText');
  if (priceText) {
    const prefix = dict.marketValuePrefix || "Est. Value: ₹";
    priceText.textContent = `${prefix}${hive.priceEstimate}`;
  }

  // Jar animation fill percentage
  const jarFill = document.getElementById('jarHoneyFill');
  if (jarFill) {
    const fillPercent = Math.min(95, Math.max(15, (hive.expectedQty / 12) * 100));
    jarFill.style.height = `${fillPercent}%`;
  }

  // 3. Live Metrics: Temperature
  const tempVal = document.getElementById('tempValue');
  const tempBadge = document.getElementById('tempBadge');
  const tempRangeFill = document.getElementById('tempRangeFill');
  if (tempVal) tempVal.textContent = hive.temp;
  if (tempBadge) {
    if (hive.tempStatus === 'safe') {
      tempBadge.className = 'metric-status-badge status-good';
      tempBadge.textContent = dict.normalStatus;
    } else {
      tempBadge.className = 'metric-status-badge status-warn';
      tempBadge.textContent = dict.warningLabel;
    }
  }
  if (tempRangeFill) {
    const tempPercent = Math.min(100, Math.max(20, ((hive.temp - 25) / 20) * 100));
    tempRangeFill.style.width = `${tempPercent}%`;
  }

  // Moisture / Humidity
  const humVal = document.getElementById('humidityValue');
  const humBadge = document.getElementById('humidityBadge');
  const humRangeFill = document.getElementById('humidityRangeFill');
  if (humVal) humVal.textContent = hive.humidity;
  if (humBadge) {
    if (hive.humStatus === 'safe') {
      humBadge.className = 'metric-status-badge status-good';
      humBadge.textContent = dict.normalStatus;
    } else {
      humBadge.className = 'metric-status-badge status-warn';
      humBadge.textContent = dict.warningLabel;
    }
  }
  if (humRangeFill) {
    humRangeFill.style.width = `${Math.min(100, hive.humidity)}%`;
  }

  // Disease Status
  const diseaseName = document.getElementById('diseaseName');
  const diseaseBadge = document.getElementById('diseaseBadge');
  const diseaseIconWrap = document.getElementById('diseaseIconWrap');
  const diseaseIcon = document.getElementById('diseaseIcon');
  const diseaseRemedy = document.getElementById('diseaseRemedyPreview');
  const remedyBtn = document.getElementById('remedyBtn');

  if (diseaseName) diseaseName.textContent = getHiveText(hive, 'diseaseName');
  if (diseaseRemedy) diseaseRemedy.textContent = getHiveText(hive, 'diseaseRemedyPreview');

  if (hive.diseaseDetected) {
    if (diseaseBadge) {
      diseaseBadge.className = 'metric-status-badge status-alert';
      diseaseBadge.textContent = dict.diseaseAlert;
    }
    if (diseaseIconWrap) diseaseIconWrap.className = 'metric-icon-bubble temp-bg';
    if (diseaseIcon) diseaseIcon.textContent = '';
    if (diseaseRemedy) diseaseRemedy.style.borderLeftColor = 'var(--color-danger-red)';
    if (remedyBtn) remedyBtn.classList.remove('hidden');
  } else {
    if (diseaseBadge) {
      diseaseBadge.className = 'metric-status-badge status-good';
      diseaseBadge.textContent = dict.noDisease;
    }
    if (diseaseIconWrap) diseaseIconWrap.className = 'metric-icon-bubble disease-bg';
    if (diseaseIcon) diseaseIcon.innerHTML = `<svg class="metric-svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`;
    if (diseaseRemedy) diseaseRemedy.style.borderLeftColor = 'var(--color-safe-green)';
    if (remedyBtn) remedyBtn.classList.add('hidden');
  }

  // Bee Activity
  const beeHeadline = document.getElementById('beeStatusHeadline');
  if (beeHeadline) beeHeadline.textContent = getHiveText(hive, 'beeStatus');

  const beeSound = document.getElementById('hiveSound');
  if (beeSound) {
    const rawSound = getHiveText(hive, 'beeSound');
    beeSound.textContent = rawSound;
  }
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-check-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>${message}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// --- ONLINE TTS STREAMING (Natural Indian regional voice fallback) ---
function playOnlineTTS(text, langCode, onStart, onEnd) {
  const rawSentences = text.match(/[^।\.!?\n]+[।\.!?]?/g) || [text];
  const chunks = [];
  let buffer = "";

  rawSentences.forEach(s => {
    const trimmed = s.trim();
    if (!trimmed) return;
    if ((buffer + " " + trimmed).trim().length < 150) {
      buffer = buffer ? buffer + " " + trimmed : trimmed;
    } else {
      if (buffer) chunks.push(buffer);
      buffer = trimmed;
    }
  });
  if (buffer) chunks.push(buffer);

  if (chunks.length === 0) {
    if (onEnd) onEnd();
    return;
  }

  if (onStart) onStart();
  let chunkIndex = 0;

  function playNextChunk() {
    if (!isSpeaking) return;
    if (chunkIndex >= chunks.length) {
      if (onEnd) onEnd();
      return;
    }

    const currentText = chunks[chunkIndex++];
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(langCode)}&client=tw-ob&q=${encodeURIComponent(currentText)}`;

    if (currentAudio) {
      try { currentAudio.pause(); } catch (e) { }
    }
    currentAudio = new Audio(url);

    currentAudio.onended = () => {
      if (isSpeaking) playNextChunk();
    };

    currentAudio.onerror = (err) => {
      console.warn("Audio chunk error, playing next:", err);
      if (isSpeaking) {
        if (chunkIndex < chunks.length) {
          playNextChunk();
        } else {
          if (onEnd) onEnd();
        }
      }
    };

    currentAudio.play().catch(err => {
      console.warn("Audio play prevented:", err);
      if (onEnd) onEnd();
    });
  }

  playNextChunk();
}

// --- VOICE NARRATION (Audio Assistant for farmers in their native tongue) ---
function announceCurrentState() {
  const voiceBtn = document.getElementById('voiceSpeakBtn');

  // If already speaking, clicking toggles it off
  if (isSpeaking) {
    stopSpeech();
    return;
  }

  stopSpeech();

  const hive = hivesData.find(h => h.id === selectedHiveId) || hivesData[0];
  const dict = i18n[currentLang] || i18n['hi'];
  const hiveName = getHiveText(hive, 'name');
  const statusText = getHiveText(hive, 'statusText');
  const diseaseName = getHiveText(hive, 'diseaseName');

  let speechText = "";
  if (currentLang === 'hi') {
    speechText = `${hiveName} का हाल। स्थिति स्कोर ${hive.score} प्रतिशत है। ${statusText}। तापमान ${hive.temp} डिग्री और नमी ${hive.humidity} प्रतिशत है। `;
    speechText += hive.diseaseDetected ? `सावधान, ${diseaseName} का लक्षण मिला है। तुरंत उपचार करें। ` : `पेटी रोग मुक्त है। `;
    speechText += `शहद लगभग ${hive.harvestDays} दिनों में तैयार हो जाएगा। अनुमानित पैदावार ${hive.expectedQty} किलो है।`;
  } else if (currentLang === 'ta') {
    speechText = `${hiveName} அறிக்கை. ஆரோக்கிய மதிப்பீடு ${hive.score} சதவீதம். ${statusText}. வெப்பநிலை ${hive.temp} டிகிரி செல்சியஸ் மற்றும் ஈரப்பதம் ${hive.humidity} சதவீதம். `;
    speechText += hive.diseaseDetected ? `எச்சரிக்கை, ${diseaseName} காணப்படுகிறது. உடனே சிகிச்சை செய்யவும். ` : `பெட்டி நோய் அற்றது. `;
    speechText += `தேன் அறுவடைக்கு இன்னும் ${hive.harvestDays} நாட்கள் உள்ளன. எதிர்பார்க்கப்படும் மகசூல் ${hive.expectedQty} கிலோ.`;
  } else if (currentLang === 'te') {
    speechText = `${hiveName} నివేదిక. ఆరోగ్య స్కోరు ${hive.score} శాతం. ${statusText}. ఉష్ణోగ్రత ${hive.temp} డిగ్రీల సెల్సియస్ మరియు తేమ ${hive.humidity} శాతం. `;
    speechText += hive.diseaseDetected ? `హెచ్చరిక, ${diseaseName} సోకింది. వెంటనే చికిత్స చేయండి. ` : `పెట్టె వ్యాధి రహితంగా ఉంది. `;
    speechText += `తేనె కోతకు ఇంకా ${hive.harvestDays} రోజులు ఉన్నాయి. అంచనా దిగుబడి ${hive.expectedQty} కిలోలు.`;
  } else if (currentLang === 'kn') {
    speechText = `${hiveName} ವರದಿ. ಆರೋಗ್ಯ ಸ್ಕೋರ್ ${hive.score} ಪ್ರತಿಶತ. ${statusText}. ತಾಪಮಾನ ${hive.temp} ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್ ಮತ್ತು ತೇವಾಂಶ ${hive.humidity} ಪ್ರತಿಶತ. `;
    speechText += hive.diseaseDetected ? `ಎಚ್ಚರಿಕೆ, ${diseaseName} ರೋಗ ಲಕ್ಷಣ ಕಂಡುಬಂದಿದೆ. ` : `ಪೆಟ್ಟಿಗೆ ರೋಗಮುಕ್ತವಾಗಿದೆ. `;
    speechText += `ಜೇನುತುಪ್ಪ ಕೊಯ್ಲಿಗೆ ಸುಮಾರು ${hive.harvestDays} ದಿನಗಳು ಬಾಕಿ ಇವೆ. ಅಂದಾಜು ಇಳುವರಿ ${hive.expectedQty} ಕೆಜಿ.`;
  } else if (currentLang === 'ml') {
    speechText = `${hiveName} റിപ്പോർട്ട്. ആരോഗ്യ സ്കോർ ${hive.score} ശതമാനം. ${statusText}. താപനില ${hive.temp} ഡിഗ്രി സെൽഷ്യസും ഈർപ്പം ${hive.humidity} ശതമാനവുമാണ്. `;
    speechText += hive.diseaseDetected ? `മുന്നറിയിപ്പ്, ${diseaseName} കണ്ടെത്തി. ഉടൻ ചികിത്സിക്കുക. ` : `പെട്ടി രോഗരഹിതമാണ്. `;
    speechText += `വിളവെടുപ്പിന് ഏകദേശം ${hive.harvestDays} ദിവസങ്ങൾ ബാക്കിയുണ്ട്. പ്രതീക്ഷിക്കുന്ന വിളവ് ${hive.expectedQty} കിലോഗ്രാം.`;
  } else {
    // English
    speechText = `Report for ${hiveName}. Health score is ${hive.score} percent. ${statusText}. Temperature is ${hive.temp} degrees Celsius and humidity is ${hive.humidity} percent. `;
    speechText += hive.diseaseDetected ? `Alert, ${diseaseName} detected. Please check remedy steps. ` : `Hive is clean and disease free. `;
    speechText += `Honey will be ready in approximately ${hive.harvestDays} days. Expected yield is ${hive.expectedQty} kilograms.`;
  }

  const audioBanner = document.getElementById('audioBanner');
  const transcriptText = document.getElementById('audioTranscriptText');

  isSpeaking = true;
  if (audioBanner) audioBanner.classList.remove('hidden');
  if (transcriptText) transcriptText.textContent = speechText;
  if (voiceBtn) voiceBtn.classList.add('speaking');

  const onSpeechStart = () => {
    isSpeaking = true;
    if (audioBanner) audioBanner.classList.remove('hidden');
    if (transcriptText) transcriptText.textContent = speechText;
    if (voiceBtn) voiceBtn.classList.add('speaking');
  };

  const onSpeechEnd = () => {
    stopSpeech();
  };

  const meta = languagesMeta[currentLang] || languagesMeta['hi'];

  let nativeVoice = null;
  if (synth && typeof synth.getVoices === 'function') {
    const voices = synth.getVoices() || [];
    const targetPrefix = currentLang.toLowerCase();
    nativeVoice = voices.find(v => {
      const langLower = (v.lang || '').toLowerCase();
      const nameLower = (v.name || '').toLowerCase();
      return langLower.startsWith(targetPrefix) ||
        langLower.includes(`-${targetPrefix}`) ||
        nameLower.includes(meta.name.toLowerCase()) ||
        (targetPrefix === 'hi' && (langLower.startsWith('hi') || nameLower.includes('hindi'))) ||
        (targetPrefix === 'en' && langLower.startsWith('en'));
    });
  }

  if (nativeVoice && synth) {
    try {
      synth.cancel();
      currentUtterance = new SpeechSynthesisUtterance(speechText);
      currentUtterance.voice = nativeVoice;
      currentUtterance.lang = nativeVoice.lang || meta.speechLang;
      currentUtterance.rate = 0.95;

      currentUtterance.onstart = onSpeechStart;
      currentUtterance.onend = onSpeechEnd;
      currentUtterance.onerror = (e) => {
        console.warn("SpeechSynthesis error, falling back to online TTS:", e);
        playOnlineTTS(speechText, meta.ttsCode || currentLang, onSpeechStart, onSpeechEnd);
      };

      synth.speak(currentUtterance);
    } catch (err) {
      console.warn("SpeechSynthesis exception, using online TTS:", err);
      playOnlineTTS(speechText, meta.ttsCode || currentLang, onSpeechStart, onSpeechEnd);
    }
  } else {
    playOnlineTTS(speechText, meta.ttsCode || currentLang, onSpeechStart, onSpeechEnd);
  }
}

function stopSpeech() {
  isSpeaking = false;
  if (synth) {
    try { synth.cancel(); } catch (e) { }
  }
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) { }
    currentAudio = null;
  }
  const audioBanner = document.getElementById('audioBanner');
  const voiceBtn = document.getElementById('voiceSpeakBtn');
  if (audioBanner) audioBanner.classList.add('hidden');
  if (voiceBtn) voiceBtn.classList.remove('speaking');
}

// --- EVENT LISTENERS ---
// --- ADD HIVE MODAL CONTROLS ---
function openAddHiveModal() {
  const modal = document.getElementById('addHiveModal');
  const nameInput = document.getElementById('newHiveNameInput');
  const dateInput = document.getElementById('newHiveDateInput');

  if (!modal || !nameInput || !dateInput) return;

  const nextNum = hivesData.reduce((max, h) => Math.max(max, h.id), 0) + 1;
  const defaultNames = {
    en: `Hive ${nextNum}`,
    hi: `पेटी ${nextNum}`,
    ta: `பெட்டி ${nextNum}`,
    te: `పెట్టె ${nextNum}`,
    kn: `ಪೆಟ್ಟಿಗೆ ${nextNum}`,
    ml: `പെട്ടി ${nextNum}`
  };
  nameInput.value = defaultNames[currentLang] || `Hive ${nextNum}`;

  // Set today's date in YYYY-MM-DD format
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.value = `${yyyy}-${mm}-${dd}`;

  modal.classList.remove('hidden');
  setTimeout(() => {
    nameInput.focus();
    nameInput.select();
  }, 50);
}

function closeAddHiveModal() {
  const modal = document.getElementById('addHiveModal');
  if (modal) modal.classList.add('hidden');
}

// --- ALL HIVE BOXES SELECTOR MODAL ---
function renderAllHivesModalList() {
  const container = document.getElementById('allHivesModalList');
  if (!container) return;
  container.innerHTML = '';

  const dict = i18n[currentLang] || i18n['hi'];

  hivesData.forEach(hive => {
    const isSelected = hive.id === selectedHiveId;
    const card = document.createElement('div');
    card.className = `hive-list-item-card ${isSelected ? 'active-selection' : ''}`;

    let dotClass = '';
    if (hive.statusLevel === 'warn') dotClass = 'warn';
    if (hive.statusLevel === 'danger') dotClass = 'alert';

    const hiveName = getHiveText(hive, 'name');
    const formattedDate = formatHiveDate(hive.initiatedDate || '2026-01-15', currentLang);
    const statusText = getHiveText(hive, 'statusText');

    card.innerHTML = `
      <div class="hive-item-main">
        <div class="hive-item-top">
          <span class="hive-tab-dot ${dotClass}"></span>
          <span class="hive-item-name">${hiveName}</span>
          ${isSelected ? `<span class="current-selected-pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> ${dict.activeStatus || "Active"}</span>` : ''}
        </div>
        <div class="hive-item-details">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${dict.initiatedLabel || "Initiated:"} ${formattedDate}</span>
          <span class="hive-item-health ${dotClass}"><span class="mini-health-beacon ${dotClass}"></span> ${hive.score}% • ${statusText}</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg> ${hive.temp}°C • <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg> ${hive.humidity}%</span>
        </div>
      </div>
      <div class="hive-item-actions">
        ${isSelected
        ? `<span class="selected-check-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>`
        : `<button type="button" class="select-box-btn">${currentLang === 'hi' ? 'चुनें' : 'Select'}</button>`
      }
      </div>
    `;

    card.addEventListener('click', () => {
      selectHive(hive.id);
      closeSelectHiveModal();
      showToast(`${hiveName} ${currentLang === 'hi' ? 'चुनी गई' : 'Selected'}`);
    });

    container.appendChild(card);
  });
}

function openSelectHiveModal() {
  const modal = document.getElementById('selectHiveModal');
  if (!modal) return;
  renderAllHivesModalList();
  modal.classList.remove('hidden');
}

function closeSelectHiveModal() {
  const modal = document.getElementById('selectHiveModal');
  if (modal) modal.classList.add('hidden');
}

function handleAddNewHiveSubmit() {
  const dict = i18n[currentLang] || i18n['hi'];
  const nameInput = document.getElementById('newHiveNameInput');
  const dateInput = document.getElementById('newHiveDateInput');

  const boxName = (nameInput ? nameInput.value : "").trim();
  if (!boxName) {
    alert(dict.emptyNameAlert || "Please enter a name for the hive box.");
    if (nameInput) nameInput.focus();
    return;
  }

  const chosenDate = (dateInput && dateInput.value) ? dateInput.value : new Date().toISOString().split('T')[0];
  const nextId = hivesData.reduce((max, h) => Math.max(max, h.id), 0) + 1;

  const newHive = {
    id: nextId,
    name: boxName,
    initiatedDate: chosenDate,
    score: 94,
    statusLevel: 'safe',
    statusText: {
      en: "New Box Initialized & Healthy",
      hi: "नई पेटी चालू है और सुरक्षित है",
      ta: "புதிய பெட்டி இணைக்கப்பட்டது, நன்று",
      te: "కొత్త పెట్టె జోడించబడింది, అంతా బాగుంది",
      kn: "ಹೊಸ ಪೆಟ್ಟಿಗೆ ಸೇರಿಸಲಾಗಿದೆ, ಸುರಕ್ಷಿತ",
      ml: "പുതിയ പെട്ടി ബന്ധിപ്പിച്ചു, സുരക്ഷിതം"
    },
    subtext: {
      en: "Sensors linked successfully",
      hi: "सेंसर सफलतापूर्वक कनेक्ट हो गए",
      ta: "சென்சார்கள் வெற்றிகரமாக இணைக்கப்பட்டன",
      te: "సెన్సార్లు విజయవంతంగా కనెక్ట్ చేయబడ్డాయి",
      kn: "ಸಂವೇದಕಗಳು ಯಶಸ್ವಿಯಾಗಿ ಸಂಪರ್ಕಗೊಂಡಿವೆ",
      ml: "സെൻസറുകൾ വിജയകരമായി ബന്ധಿപ്പിച്ചു"
    },
    tip: {
      en: "Queen bee adaptation is progressing normally. Check bottom tray weekly.",
      hi: "नई पेटी में रानी मक्खी का अनुकूलन सामान्य है। सप्ताह में एक बार ट्रे जांचें।",
      ta: "ராணி தேனீ புதிய பெட்டிக்கு பழக்கமாகிறது. வாரத்திற்கு ஒருமுறை தட்டை சரிபார்க்கவும்.",
      te: "రాణి ఈగ కొత్త పెట్టెకు అలవాటు పడుతోంది. వారానికి ఒకసారి ట్రేని తనిఖీ చేయండి.",
      kn: "ರಾಣಿ ನೊಣ ಹೊಂದಿಕೊಳ್ಳುತ್ತಿದೆ. ವಾರಕ್ಕೊಮ್ಮೆ ಟ್ರೇ ಪರೀಕ್ಷಿಸಿ.",
      ml: "റാണി ഈച്ച പൊരുത്തപ്പെടുന്നു. ആഴ്ചതോറും ട്രേ പരിശോധിക്കുക."
    },
    temp: 34.2,
    tempStatus: 'safe',
    humidity: 56,
    humStatus: 'safe',
    diseaseDetected: false,
    diseaseName: {
      en: "No Disease - Safe Colony",
      hi: "कोई रोग नहीं - पेटी सुरक्षित है",
      ta: "நோய் இல்லை - பாதுகாப்பான பெட்டி",
      te: "వ్యాధి లేదు - సురక్షితమైన కాలనీ",
      kn: "ಯಾವುದೇ ರೋಗವಿಲ್ಲ - ಸುರಕ್ಷಿತ ಪೆಟ್ಟಿಗೆ",
      ml: "രോഗമില്ല - സുരക്ഷിതമായ പെട്ടി"
    },
    diseaseRemedyPreview: {
      en: "All health parameters safe and optimal.",
      hi: "सभी स्वास्थ्य मानक सामान्य हैं।",
      ta: "அனைத்து அளவீடுகளும் பாதுகாப்பாக உள்ளன.",
      te: "అన్ని ఆరోగ్య పారామితులు సాధారణం.",
      kn: "ಎಲ್ಲಾ ಆರೋಗ್ಯ ನಿಯತಾಂಕಗಳು ಸಹಜವಾಗಿವೆ.",
      ml: "എല്ലാ പാരാമീറ്ററുകളും സുരക്ഷിതമാണ്."
    },
    remedySteps: {
      en: ["Continue regular inspection without disturbance."],
      hi: ["नियमित निरीक्षण जारी रखें।"],
      ta: ["வழக்கமான கண்காணிப்பைத் தொடரவும்."],
      te: ["క్రமమైన తనిఖీని కొనసాగించండి."],
      kn: ["ನಿಯಮಿತ ತಪಾಸಣೆಯನ್ನು ಮುಂದುವರಿಸಿ."],
      ml: ["സാധാരണ പരിശോധന തുടരുക."]
    },
    beeStatus: {
      en: "Active • Colony Building",
      hi: "सक्रिय • बस्ती स्थापना",
      ta: "சுறுசுறுப்பு • கூடு கட்டும் பணி",
      te: "చురుకుగా ఉంది • కాలనీ నిర్మాణం",
      kn: "ಸಕ್ರಿಯ • ವಸಾಹತು ನಿರ್ಮಾಣ",
      ml: "സജീവം • കോളനി നിർമ്മാണം"
    },
    beeSound: {
      en: "Sound: 175 Hz (Normal)",
      hi: "ध्वनि: 175 Hz (सामान्य)",
      ta: "ஒலி: 175 Hz (இயல்பு)",
      te: "శబ్దం: 175 Hz (సాధారణం)",
      kn: "ಶಬ್ದ: 175 Hz (ಸಾಮಾನ್ಯ)",
      ml: "ശബ്ദം: 175 Hz (സാധാരണം)"
    },
    harvestDays: 28,
    harvestStatus: {
      en: "Early Stage",
      hi: "प्रारंभिक चरण",
      ta: "தொடக்க நிலை",
      te: "ప్రారంభ దశ",
      kn: "ಆರಂಭಿಕ ಹಂತ",
      ml: "പ്രാരംഭ ഘട്ടം"
    },
    expectedQty: 5.0,
    priceEstimate: 1500
  };

  hivesData.push(newHive);
  if (window.FirebaseBridge) {
    window.FirebaseBridge.saveHive(newHive);
  }
  closeAddHiveModal();
  selectedHiveId = nextId;
  renderHiveTabs();
  renderCurrentHive();
  showToast(`${dict.newHiveAdded || "New Hive Added!"} (${boxName})`);
}

function setupEventListeners() {
  // Language Dropdown Toggle
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langMenu = document.getElementById('langDropdownMenu');
  const langWrapper = document.getElementById('langDropdownWrapper');

  if (langToggleBtn && langMenu && langWrapper) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isClosed = langMenu.classList.contains('hidden');
      if (isClosed) {
        langMenu.classList.remove('hidden');
        langWrapper.classList.add('open');
      } else {
        langMenu.classList.add('hidden');
        langWrapper.classList.remove('open');
      }
    });

    // Language option selection
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const chosen = e.currentTarget.getAttribute('data-lang');
        selectLanguage(chosen);
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!langWrapper.contains(e.target)) {
        langMenu.classList.add('hidden');
        langWrapper.classList.remove('open');
      }
    });
  }

  // Voice narration buttons
  const voiceBtn = document.getElementById('voiceSpeakBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => announceCurrentState());
  }

  const navVoiceCenter = document.getElementById('navVoiceCenter');
  if (navVoiceCenter) {
    navVoiceCenter.addEventListener('click', () => announceCurrentState());
  }

  const stopAudioBtn = document.getElementById('audioStopBtn');
  if (stopAudioBtn) {
    stopAudioBtn.addEventListener('click', stopSpeech);
  }

  // Add Hive Button & Modal
  const addHiveBtn = document.getElementById('addHiveBtn');
  if (addHiveBtn) {
    addHiveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAddHiveModal();
    });
  }

  const closeAddHiveBtn = document.getElementById('closeAddHiveModalBtn');
  const cancelAddHiveBtn = document.getElementById('cancelAddHiveBtn');
  const addHiveForm = document.getElementById('addHiveForm');
  const addHiveModal = document.getElementById('addHiveModal');

  if (closeAddHiveBtn) closeAddHiveBtn.addEventListener('click', closeAddHiveModal);
  if (cancelAddHiveBtn) cancelAddHiveBtn.addEventListener('click', closeAddHiveModal);
  if (addHiveModal) {
    addHiveModal.addEventListener('click', (e) => {
      if (e.target === addHiveModal) closeAddHiveModal();
    });
  }
  if (addHiveForm) {
    addHiveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleAddNewHiveSubmit();
    });
  }

  // Beekeeper Profile Side Navigation Drawer triggers (Ref: Image 2)
  const userProfileBtn = document.getElementById('userProfileBtn');
  const userProfileModal = document.getElementById('userProfileModal');
  const closeProfileModalBtn = document.getElementById('closeProfileModalBtn');
  const profileHiveCount = document.getElementById('profileHiveCount');
  const drawerDetailHiveCount = document.getElementById('drawerDetailHiveCount');

  const updateProfileHubData = () => {
    const userName = localStorage.getItem('kvic_user_name') || 'Ram Kumar';
    const userPhone = localStorage.getItem('kvic_user_phone') || '9876543210';
    const profileModalUserName = document.getElementById('profileModalUserName');
    const profileModalUserPhone = document.getElementById('profileModalUserPhone');
    const profileBeekeeperName = document.getElementById('profileBeekeeperName');
    const profileCurrentLangName = document.getElementById('profileCurrentLangName');

    if (profileModalUserName) profileModalUserName.textContent = userName;
    if (profileBeekeeperName) profileBeekeeperName.textContent = userName;
    if (profileModalUserPhone) {
      profileModalUserPhone.innerHTML = `+91 ${userPhone} • <span class="badge-id">KVIC-UP-2026-8841</span>`;
    }
    if (profileCurrentLangName) {
      const meta = languagesMeta[currentLang] || languagesMeta['hi'];
      profileCurrentLangName.textContent = meta.name;
    }
    const dict = i18n[currentLang] || i18n['hi'];
    const suffix = dict.activeBoxesSuffix || 'Boxes Active';
    const hiveText = `${hivesData.length} ${suffix}`;
    if (profileHiveCount) profileHiveCount.textContent = hiveText;
    if (drawerDetailHiveCount) drawerDetailHiveCount.textContent = hiveText;
  };

  const openProfileModal = () => {
    if (userProfileModal) {
      updateProfileHubData();
      userProfileModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeProfileModal = () => {
    if (userProfileModal) {
      userProfileModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (userProfileBtn) userProfileBtn.addEventListener('click', openProfileModal);
  if (closeProfileModalBtn) closeProfileModalBtn.addEventListener('click', closeProfileModal);
  if (userProfileModal) {
    userProfileModal.addEventListener('click', (e) => {
      if (e.target === userProfileModal) closeProfileModal();
    });
  }

  // Toggle Beekeeper Profile Details inside Drawer
  const toggleProfileDetailsBtn = document.getElementById('toggleProfileDetailsBtn');
  const profileDetailsDrawer = document.getElementById('profileDetailsDrawer');
  const profileDetailsChevron = document.getElementById('profileDetailsChevron');
  const viewProfileBtnLabel = document.getElementById('viewProfileBtnLabel');
  if (toggleProfileDetailsBtn && profileDetailsDrawer) {
    toggleProfileDetailsBtn.addEventListener('click', () => {
      const isHidden = profileDetailsDrawer.classList.toggle('hidden');
      if (profileDetailsChevron) {
        profileDetailsChevron.classList.toggle('open', !isHidden);
      }
      if (viewProfileBtnLabel) {
        const dict = i18n[currentLang] || i18n['hi'];
        viewProfileBtnLabel.textContent = isHidden ? dict.drawerViewProfile : dict.drawerViewDetailsClose;
      }
    });
  }

  // My Hive Boxes Drawer item
  const drawerHiveBoxesBtn = document.getElementById('drawerHiveBoxesBtn');
  if (drawerHiveBoxesBtn) {
    drawerHiveBoxesBtn.addEventListener('click', () => {
      closeProfileModal();
      openSelectHiveModal();
    });
  }

  // Select Language Drawer item
  const openLangFromProfileBtn = document.getElementById('openLangFromProfileBtn');
  if (openLangFromProfileBtn) {
    openLangFromProfileBtn.addEventListener('click', () => {
      closeProfileModal();
      if (typeof openLanguageStarterScreen === 'function') {
        openLanguageStarterScreen();
      }
    });
  }

  // Terms & Conditions Modal
  const drawerTermsBtn = document.getElementById('drawerTermsBtn');
  const termsModal = document.getElementById('termsModal');
  const closeTermsModalBtn = document.getElementById('closeTermsModalBtn');
  const closeTermsFooterBtn = document.getElementById('closeTermsFooterBtn');
  if (drawerTermsBtn && termsModal) {
    drawerTermsBtn.addEventListener('click', () => {
      closeProfileModal();
      termsModal.classList.remove('hidden');
    });
  }
  if (closeTermsModalBtn) closeTermsModalBtn.addEventListener('click', () => termsModal.classList.add('hidden'));
  if (closeTermsFooterBtn) closeTermsFooterBtn.addEventListener('click', () => termsModal.classList.add('hidden'));
  if (termsModal) {
    termsModal.addEventListener('click', (e) => {
      if (e.target === termsModal) termsModal.classList.add('hidden');
    });
  }

  // Privacy Policy Modal
  const drawerPrivacyBtn = document.getElementById('drawerPrivacyBtn');
  const privacyModal = document.getElementById('privacyModal');
  const closePrivacyModalBtn = document.getElementById('closePrivacyModalBtn');
  const closePrivacyFooterBtn = document.getElementById('closePrivacyFooterBtn');
  if (drawerPrivacyBtn && privacyModal) {
    drawerPrivacyBtn.addEventListener('click', () => {
      closeProfileModal();
      privacyModal.classList.remove('hidden');
    });
  }
  if (closePrivacyModalBtn) closePrivacyModalBtn.addEventListener('click', () => privacyModal.classList.add('hidden'));
  if (closePrivacyFooterBtn) closePrivacyFooterBtn.addEventListener('click', () => privacyModal.classList.add('hidden'));
  if (privacyModal) {
    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) privacyModal.classList.add('hidden');
    });
  }

  // Contact Us & Support Modal
  const drawerContactBtn = document.getElementById('drawerContactBtn');
  const contactSupportModal = document.getElementById('contactSupportModal');
  const closeContactModalBtn = document.getElementById('closeContactModalBtn');
  const closeContactFooterBtn = document.getElementById('closeContactFooterBtn');
  if (drawerContactBtn && contactSupportModal) {
    drawerContactBtn.addEventListener('click', () => {
      closeProfileModal();
      contactSupportModal.classList.remove('hidden');
    });
  }
  if (closeContactModalBtn) closeContactModalBtn.addEventListener('click', () => contactSupportModal.classList.add('hidden'));
  if (closeContactFooterBtn) closeContactFooterBtn.addEventListener('click', () => contactSupportModal.classList.add('hidden'));
  if (contactSupportModal) {
    contactSupportModal.addEventListener('click', (e) => {
      if (e.target === contactSupportModal) contactSupportModal.classList.add('hidden');
    });
  }

  // Hive Boxes Selector Modal triggers
  const hiveBoxesMenuBtn = document.getElementById('hiveBoxesMenuBtn');
  const closeSelectHiveModalBtn = document.getElementById('closeSelectHiveModalBtn');
  const closeSelectHiveModalFooterBtn = document.getElementById('closeSelectHiveModalFooterBtn');
  const addNewHiveFromListBtn = document.getElementById('addNewHiveFromListBtn');
  const selectHiveModal = document.getElementById('selectHiveModal');

  if (hiveBoxesMenuBtn) hiveBoxesMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openSelectHiveModal();
  });
  if (closeSelectHiveModalBtn) closeSelectHiveModalBtn.addEventListener('click', closeSelectHiveModal);
  if (closeSelectHiveModalFooterBtn) closeSelectHiveModalFooterBtn.addEventListener('click', closeSelectHiveModal);
  if (addNewHiveFromListBtn) addNewHiveFromListBtn.addEventListener('click', () => {
    closeSelectHiveModal();
    openAddHiveModal();
  });
  if (selectHiveModal) {
    selectHiveModal.addEventListener('click', (e) => {
      if (e.target === selectHiveModal) closeSelectHiveModal();
    });
  }

  // Remedy Modal triggers
  const remedyBtn = document.getElementById('remedyBtn');
  const remedyModal = document.getElementById('remedyModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');

  const openRemedyModal = () => {
    const hive = hivesData.find(h => h.id === selectedHiveId);
    if (!hive) return;
    const dict = i18n[currentLang] || i18n['hi'];
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBodyText');

    const diseaseTitle = getHiveText(hive, 'diseaseName');
    modalTitle.textContent = `${diseaseTitle}${dict.modalTitleSuffix || " Guide"}`;

    const steps = (hive.remedySteps && hive.remedySteps[currentLang])
      ? hive.remedySteps[currentLang]
      : (hive.remedySteps ? hive.remedySteps['en'] : []);

    modalBody.innerHTML = steps.map((step, idx) => `
      <div class="remedy-step">
        <span class="step-num">${idx + 1}.</span>
        <span>${step}</span>
      </div>
    `).join('');

    remedyModal.classList.remove('hidden');
  };

  if (remedyBtn) remedyBtn.addEventListener('click', openRemedyModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', () => remedyModal.classList.add('hidden'));
  if (modalOkBtn) modalOkBtn.addEventListener('click', () => remedyModal.classList.add('hidden'));

  // Sensor Demo Scenarios
  document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const scenario = e.currentTarget.getAttribute('data-scenario');
      applyDemoScenario(scenario);
    });
  });

  // Toggle Demo Drawer
  const demoToggleHeader = document.getElementById('demoToggleHeader');
  const demoBody = document.getElementById('demoBody');
  const demoArrow = document.getElementById('demoArrow');
  if (demoToggleHeader && demoBody && demoArrow) {
    demoToggleHeader.addEventListener('click', () => {
      const isCollapsed = demoBody.style.display === 'none';
      demoBody.style.display = isCollapsed ? 'block' : 'none';
      demoArrow.textContent = isCollapsed ? '▲' : '▼';
    });
  }

  // Delete Hive Modal listeners
  const closeDelBtn = document.getElementById('closeDeleteModalBtn');
  const cancelDelBtn = document.getElementById('cancelDeleteBtn');
  const confirmDelBtn = document.getElementById('confirmDeleteBtn');
  const delModal = document.getElementById('deleteHiveModal');

  if (closeDelBtn) closeDelBtn.addEventListener('click', closeDeleteHiveModal);
  if (cancelDelBtn) cancelDelBtn.addEventListener('click', closeDeleteHiveModal);
  if (confirmDelBtn) confirmDelBtn.addEventListener('click', confirmDeleteHive);

  if (delModal) {
    delModal.addEventListener('click', (e) => {
      if (e.target === delModal) closeDeleteHiveModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDeleteHiveModal();
  });

  // Language Starter Welcome Screen Setup
  setupLanguageStarterScreen();

  // Auth & OTP Screen Setup
  setupAuthScreen();
}

// --- APPLY DEMO SCENARIOS ---
function applyDemoScenario(scenario) {
  const hive = hivesData.find(h => h.id === selectedHiveId);
  if (!hive) return;

  if (scenario === 'healthy') {
    hive.score = 96;
    hive.statusLevel = 'safe';
    hive.statusText = {
      en: "All Good & Healthy",
      hi: "सब कुछ बढ़िया है",
      ta: "அனைத்தும் நலமாக உள்ளது",
      te: "అంతా బాగుంది & ఆరోగ్యకరం",
      kn: "ಎಲ್ಲವೂ ಉತ್ತಮವಾಗಿದೆ",
      ml: "എല്ലാം നന്നായിരിക്കുന്നു"
    };
    hive.subtext = {
      en: "Colony is safe, stable and thriving",
      hi: "पूरी पेटी सुरक्षित और सामान्य है",
      ta: "கூடு பாதுகாப்பாகவும் நிலையாகவும் உள்ளது",
      te: "కాలనీ సురక్షితంగా మరియు స్థిరంగా ఉంది",
      kn: "ವಸಾಹತು ಸುರಕ್ಷಿತ ಮತ್ತು ಸ್ಥಿರವಾಗಿದೆ",
      ml: "കോളനി സുരക്ഷിതവും സ്ഥിരവുമാണ്"
    };
    hive.temp = 34.2;
    hive.tempStatus = 'safe';
    hive.humidity = 56;
    hive.humStatus = 'safe';
    hive.diseaseDetected = false;
    hive.diseaseName = {
      en: "No Disease - Safe Colony",
      hi: "कोई रोग नहीं - पेटी सुरक्षित है",
      ta: "நோய் இல்லை - பாதுகாப்பான பெட்டி",
      te: "వ్యాధి లేదు - సురక్షితమైన కాలనీ",
      kn: "ಯಾವುದೇ ರೋಗವಿಲ್ಲ - ಸುರಕ್ಷಿತ ಪೆಟ್ಟಿಗೆ",
      ml: "രോഗമില്ല - സുരക്ഷിതമായ പെട്ടി"
    };
    hive.harvestDays = 7;
    hive.expectedQty = 9.0;
    hive.priceEstimate = 2700;
  } else if (scenario === 'highTemp') {
    hive.score = 64;
    hive.statusLevel = 'warn';
    hive.statusText = {
      en: "High Heat (38°C) - Check Shade!",
      hi: "गर्मी अधिक (३८°C) - ध्यान दें!",
      ta: "கடும் வெப்பம் (38°C) - நிழல் அமைக்கவும்!",
      te: "అధిక వేడి (38°C) - నీడ కల్పించండి!",
      kn: "ಅಧಿಕ ತಾಪಮಾನ (38°C) - ನೆರಳು ನೀಡಿ!",
      ml: "കൂടിയ ചൂട് (38°C) - തണൽ നൽകുക!"
    };
    hive.subtext = {
      en: "Temperature exceeded comfortable range",
      hi: "तापमान सुरक्षित सीमा से ऊपर जा रहा है",
      ta: "வெப்பநிலை பாதுகாப்பான வரம்பை தாண்டியுள்ளது",
      te: "ఉష్ణోగ్రత సాధారణ పరిధిని దాటింది",
      kn: "ತಾಪಮಾನ ಸುರಕ್ಷಿತ ಮಿತಿಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ",
      ml: "താപനില സുരക്ഷിത പരിധി കവിഞ്ഞു"
    };
    hive.temp = 38.4;
    hive.tempStatus = 'warn';
    hive.humidity = 41;
    hive.humStatus = 'warn';
    hive.diseaseDetected = false;
    hive.diseaseName = {
      en: "High Heat Stress Warning",
      hi: "अधिक तापमान का तनाव (Heat Stress)",
      ta: "அதிக வெப்ப அழுத்தம் (Heat Stress)",
      te: "అధిక వేడి ఒత్తిడి (Heat Stress)",
      kn: "ಅಧಿಕ ಶಾಖದ ಒತ್ತಡ (Heat Stress)",
      ml: "കൂടിയ ചൂട് സമ്മർദ്ദം (Heat Stress)"
    };
  } else if (scenario === 'disease') {
    hive.score = 35;
    hive.statusLevel = 'danger';
    hive.statusText = {
      en: "Danger! Varroa Mite Alert",
      hi: "खतरा! वरोआ माइट रोग मिला",
      ta: "ஆபத்து! வரோவா நோய் எச்சரிக்கை",
      te: "ప్రమాదం! వరోవా మైట్ తెగులు",
      kn: "ಅಪಾಯ! ವರೋವಾ ರೋಗ ಎಚ್ಚರಿಕೆ",
      ml: "അപകടം! വരോവ രോഗ മുന്നറിയിപ്പ്"
    };
    hive.subtext = {
      en: "Immediate bio-treatment required",
      hi: "तुरंत पेटी में जैविक उपचार करें",
      ta: "உடனடி உயிரியல் சிகிச்சை தேவை",
      te: "వెంటనే జీవ చికిత్స అవసరం",
      kn: "ತಕ್ಷಣ ಜೈವಿಕ ಚಿಕಿತ್ಸೆಯ ಅಗತ್ಯವಿದೆ",
      ml: "ഉടൻ ജൈവ ചികിത്സ ആവശ്യമാണ്"
    };
    hive.temp = 35.1;
    hive.tempStatus = 'safe';
    hive.humidity = 66;
    hive.humStatus = 'warn';
    hive.diseaseDetected = true;
    hive.diseaseName = {
      en: "Varroa Destructor Mite Parasite",
      hi: "वरोआ माइट परजीवी कीट",
      ta: "வரோவா ஒட்டுண்ணி பூச்சி",
      te: "వరోవా పరాన్నజీవి పురుగు",
      kn: "ವರೋವಾ ಪರಾವಲಂಬಿ ಕೀಟ",
      ml: "വരോവ പരാദ കീടം"
    };
  } else if (scenario === 'harvestReady') {
    hive.score = 98;
    hive.statusLevel = 'safe';
    hive.statusText = {
      en: "Honey Ready for Harvest!",
      hi: "शहद निकालने के लिए तैयार!",
      ta: "தேன் அறுவடைக்கு தயார்!",
      te: "తేనె తీసేందుకు సిద్ధంగా ఉంది!",
      kn: "ಜೇನು ಕೊಯ್ಲಿಗೆ ಸಿದ್ಧವಾಗಿದೆ!",
      ml: "തേൻ വിളവെടുക്കാൻ തയ്യാറാണ്!"
    };
    hive.subtext = {
      en: "Over 85% frames sealed with ripe honey",
      hi: "८५% से अधिक फ्रेम पके शहद से सील हैं",
      ta: "85% க்கும் மேற்பட்ட சட்டங்கள் தேனால் மூடப்பட்டுள்ளன",
      te: "85% పైగా ఫ్రేమ్‌లు తేనెతో నిండి మూయబడ్డాయి",
      kn: "85% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಫ್ರೇಮ್‌ಗಳು ಜೇನಿನಿಂದ ತುಂಬಿವೆ",
      ml: "85% ത്തിലധികം ഫ്രെയിമുകൾ തേൻ നിറഞ്ഞ് മൂടിയിരിക്കുന്നു"
    };
    hive.temp = 34.8;
    hive.tempStatus = 'safe';
    hive.humidity = 54;
    hive.humStatus = 'safe';
    hive.diseaseDetected = false;
    hive.harvestDays = 0;
    hive.harvestStatus = {
      en: "Ready Now!",
      hi: "तैयार है!",
      ta: "தயார்!",
      te: "సిద్ధం!",
      kn: "ಸಿದ್ಧವಾಗಿದೆ!",
      ml: "തയ്യാർ!"
    };
    hive.expectedQty = 11.5;
    hive.priceEstimate = 3450;
  }

  renderHiveTabs();
  renderCurrentHive();
  stopSpeech();
}

// ==========================================================================
// STARTING WELCOME SCREEN: LANGUAGE SELECTION CONTROLLER
// ==========================================================================

const starterScreenLocales = {
  en: {
    title: "What is your language?",
    sub: "Select your preferred language to continue",
    confirmLabel: "Confirm",
    confirmSub: "Continue"
  },
  hi: {
    title: "आपकी भाषा क्या है?",
    sub: "आगे बढ़ने के लिए अपनी पसंदीदा भाषा चुनें",
    confirmLabel: "पुष्टि करें",
    confirmSub: "आगे बढ़ें"
  },
  ta: {
    title: "உங்கள் மொழி எது?",
    sub: "தொடர உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்",
    confirmLabel: "உறுதிப்படுத்துக",
    confirmSub: "தொடரவும்"
  },
  te: {
    title: "మీ భాష ఏమిటి?",
    sub: "కొనసాగడానికి మీ ప్రాధాన్యత గల భాషను ఎంచుకోండి",
    confirmLabel: "ధృవీకరించండి",
    confirmSub: "ముందుకు సాగండి"
  },
  kn: {
    title: "ನಿಮ್ಮ ಭಾಷೆ ಯಾವುದು?",
    sub: "ಮುಂದುವರಿಯಲು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    confirmLabel: "ಖಚಿತಪಡಿಸಿ",
    confirmSub: "ಮುಂದುವರಿಯಿರಿ"
  },
  ml: {
    title: "നിങ്ങളുടെ ഭാഷ ഏതാണ്?",
    sub: "തുടരാൻ നിങ്ങളുടെ മുൻഗണനാ ഭാഷ തിരഞ്ഞെടുക്കുക",
    confirmLabel: "സ്ഥിരീകരിക്കുക",
    confirmSub: "തുടരുക"
  }
};

let tempStarterSelectedLang = currentLang || 'hi';

function updateStarterScreenUI(langCode) {
  tempStarterSelectedLang = langCode;
  const loc = starterScreenLocales[langCode] || starterScreenLocales['en'];

  // Update card active states & ARIA checked attribute
  const cards = document.querySelectorAll('.starter-lang-card');
  cards.forEach(card => {
    const isSelected = card.getAttribute('data-lang') === langCode;
    card.classList.toggle('selected', isSelected);
    card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
  });

  // Dynamic header text updates
  const titleEl = document.getElementById('starterSectionTitle');
  const subEl = document.getElementById('starterSectionSubtitle');
  if (titleEl) titleEl.textContent = loc.title;
  if (subEl) subEl.textContent = loc.sub;

  // Dynamic confirm button updates
  const labelEl = document.getElementById('starterConfirmLabel');
  const confirmSubEl = document.getElementById('starterConfirmSub');
  if (labelEl) labelEl.textContent = loc.confirmLabel;
  if (confirmSubEl) confirmSubEl.textContent = loc.confirmSub;
}

function openLanguageStarterScreen() {
  const starter = document.getElementById('langStarterScreen');
  if (!starter) return;
  starter.style.display = 'flex';
  void starter.offsetWidth; // Force layout recalculation
  starter.classList.remove('dismissed');
  updateStarterScreenUI(currentLang);
}

function closeLanguageStarterScreen() {
  const starter = document.getElementById('langStarterScreen');
  if (!starter) return;
  starter.classList.add('dismissed');
  setTimeout(() => {
    starter.style.display = 'none';
  }, 400);
}

function setupLanguageStarterScreen() {
  const starter = document.getElementById('langStarterScreen');
  if (!starter) return;

  // Sync initial language selection
  updateStarterScreenUI(currentLang);

  // Language cards interactive click selection
  const cards = document.querySelectorAll('.starter-lang-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const chosenLang = card.getAttribute('data-lang');
      if (chosenLang) {
        updateStarterScreenUI(chosenLang);
      }
    });
  });

  // Confirm button click -> leads to Login Screen
  const confirmBtn = document.getElementById('starterConfirmBtn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      selectLanguage(tempStarterSelectedLang);
      closeLanguageStarterScreen();
      openAuthScreen();
    });
  }

  // Dropdown "Change Language / भाषा बदलें" option click
  const reopenBtn = document.getElementById('reopenStarterScreenBtn');
  if (reopenBtn) {
    reopenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = document.getElementById('langDropdownMenu');
      const wrapper = document.getElementById('langDropdownWrapper');
      if (menu) menu.classList.add('hidden');
      if (wrapper) wrapper.classList.remove('open');
      openLanguageStarterScreen();
    });
  }

  // Also support clicking current language flag/badge to easily reopen
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.setAttribute('title', 'Change Language / भाषा बदलें');
  }

  // Expose globally for any trigger
  window.openLanguageStarterScreen = openLanguageStarterScreen;
  window.closeLanguageStarterScreen = closeLanguageStarterScreen;
}

// ==========================================================================
// AUTH SCREEN CONTROLLER: LOGIN (NAME & PHONE) & OTP VERIFICATION
// ==========================================================================

let resendTimerInterval = null;

function openAuthScreen() {
  const authScreen = document.getElementById('authScreen');
  if (!authScreen) return;

  // Reset to Step 1 (Name & Phone)
  const stepPhone = document.getElementById('authStepPhone');
  const stepOtp = document.getElementById('authStepOtp');
  if (stepPhone) stepPhone.classList.add('active');
  if (stepOtp) stepOtp.classList.remove('active');

  // Prepopulate saved user info if available
  const savedName = localStorage.getItem('kvic_user_name') || 'Ram Kumar';
  const savedPhone = localStorage.getItem('kvic_user_phone') || '9876543210';
  const nameInput = document.getElementById('authUserName');
  const phoneInput = document.getElementById('authUserPhone');
  if (nameInput) nameInput.value = savedName;
  if (phoneInput) phoneInput.value = savedPhone;

  // Clear OTP boxes
  document.querySelectorAll('.otp-digit').forEach(d => {
    d.value = '';
    d.classList.remove('filled');
  });

  authScreen.style.display = 'flex';
  void authScreen.offsetWidth; // Force layout recalculation
  authScreen.classList.remove('hidden');
}

function closeAuthScreen() {
  const authScreen = document.getElementById('authScreen');
  if (!authScreen) return;
  authScreen.classList.add('hidden');
  setTimeout(() => {
    authScreen.style.display = 'none';
  }, 350);
}

function startOtpCountdown() {
  clearInterval(resendTimerInterval);
  let timeLeft = 30;
  const resendBtn = document.getElementById('resendOtpBtn');
  const timerSpan = document.getElementById('resendTimer');

  if (resendBtn) resendBtn.disabled = true;
  if (timerSpan) timerSpan.textContent = timeLeft;

  resendTimerInterval = setInterval(() => {
    timeLeft--;
    if (timerSpan) timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(resendTimerInterval);
      if (resendBtn) {
        resendBtn.disabled = false;
        resendBtn.textContent = 'Resend Code Now';
      }
    }
  }, 1000);
}

function setupAuthScreen() {
  const authScreen = document.getElementById('authScreen');
  if (!authScreen) return;

  const stepPhone = document.getElementById('authStepPhone');
  const stepOtp = document.getElementById('authStepOtp');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const authBackToPhoneBtn = document.getElementById('authBackToPhoneBtn');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const otpDemoFillBtn = document.getElementById('otpDemoFillBtn');
  const resendOtpBtn = document.getElementById('resendOtpBtn');
  const otpDigits = document.querySelectorAll('.otp-digit');
  const logoutProfileBtn = document.getElementById('logoutProfileBtn');

  // Step 1: Send OTP Click
  if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('authUserName');
      const phoneInput = document.getElementById('authUserPhone');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';

      if (!name) {
        alert('Please enter your name / कृपया अपना नाम दर्ज करें');
        if (nameInput) nameInput.focus();
        return;
      }
      if (!phone || phone.length < 10) {
        alert('Please enter a valid 10-digit phone number / मान्य १० अंकों का मोबाइल नंबर दर्ज करें');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Display target phone in OTP step
      const otpDisplayPhone = document.getElementById('otpDisplayPhone');
      if (otpDisplayPhone) {
        otpDisplayPhone.textContent = `+91 ${phone}`;
      }

      // Transition to Step 2 (OTP)
      stepPhone.classList.remove('active');
      stepOtp.classList.add('active');

      // Start Countdown and focus first digit
      startOtpCountdown();
      if (otpDigits.length > 0) {
        otpDigits[0].focus();
      }
    });
  }

  // Step 2: Back to Phone step
  if (authBackToPhoneBtn) {
    authBackToPhoneBtn.addEventListener('click', () => {
      stepOtp.classList.remove('active');
      stepPhone.classList.add('active');
      clearInterval(resendTimerInterval);
    });
  }

  // OTP 6-Digit input navigation & typing handling
  otpDigits.forEach((input, idx) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val) {
        input.classList.add('filled');
        if (idx < otpDigits.length - 1) {
          otpDigits[idx + 1].focus();
        }
      } else {
        input.classList.remove('filled');
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && idx > 0) {
        otpDigits[idx - 1].focus();
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
      if (/^\d+$/.test(pasteData)) {
        const digits = pasteData.split('').slice(0, 6);
        digits.forEach((digit, i) => {
          if (otpDigits[i]) {
            otpDigits[i].value = digit;
            otpDigits[i].classList.add('filled');
          }
        });
        if (digits.length < 6 && otpDigits[digits.length]) {
          otpDigits[digits.length].focus();
        } else if (otpDigits[5]) {
          otpDigits[5].focus();
        }
      }
    });
  });

  // Demo auto-fill OTP button
  if (otpDemoFillBtn) {
    otpDemoFillBtn.addEventListener('click', () => {
      const demoCode = ['1', '2', '3', '4', '5', '6'];
      demoCode.forEach((d, i) => {
        if (otpDigits[i]) {
          otpDigits[i].value = d;
          otpDigits[i].classList.add('filled');
        }
      });
    });
  }

  // Resend OTP button
  if (resendOtpBtn) {
    resendOtpBtn.addEventListener('click', () => {
      if (resendOtpBtn.disabled) return;
      startOtpCountdown();
      alert('A new 6-digit OTP has been sent to your phone! (Demo: 123456)');
    });
  }

  // Step 2: Verify OTP
  if (verifyOtpBtn) {
    verifyOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let enteredOtp = '';
      otpDigits.forEach(d => enteredOtp += (d.value || ''));

      if (enteredOtp.length < 6) {
        alert('Please enter all 6 digits of the OTP / कृपया सभी ६ अंक दर्ज करें');
        return;
      }

      // Save user profile details
      const nameInput = document.getElementById('authUserName');
      const phoneInput = document.getElementById('authUserPhone');
      const name = nameInput ? nameInput.value.trim() : 'Ram Kumar';
      const phone = phoneInput ? phoneInput.value.trim() : '9876543210';

      localStorage.setItem('kvic_logged_in', 'true');
      localStorage.setItem('kvic_user_name', name);
      localStorage.setItem('kvic_user_phone', phone);

      // Update Beekeeper profile display in modal
      const profileNameEl = document.getElementById('profileBeekeeperName');
      const profileModalUserName = document.getElementById('profileModalUserName');
      const profileModalUserPhone = document.getElementById('profileModalUserPhone');
      if (profileNameEl) {
        profileNameEl.textContent = `${name}`;
      }
      if (profileModalUserName) {
        profileModalUserName.textContent = `${name}`;
      }
      if (profileModalUserPhone) {
        profileModalUserPhone.innerHTML = `+91 ${phone} • <span class="badge-id">KVIC-UP-2026-8841</span>`;
      }

      // Smoothly close auth and enter portal
      closeAuthScreen();
    });
  }

  // Profile modal Logout button
  if (logoutProfileBtn) {
    logoutProfileBtn.addEventListener('click', () => {
      const profileModal = document.getElementById('userProfileModal');
      if (profileModal) profileModal.classList.add('hidden');
      localStorage.removeItem('kvic_logged_in');
      openAuthScreen();
    });
  }

  // Expose globally
  window.openAuthScreen = openAuthScreen;
  window.closeAuthScreen = closeAuthScreen;
}


