// ================= DATA STORE FOR PROGGA ACADEMIC CARE =================

const COURSES_DATA = [
  {
    id: "hsc-sci-full",
    category: "hsc",
    badge: "সবচেয়ে জনপ্রিয়",
    badgeColor: "bg-emerald-500",
    title: "HSC বিজ্ঞান বিভাগ পূর্ণাঙ্গ একাডেমিক কোর্স",
    subtitle: "একাদশ-দ্বাদশ শ্রেণি | ২০২৬ বোর্ড পরীক্ষা লক্ষ্য",
    subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "উচ্চতর গণিত", "জীববিজ্ঞান", "তথ্য ও যোগাযোগ প্রযুক্তি"],
    features: [
      "সপ্তাহে ৪ দিন ক্লাস + প্রতি সপ্তাহে পূর্ণাঙ্গ CQ ও MCQ মডেল টেস্ট",
      "রঙিন কালারফুল লেকচার শিট ও বোর্ড প্রশ্ন ব্যাংক সমাধান সেট",
      "বুয়েট ও মেডিকেল স্কলারদের দ্বারা ডাউট সলভ সেশন",
      "ডিজিটাল ক্লাসরুম ও মিস হওয়া ক্লাসের ফুল HD রেকর্ডিং"
    ],
    mode: "অফলাইন + অনলাইন হাইব্রিড",
    duration: "১২ মাসব্যাপী সম্পূর্ণ সিলেবাস",
    monthlyFee: 3500,
    oneTimeFee: 36000,
    discountBadge: "এককালীন ২০% ছাড়"
  },
  {
    id: "hsc-com-full",
    category: "hsc",
    badge: "টপ রেটেড",
    badgeColor: "bg-blue-600",
    title: "HSC ব্যবসায় শিক্ষা পূর্ণাঙ্গ একাডেমিক কেয়ার",
    subtitle: "একাদশ-দ্বাদশ শ্রেণি | হিসাববিজ্ঞান ও ফিন্যান্স স্পেশাল",
    subjects: ["হিসাববিজ্ঞান", "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", "ফিন্যান্স ও ব্যাংকিং", "অর্থনীতি", "ইংরেজি"],
    features: [
      "সপ্তাহে ৩ দিন ক্লাস + নিয়মিত প্র্যাকটিস ওয়ার্কশিট",
      "হিসাববিজ্ঞান ম্যাথ ও সৃজনশীল ফরম্যাট নির্ভুল কৌশল",
      "ঢাকা বিশ্ববিদ্যালয়ের বাণিজ্য অনুষদের অভিজ্ঞ শিক্ষক",
      "প্রতিটি অধ্যায় শেষে প্র্যাকটিক্যাল কেস স্টাডি ও কুইজ"
    ],
    mode: "অফলাইন ও অনলাইন ব্যাচ",
    duration: "১০ মাসব্যাপী পূর্ণাঙ্গ কোর্স",
    monthlyFee: 2800,
    oneTimeFee: 25000,
    discountBadge: "সীমিত আসন"
  },
  {
    id: "ssc-sci-topper",
    category: "ssc",
    badge: "GPA-5 গ্যারান্টি ব্যাচ",
    badgeColor: "bg-amber-500",
    title: "SSC নবম-দশম বিজ্ঞান বিভাগ - বোর্ড চ্যালেঞ্জ",
    subtitle: "SSC 2026/2027 পরীক্ষার্থীদের বেসিক টু প্রো প্রস্তুতি",
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "সাধারণ গণিত", "জীববিজ্ঞান", "আইসিটি"],
    features: [
      "সপ্তাহে ৫ দিন ক্লাস ও প্রতিদিনের পড়া প্রতিদিন পড়া নেওয়ার নিশ্চয়তা",
      "বোর্ড বই লাইন-টু-লাইন বিশ্লেষণ ও অধ্যায়ভিত্তিক CQ গাইড",
      "কঠিন গণিত ও সূত্রের উপর বিশেষ 'ম্যাথ হ্যাক্স' ক্লাস",
      "অভিভাবকদের সাথে প্রতিমাসে ১টি পারফরম্যান্স মিটিং"
    ],
    mode: "অফলাইন শাখা ও লাইভ জুম",
    duration: "বার্ষিক কোর্স (পরীক্ষা পর্যন্ত)",
    monthlyFee: 3000,
    oneTimeFee: 29000,
    discountBadge: "ভর্তি চলছে"
  },
  {
    id: "ssc-com-standard",
    category: "ssc",
    badge: "নতুন ব্যাচ",
    badgeColor: "bg-indigo-600",
    title: "SSC ব্যবসায় শিক্ষা ও মানবিক শাখা কেয়ার",
    subtitle: "নবম-দশম শ্রেণি | গণিত, ইংরেজি ও কমার্স বিষয়",
    subjects: ["সাধারণ গণিত", "ইংরেজি", "হিসাববিজ্ঞান", "ব্যবসায় উদ্যোগ", "সাধারণ বিজ্ঞান"],
    features: [
      "গণিত ও ইংরেজির ভীতি দূর করতে স্পেশাল ফাউন্ডেশন ক্লাস",
      "সপ্তাহে ৩ দিন ক্লাস + উইকলি রিভিশন টেস্ট",
      "বিগত ১৫ বছরের বোর্ড পরীক্ষার প্রশ্নোত্তর প্র্যাকটিস",
      "সহজ ভাষায় তৈরি নোট শিট ও হ্যান্ডনোট প্রদান"
    ],
    mode: "শাখা ভিত্তিক অফলাইন ক্লাস",
    duration: "সম্পূর্ণ সিলেবাস শেষ",
    monthlyFee: 2500,
    oneTimeFee: 23000,
    discountBadge: "১৫% ছাড়"
  },
  {
    id: "junior-foundation",
    category: "junior",
    badge: "ফাউন্ডেশন ব্যাচ",
    badgeColor: "bg-teal-600",
    title: "জুনিয়র একাডেমিক কেয়ার (৬ষ্ঠ–৮ম শ্রেণি)",
    subtitle: "নতুন কারিকুলাম ও অভিজ্ঞতাকেন্দ্রিক শিক্ষণ",
    subjects: ["গণিত", "বিজ্ঞান", "ইংরেজি", "ডিজিটাল প্রযুক্তি", "বাংলা"],
    features: [
      "ছোট ছোট ব্যাচ সাইজ (সর্বোচ্চ ২৫ জন শিক্ষার্থী)",
      "নতুন কারিকুলামের অ্যাক্টিভিটি বেসড প্রজেক্ট ওয়ার্ক সাপোর্ট",
      "মুখস্থ নয়, বাস্তব জীবনের উদাহরণের মাধ্যমে বিজ্ঞান ও গণিত শেখা",
      "সুন্দর হাতের লেখা ও ইংরেজি স্পোকেন বুস্টিং সেশন"
    ],
    mode: "সরাসরি শাখায় ক্লাসরুম",
    duration: "শিক্ষাবর্ষব্যাপী",
    monthlyFee: 2200,
    oneTimeFee: 21000,
    discountBadge: "ভর্তি ওপেন"
  },
  {
    id: "model-test-series",
    category: "model-test",
    badge: "ফাইনাল বুস্টার",
    badgeColor: "bg-rose-600",
    title: "HSC ও SSC সেন্ট্রাল বোর্ড ফাইনাল মডেল টেস্ট",
    subtitle: "আসল বোর্ড পরীক্ষার অনুরূপ পরিবেশে ২০টি পূর্ণাঙ্গ মডেল টেস্ট",
    subjects: ["সকল আবশ্যিক ও বিভাগীয় বিষয়সমূহ"],
    features: [
      "২০ সেট পূর্ণাঙ্গ CQ পরীক্ষা + ২০ সেট OMR বহুনির্বাচনি পরীক্ষা",
      "বোর্ড স্ট্যান্ডার্ড উত্তরপত্র ও অভিজ্ঞ পরীক্ষকদের দিয়ে মূল্যায়ন",
      "দেশব্যাপী কেন্দ্রীয় মেধা তালিকা (Central Merit List) ও র‍্যাঙ্কিং",
      "ভুল সংশোধনী ক্লাস ও এক্সক্লুসিভ লাস্ট-মিনিট সাজেশন বুক"
    ],
    mode: "অফলাইন সকল শাখা",
    duration: "২ মাসব্যাপী নিবিড় পরীক্ষা পর্ব",
    monthlyFee: 4500,
    oneTimeFee: 4500,
    discountBadge: "এককালীন প্যাকেজ"
  }
];

