tailwind.config = {
  theme: {
    extend: {
      colors: {
        'emerald-deep': '#0D7377',
        'emerald-light': '#14A098',
        'gold': '#D4A017',
        'gold-soft': '#F4E4BC',
        'cream': '#FFF8E7',
        'cream-warm': '#FDF6E3',
        'charcoal': '#2C3E50',
        'charcoal-soft': '#5D6D7E',
        'success': '#27AE60',
        'urgency': '#E74C3C',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      boxShadow: {
        'emerald-tint': '0 10px 30px -10px rgba(13, 115, 119, 0.3)',
        'gold-tint': '0 10px 30px -10px rgba(212, 160, 23, 0.25)',
      }
    }
  }
}
