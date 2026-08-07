// ===========================
// TRANSLATIONS
// ===========================
const translations = {
    es: {
        // Navigation
        'nav.features': 'Funcionalidades',
        'nav.howItWorks': 'Cómo Funciona',
        'nav.pricing': 'Planes',
        'nav.testimonials': 'Testimonios',
        'nav.login': 'Iniciar Sesión',
        'nav.cta': 'Prueba Gratis',

        // Hero
        'hero.badge': '📲 Agendamiento por WhatsApp',
        'hero.title': 'Automatiza tus Citas y<br><span class="gradient-text">Olvídate del Caos</span>',
        'hero.subtitle': 'Calendando elimina las citas dobles, reduce las ausencias y ahorra horas de trabajo administrativo automatizando reservas, recordatorios y confirmaciones directamente por WhatsApp.',
        'hero.ctaPrimary': 'Comienza Gratis <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        'hero.ctaSecondary': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><polygon points="8,5 16,10 8,15" fill="currentColor"/></svg> Ver Cómo Funciona',
        'hero.stat1': 'Menos ausencias',
        'hero.stat2': 'Ahorradas por semana',
        'hero.stat3': 'Citas dobles',
        'hero.float1Title': 'Cita Confirmada',
        'hero.float1Desc': 'Dra. García — 10:00 AM',
        'hero.float2Title': 'Tasa de asistencia',
        'hero.float3Title': 'Recordatorio enviado',
        'hero.float3Desc': 'Hace 2 min',

        // Social Proof
        'social.title': 'Cualquier negocio puede usar <strong>Calendando</strong>',
        'social.subtitle': 'Desde clínicas y salones de belleza hasta consultorios y centros de bienestar, Calendando se adapta a tu industria.',
        'social.industry1': 'Clínicas',
        'social.industry2': 'Salones de Belleza',
        'social.industry3': 'Consultorios Dentales',
        'social.industry4': 'Centros de Bienestar',
        'social.industry5': 'Gimnasios',
        'social.industry6': 'Veterinarias',
        'social.industry7': 'Abogados',
        'social.industry8': 'Tutores',

        // Features
        'features.tag': 'Funcionalidades',
        'features.title': 'Todo lo que Necesitas<br><span class="gradient-text">en Una Sola Plataforma</span>',
        'features.subtitle': 'Herramientas poderosas diseñadas para simplificar tu día a día y hacer crecer tu negocio.',
        'features.f1Title': 'Automatización por WhatsApp',
        'features.f1Desc': 'Envía confirmaciones, recordatorios y seguimientos automáticos por el canal que tus clientes ya usan. Sin apps adicionales.',
        'features.f2Title': 'Calendario Inteligente',
        'features.f2Desc': 'Vista clara de todas tus citas. Sincronización con Google Calendar. Cero citas dobles, siempre.',
        'features.f3Title': 'Cero Ausencias',
        'features.f3Desc': 'Recordatorios automáticos y confirmaciones que reducen las ausencias hasta en un 95%.',
        'features.f4Title': 'Reservas 24/7',
        'features.f4Desc': 'Tus clientes pueden agendar en cualquier momento, incluso fuera de horario. La agenda nunca para.',
        'features.f5Title': 'Reportes y Analíticas',
        'features.f5Desc': 'Visualiza métricas clave: tasas de asistencia, horarios más demandados y rendimiento de tu equipo.',
        'features.f6Title': 'Multi-Profesional',
        'features.f6Desc': 'Gestiona múltiples profesionales, horarios y sucursales desde una sola cuenta. Perfecto para equipos.',

        // How It Works
        'howItWorks.tag': 'Cómo Funciona',
        'howItWorks.title': 'Tres Pasos para<br><span class="gradient-text">Olvidarte del Caos</span>',
        'howItWorks.subtitle': 'Configura tu cuenta en minutos y empieza a recibir citas automáticamente.',
        'howItWorks.step1Title': 'Configura tu Perfil',
        'howItWorks.step1Desc': 'Agrega tus servicios, horarios y profesionales, y usa nuestro número de WhatsApp para enviar todas las notificaciones.',
        'howItWorks.step2Title': 'Recibe Reservas',
        'howItWorks.step2Desc': 'Tus clientes agendan 24/7 por tu link de reservas. Todo se sincroniza automáticamente.',
        'howItWorks.step3Title': 'Disfruta los Resultados',
        'howItWorks.step3Desc': 'Menos ausencias, más citas, cero estrés. Calendando se encarga del resto mientras tú te enfocas en lo importante.',

        // Pricing
        'pricing.tag': 'Planes',
        'pricing.title': 'Elige el Plan<br><span class="gradient-text">Perfecto para Ti</span>',
        'pricing.subtitle': 'Comienza gratis y escala cuando lo necesites. Sin compromisos.',
        'pricing.monthly': 'Mensual',
        'pricing.annual': 'Anual',
        'pricing.save': 'Ahorra 20%',
        'pricing.perMonth': '/mes',
        'pricing.popular': 'Más Popular',
        'pricing.starterName': 'Inicial',
        'pricing.starterDesc': 'Perfecto para empezar',
        'pricing.starterF1': '<span class="check">✓</span> 1 profesional',
        'pricing.starterF2': '<span class="check">✓</span> 50 citas/mes',
        'pricing.starterF3': '<span class="check">✓</span> Recordatorios por WhatsApp',
        'pricing.starterF4': '<span class="check">✓</span> Calendario básico',
        'pricing.starterF5': '<span class="check">✓</span> Link de reservas',
        'pricing.starterCta': 'Comienza Gratis',
        'pricing.proName': 'Profesional',
        'pricing.proDesc': 'Para negocios en crecimiento',
        'pricing.proF1': '<span class="check">✓</span> Hasta 5 profesionales',
        'pricing.proF2': '<span class="check">✓</span> Citas ilimitadas',
        'pricing.proF3': '<span class="check">✓</span> Automatización completa',
        'pricing.proF4': '<span class="check">✓</span> Google Calendar sync',
        'pricing.proF5': '<span class="check">✓</span> Reportes avanzados',
        'pricing.proF6': '<span class="check">✓</span> Soporte prioritario',
        'pricing.proCta': 'Prueba 14 Días Gratis',
        'pricing.enterpriseName': 'Empresa',
        'pricing.enterpriseDesc': 'Para clínicas y cadenas',
        'pricing.enterpriseF1': '<span class="check">✓</span> Profesionales ilimitados',
        'pricing.enterpriseF2': '<span class="check">✓</span> Multi-sucursal',
        'pricing.enterpriseF3': '<span class="check">✓</span> API personalizada',
        'pricing.enterpriseF4': '<span class="check">✓</span> Marca blanca',
        'pricing.enterpriseF5': '<span class="check">✓</span> Manager dedicado',
        'pricing.enterpriseF6': '<span class="check">✓</span> SLA garantizado',
        'pricing.enterpriseCta': 'Contactar Ventas',

        // Testimonials
        'testimonials.tag': 'Testimonios',
        'testimonials.title': 'Lo que Dicen<br><span class="gradient-text">Nuestros Clientes</span>',
        'testimonials.q1': '"Antes perdíamos 3-4 citas al día por ausencias. Con Calendando, las redujimos a casi cero. Los recordatorios automáticos por WhatsApp son un cambio total."',
        'testimonials.r1': 'Clínica Dental Sonrisas',
        'testimonials.q2': '"Calendando nos ahorró al menos 10 horas semanales de trabajo administrativo. Ahora me enfoco en mis clientes, no en gestionar la agenda. ¡Lo recomiendo al 100%!"',
        'testimonials.r2': 'Salón de Belleza Estilo CR',
        'testimonials.q3': '"La integración con WhatsApp es brillante. Mis pacientes confirman sus citas con un solo toque y yo tengo visibilidad total de mi agenda en tiempo real."',
        'testimonials.r3': 'Centro de Bienestar Armonía',

        // CTA
        'cta.title': '¿Listo para Transformar<br>tu Agenda?',
        'cta.subtitle': 'Únete a cientos de profesionales que ya eliminaron el caos de sus citas con Calendando.',
        'cta.button': 'Prueba Gratis',
        'cta.disclaimer': 'Sin tarjeta de crédito · Cancela cuando quieras · Configuración en 5 minutos',

        // Footer
        'footer.desc': 'Automatiza tu agenda, elimina ausencias y haz crecer tu negocio con el poder de WhatsApp.',
        'footer.productTitle': 'Producto',
        'footer.productL1': 'Funcionalidades',
        'footer.productL2': 'Planes',
        'footer.productL3': 'Integraciones',
        'footer.productL4': 'API',
        'footer.companyTitle': 'Compañía',
        'footer.companyL1': 'Sobre Nosotros',
        'footer.companyL2': 'Blog',
        'footer.companyL3': 'Carreras',
        'footer.companyL4': 'Contacto',
        'footer.legalTitle': 'Legal',
        'footer.legalL1': 'Privacidad',
        'footer.legalL2': 'Términos',
        'footer.legalL3': 'Cookies',
        'footer.copyright': '© 2026 Calendando. Todos los derechos reservados.',
    },
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.pricing': 'Pricing',
        'nav.testimonials': 'Testimonials',
        'nav.login': 'Log In',
        'nav.cta': 'Try Free',

        // Hero
        'hero.badge': '📲 WhatsApp Appointment Scheduling',
        'hero.title': 'Automate Your Bookings and<br><span class="gradient-text">Forget the Chaos</span>',
        'hero.subtitle': 'Calendando eliminates double-bookings, reduces no-shows, and saves hours of administrative work by automating reservations, reminders, and confirmations directly through WhatsApp.',
        'hero.ctaPrimary': 'Start Free <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        'hero.ctaSecondary': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><polygon points="8,5 16,10 8,15" fill="currentColor"/></svg> See How It Works',
        'hero.stat1': 'Fewer no-shows',
        'hero.stat2': 'Saved per week',
        'hero.stat3': 'Double-bookings',
        'hero.float1Title': 'Appointment Confirmed',
        'hero.float1Desc': 'Dr. García — 10:00 AM',
        'hero.float2Title': 'Attendance rate',
        'hero.float3Title': 'Reminder sent',
        'hero.float3Desc': '2 min ago',

        // Social Proof
        'social.title': 'Over <strong>500+ businesses</strong> trust Calendando',
        'social.subtitle': 'From clinics and beauty salons to dental offices and wellness centers, Calendando adapts to your industry.',
        'social.industry1': 'Clinics',
        'social.industry2': 'Beauty Salons',
        'social.industry3': 'Dental Offices',
        'social.industry4': 'Wellness Centers',
        'social.industry5': 'Gyms',
        'social.industry6': 'Veterinary',
        'social.industry7': 'Lawyers',
        'social.industry8': 'Tutors',

        // Features
        'features.tag': 'Features',
        'features.title': 'Everything You Need<br><span class="gradient-text">in One Platform</span>',
        'features.subtitle': 'Powerful tools designed to simplify your day-to-day and grow your business.',
        'features.f1Title': 'WhatsApp Automation',
        'features.f1Desc': 'Send automatic confirmations, reminders, and follow-ups through the channel your clients already use. No extra apps needed.',
        'features.f2Title': 'Smart Calendar',
        'features.f2Desc': 'Clear view of all your appointments. Google Calendar sync. Zero double-bookings, always.',
        'features.f3Title': 'Zero No-Shows',
        'features.f3Desc': 'Automatic reminders and confirmations that reduce no-shows by up to 95%.',
        'features.f4Title': '24/7 Bookings',
        'features.f4Desc': 'Your clients can book anytime, even after hours. Your schedule never stops.',
        'features.f5Title': 'Reports & Analytics',
        'features.f5Desc': 'Visualize key metrics: attendance rates, peak hours, and your team\'s performance.',
        'features.f6Title': 'Multi-Professional',
        'features.f6Desc': 'Manage multiple professionals, schedules, and locations from a single account. Perfect for teams.',

        // How It Works
        'howItWorks.tag': 'How It Works',
        'howItWorks.title': 'Three Steps to<br><span class="gradient-text">Forget the Chaos</span>',
        'howItWorks.subtitle': 'Set up your account in minutes and start receiving appointments automatically.',
        'howItWorks.step1Title': 'Set Up Your Profile',
        'howItWorks.step1Desc': 'Add your services, schedules, professionals, and connect your WhatsApp Business in minutes.',
        'howItWorks.step2Title': 'Receive Bookings',
        'howItWorks.step2Desc': 'Your clients book 24/7 through your booking link. Everything syncs automatically.',
        'howItWorks.step3Title': 'Enjoy the Results',
        'howItWorks.step3Desc': 'Fewer no-shows, more appointments, zero stress. Calendando handles the rest while you focus on what matters.',

        // Pricing
        'pricing.tag': 'Pricing',
        'pricing.title': 'Choose the Plan<br><span class="gradient-text">Perfect for You</span>',
        'pricing.subtitle': 'Start free and scale when you need to. No commitments.',
        'pricing.monthly': 'Monthly',
        'pricing.annual': 'Annual',
        'pricing.save': 'Save 20%',
        'pricing.perMonth': '/month',
        'pricing.popular': 'Most Popular',
        'pricing.starterName': 'Starter',
        'pricing.starterDesc': 'Perfect to get started',
        'pricing.starterF1': '<span class="check">✓</span> 1 professional',
        'pricing.starterF2': '<span class="check">✓</span> 50 appointments/month',
        'pricing.starterF3': '<span class="check">✓</span> WhatsApp reminders',
        'pricing.starterF4': '<span class="check">✓</span> Basic calendar',
        'pricing.starterF5': '<span class="check">✓</span> Booking link',
        'pricing.starterCta': 'Start Free',
        'pricing.proName': 'Professional',
        'pricing.proDesc': 'For growing businesses',
        'pricing.proF1': '<span class="check">✓</span> Up to 5 professionals',
        'pricing.proF2': '<span class="check">✓</span> Unlimited appointments',
        'pricing.proF3': '<span class="check">✓</span> Full automation',
        'pricing.proF4': '<span class="check">✓</span> Google Calendar sync',
        'pricing.proF5': '<span class="check">✓</span> Advanced reports',
        'pricing.proF6': '<span class="check">✓</span> Priority support',
        'pricing.proCta': 'Try Free',
        'pricing.enterpriseName': 'Enterprise',
        'pricing.enterpriseDesc': 'For clinics and chains',
        'pricing.enterpriseF1': '<span class="check">✓</span> Unlimited professionals',
        'pricing.enterpriseF2': '<span class="check">✓</span> Multi-location',
        'pricing.enterpriseF3': '<span class="check">✓</span> Custom API',
        'pricing.enterpriseF4': '<span class="check">✓</span> White label',
        'pricing.enterpriseF5': '<span class="check">✓</span> Dedicated manager',
        'pricing.enterpriseF6': '<span class="check">✓</span> Guaranteed SLA',
        'pricing.enterpriseCta': 'Contact Sales',

        // Testimonials
        'testimonials.tag': 'Testimonials',
        'testimonials.title': 'What Our<br><span class="gradient-text">Clients Say</span>',
        'testimonials.q1': '"We used to lose 3-4 appointments a day due to no-shows. With Calendando, we reduced them to nearly zero. WhatsApp automatic reminders are a total game changer."',
        'testimonials.r1': 'Sonrisas Dental Clinic',
        'testimonials.q2': '"Calendando saved us at least 10 hours of administrative work per week. Now I focus on my clients, not managing the schedule. I recommend it 100%!"',
        'testimonials.r2': 'Estilo CR Beauty Salon',
        'testimonials.q3': '"The WhatsApp integration is brilliant. My patients confirm their appointments with a single tap, and I have full visibility of my schedule in real time."',
        'testimonials.r3': 'Armonía Wellness Center',

        // CTA
        'cta.title': 'Ready to Transform<br>Your Schedule?',
        'cta.subtitle': 'Join hundreds of professionals who already eliminated appointment chaos with Calendando.',
        'cta.button': 'Try Days',
        'cta.disclaimer': 'No credit card required · Cancel anytime · Setup in 5 minutes',

        // Footer
        'footer.desc': 'Automate your schedule, eliminate no-shows, and grow your business with the power of WhatsApp.',
        'footer.productTitle': 'Product',
        'footer.productL1': 'Features',
        'footer.productL2': 'Pricing',
        'footer.productL3': 'Integrations',
        'footer.productL4': 'API',
        'footer.companyTitle': 'Company',
        'footer.companyL1': 'About Us',
        'footer.companyL2': 'Blog',
        'footer.companyL3': 'Careers',
        'footer.companyL4': 'Contact',
        'footer.legalTitle': 'Legal',
        'footer.legalL1': 'Privacy',
        'footer.legalL2': 'Terms',
        'footer.legalL3': 'Cookies',
        'footer.copyright': '© 2026 Calendando. All rights reserved.',
    }
};

