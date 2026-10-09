// ================= APPLICATION CONTROLLER (MULTI-PAGE READY) =================

// Utility: Convert English digits to Bengali digits
function toBanglaNum(num) {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, digit => bnDigits[digit]);
}

// Format currency
function formatBDT(amount) {
  return '৳' + toBanglaNum(Number(amount).toLocaleString('en-IN'));
}

// Global page initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize icons
  if (window.lucide) lucide.createIcons();

  // Page-specific renders based on containers present
  if (document.getElementById('courseGrid')) {
    renderCourses('all');
  }
  if (document.getElementById('featuredCourseGrid')) {
    renderFeaturedCourses();
  }
  if (document.getElementById('noticeContainer')) {
    renderNotices();
  }
  if (document.getElementById('toppersGrid')) {
    renderToppers();
  }
  if (document.getElementById('teachersGrid')) {
    renderTeachers();
  }
  if (document.getElementById('branchesGrid')) {
    renderBranches();
  }
  if (document.getElementById('cdDays')) {
    initCountdownTimer();
  }

  // Pre-fill course if passed via URL (for admission.html?course=xxx)
  initAdmissionParams();

  // On results.html, auto-load first demo student so marksheet is displayed immediately
  if (document.getElementById('marksheetContainer') && document.getElementById('studentRollInput')) {
    setDemoRoll('202401', false);
  }

  // Mobile menu setup
  initMobileMenu();
});

