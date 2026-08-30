import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { allProperties } from '../data/propertiesData';

const siteUrl = 'https://propertyroatan.com';
const siteName = 'Property Roatan';
const defaultImage = `${siteUrl}/logo.png`;
const phoneNumber = '+50432377727';
const emailAddress = 'gavy@propertyroatan.com';

const pageMeta = {
  '/': {
    title: 'Property Roatan | Roatan Real Estate, Homes & Land for Sale',
    description:
      'Property Roatan helps buyers and sellers with Roatan real estate, homes for sale, land for sale, waterfront property, condos, villas, and investment opportunities across the Bay Islands.',
    keywords:
      'Property Roatan, Roatan real estate, Roatan real estate for sale, Roatan homes for sale, Roatan land for sale, Roatan property for sale, Roatan realtor, Roatan real estate agent, Bay Islands real estate, Honduras island property, Roatan investment property, Roatan waterfront property, Roatan beachfront property, roatan real estae',
    breadcrumb: 'Home',
  },
  '/about': {
    title: 'About Gavy Hernandez | Roatan Real Estate Advisor',
    description:
      'Meet Gavy Hernandez, a Roatan native, licensed Realtor, and RENE-certified advisor helping buyers and sellers move with clarity across the Bay Islands.',
    keywords:
      'Gavy Hernandez, Roatan realtor, Roatan real estate agent, Property Roatan about, Bay Islands realtor',
    breadcrumb: 'About',
  },
  '/buy': {
    title: 'Buy Property in Roatan | Homes, Land & Investment Guidance',
    description:
      'Learn how to buy land, homes, condos, and investment property in Roatan with local ownership guidance, due diligence questions, and curated listings.',
    keywords:
      'buy property in Roatan, buy land in Roatan, Roatan land for sale, Roatan homes for sale, Roatan buyer guide',
    breadcrumb: 'Buy',
  },
  '/sell': {
    title: 'Sell Property in Roatan | Strategic Property Marketing',
    description:
      'Sell your Roatan property with local market positioning, premium presentation, MLS exposure, buyer qualification, and advisory support from Property Roatan.',
    keywords:
      'sell property in Roatan, Property Roatan, Roatan property marketing, sell Roatan home, Roatan real estate seller',
    breadcrumb: 'Sell',
  },
  '/listings': {
    title: 'Roatan Real Estate Listings | Homes, Land, Condos & Villas',
    description:
      'Browse Roatan real estate listings including homes for sale, land for sale, condos, villas, waterfront property, beachfront property, and investment opportunities.',
    keywords:
      'Roatan real estate listings, Roatan property for sale, Roatan homes for sale, Roatan condos for sale, Roatan land for sale, beachfront Roatan real estate, waterfront Roatan property',
    breadcrumb: 'Listings',
  },
  '/faq': {
    title: 'Roatan Real Estate FAQ | Buyer Guide for the Bay Islands',
    description:
      'Clear answers about buying property in Roatan, foreign ownership, closing costs, financing, residency, title review, and the Bay Islands purchase process.',
    keywords:
      'Roatan real estate FAQ, buying property in Roatan, Roatan foreign buyers, Honduras property ownership',
    breadcrumb: 'FAQ',
  },
  '/insights': {
    title: 'Roatan Investment Insights | Market Guidance for Buyers',
    description:
      'Explore Roatan real estate investment guidance, buyer strategy, area comparisons, rental demand considerations, and land due diligence questions.',
    keywords:
      'Roatan investment insights, Roatan market guide, Roatan rental property, Roatan buyer guide, Roatan land investment',
    breadcrumb: 'Insights',
  },
  '/contact': {
    title: 'Contact Property Roatan | Talk to Gavy Hernandez',
    description:
      'Contact Gavy Hernandez for Roatan property showings, buyer guidance, seller strategy, investment questions, and private real estate consultation.',
    keywords:
      'contact Property Roatan, Gavy Hernandez contact, Roatan realtor contact, Roatan real estate inquiry',
    breadcrumb: 'Contact',
  },
};

const faqSchemaQuestions = [
  {
    question: 'Can foreigners legally own property in Roatan?',
    answer:
      'Yes. Foreign buyers can own property in Honduras, including Roatan. Larger or more complex purchases should be reviewed with a local attorney so ownership structure, title, and closing steps are handled correctly.',
  },
  {
    question: 'What types of property can Property Roatan help me evaluate?',
    answer:
      'Property Roatan helps buyers compare waterfront homes, ocean-view land, condos, vacation rental opportunities, commercial parcels, and development-ready properties across the Bay Islands.',
  },
  {
    question: 'How do I begin a Roatan property search?',
    answer:
      'The best first step is a private consultation. Share your goal, budget range, preferred area, and timeline so Gavy can curate relevant options instead of sending generic listings.',
  },
  {
    question: 'Can I start the process remotely?',
    answer:
      'Yes. Buyers can begin with virtual guidance, video walkthroughs, neighborhood context, attorney referrals, and a curated shortlist before traveling to Roatan.',
  },
];