// ===========================
// APP STATE
// ===========================
let currentLang = 'es';
let isAnnual = false;

// ===========================
// LANGUAGE TOGGLE
// ===========================
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update language toggle display
    const langLabel = document.getElementById('lang-label');
    const langAltLabel = document.getElementById('lang-alt-label');
    if (lang === 'es') {
        langLabel.textContent = 'ES';
        langLabel.classList.add('lang-active');
        langLabel.classList.remove('lang-inactive');
        langAltLabel.textContent = 'EN';
        langAltLabel.classList.add('lang-inactive');
        langAltLabel.classList.remove('lang-active');
    } else {
        langLabel.textContent = 'EN';
        langLabel.classList.add('lang-active');
        langLabel.classList.remove('lang-inactive');
        langAltLabel.textContent = 'ES';
        langAltLabel.classList.add('lang-inactive');
        langAltLabel.classList.remove('lang-active');
    }
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
function handleNavScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===========================
// MOBILE MENU
// ===========================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===========================
// PRICING TOGGLE
// ===========================
function initPricingToggle() {
    const toggleBtn = document.getElementById('pricing-toggle-btn');

    if (!toggleBtn) {
        return;
    }

    const hiddenCards = document.querySelectorAll('.pricing-card.is-hidden');
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
        expanded = !expanded;

        hiddenCards.forEach(card => {
            card.classList.toggle('is-hidden', !expanded);
        });

        toggleBtn.textContent = expanded ? 'Mostrar menos' : '¿Tienes más citas?';
    });
}