// ================= RENDER COURSES (ALL OR FILTERED) =================
function renderCourses(filter = 'all') {
  const container = document.getElementById('courseGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.category === filter);

  container.innerHTML = filtered.map(course => `
    <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="inline-block text-[11px] font-bold text-white px-2.5 py-1 rounded-full ${course.badgeColor}">
            ${course.badge}
          </span>
          <span class="text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-lg border border-brand-100">
            ${course.mode}
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
          ${course.title}
        </h3>
        <p class="text-xs text-slate-500 mt-1 font-medium">${course.subtitle}</p>

        <!-- Subjects -->
        <div class="flex flex-wrap gap-1.5 my-4">
          ${course.subjects.map(s => `
            <span class="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60">
              ${s}
            </span>
          `).join('')}
        </div>

        <!-- Features Checklist -->
        <ul class="space-y-2 my-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
          ${course.features.map(f => `
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-5 border-t border-slate-100 mt-4">
        <div class="flex items-baseline justify-between mb-4">
          <div>
            <div class="text-[11px] text-slate-400 font-medium">মাসিক টিউশন ফি</div>
            <div class="text-2xl font-extrabold text-brand-700 font-num">${formatBDT(course.monthlyFee)}<span class="text-xs text-slate-500 font-normal">/মাস</span></div>
          </div>
          <div class="text-right">
            <span class="inline-block text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
              ${course.discountBadge}
            </span>
            <div class="text-[11px] text-slate-500 mt-0.5">এককালীন ${formatBDT(course.oneTimeFee)}</div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button onclick="openDemoModalForCourse('${course.title}')" class="w-full py-2.5 rounded-xl border border-brand-200 text-brand-700 hover:bg-brand-50 text-xs font-bold transition-colors">
            ফ্রি ডেমো
          </button>
          <a href="admission.html?course=${encodeURIComponent(course.id)}" class="w-full py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold shadow-md transition-all text-center flex items-center justify-center">
            ভর্তি ফরম
          </a>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Featured Courses for Homepage Preview (top 3)
function renderFeaturedCourses() {
  const container = document.getElementById('featuredCourseGrid');
  if (!container) return;

  const featured = COURSES_DATA.slice(0, 3);
  container.innerHTML = featured.map(course => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="inline-block text-[11px] font-bold text-white px-2.5 py-1 rounded-full ${course.badgeColor}">
            ${course.badge}
          </span>
          <span class="text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-lg">
            ${course.mode}
          </span>
        </div>

        <h3 class="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
          ${course.title}
        </h3>
        <p class="text-xs text-slate-500 mt-1">${course.subtitle}</p>

        <div class="flex flex-wrap gap-1.5 my-3">
          ${course.subjects.slice(0, 4).map(s => `
            <span class="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/60">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 mt-4">
        <div class="flex items-baseline justify-between mb-3">
          <div class="text-xl font-extrabold text-brand-700 font-num">${formatBDT(course.monthlyFee)}<span class="text-xs text-slate-500 font-normal">/মাস</span></div>
          <span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">${course.discountBadge}</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <a href="courses.html" class="py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold text-center hover:bg-slate-50">
            বিস্তারিত
          </a>
          <a href="admission.html?course=${encodeURIComponent(course.id)}" class="py-2 rounded-xl bg-brand-700 text-white text-xs font-bold text-center hover:bg-brand-800">
            ভর্তি হন
          </a>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterCourses(category) {
  const buttons = document.querySelectorAll('.course-filter-btn');
  buttons.forEach(btn => {
    if (btn.dataset.filter === category) {
      btn.classList.add('bg-brand-700', 'text-white');
      btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    } else {
      btn.classList.remove('bg-brand-700', 'text-white');
      btn.classList.add('text-slate-600', 'hover:bg-slate-100');
    }
  });

  renderCourses(category);
}

// ================= RENDER NOTICES =================
function renderNotices() {
  const container = document.getElementById('noticeContainer');
  if (!container) return;

  container.innerHTML = NOTICES_DATA.map(notice => `
    <div class="p-4 rounded-2xl bg-slate-50 hover:bg-brand-50/50 border border-slate-200/80 hover:border-brand-300 transition-all group">
      <div class="flex items-center justify-between gap-2 mb-1.5">
        <span class="text-[11px] font-bold px-2 py-0.5 rounded ${notice.tagColor}">
          ${notice.tag}
        </span>
        <span class="text-xs text-slate-400 font-num flex items-center gap-1">
          <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
          ${notice.date}
        </span>
      </div>
      <h4 class="text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
        ${notice.title}
      </h4>
      <p class="text-xs text-slate-600 mt-1 leading-relaxed">
        ${notice.desc}
      </p>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// ================= RENDER TOPPERS =================
function renderToppers() {
  const container = document.getElementById('toppersGrid');
  if (!container) return;

  container.innerHTML = TOPPERS_DATA.map(t => `
    <div class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between text-center relative overflow-hidden group">
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-brand-600"></div>
      <div>
        <div class="w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-400 to-brand-600 shadow-md mb-3">
          <img src="${t.avatar}" alt="${t.name}" class="w-full h-full object-cover rounded-full">
        </div>
        <span class="inline-block text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full mb-1">
          ${t.badge}
        </span>
        <h4 class="text-base font-bold text-slate-900">${t.name}</h4>
        <p class="text-xs text-slate-500 font-medium">${t.college}</p>
        <p class="text-xs text-slate-600 italic mt-3 line-clamp-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          "${t.quote}"
        </p>
      </div>
      <div class="pt-3 border-t border-slate-100 mt-4 text-[11px] text-slate-400 font-semibold">
        ${t.exam}
      </div>
    </div>
  `).join('');
}

// ================= RENDER TEACHERS =================
function renderTeachers() {
  const container = document.getElementById('teachersGrid');
  if (!container) return;

  container.innerHTML = TEACHERS_DATA.map(tc => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
      <div class="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md mb-4 group-hover:scale-105 transition-transform">
        <img src="${tc.avatar}" alt="${tc.name}" class="w-full h-full object-cover">
      </div>
      <h4 class="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">${tc.name}</h4>
      <p class="text-xs font-bold text-brand-700 mt-0.5">${tc.subject}</p>
      <div class="inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2">
        ${tc.institution}
      </div>
      <p class="text-[11px] text-slate-500 mt-2 font-medium">${tc.experience}</p>
    </div>
  `).join('');
}

// ================= RENDER BRANCHES =================
function renderBranches() {
  const container = document.getElementById('branchesGrid');
  if (!container) return;

  container.innerHTML = BRANCHES_DATA.map(b => `
    <div class="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
          <i data-lucide="map-pin" class="w-5 h-5"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900">${b.name}</h4>
        <p class="text-xs text-slate-600 mt-2 leading-relaxed">
          ${b.address}
        </p>
        <p class="text-[11px] text-slate-400 mt-2 font-semibold">
          ${b.manager}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-200/70 mt-4 space-y-2">
        <a href="tel:${b.phone.replace(/[^0-9]/g, '')}" class="text-xs font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1.5 font-num">
          <i data-lucide="phone" class="w-3.5 h-3.5"></i>
          <span>${b.phone}</span>
        </a>
        <a href="https://maps.google.com/?q=${encodeURIComponent(b.mapQuery)}" target="_blank" class="inline-block text-[11px] text-slate-500 hover:text-emerald-600 hover:underline">
          গুগল ম্যাপে দেখুন &rarr;
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// ================= LIVE RESULT SEARCH LOGIC =================
function setDemoRoll(roll, shouldScroll = true) {
  const input = document.getElementById('studentRollInput');
  if (input) {
    input.value = roll;
    handleResultSearch({ preventDefault: () => {} }, shouldScroll);
  }
}

function printMarksheet() {
  const resultCard = document.getElementById('resultCard');
  if (resultCard && resultCard.classList.contains('hidden')) {
    setDemoRoll('202401', false);
  }
  window.print();
}

function handleResultSearch(event, shouldScroll = true) {
  event.preventDefault();
  const input = document.getElementById('studentRollInput');
  const resultCard = document.getElementById('resultCard');
  if (!input || !resultCard) return;

  const roll = input.value.trim();
  if (!roll) return;

  const data = RESULTS_DATA[roll];

  if (data) {
    // Populate Student Particulars
    if (document.getElementById('resStudentName')) document.getElementById('resStudentName').textContent = data.name;
    if (document.getElementById('resRollNum')) document.getElementById('resRollNum').textContent = toBanglaNum(data.roll);
    if (document.getElementById('resRegNo')) document.getElementById('resRegNo').textContent = data.regNo || 'PAC-2026-REG';
    if (document.getElementById('resExamDate')) document.getElementById('resExamDate').textContent = `${data.examDate} (${data.session})`;
    if (document.getElementById('resCollege')) document.getElementById('resCollege').textContent = data.college;
    if (document.getElementById('resBatch')) document.getElementById('resBatch').textContent = data.batch;
    if (document.getElementById('resBranch')) document.getElementById('resBranch').textContent = data.branch;
    if (document.getElementById('resExamTitle')) document.getElementById('resExamTitle').textContent = data.exam;

    // Populate Detailed Subject Marksheet Table
    const tableBody = document.getElementById('resSubjectTableBody');
    if (tableBody && data.subjects) {
      tableBody.innerHTML = data.subjects.map(s => `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-2.5 px-2 text-left text-slate-500 font-num font-semibold">${toBanglaNum(s.code)}</td>
          <td class="py-2.5 px-3 text-left font-bold text-slate-900">${s.name}</td>
          <td class="py-2.5 px-2 font-num">${toBanglaNum(s.fullMarks)}</td>
          <td class="py-2.5 px-2 font-num">${toBanglaNum(s.cq)}</td>
          <td class="py-2.5 px-2 font-num">${toBanglaNum(s.mcq)}</td>
          <td class="py-2.5 px-2 font-num">${toBanglaNum(s.practical)}</td>
          <td class="py-2.5 px-2 font-num font-bold text-slate-900 bg-slate-100/70">${toBanglaNum(s.total)}</td>
          <td class="py-2.5 px-2">
            <span class="inline-block px-2.5 py-0.5 rounded text-xs font-bold ${s.grade === 'A+' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}">
              ${s.grade}
            </span>
          </td>
          <td class="py-2.5 px-2 font-num font-bold text-brand-700">${toBanglaNum(s.point)}</td>
          <td class="py-2.5 px-2 font-num text-slate-500">${toBanglaNum(s.highest)}</td>
        </tr>
      `).join('');
    }

    // Populate Performance Summaries
    if (document.getElementById('resGrandTotal')) document.getElementById('resGrandTotal').textContent = `${data.grandTotal} / ${data.fullTotal}`;
    if (document.getElementById('resPercentage')) document.getElementById('resPercentage').textContent = `শতকরা ${data.percentage}`;
    if (document.getElementById('resGPA')) document.getElementById('resGPA').textContent = toBanglaNum(data.overallGpa);
    if (document.getElementById('resLetterGrade')) document.getElementById('resLetterGrade').textContent = `গ্রেড: ${data.letterGrade}`;
    if (document.getElementById('resMeritRank')) document.getElementById('resMeritRank').textContent = data.meritRank;
    if (document.getElementById('resTotalStudents')) document.getElementById('resTotalStudents').textContent = `মোট পরীক্ষার্থী: ${data.totalStudents}`;
    if (document.getElementById('resStatus')) document.getElementById('resStatus').textContent = data.resultStatus;
    if (document.getElementById('resRemarks')) document.getElementById('resRemarks').textContent = data.remarks;

    // Backwards-compatible fields for preview cards
    if (document.getElementById('resExamTag')) document.getElementById('resExamTag').textContent = data.exam;
    if (document.getElementById('resRank')) document.getElementById('resRank').textContent = `${data.meritRank} / ${data.totalStudents}`;
    if (document.getElementById('resTotal')) document.getElementById('resTotal').textContent = `${data.grandTotal} / ${data.fullTotal}`;
    if (document.getElementById('resHighest')) document.getElementById('resHighest').textContent = `${data.batchHighest} / ${data.fullTotal}`;

    // Reveal Result Marksheet
    resultCard.classList.remove('hidden');
    if (shouldScroll) {
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (window.lucide) lucide.createIcons();
  } else {
    alert(`রোল নম্বর "${roll}" পাওয়া যায়নি। ডেমো চেক করতে 202401, 202402, 202403, 202404, অথবা 202405 লিখে চেষ্টা করুন।`);
  }
}

// ================= COUNTDOWN TIMER =================
function initCountdownTimer() {
  let totalSeconds = 5 * 24 * 3600 + 14 * 3600 + 35 * 60 + 22;

  setInterval(() => {
    if (totalSeconds <= 0) return;
    totalSeconds--;

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const elDays = document.getElementById('cdDays');
    const elHours = document.getElementById('cdHours');
    const elMins = document.getElementById('cdMins');
    const elSecs = document.getElementById('cdSecs');

    if (elDays) elDays.textContent = toBanglaNum(String(days).padStart(2, '0'));
    if (elHours) elHours.textContent = toBanglaNum(String(hours).padStart(2, '0'));
    if (elMins) elMins.textContent = toBanglaNum(String(mins).padStart(2, '0'));
    if (elSecs) elSecs.textContent = toBanglaNum(String(secs).padStart(2, '0'));
  }, 1000);
}

// ================= ADMISSION FORM INITIALIZATION & STEPS =================
function initAdmissionParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseParam = urlParams.get('course');
  const courseSelect = document.getElementById('admCourseSelect');
  if (courseParam && courseSelect) {
    for (let opt of courseSelect.options) {
      if (opt.value.toLowerCase().includes(courseParam.toLowerCase())) {
        courseSelect.value = opt.value;
        break;
      }
    }
    updateCalculatedFee();
  }
}

function goToStep(step) {
  const step1 = document.getElementById('step1Section');
  const step2 = document.getElementById('step2Section');
  const step3 = document.getElementById('step3Section');

  const tab1 = document.getElementById('stepTab1');
  const tab2 = document.getElementById('stepTab2');
  const tab3 = document.getElementById('stepTab3');

  if (step === 2) {
    const name = document.getElementById('admStudentName').value;
    const phone = document.getElementById('admStudentPhone').value;
    if (!name || !phone) {
      alert('দয়া করে শিক্ষার্থীর নাম ও মোবাইল নম্বর পূরণ করুন।');
      return;
    }
  }

  if (step1) step1.classList.toggle('hidden', step !== 1);
  if (step2) step2.classList.toggle('hidden', step !== 2);
  if (step3) step3.classList.toggle('hidden', step !== 3);

  if (tab1) tab1.className = `flex-1 py-3 text-center border-b-2 ${step === 1 ? 'border-brand-700 text-brand-700 bg-white font-bold' : 'border-transparent text-slate-500'}`;
  if (tab2) tab2.className = `flex-1 py-3 text-center border-b-2 ${step === 2 ? 'border-brand-700 text-brand-700 bg-white font-bold' : 'border-transparent text-slate-500'}`;
  if (tab3) tab3.className = `flex-1 py-3 text-center border-b-2 ${step === 3 ? 'border-brand-700 text-brand-700 bg-white font-bold' : 'border-transparent text-slate-500'}`;
}

function updateCalculatedFee() {
  const select = document.getElementById('admCourseSelect');
  const display = document.getElementById('displayCalculatedFee');
  if (!select || !display) return;

  const selectedOpt = select.options[select.selectedIndex];
  const fee = selectedOpt.getAttribute('data-fee') || '3500';
  display.textContent = formatBDT(fee);
}

function handleAdmissionSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('admStudentName').value;
  const phone = document.getElementById('admStudentPhone').value;
  const college = document.getElementById('admInstitute').value;
  const courseSelect = document.getElementById('admCourseSelect');
  const courseText = courseSelect.options[courseSelect.selectedIndex].text.split('-')[0].trim();
  const feeText = document.getElementById('displayCalculatedFee').textContent;
  const branch = document.getElementById('admBranchSelect').value;
  const trxId = document.getElementById('admTrxId').value;

  const randomInvoice = 'PAC-2026-' + Math.floor(1000 + Math.random() * 9000);
  const today = new Date().toLocaleDateString('bn-BD');

  document.getElementById('slipInvoiceNo').textContent = randomInvoice;
  document.getElementById('slipDate').textContent = today;
  document.getElementById('slipStudentName').textContent = name;
  document.getElementById('slipPhone').textContent = toBanglaNum(phone);
  document.getElementById('slipCollege').textContent = college;
  document.getElementById('slipCourse').textContent = courseText;
  document.getElementById('slipBranch').textContent = branch;
  document.getElementById('slipFee').textContent = feeText;
  document.getElementById('slipTrx').textContent = trxId.toUpperCase();

  // Show receipt modal
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) {
    receiptModal.classList.remove('hidden');
    receiptModal.scrollIntoView({ behavior: 'smooth' });
  }
}

function closeReceiptModal() {
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.add('hidden');
}

// ================= DEMO MODAL =================
function openDemoModal() {
  const demoModal = document.getElementById('demoModal');
  if (demoModal) demoModal.classList.remove('hidden');
}

function openDemoModalForCourse(courseTitle) {
  openDemoModal();
}

function closeDemoModal() {
  const demoModal = document.getElementById('demoModal');
  if (demoModal) demoModal.classList.add('hidden');
}

function handleDemoSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('demoName').value;
  closeDemoModal();
  alert(`ধন্যবাদ ${name}! আপনার ফ্রি ডেমো ক্লাস রেজিস্ট্রেশন সম্পন্ন হয়েছে। ক্লাসের জুম লিংক ও সময়সূচি আপনার মোবাইল নম্বরে এসএমএস করে জানিয়ে দেওয়া হবে।`);
}

// Quick Enroll from Hero Section
function handleQuickEnroll(event) {
  event.preventDefault();
  const name = document.getElementById('quickName').value;
  const phone = document.getElementById('quickPhone').value;
  const branch = document.getElementById('quickBranch').value;

  alert(`ধন্যবাদ ${name}! আপনার তথ্য গৃহীত হয়েছে। আমাদের ${branch} শাখার প্রতিনিধি শীঘ্রই ${phone} নম্বরে যোগাযোগ করবেন।`);
  event.target.reset();
}

// Download Routine demo alert
function downloadRoutineAlert(routineName) {
  alert(`"${routineName}" এর অফিসিয়াল পিডিএফ রুটিন ডাউনলোড শুরু হয়েছে...`);
}

// FAQ Accordion
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('i');
  const isHidden = content.classList.contains('hidden');

  document.querySelectorAll('.faq-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.faq-accordion-item i, #faqAccordion i').forEach(ic => ic.classList.remove('rotate-180'));

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  }
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.add('hidden');
}
