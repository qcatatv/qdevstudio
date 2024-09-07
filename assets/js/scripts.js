// Basic JavaScript for any interactivity (sliders, modals, etc.)

document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for future interactivity, like sliders or forms
});

document.getElementById('menuToggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var toggle = this;

    sidebar.classList.toggle('visible');
    toggle.classList.toggle('active');
});

/* Slide Show animation */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Payment plan */

function switchPlan(plan) {
    const monthlyDetails = {
        free: {
            price: '$0',
            billingPeriod: 'Per user/month, billed monthly',
            description: 'For your hobby projects',
            features: [
                'Free e-mail alerts',
                '3-minute checks',
                'Automatic data enrichment',
                '10 monitors',
                'Up to 3 seats'
            ]
        },
        pro: {
            price: '$130',
            billingPeriod: 'Per user/month, billed monthly',
            description: 'Ideal for growing businesses',
            features: [
                'Unlimited phone calls',
                '60 second checks',
                'Multi-user account',
                '40 monitors',
                'Up to 10 seats'
            ]
        },
        enterprise: {
            price: 'Custom',
            billingPeriod: 'Per user/month, billed monthly',
            description: 'For larger teams and enterprises',
            features: [
                'Everything in Pro',
                'Up to 10 team members',
                '200 monitors',
                '30 status pages',
                '300+ integrations'
            ]
        }
    };

    const annualDetails = {
        free: {
            price: '$0',
            billingPeriod: 'Per user/month, billed annually',
            description: 'For your hobby projects',
            features: [
                'Free e-mail alerts',
                '3-minute checks',
                'Automatic data enrichment',
                '10 monitors',
                'Up to 3 seats'
            ]
        },
        pro: {
            price: '$85',
            billingPeriod: 'Per user/month, billed annually',
            description: 'Great for small businesses',
            features: [
                'Unlimited phone calls',
                '30 second checks',
                'Single-user account',
                '20 monitors',
                'Up to 6 seats'
            ]
        },
        enterprise: {
            price: 'Custom',
            billingPeriod: 'Per user/month, billed annually',
            description: 'For multiple teams',
            features: [
                'Everything in Pro',
                'Up to 5 team members',
                '100 monitors',
                '15 status pages',
                '200+ integrations'
            ]
        }
    };

    const details = plan === 'monthly' ? monthlyDetails : annualDetails;

    // Update Free Plan
    document.getElementById('free-price').textContent = details.free.price;
    document.getElementById('free-billing-period').textContent = details.free.billingPeriod;
    document.getElementById('free-description').textContent = details.free.description;
    updateFeatures('free-features', details.free.features);

    // Update Pro Plan
    document.getElementById('pro-price').textContent = details.pro.price;
    document.getElementById('pro-billing-period').textContent = details.pro.billingPeriod;
    document.getElementById('pro-description').textContent = details.pro.description;
    updateFeatures('pro-features', details.pro.features);

    // Update Enterprise Plan
    document.getElementById('enterprise-price').textContent = details.enterprise.price;
    document.getElementById('enterprise-billing-period').textContent = details.enterprise.billingPeriod;
    document.getElementById('enterprise-description').textContent = details.enterprise.description;
    updateFeatures('enterprise-features', details.enterprise.features);

    // Update Button Active State
    document.getElementById('monthly-btn').classList.toggle('active', plan === 'monthly');
    document.getElementById('annual-btn').classList.toggle('active', plan === 'annual');
}

function updateFeatures(id, features) {
    const featureList = document.getElementById(id);
    featureList.innerHTML = ''; // Clear existing features
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featureList.appendChild(li);
    });
}

function scrollToSection() {
    const pricingContainer = document.getElementById('pricing-container');
    pricingContainer.scrollIntoView({ behavior: 'smooth' });
}


//Popup button

function togglePopup() {
    var popup = document.getElementById("popup-1");
    if (popup.style.display === "block") {
        popup.style.display = "none"; // Hide the popup
    } else {
        popup.style.display = "block"; // Show the popup
    }
}