function animatePrice(element, from, to) {
    const duration = 400;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out-quart)
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(from + (to - from) * eased);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================
// function initWhatsAppPopup() {
//     const fab = document.getElementById('wa-fab');
//     const popup = document.getElementById('wa-popup');
//     const closeBtn = document.getElementById('wa-popup-close');
//     const backdrop = document.getElementById('wa-popup-backdrop');

//     if (!fab || !popup) {
//         return;
//     }

//     const openPopup = () => {
//         popup.classList.add('active');
//         popup.setAttribute('aria-hidden', 'false');
//         document.body.classList.add('wa-modal-open');
//     };

//     const closePopup = () => {
//         popup.classList.remove('active');
//         popup.setAttribute('aria-hidden', 'true');
//         document.body.classList.remove('wa-modal-open');
//     };

//     fab.addEventListener('click', openPopup);
//     closeBtn?.addEventListener('click', closePopup);
//     backdrop?.addEventListener('click', closePopup);
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//             closePopup();
//         }
//     });
// }

function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.feature-card, .step-card, .pricing-card, .testimonial-card, .section-header'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for sibling elements
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.querySelectorAll('.reveal')) : [];
                const siblingIndex = siblings.indexOf(entry.target);

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, siblingIndex * 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ===========================
// SMOOTH SCROLL FOR NAV LINKS
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// COUNTER ANIMATION FOR STATS
// ===========================
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.hero-stat-number');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const numMatch = text.match(/\d+/);
                    if (numMatch) {
                        const target = parseInt(numMatch[0]);
                        const suffix = text.replace(/\d+/, '');
                        animateCounter(stat, 0, target, suffix);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);
}

function animateCounter(element, from, to, suffix) {
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * eased);

        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===========================
// INITIALIZE APP
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    // Navbar scroll
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // Mobile menu
    initMobileMenu();

    // Pricing toggle
    initPricingToggle();


    // Scroll reveal
    initScrollReveal();
 
    // Smooth scroll
    initSmoothScroll();

    // Stat counters
    initStatCounters();

    // Set initial language
    setLanguage('es');
});