const routeDescriptions = {
  '/': 'Luxury Roatan real estate advisory homepage for buyers, sellers, and investors.',
  '/buy': 'Buyer guidance for Roatan homes, land, condos, and investment property.',
  '/sell': 'Seller advisory and property marketing guidance for Roatan owners.',
  '/listings': 'Curated active real estate opportunities across Roatan and the Bay Islands.',
  '/faq': 'Buyer education and frequently asked questions for Roatan real estate.',
  '/insights': 'Roatan investment and market education for serious property buyers.',
  '/about': 'About Gavy Hernandez and the Property Roatan advisory approach.',
  '/contact': 'Private consultation and inquiry page for Property Roatan.',
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`script[type="application/ld+json"][data-seo-id="${id}"]`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo-id', id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function buildBreadcrumbSchema(normalizedPath, canonicalUrl, meta) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Property Roatan',
      item: `${siteUrl}/`,
    },
  ];

  if (normalizedPath !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: meta.breadcrumb,
      item: canonicalUrl,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumbs`,
    itemListElement: items,
  };
}

function buildListingItemList() {
  return {
    '@type': 'ItemList',
    '@id': `${siteUrl}/listings/#featured-listings`,
    name: 'Curated Roatan Real Estate Listings',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: allProperties.length,
    itemListElement: allProperties.slice(0, 24).map((property, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/listings/?mls=${encodeURIComponent(property.mls)}`,
      item: {
        '@type': 'Product',
        name: property.title,
        image: property.image,
        description: property.description,
        category: property.propertyType,
        brand: {
          '@type': 'Brand',
          name: siteName,
        },
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'USD',
          availability:
            property.status === 'active'
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
          url: `${siteUrl}/listings/?mls=${encodeURIComponent(property.mls)}`,
          areaServed: property.area,
        },
      },
    })),
  };
}

function buildJsonLd(normalizedPath, canonicalUrl, meta) {
  const graph = [
    {
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      '@id': `${siteUrl}/#business`,
      name: siteName,
      alternateName: ['Property Roatan Real Estate', 'Gavy Hernandez Property Roatan'],
      url: `${siteUrl}/`,
      logo: defaultImage,
      image: defaultImage,
      description:
        'Property Roatan provides luxury real estate guidance, curated listings, buyer representation, seller advisory, and investment-focused property support across Roatan and the Bay Islands of Honduras.',
      telephone: phoneNumber,
      email: emailAddress,
      priceRange: '$$-$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Roatan',
        addressRegion: 'Bay Islands',
        addressCountry: 'HN',
      },
      areaServed: [
        { '@type': 'Place', name: 'Roatan' },
        { '@type': 'Place', name: 'Bay Islands' },
        { '@type': 'Country', name: 'Honduras' },
      ],
      knowsAbout: [
        'Roatan real estate',
        'Bay Islands property',
        'Roatan homes for sale',
        'Roatan land for sale',
        'Roatan condos for sale',
        'Roatan villas',
        'Roatan beachfront property',
        'Waterfront homes',
        'Ocean-view land',
        'Vacation rental investment',
        'Buyer representation',
        'Seller advisory',
      ],
      employee: {
        '@type': 'Person',
        '@id': `${siteUrl}/about/#gavy-hernandez`,
        name: 'Gavy Hernandez',
        jobTitle: 'Roatan Real Estate Advisor',
        description:
          'Roatan native, licensed Realtor, RENE-certified advisor, and client-focused real estate professional with 12+ combined years across real estate, administrative sales, and closings.',
      },
      sameAs: [
        'https://www.instagram.com/propertyroatanrealestate',
        'https://www.facebook.com/gavy.hernandez.728743/',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      inLanguage: 'en',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#business`,
      },
      breadcrumb: {
        '@id': `${canonicalUrl}#breadcrumbs`,
      },
    },
    buildBreadcrumbSchema(normalizedPath, canonicalUrl, meta),
  ];

  if (normalizedPath === '/listings') {
    graph.push(buildListingItemList());
  }

  if (normalizedPath === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqSchemaQuestions.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  if (normalizedPath === '/buy' || normalizedPath === '/sell' || normalizedPath === '/contact') {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name:
        normalizedPath === '/sell'
          ? 'Roatan Property Seller Advisory'
          : normalizedPath === '/buy'
            ? 'Roatan Buyer Representation'
            : 'Private Roatan Real Estate Consultation',
      provider: {
        '@id': `${siteUrl}/#business`,
      },
      areaServed: ['Roatan', 'Bay Islands', 'Honduras'],
      description: routeDescriptions[normalizedPath],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export default function SEO() {
  const location = useLocation();

  const normalizedPath =
    location.pathname !== '/' ? location.pathname.replace(/\/$/, '') : '/';

  const meta = useMemo(() => {
    return pageMeta[normalizedPath] || pageMeta['/'];
  }, [normalizedPath]);

  useEffect(() => {
    const canonicalPath = normalizedPath === '/' ? '/' : `${normalizedPath}/`;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: meta.keywords,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    });
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: 'Property Roatan',
    });
    upsertMeta('meta[name="geo.region"]', {
      name: 'geo.region',
      content: 'HN-IB',
    });
    upsertMeta('meta[name="geo.placename"]', {
      name: 'geo.placename',
      content: 'Roatan, Bay Islands, Honduras',
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: defaultImage,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteName,
    });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_US',
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: meta.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: defaultImage,
    });

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    upsertJsonLd('property-roatan-route-schema', buildJsonLd(normalizedPath, canonicalUrl, meta));
  }, [normalizedPath, meta]);

  return null;
}
