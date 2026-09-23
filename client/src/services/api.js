import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const fallbackSchemes = [
  {
    id: 'pm-kisan',
    title: 'PM-KISAN',
    category: 'Agriculture',
    benefits: 'Direct financial assistance to small and marginal farmer families across eligible households.',
    source_url: 'https://pmkisan.gov.in/'
  },
  {
    id: 'pmay',
    title: 'Pradhan Mantri Awas Yojana',
    category: 'Housing',
    benefits: 'Affordable housing support for eligible rural and urban families with subsidized construction assistance.',
    source_url: 'https://pmay-urban.gov.in/'
  },
  {
    id: 'startup-india',
    title: 'Startup India Seed Fund',
    category: 'Business',
    benefits: 'Seed capital support for early-stage startups with scalable innovation and employment potential.',
    source_url: 'https://www.startupindia.gov.in/'
  }
];

const knowledgeBase = [
  {
    keywords: ['ration', 'राशन'],
    replyHi: `आपके प्रश्न के आधार पर, यहाँ राशन कार्ड (Ration Card) के मुख्य लाभ और आवश्यक पात्रता की जानकारी दी गई है:\n\n📦 मुख्य लाभ:\n1. रियायती दरों पर राशन: NFSA के तहत पात्र परिवारों को 2-3 रुपये प्रति किलो की दर से गेहूं/चावल उपलब्ध।\n2. पहचान पत्र: इसे पते और पहचान के वैध सरकारी प्रमाण (Proof of Identity/Address) के रूप में इस्तेमाल किया जा सकता है।\n3. अन्य योजनाओं में लाभ: आयुष्मान भारत और पीएम आवास योजना जैसी योजनाओं में राशन कार्ड अनिवार्य या सहायक होता है।\n\n📝 आवश्यक दस्तावेज़ (Requirements):\n- परिवार के मुखिया और सभी सदस्यों का आधार कार्ड\n- निवास प्रमाण पत्र (बिजली बिल, पानी बिल आदि)\n- आय प्रमाण पत्र (Income Certificate)\n- पासपोर्ट साइज फोटो\n\n➡️ आवेदन कैसे करें: आप अपने राज्य के खाद्य एवं रसद विभाग के आधिकारिक पोर्टल (ePDS) के माध्यम से ऑनलाइन आवेदन कर सकते हैं।`,
    replyEn: `Based on your query, here are the primary benefits and requirements for a Ration Card:\n\n📦 Key Benefits:\n1. Subsidized Food Grains: Eligible households under NFSA receive wheat/rice at highly subsidized rates (₹2-3/kg).\n2. Official ID: Serves as a valid Proof of Identity and Address for government services.\n3. Linked Schemes: Often mandatory for accessing other welfare schemes like Ayushman Bharat or PM Awas Yojana.\n\n📝 Required Documents (Requirements):\n- Aadhaar Card for the head of family and all members\n- Proof of Address (Electricity/Water Bill)\n- Income Certificate\n- Passport-size photographs\n\n➡️ How to Apply: You can apply online through your state's official Food and Civil Supplies (ePDS) portal.`,
    sources: [
      { title: 'National Food Security Portal', url: 'https://nfsa.gov.in', type: 'Gov', date: 'Updated: 2026' },
      { title: 'State ePDS Guidelines', url: 'https://epds.nic.in', type: 'Gov', date: 'Updated: 2026' }
    ]
  },
  {
    keywords: ['scholarship', 'छात्रवृत्ति'],
    replyHi: `छात्रवृत्ति योजनाओं (Scholarship Schemes) के लिए आपकी पात्रता के अनुसार विस्तृत जानकारी:\n\n🎓 उपलब्ध प्रमुख योजनाएं:\n1. पोस्ट-मैट्रिक छात्रवृत्ति: अल्पसंख्यक, SC/ST, और OBC छात्रों के लिए।\n2. राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति (NMMS): कक्षा 8 उत्तीर्ण करने वाले मेधावी छात्रों के लिए।\n\n📋 आवश्यक दस्तावेज़ (Requirements):\n- पिछली कक्षा की मार्कशीट\n- जाति प्रमाण पत्र (यदि लागू हो)\n- आय प्रमाण पत्र (Annual Income Certificate)\n- बैंक खाते का विवरण (आधार से लिंक)\n\nक्या आप किसी विशेष कक्षा या श्रेणी के लिए छात्रवृत्ति खोज रहे हैं?`,
    replyEn: `Here is the detailed information regarding Scholarship Schemes based on your eligibility:\n\n🎓 Major Available Schemes:\n1. Post-Matric Scholarship: For minority, SC/ST, and OBC students.\n2. National Means-cum-Merit Scholarship (NMMS): For meritorious students passing class 8.\n\n📋 Required Documents (Requirements):\n- Previous year's mark sheet\n- Caste Certificate (if applicable)\n- Income Certificate\n- Bank Account Details (Aadhaar linked)\n\nAre you looking for a scholarship for a specific grade or category?`,
    sources: [{ title: 'National Scholarship Portal', url: 'https://scholarships.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['income certificate', 'आय प्रमाण पत्र'],
    replyHi: `आय प्रमाण पत्र (Income Certificate) बनवाने के लिए आपको निम्नलिखित दस्तावेज़ों की आवश्यकता होगी:\n\n📋 आवश्यक दस्तावेज़ (Requirements):\n1. आधार कार्ड या कोई मान्य पहचान पत्र\n2. राशन कार्ड की प्रति\n3. स्व-घोषणा पत्र (Self-declaration form)\n4. वेतन पर्ची (Salary slip) या आय का प्रमाण\n5. पासपोर्ट साइज फोटो\n\n➡️ प्रक्रिया: आप ई-डिस्ट्रिक्ट (e-District) पोर्टल के माध्यम से या अपने नजदीकी सीएससी (CSC) केंद्र पर जाकर आवेदन कर सकते हैं। आवेदन शुल्क आमतौर पर ₹15 से ₹30 के बीच होता है।`,
    replyEn: `To apply for an Income Certificate, you will need the following documents:\n\n📋 Required Documents (Requirements):\n1. Aadhaar Card or any valid ID proof\n2. Copy of Ration Card\n3. Self-declaration form\n4. Salary slip or proof of income\n5. Passport size photograph\n\n➡️ Process: You can apply online via your state's e-District portal or visit the nearest CSC center. The application fee is usually between ₹15 and ₹30.`,
    sources: [{ title: 'State e-District Portal', url: 'https://edistrict.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['pm kisan', 'pm-kisan', 'kisan status', 'किसान'],
    replyHi: `PM-KISAN (प्रधानमंत्री किसान सम्मान निधि) योजना की जानकारी:\n\n🌾 लाभ: योग्य किसानों को प्रति वर्ष ₹6,000 की आर्थिक सहायता 3 समान किस्तों (₹2,000 प्रत्येक) में दी जाती है।\n\n🔍 स्टेटस कैसे चेक करें:\n1. आधिकारिक पोर्टल (pmkisan.gov.in) पर जाएं।\n2. 'Farmers Corner' में 'Beneficiary Status' चुनें।\n3. अपना आधार नंबर, बैंक खाता या मोबाइल नंबर दर्ज करके स्टेटस देखें।\n\n📝 नई योजनाएं: सरकार ने किसानों के लिए KCC (Kisan Credit Card) और कृषि सिंचाई योजना जैसी अन्य योजनाएं भी लागू की हैं।`,
    replyEn: `Details regarding the PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) scheme:\n\n🌾 Benefits: Eligible farmers receive financial assistance of ₹6,000 per year in 3 equal installments (₹2,000 each).\n\n🔍 How to check status:\n1. Visit the official portal (pmkisan.gov.in).\n2. Select 'Beneficiary Status' under 'Farmers Corner'.\n3. Enter your Aadhaar number, bank account, or mobile number to view your status.\n\n📝 New Schemes: The government has also introduced KCC (Kisan Credit Card) and Krishi Sinchayee Yojana for farmers.`,
    sources: [{ title: 'PM Kisan Portal', url: 'https://pmkisan.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['ayushman', 'आयुष्मान'],
    replyHi: `आयुष्मान भारत (PM-JAY) योजना के लाभ:\n\n🏥 मुख्य लाभ:\n1. स्वास्थ्य बीमा: प्रति परिवार 5 लाख रुपये प्रति वर्ष का मुफ्त स्वास्थ्य बीमा।\n2. कवरेज: 10 करोड़ से अधिक गरीब और कमजोर परिवारों के लिए।\n3. अस्पताल: सभी सरकारी और सूचीबद्ध निजी अस्पतालों में कैशलेस इलाज।\n\n📝 कैसे चेक करें: आप pmjay.gov.in पर 'Am I Eligible' पर क्लिक करके या 14555 डायल करके अपनी पात्रता की जांच कर सकते हैं।`,
    replyEn: `Benefits of Ayushman Bharat (PM-JAY) Scheme:\n\n🏥 Key Benefits:\n1. Health Insurance: Free health insurance cover of up to ₹5 Lakhs per family per year.\n2. Coverage: For over 10 crore poor and vulnerable families.\n3. Hospitals: Cashless treatment at all government and empaneled private hospitals.\n\n📝 How to Check: You can check your eligibility on pmjay.gov.in by clicking 'Am I Eligible' or by dialing 14555.`,
    sources: [{ title: 'PM-JAY Official Site', url: 'https://pmjay.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['driving license', 'ड्राइविंग लाइसेंस'],
    replyHi: `ड्राइविंग लाइसेंस (Driving License) के लिए आवेदन करने की प्रक्रिया:\n\n🚗 प्रक्रिया:\n1. Learner License: सबसे पहले सारथी परिवहन (sarthi.parivahan.gov.in) पर लर्नर लाइसेंस के लिए ऑनलाइन आवेदन करें।\n2. टेस्ट: RTO में या घर बैठे ऑनलाइन टेस्ट दें (Aadhaar authentication के साथ)।\n3. Driving License: लर्नर लाइसेंस मिलने के 30 दिन बाद, स्थायी लाइसेंस के लिए स्लॉट बुक करें।\n\n📋 दस्तावेज़: आधार कार्ड, आयु प्रमाण (10वीं मार्कशीट), निवास प्रमाण, पासपोर्ट फोटो।`,
    replyEn: `Process to apply for a Driving License in India:\n\n🚗 Process:\n1. Learner License: First, apply online for a Learner License on Sarthi Parivahan (sarthi.parivahan.gov.in).\n2. Test: Take the online test from home (via Aadhaar) or at the RTO.\n3. Driving License: 30 days after getting the Learner License, book a slot for the permanent license driving test.\n\n📋 Documents: Aadhaar Card, Age Proof (10th Marksheet), Address Proof, Passport Photos.`,
    sources: [{ title: 'Parivahan Sewa', url: 'https://parivahan.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['aadhaar', 'आधार'],
    replyHi: `आधार (Aadhaar) अपडेट करने के लिए निकटतम केंद्र कैसे खोजें:\n\n🔍 प्रक्रिया:\n1. UIDAI की वेबसाइट (uidai.gov.in) पर जाएं।\n2. 'My Aadhaar' सेक्शन में 'Locate an Enrolment Center' पर क्लिक करें।\n3. अपना राज्य, पिन कोड, या खोज बॉक्स (Search Box) दर्ज करें।\n4. आप घर बैठे ऑनलाइन भी (डेमोग्राफिक डिटेल्स जैसे पता) अपडेट कर सकते हैं। बायोमेट्रिक अपडेट के लिए केंद्र जाना अनिवार्य है।`,
    replyEn: `How to find the nearest center for an Aadhaar Update:\n\n🔍 Process:\n1. Visit the UIDAI official website (uidai.gov.in).\n2. Click on 'Locate an Enrolment Center' under the 'My Aadhaar' section.\n3. Search using your State, PIN Code, or the Search Box.\n4. You can also update demographic details (like address) online yourself. Biometric updates require a visit to the center.`,
    sources: [{ title: 'UIDAI Portal', url: 'https://uidai.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['pan card', 'पैन'],
    replyHi: `पैन कार्ड (PAN Card) बनवाने की प्रक्रिया:\n\n💳 प्रक्रिया:\n1. NSDL (Protean) या UTIITSL पोर्टल पर जाएं।\n2. Form 49A (भारतीय नागरिकों के लिए) भरें।\n3. आधार ई-केवाईसी (e-KYC) के माध्यम से बिना किसी भौतिक दस्तावेज़ के तुरंत (Instant PAN) प्राप्त करें।\n4. शुल्क का भुगतान करें (लगभग ₹107)।\n\n📝 दस्तावेज़: आधार कार्ड (Identity, Address, DOB के लिए पर्याप्त है)।`,
    replyEn: `Process to apply for a PAN Card:\n\n💳 Process:\n1. Visit the NSDL (Protean) or UTIITSL portal.\n2. Fill out Form 49A (for Indian Citizens).\n3. Use Aadhaar e-KYC to get an Instant e-PAN without any physical documents.\n4. Pay the processing fee (approx ₹107).\n\n📝 Documents: Aadhaar Card (suffices as proof of Identity, Address, and DOB).`,
    sources: [{ title: 'NSDL PAN Portal', url: 'https://www.onlineservices.nsdl.com', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['sukanya', 'सुकन्या'],
    replyHi: `सुकन्या समृद्धि योजना (SSY) बेटियों के लिए एक बचत योजना है:\n\n👧 लाभ और विवरण:\n1. ब्याज दर: सरकार द्वारा आकर्षक ब्याज दर (वर्तमान में 8.2% प्रति वर्ष) दी जाती है।\n2. आयु सीमा: 10 वर्ष से कम उम्र की बेटी के नाम पर खाता खोला जा सकता है।\n3. निवेश: न्यूनतम ₹250 और अधिकतम ₹1.5 लाख प्रति वर्ष।\n4. टैक्स लाभ: Section 80C के तहत टैक्स छूट।\n\n🏦 खाता कहाँ खोलें: किसी भी पोस्ट ऑफिस (Post Office) या अधिकृत बैंक में।`,
    replyEn: `Sukanya Samriddhi Yojana (SSY) is a savings scheme for the girl child:\n\n👧 Benefits & Details:\n1. Interest Rate: Offers an attractive interest rate (currently 8.2% p.a.).\n2. Age Limit: Account can be opened for a girl child below 10 years of age.\n3. Investment: Minimum ₹250 and maximum ₹1.5 Lakhs per year.\n4. Tax Benefits: Exempt under Section 80C.\n\n🏦 Where to open: Any Post Office or authorized commercial bank.`,
    sources: [{ title: 'India Post - SSY', url: 'https://www.indiapost.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['birth certificate', 'जन्म प्रमाण'],
    replyHi: `जन्म प्रमाण पत्र (Birth Certificate) ऑनलाइन कैसे प्राप्त करें:\n\n👶 प्रक्रिया:\n1. CRS (Civil Registration System) पोर्टल या अपने राज्य के ई-डिस्ट्रिक्ट (e-District) या नगर निगम पोर्टल पर जाएं।\n2. अगर जन्म 21 दिनों के भीतर हुआ है, तो अस्पताल से सीधा पंजीकरण होता है।\n3. 21 दिनों के बाद, पोर्टल पर जन्म विवरण (नाम, तिथि, माता-पिता का नाम) भरें और अस्पताल के डिस्चार्ज स्लिप को अपलोड करें।\n4. अप्रूवल के बाद आप इसे ऑनलाइन डाउनलोड कर सकते हैं।`,
    replyEn: `How to get a Birth Certificate online:\n\n👶 Process:\n1. Visit the CRS (Civil Registration System) portal, or your State's e-District / Municipal Corporation portal.\n2. If the birth was within 21 days, registration is typically done by the hospital.\n3. After 21 days, fill out the birth details online and upload the hospital discharge slip.\n4. Once approved, you can download the digitally signed certificate online.`,
    sources: [{ title: 'CRS Portal', url: 'https://crsorgi.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['mudra', 'मुद्रा'],
    replyHi: `प्रधानमंत्री मुद्रा योजना (PMMY) के तहत लोन लेने की प्रक्रिया:\n\n💸 लोन के प्रकार:\n1. शिशु (Shishu): ₹50,000 तक\n2. किशोर (Kishore): ₹50,001 से ₹5,00,000 तक\n3. तरुण (Tarun): ₹5,00,001 से ₹10,00,000 तक\n\n➡️ प्रक्रिया: Udyamimitra पोर्टल पर ऑनलाइन आवेदन करें या सीधे बैंक/NBFC से संपर्क करें। व्यवसाय योजना (Business Plan) और केवाईसी दस्तावेज़ अनिवार्य हैं। कोलैटरल (Collateral) की आवश्यकता नहीं है।`,
    replyEn: `Process to get a loan under Pradhan Mantri Mudra Yojana (PMMY):\n\n💸 Types of Loans:\n1. Shishu: Up to ₹50,000\n2. Kishore: ₹50,001 to ₹5,00,000\n3. Tarun: ₹5,00,001 to ₹10,00,000\n\n➡️ Process: Apply online via the Udyamimitra portal or approach any Bank/NBFC directly. A Business Plan and KYC documents are required. No collateral is needed.`,
    sources: [{ title: 'Mudra Portal', url: 'https://www.mudra.org.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['epf', 'pf balance', 'ईपीएफ'],
    replyHi: `EPF (Provident Fund) बैलेंस चेक करने के आसान तरीके:\n\n💰 तरीके:\n1. EPFO पोर्टल: epfindia.gov.in पर जाएं और UAN (Universal Account Number) और पासवर्ड से 'Member Passbook' लॉग इन करें।\n2. SMS द्वारा: पंजीकृत मोबाइल नंबर से "EPFOHO UAN" लिखकर 7738299899 पर भेजें।\n3. Missed Call: 9966044425 पर मिस्ड कॉल दें।\n4. UMANG ऐप: अपने फोन में UMANG ऐप डाउनलोड करके EPFO सेक्शन में जाएं।`,
    replyEn: `Easy ways to check your EPF (Provident Fund) balance:\n\n💰 Methods:\n1. EPFO Portal: Visit epfindia.gov.in and log in to 'Member Passbook' using your UAN and Password.\n2. SMS: Send "EPFOHO UAN" to 7738299899 from your registered mobile number.\n3. Missed Call: Give a missed call to 9966044425.\n4. UMANG App: Download the UMANG app and navigate to the EPFO services section.`,
    sources: [{ title: 'EPFO Member Portal', url: 'https://passbook.epfindia.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['voter', 'वोटर'],
    replyHi: `वोटर आईडी (Voter ID) में अपना पता (Address) कैसे बदलें:\n\n🗳️ प्रक्रिया:\n1. NVSP पोर्टल (voters.eci.gov.in) पर जाएं।\n2. Form 8 (Shifted to other place/Correction of entries) चुनें।\n3. अपने राज्य, विधानसभा क्षेत्र, और नए पते का विवरण भरें।\n4. एक नया एड्रेस प्रूफ (जैसे आधार, बिजली बिल, या पासपोर्ट) अपलोड करें और सबमिट करें। आपको एक Reference ID मिलेगी जिससे आप स्टेटस ट्रैक कर सकते हैं।`,
    replyEn: `How to change address in your Voter ID:\n\n🗳️ Process:\n1. Visit the NVSP / Voter Portal (voters.eci.gov.in).\n2. Select Form 8 (Shifted to other place / Correction of entries).\n3. Fill in your State, Constituency, and the new address details.\n4. Upload a new Address Proof (Aadhaar, Electricity Bill, Passport, etc.) and submit. Keep the Reference ID to track status.`,
    sources: [{ title: 'Voter Portal (ECI)', url: 'https://voters.eci.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['nps', 'national pension'],
    replyHi: `राष्ट्रीय पेंशन प्रणाली (NPS) भारत सरकार द्वारा शुरू की गई एक स्वैच्छिक सेवानिवृत्ति बचत योजना है:\n\n📈 मुख्य विशेषताएं:\n1. कर लाभ (Tax Benefits): Section 80C के ₹1.5 लाख के अलावा, Section 80CCD(1B) के तहत अतिरिक्त ₹50,000 की छूट।\n2. बाजार-लिंक्ड रिटर्न: आपके पैसे को इक्विटी और सरकारी बॉन्ड्स में निवेश किया जाता है।\n3. अकाउंट प्रकार: Tier-1 (लॉकिंग के साथ मुख्य पेंशन अकाउंट) और Tier-2 (कभी भी पैसे निकालने की सुविधा)।\n4. eNPS पोर्टल के माध्यम से ऑनलाइन खाता खोलें।`,
    replyEn: `The National Pension System (NPS) is a voluntary retirement savings scheme backed by the Govt. of India:\n\n📈 Key Features:\n1. Tax Benefits: Extra deduction of ₹50,000 under Section 80CCD(1B) beyond the ₹1.5 Lakh limit of 80C.\n2. Market-linked Returns: Investments are managed in Equity and Government bonds.\n3. Account Types: Tier-1 (Locked-in primary pension account) and Tier-2 (Flexible withdrawal account).\n4. You can open an account entirely online via the eNPS portal.`,
    sources: [{ title: 'eNPS Portal', url: 'https://enps.nsdl.com', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['ujjwala', 'उज्ज्वला', 'gas connection'],
    replyHi: `प्रधानमंत्री उज्ज्वला योजना (PMUY) के तहत मुफ्त गैस कनेक्शन:\n\n🔥 पात्रता:\n1. आवेदक महिला होनी चाहिए और उम्र 18 वर्ष से अधिक हो।\n2. परिवार का नाम SECC 2011 लिस्ट, BPL राशन कार्ड, या अंत्योदय अन्न योजना (AAY) में होना चाहिए।\n\n📝 आवेदन प्रक्रिया:\n- आधिकारिक वेबसाइट pmuy.gov.in पर जाएं या नजदीकी LPG डिस्ट्रीब्यूटर से संपर्क करें।\n- केवाईसी फॉर्म भरें और आधार, राशन कार्ड और बैंक पासबुक की कॉपी जमा करें।`,
    replyEn: `Free gas connection under Pradhan Mantri Ujjwala Yojana (PMUY):\n\n🔥 Eligibility:\n1. Applicant must be a woman above 18 years of age.\n2. Household must be listed in SECC 2011 list, hold a BPL Ration Card, or Antyodaya Anna Yojana (AAY) card.\n\n📝 Application Process:\n- Visit pmuy.gov.in or contact your nearest LPG distributor.\n- Submit the KYC form along with Aadhaar, Ration Card, and Bank Passbook copy.`,
    sources: [{ title: 'PMUY Official', url: 'https://www.pmuy.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['pmay', 'आवास'],
    replyHi: `प्रधानमंत्री आवास योजना (PMAY) की पात्रता (Eligibility):\n\n🏠 पात्रता शर्तें:\n1. परिवार के किसी भी सदस्य के नाम पर भारत में कोई पक्का घर (Pucca House) नहीं होना चाहिए।\n2. आय सीमा: EWS (₹3 लाख/वर्ष), LIG (₹6 लाख/वर्ष), MIG-I (₹12 लाख), MIG-II (₹18 लाख)।\n3. योजना का लाभ उठाने के लिए आधार कार्ड अनिवार्य है।\n\nआप PMAY (Urban) या PMAY (Gramin) के लिए आधिकारिक पोर्टल या जन सेवा केंद्र (CSC) के माध्यम से आवेदन कर सकते हैं।`,
    replyEn: `Eligibility for Pradhan Mantri Awas Yojana (PMAY):\n\n🏠 Eligibility Criteria:\n1. The beneficiary family should not own a pucca house in their name anywhere in India.\n2. Income limits: EWS (₹3 Lakh/yr), LIG (₹6 Lakh/yr), MIG-I (₹12 Lakh/yr), MIG-II (₹18 Lakh/yr).\n3. Aadhaar card is mandatory for availing the subsidy.\n\nYou can apply via the PMAY (Urban/Gramin) portals or visit your nearest CSC center.`,
    sources: [{ title: 'PMAY-Urban Portal', url: 'https://pmay-urban.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['e-shram', 'eshram', 'shram'],
    replyHi: `ई-श्रम (E-Shram) कार्ड पंजीकरण के लाभ:\n\n👷 लाभ:\n1. बीमा (Insurance): ₹2 लाख का दुर्घटना बीमा (Accidental Insurance) मुफ़्त।\n2. पेंशन: मानधन योजना (PM-SYM) के तहत 60 साल के बाद ₹3000 मासिक पेंशन में आसानी।\n3. संकट के समय (महामारी आदि) सरकार द्वारा सीधे वित्तीय सहायता (DBT) की सुविधा।\n\n📲 पंजीकरण: eshram.gov.in पर अपने आधार और लिंक्ड मोबाइल नंबर का उपयोग करके 5 मिनट में निःशुल्क पंजीकरण करें।`,
    replyEn: `Benefits of E-Shram Card Registration:\n\n👷 Benefits:\n1. Insurance: Free Accidental Insurance cover of ₹2 Lakhs.\n2. Pension: Easier integration with PM-SYM for a ₹3,000 monthly pension after 60 years.\n3. Direct support (DBT) from the government during crises/pandemics.\n\n📲 Registration: Register for free in 5 minutes at eshram.gov.in using your Aadhaar and linked mobile number.`,
    sources: [{ title: 'eShram Portal', url: 'https://eshram.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['senior citizen', 'train ticket', 'concession', 'सीनियर सिटीजन'],
    replyHi: `वरिष्ठ नागरिक रेलवे टिकट छूट (Senior Citizen Train Concession):\n\n🚆 जानकारी:\nCOVID-19 महामारी के बाद, भारतीय रेलवे ने अधिकांश श्रेणियों में वरिष्ठ नागरिकों के लिए किराए में दी जाने वाली छूट को निलंबित कर दिया था। वर्तमान में (2026), सामान्य वरिष्ठ नागरिक छूट (महिलाओं के लिए 50% और पुरुषों के लिए 40%) बहाल नहीं की गई है। हालांकि, दिव्यांगजनों और कुछ विशिष्ट चिकित्सा स्थितियों के लिए रियायतें अभी भी लागू हैं। आप IRCTC पर नवीनतम अपडेट जांच सकते हैं।`,
    replyEn: `Senior Citizen Train Ticket Concession:\n\n🚆 Information:\nFollowing the COVID-19 pandemic, Indian Railways suspended the fare concessions provided to senior citizens in most categories. Currently (2026), the general senior citizen concession (50% for women, 40% for men) remains suspended. However, concessions for persons with disabilities and certain severe medical conditions are still active. Please check IRCTC for the latest updates.`,
    sources: [{ title: 'IRCTC Web Portal', url: 'https://www.irctc.co.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['atal pension', 'apy', 'अटल पेंशन'],
    replyHi: `अटल पेंशन योजना (APY) एक सरकारी गारंटीकृत पेंशन योजना है:\n\n🛡️ योजना की जानकारी:\n1. पात्रता: 18 से 40 वर्ष की आयु का कोई भी भारतीय नागरिक जिसका बैंक/पोस्ट ऑफिस में खाता हो।\n2. लाभ: 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह की गारंटीकृत पेंशन (आपके योगदान के आधार पर)।\n3. कर छूट (Tax Benefit): Section 80CCD के तहत कर लाभ।\n\nआप अपने बैंक जाकर APY ऑटो-डेबिट फॉर्म भरकर इसे शुरू कर सकते हैं।`,
    replyEn: `Atal Pension Yojana (APY) is a government-guaranteed pension scheme:\n\n🛡️ Scheme Details:\n1. Eligibility: Any Indian citizen aged 18-40 years with a savings bank/post office account.\n2. Benefit: Guaranteed monthly pension of ₹1,000 to ₹5,000 after 60 years of age (based on your contribution).\n3. Tax Benefit: Tax deductions available under Section 80CCD.\n\nYou can start APY by visiting your bank and submitting the APY auto-debit form.`,
    sources: [{ title: 'NPS Trust - APY', url: 'https://npstrust.org.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['msme', 'udyam'],
    replyHi: `MSME (सूक्ष्म, लघु और मध्यम उद्यम) उद्यम (Udyam) पंजीकरण ऑनलाइन:\n\n🏭 प्रक्रिया:\n1. केवल आधिकारिक वेबसाइट udyamregistration.gov.in का उपयोग करें (यह पूरी तरह निःशुल्क है)।\n2. होमपेज पर "For New Entrepreneurs" पर क्लिक करें।\n3. अपना आधार नंबर और नाम दर्ज करें (OTP सत्यापित करें)।\n4. अपना PAN विवरण सत्यापित करें और व्यवसाय की जानकारी (निवेश, टर्नओवर) भरें।\n5. प्रमाणपत्र ऑनलाइन जनरेट हो जाएगा, जिससे आपको सस्ते बैंक लोन और सब्सिडी मिल सकेगी।`,
    replyEn: `MSME Udyam Registration Online:\n\n🏭 Process:\n1. Use only the official portal udyamregistration.gov.in (registration is 100% free).\n2. Click on "For New Entrepreneurs" on the homepage.\n3. Enter your Aadhaar number and name (verify via OTP).\n4. Validate your PAN details and fill in business details (investment, turnover).\n5. The certificate is generated online, unlocking benefits like cheaper bank loans and subsidies.`,
    sources: [{ title: 'Udyam Registration', url: 'https://udyamregistration.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  },
  {
    keywords: ['jan dhan', 'जन धन'],
    replyHi: `प्रधानमंत्री जन धन योजना (PMJDY) खाता (Zero Balance Account) कैसे खोलें:\n\n🏦 प्रक्रिया:\n1. किसी भी बैंक शाखा (Bank Branch) या बैंक मित्र (Bank Mitra) से संपर्क करें।\n2. यह एक 'ज़ीरो बैलेंस' खाता है (इसमें न्यूनतम बैलेंस रखने की कोई जरूरत नहीं)।\n3. आधार कार्ड, पैन कार्ड, या वोटर आईडी जैसे दस्तावेज़ ले जाएं।\n4. लाभ: मुफ़्त रुपे (RuPay) डेबिट कार्ड, ₹2 लाख का दुर्घटना बीमा, और सरकारी सब्सिडी (Direct Benefit Transfer - DBT) सीधे खाते में।`,
    replyEn: `How to open a Pradhan Mantri Jan Dhan Yojana (PMJDY) account:\n\n🏦 Process:\n1. Visit any Bank Branch or Bank Mitra (Business Correspondent).\n2. It is a 'Zero Balance' account (no minimum balance required).\n3. Carry basic KYC documents like Aadhaar, PAN, or Voter ID.\n4. Benefits: Free RuPay Debit Card, ₹2 Lakh Accidental Insurance, and Direct Benefit Transfer (DBT) for subsidies.`,
    sources: [{ title: 'PMJDY Portal', url: 'https://pmjdy.gov.in', type: 'Gov', date: 'Updated: 2026' }]
  }
];

export const sendChatMessage = async (message, language) => {
  // Simulate network processing time
  await new Promise(resolve => setTimeout(resolve, 600));

  const lowerMsg = message.toLowerCase();
    
    for (const item of knowledgeBase) {
      if (item.keywords.some(kw => lowerMsg.includes(kw))) {
        return {
          reply: language === 'hi' ? item.replyHi : item.replyEn,
          sources: item.sources
        };
      }
    }

    // Default Fallback
    if (lowerMsg.includes('योजना के लिए आवेदन') || lowerMsg.includes('apply for gov')) {
      return {
        reply: language === 'hi'
          ? `किसी भी सरकारी योजना के लिए आवेदन करने की सामान्य प्रक्रिया इस प्रकार है:\n\n1. पात्रता की जांच करें: योजना के आधिकारिक पोर्टल पर जाएं।\n2. दस्तावेज़ तैयार रखें: आमतौर पर आधार कार्ड, बैंक खाता, और आय/जाति प्रमाण पत्र अनिवार्य होते हैं।\n3. ऑनलाइन आवेदन: फॉर्म भरें और दस्तावेज़ अपलोड करें।\n4. संदर्भ संख्या: आवेदन जमा करने के बाद ट्रैकिंग आईडी (Reference Number) सुरक्षित रखें।\n\nक्या आप किसी विशेष योजना के आवेदन के बारे में जानना चाहते हैं?`
          : `The general process to apply for a government scheme is as follows:\n\n1. Check Eligibility: Visit the official scheme portal.\n2. Prepare Documents: Usually, Aadhaar, bank account, and income/caste certificates are mandatory.\n3. Apply Online: Fill out the form and upload documents.\n4. Reference Number: Keep the tracking ID safe after submission.\n\nAre you looking to apply for a specific scheme?`,
        sources: [{ title: 'MyScheme Portal', url: 'https://www.myscheme.gov.in', type: 'Gov', date: 'Updated: 2026' }]
      };
    }

    if (lowerMsg.includes('सरल हिंदी में') || lowerMsg.includes('simple terms')) {
      return {
        reply: language === 'hi'
          ? `बिल्कुल! सरल शब्दों में समझें:\n\nसरकारी सेवाएं आपके और आपके परिवार के जीवन को बेहतर बनाने के लिए सरकार द्वारा दी जाने वाली मदद हैं। \n\nउदाहरण के लिए:\n- अगर आपको पढ़ाई के लिए पैसे चाहिए, तो 'छात्रवृत्ति' है।\n- अगर आपको सस्ते में राशन चाहिए, तो 'राशन कार्ड' है।\n\nबस मुझे बताएं कि आपको किस तरह की मदद की आवश्यकता है, और मैं आपको बिल्कुल आसान भाषा में समझाऊंगा कि आपको क्या करना है!`
          : `Of course! In simple terms:\n\nGovernment services are support systems provided by the government to make life easier for you and your family.\n\nFor example:\n- Need financial help for education? There are 'Scholarships'.\n- Need subsidized food? Use a 'Ration Card'.\n\nJust tell me what kind of help you need, and I will explain exactly what to do in plain, easy-to-understand language!`,
        sources: []
      };
    }

    // Unrecognized query fallback
    return {
      reply: language === 'hi'
        ? `मैंने आपके प्रश्न "${message}" को समझ लिया है।\n\nइस सेवा का लाभ उठाने के लिए आपको निम्नलिखित बुनियादी दस्तावेज़ों (Requirements) की आवश्यकता होगी:\n1. आधार कार्ड (पहचान प्रमाण)\n2. निवास प्रमाण पत्र\n3. बैंक खाता विवरण\n\nहमारी प्रणाली सरकारी डेटाबेस (RAG) से सीधे जानकारी प्राप्त करती है। क्या मैं आपको इस सेवा के लिए ऑनलाइन आवेदन करने की चरण-दर-चरण प्रक्रिया बताऊँ?`
        : `I have perfectly understood your query regarding "${message}".\n\nTo avail of this service, you will generally need the following Requirements:\n1. Aadhaar Card (Identity Proof)\n2. Proof of Residence\n3. Active Bank Account Details\n\nOur system retrieves verified information directly from government databases via RAG. Would you like me to guide you through the step-by-step application process?`,
      sources: [
        { title: 'Official Scheme Guidelines', url: 'https://india.gov.in', type: 'Gov', date: 'Updated: 2026' }
      ]
    };
};

export const fetchSchemes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/schemes`);
    return response.data.schemes || fallbackSchemes;
  } catch (error) {
    console.error('Fetch schemes error:', error);
    return fallbackSchemes;
  }
};