// Sample Student Result Records for Instant Lookup Demo & Marksheet
const RESULTS_DATA = {
  "202401": {
    name: "রাফিদ মাহমুদ তাসিন",
    college: "নটর ডেম কলেজ, ঢাকা",
    roll: "202401",
    regNo: "PAC-HSC-26-0914",
    batch: "HSC 2026 বিজ্ঞান বিভাগ (সকাল ব্যাচ)",
    branch: "ফার্মগেট প্রধান ক্যাম্পাস",
    exam: "সেন্ট্রাল টার্ম ফাইনাল মডেল টেস্ট ২০২৬",
    session: "২০২৫-২০২৬",
    examDate: "০৩ অক্টোবর ২০২৬",
    overallGpa: "5.00",
    letterGrade: "A+",
    meritRank: "১ম",
    totalStudents: "১২০ জন",
    grandTotal: "৪৬৫",
    fullTotal: "৫০০",
    percentage: "৯৩.০%",
    batchHighest: "৪৬৫",
    resultStatus: "PASSED (কৃতির সাথে উত্তীর্ণ)",
    remarks: "অসাধারণ একাডেমিক ধারাবাহিকতা! পদার্থবিজ্ঞান ও উচ্চতর গণিতে কনসেপচুয়াল দখল প্রশংসনীয়। বোর্ড ও ভর্তি পরীক্ষায় এই মনোযোগ ধরে রাখো।",
    subjects: [
      { code: "174", name: "পদার্থবিজ্ঞান ১ম পত্র", fullMarks: 100, cq: 46, mcq: 23, practical: 25, total: 94, grade: "A+", point: "5.00", highest: 94 },
      { code: "176", name: "রসায়ন ১ম পত্র", fullMarks: 100, cq: 44, mcq: 22, practical: 24, total: 90, grade: "A+", point: "5.00", highest: 92 },
      { code: "265", name: "উচ্চতর গণিত ১ম পত্র", fullMarks: 100, cq: 48, mcq: 24, practical: 25, total: 97, grade: "A+", point: "5.00", highest: 97 },
      { code: "178", name: "জীববিজ্ঞান ১ম পত্র", fullMarks: 100, cq: 43, mcq: 21, practical: 24, total: 88, grade: "A+", point: "5.00", highest: 91 },
      { code: "275", name: "তথ্য ও যোগাযোগ প্রযুক্তি (ICT)", fullMarks: 100, cq: 47, mcq: 24, practical: 25, total: 96, grade: "A+", point: "5.00", highest: 96 }
    ]
  },
  "202402": {
    name: "আফসানা মিমি",
    college: "ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ",
    roll: "202402",
    regNo: "PAC-HSC-26-0428",
    batch: "HSC 2026 বিজ্ঞান বিভাগ (বিকাল ব্যাচ)",
    branch: "উত্তরা শাখা (সেক্টর-৭)",
    exam: "সেন্ট্রাল টার্ম ফাইনাল মডেল টেস্ট ২০২৬",
    session: "২০২৫-২০২৬",
    examDate: "০৩ অক্টোবর ২০২৬",
    overallGpa: "5.00",
    letterGrade: "A+",
    meritRank: "২য়",
    totalStudents: "১২০ জন",
    grandTotal: "৪৫১",
    fullTotal: "৫০০",
    percentage: "৯০.২%",
    batchHighest: "৪৬৫",
    resultStatus: "PASSED (কৃতির সাথে উত্তীর্ণ)",
    remarks: "রসায়ন ও জীববিজ্ঞানের ডায়াগ্রামে অত্যন্ত চমৎকার দক্ষতা। উচ্চতর গণিতের ক্যালকুলাসে নিয়মিত রিভিশন দিলে আরও উন্নতি হবে।",
    subjects: [
      { code: "174", name: "পদার্থবিজ্ঞান ১ম পত্র", fullMarks: 100, cq: 44, mcq: 22, practical: 24, total: 90, grade: "A+", point: "5.00", highest: 94 },
      { code: "176", name: "রসায়ন ১ম পত্র", fullMarks: 100, cq: 46, mcq: 23, practical: 25, total: 94, grade: "A+", point: "5.00", highest: 94 },
      { code: "265", name: "উচ্চতর গণিত ১ম পত্র", fullMarks: 100, cq: 43, mcq: 21, practical: 24, total: 88, grade: "A+", point: "5.00", highest: 97 },
      { code: "178", name: "জীববিজ্ঞান ১ম পত্র", fullMarks: 100, cq: 45, mcq: 22, practical: 25, total: 92, grade: "A+", point: "5.00", highest: 92 },
      { code: "275", name: "তথ্য ও যোগাযোগ প্রযুক্তি (ICT)", fullMarks: 100, cq: 42, mcq: 22, practical: 23, total: 87, grade: "A+", point: "5.00", highest: 96 }
    ]
  },
  "202403": {
    name: "তানভীর হাসান নিবিড়",
    college: "ঢাকা রেসিডেনসিয়াল মডেল কলেজ",
    roll: "202403",
    regNo: "PAC-SSC-26-1182",
    batch: "SSC 2026 বিজ্ঞান বিভাগ (বোর্ড চ্যালেঞ্জ)",
    branch: "মিরপুর-১০ শাখা",
    exam: "SSC সেন্ট্রাল প্রি-বোর্ড মডেল টেস্ট ২০২৬",
    session: "২০২৫-২০২৬",
    examDate: "০৩ অক্টোবর ২০২৬",
    overallGpa: "4.89",
    letterGrade: "A",
    meritRank: "৪র্থ",
    totalStudents: "১১০ জন",
    grandTotal: "৪২৬",
    fullTotal: "৫০০",
    percentage: "৮৫.২%",
    batchHighest: "৪৫৮",
    resultStatus: "PASSED (উত্তীর্ণ)",
    remarks: "সাধারণ গণিত ও বিজ্ঞানের সৃজনশীল প্রশ্নের উত্তর সুন্দর হয়েছে। উচ্চতর গণিতের জ্যামিতি অংশে আরেকটু মনোযোগী হও।",
    subjects: [
      { code: "109", name: "সাধারণ গণিত", fullMarks: 100, cq: 45, mcq: 23, practical: 25, total: 93, grade: "A+", point: "5.00", highest: 96 },
      { code: "126", name: "উচ্চতর গণিত", fullMarks: 100, cq: 38, mcq: 20, practical: 23, total: 81, grade: "A+", point: "5.00", highest: 94 },
      { code: "136", name: "পদার্থবিজ্ঞান", fullMarks: 100, cq: 42, mcq: 21, practical: 24, total: 87, grade: "A+", point: "5.00", highest: 92 },
      { code: "137", name: "রসায়ন", fullMarks: 100, cq: 40, mcq: 20, practical: 24, total: 84, grade: "A+", point: "5.00", highest: 90 },
      { code: "138", name: "জীববিজ্ঞান", fullMarks: 100, cq: 39, mcq: 19, practical: 23, total: 81, grade: "A+", point: "5.00", highest: 89 }
    ]
  },
  "202404": {
    name: "নুসরাত জাহান রিয়া",
    college: "হলিক্রস কলেজ, ঢাকা",
    roll: "202404",
    regNo: "PAC-HSC-26-0773",
    batch: "HSC 2026 ব্যবসায় শিক্ষা বিভাগ",
    branch: "ফার্মগেট প্রধান ক্যাম্পাস",
    exam: "সেন্ট্রাল সেমিস্টার ফাইনাল মডেল টেস্ট ২০২৬",
    session: "২০২৫-২০২৬",
    examDate: "০৩ অক্টোবর ২০২৬",
    overallGpa: "5.00",
    letterGrade: "A+",
    meritRank: "১ম",
    totalStudents: "৮৫ জন",
    grandTotal: "৪৫৮",
    fullTotal: "৫০০",
    percentage: "৯১.৬%",
    batchHighest: "৪৫৮",
    resultStatus: "PASSED (কৃতির সাথে উত্তীর্ণ)",
    remarks: "হিসাববিজ্ঞানের নিখুঁত আর্থিক বিবরণী ও জার্নাল ম্যাথে দারুণ পারফরম্যান্স। ব্যবস্থাপনা বিষয়ে সুন্দর পয়েন্টভিত্তিক উপস্থাপনা।",
    subjects: [
      { code: "253", name: "হিসাববিজ্ঞান ১ম পত্র", fullMarks: 100, cq: 48, mcq: 24, practical: 25, total: 97, grade: "A+", point: "5.00", highest: 97 },
      { code: "277", name: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা ১ম", fullMarks: 100, cq: 45, mcq: 22, practical: 24, total: 91, grade: "A+", point: "5.00", highest: 93 },
      { code: "292", name: "ফিন্যান্স, ব্যাংকিং ও বিমা ১ম", fullMarks: 100, cq: 44, mcq: 23, practical: 24, total: 91, grade: "A+", point: "5.00", highest: 94 },
      { code: "109", name: "অর্থনীতি ১ম পত্র", fullMarks: 100, cq: 42, mcq: 22, practical: 24, total: 88, grade: "A+", point: "5.00", highest: 90 },
      { code: "275", name: "তথ্য ও যোগাযোগ প্রযুক্তি (ICT)", fullMarks: 100, cq: 44, mcq: 23, practical: 24, total: 91, grade: "A+", point: "5.00", highest: 96 }
    ]
  },
  "202405": {
    name: "সাদমান সাকিব",
    college: "আইডিয়াল স্কুল অ্যান্ড কলেজ, মতিঝিল",
    roll: "202405",
    regNo: "PAC-SSC-26-0319",
    batch: "SSC 2026 বিজ্ঞান বিভাগ",
    branch: "ধানমন্ডি শাখা",
    exam: "SSC সেন্ট্রাল প্রি-বোর্ড মডেল টেস্ট ২০২৬",
    session: "২০২৫-২০২৬",
    examDate: "০৩ অক্টোবর ২০২৬",
    overallGpa: "4.72",
    letterGrade: "A",
    meritRank: "৫ম",
    totalStudents: "১১০ জন",
    grandTotal: "৪১৩",
    fullTotal: "৫০০",
    percentage: "৮২.৬%",
    batchHighest: "৪৫৮",
    resultStatus: "PASSED (উত্তীর্ণ)",
    remarks: "পদার্থ ও সাধারণ গণিতে ভালো উন্নতি লক্ষ্যণীয়। রসায়নের বিক্রিয়া সমতাকরণে নিয়মিত অনুশীলন চালিয়ে যাও।",
    subjects: [
      { code: "109", name: "সাধারণ গণিত", fullMarks: 100, cq: 43, mcq: 21, practical: 24, total: 88, grade: "A+", point: "5.00", highest: 96 },
      { code: "126", name: "উচ্চতর গণিত", fullMarks: 100, cq: 37, mcq: 19, practical: 23, total: 79, grade: "A", point: "4.00", highest: 94 },
      { code: "136", name: "পদার্থবিজ্ঞান", fullMarks: 100, cq: 40, mcq: 21, practical: 24, total: 85, grade: "A+", point: "5.00", highest: 92 },
      { code: "137", name: "রসায়ন", fullMarks: 100, cq: 36, mcq: 18, practical: 23, total: 77, grade: "A", point: "4.00", highest: 90 },
      { code: "138", name: "জীববিজ্ঞান", fullMarks: 100, cq: 40, mcq: 20, practical: 24, total: 84, grade: "A+", point: "5.00", highest: 89 }
    ]
  }
};

// Notices list
const NOTICES_DATA = [
  {
    tag: "জরুরি",
    tagColor: "bg-rose-100 text-rose-700",
    title: "HSC ২০২৬ ও SSC ২০২৬ নতুন ব্যাচে ভর্তি ও ওরিয়েন্টেশন ক্লাসের সময়সূচি প্রকাশ",
    date: "১০ অক্টোবর ২০২৬",
    desc: "সকল শাখার নবাগত শিক্ষার্থীদের আগামী ১৫ অক্টোবর সকাল ১০:০০ টায় নিজ নিজ শাখায় অভিভাবকসহ উপস্থিত থাকার অনুরোধ জানানো যাচ্ছে।"
  },
  {
    tag: "পরীক্ষা",
    tagColor: "bg-brand-100 text-brand-800",
    title: "আগামী শুক্রবারের সেন্ট্রাল মডেল টেস্টের সিলেবাস ও সিট প্ল্যান",
    date: "০৮ অক্টোবর ২০২৬",
    desc: "পদার্থবিজ্ঞান ৪র্থ অধ্যায় এবং উচ্চতর গণিত ৩য় অধ্যায়ের উপর ৭৫ নম্বরের পূর্ণাঙ্গ মডেল টেস্ট অনুষ্ঠিত হবে। OMR শিট ব্যবহার বাধ্যতামূলক।"
  },
  {
    tag: "ছুটি",
    tagColor: "bg-amber-100 text-amber-800",
    title: "দুর্গাপূজা উপলক্ষে ক্লাস বন্ধের নোটিশ ও মেকআপ ক্লাসের রুটিন",
    date: "০৫ অক্টোবর ২০২৬",
    desc: "পূজার সরকারি ছুটির দিনগুলোতে নিয়মিত ক্লাস বন্ধ থাকবে। ছুটির ক্ষতি পুষিয়ে নিতে রবিবার বিশেষ অনলাইন রিভিশন ক্লাস অনুষ্ঠিত হবে।"
  },
  {
    tag: "পুরস্কার",
    tagColor: "bg-emerald-100 text-emerald-800",
    title: "মান্থলি মডেল টেস্টের মেধা তালিকায় শীর্ষ ১০ শিক্ষার্থীকে বিশেষ বৃত্তি প্রদান",
    date: "০১ অক্টোবর ২০২৬",
    desc: "বিগত সেপ্টেম্বর মাসের মান্থলি পরীক্ষায় শীর্ষ স্থান অর্জনকারীদের আগামী সপ্তাহে সম্মাননা ক্রেস্ট ও স্কলারশিপ চেক হস্তান্তর করা হবে।"
  }
];

// Toppers Showcase
const TOPPERS_DATA = [
  {
    name: "মাহমুদুর রহমান শুভ",
    college: "নটর ডেম কলেজ",
    badge: "HSC GPA 5.00 (Golden)",
    quote: "প্রজ্ঞা একাডেমির কনসেপ্ট বুক এবং বুয়েটের ভাইয়াদের ডাউট সলভিং ক্লাসের কারণেই কঠিন পদার্থবিজ্ঞান আমার কাছে সহজ হয়ে গিয়েছিল।",
    exam: "HSC Board Exam",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "ফারহানা আনিকা",
    college: "ভিকারুননিসা নূন কলেজ",
    badge: "HSC GPA 5.00 (Golden)",
    quote: "প্রতিটি উইকলি পরীক্ষার পর স্বয়ংক্রিয় OMR মূল্যায়ন আর শিক্ষকদের পার্সোনাল গাইডলাইন আমাকে বোর্ড পরীক্ষায় শতভাগ আত্মবিশ্বাস জুগিয়েছে।",
    exam: "HSC Board Exam",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "তাহসিন বিন সাজিদ",
    college: "ঢাকা রেসিডেনসিয়াল মডেল",
    badge: "SSC GPA 5.00",
    quote: "নবম শ্রেণি থেকেই নিয়মিত ডেইলি এক্সাম দেওয়ার অভ্যাস আমাকে বোর্ড পরীক্ষার হলের সকল ভয় থেকে মুক্ত করেছিল। কৃতজ্ঞতা প্রজ্ঞা একাডেমিকে।",
    exam: "SSC Board Exam",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "সুমাইয়া জান্নাত",
    college: "হলিক্রস কলেজ",
    badge: "HSC GPA 5.00",
    quote: "রসায়নের বিক্রিয়াগুলো কীভাবে মনে রাখতে হয়, তা এখানকার শিক্ষকেরা যেভাবে চমৎকার ভিজ্যুয়াল কৌশলে বুঝিয়েছিলেন তা ভোলা সম্ভব নয়।",
    exam: "HSC Board Exam",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250"
  }
];

// Teachers / Mentors
const TEACHERS_DATA = [
  {
    name: "ইঞ্জি. রাগিব ইশতিয়াক",
    subject: "পদার্থবিজ্ঞান (Physics Lead)",
    institution: "বুয়েট (BUET EEE)",
    experience: "৮+ বছর শিক্ষকতার অভিজ্ঞতা",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "ড. শায়লা পারভীন",
    subject: "রসায়ন (Chemistry Lead)",
    institution: "ঢাকা বিশ্ববিদ্যালয় (DU Chemistry)",
    experience: "১০+ বছর একাডেমিক অভিজ্ঞতা",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "ডা. আরিফুল ইসলাম",
    subject: "জীববিজ্ঞান (Biology Lead)",
    institution: "ঢাকা মেডিকেল কলেজ (DMC)",
    experience: "৭+ বছর শিক্ষকতার অভিজ্ঞতা",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "তানজিম হোসাইন",
    subject: "উচ্চতর গণিত (Higher Math)",
    institution: "বুয়েট (BUET Civil)",
    experience: "৬+ বছর শিক্ষকতার অভিজ্ঞতা",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
  }
];

// Branches Directory
const BRANCHES_DATA = [
  {
    name: "ফার্মগেট শাখা (প্রধান ক্যাম্পাস)",
    address: "৪২/এ ফার্মগেট, গ্রিন রোড (আনন্দ সিনেমার বিপরীতে), ঢাকা-১২১৫",
    phone: "০১৭০০-১২৩৪৫১",
    manager: "শাখাপ্রধান: মো. শাহীনুর রহমান",
    mapQuery: "Farmgate Dhaka"
  },
  {
    name: "মিরপুর-১০ শাখা",
    address: "প্লট ১২, ব্লক-সি, মেট্রোরেল পিলার নং ২৫০ এর সামনে, মিরপুর-১০, ঢাকা",
    phone: "০১৭০০-১২৩৪৫২",
    manager: "শাখাপ্রধান: কামরুল হাসান",
    mapQuery: "Mirpur 10 Dhaka"
  },
  {
    name: "উত্তরা শাখা",
    address: "বাড়ি ১৬, রোড ৩, সেক্টর ৭ (জসীমউদ্দীন মোড়ের সন্নিকটে), উত্তরা, ঢাকা",
    phone: "০১৭০০-১২৩৪৫৩",
    manager: "শাখাপ্রধান: আরিফ চৌধুরী",
    mapQuery: "Uttara Sector 7 Dhaka"
  },
  {
    name: "ধানমন্ডি শাখা",
    address: "বাড়ি ৪৪, রোড ২৭ (পুরাতন), সপ্তক স্কয়ার এর পাশে, ধানমন্ডি, ঢাকা",
    phone: "০১৭০০-১২৩৪৫৪",
    manager: "শাখাপ্রধান: নুসরাত জাহান",
    mapQuery: "Dhanmondi 27 Dhaka"
  }
];
