import React, { useEffect, useState } from "react";

let data = [
  {
    info: {
      id: "390767",
      name: "Amri King",
      cloudinaryImageId: "xklr7qowqy8yxqfxibjb",
      locality: "BDA Enclave",
      areaName: "North_Jalandhar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.5,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "6.5K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-16 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/burger-king-bda-enclave-north-jalandhar-rest390767",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "390767",
      name: "Burger King",
      cloudinaryImageId: "usllk61gnicqmykbiyrb",
      locality: "BDA Enclave",
      areaName: "North_Jalandhar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.8",
      totalRatingsString: "6.5K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-16 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/burger-king-bda-enclave-north-jalandhar-rest390767",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "390767",
      name: " Queen HUB",
      cloudinaryImageId: "xizj6jp2mmtr4lqszuhh",
      locality: "BDA Enclave",
      areaName: "North_Jalandhar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.9,
      parentId: "166",
      avgRatingString: "3.5",
      totalRatingsString: "6.5K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-16 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/burger-king-bda-enclave-north-jalandhar-rest390767",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "390767",
      name: "Rupa King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_390767.JPG",
      locality: "BDA Enclave",
      areaName: "North_Jalandhar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 2.5,
      parentId: "166",
      avgRatingString: "2.5",
      totalRatingsString: "6.5K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-16 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/burger-king-bda-enclave-north-jalandhar-rest390767",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "72967",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/18ab1a2a-c2a7-4cf0-a410-dacdf189bbd8_72967.JPG",
      locality: "Gurdev Nagar",
      areaName: "Adarsh Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "4.6K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/subway-gurdev-nagar-adarsh-nagar-rest72967",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "924224",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/5cb3f389-caac-4d2f-a088-ba0c85232bdb_924224.JPG",
      locality: "Barnala - Amritsar Bypass Rd",
      areaName: "Grand Trunk Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4,
      parentId: "2456",
      avgRatingString: "4.0",
      totalRatingsString: "28",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 22:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/dominos-pizza-barnala-amritsar-bypass-rd-grand-trunk-road-rest924224",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "96780",
      name: "ARK Vaishno Dhaba",
      cloudinaryImageId: "ai4vnrzmzhv6zge8yakc",
      locality: "Moti Nagar",
      areaName: "Maqsudan",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "35962",
      avgRatingString: "4.5",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 22:46:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/ark-vaishno-dhaba-moti-nagar-maqsudan-rest96780",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "98907",
      name: "Maddi Refreshments",
      cloudinaryImageId: "eabespjc5tudmnjedl5b",
      locality: "Shastri Nagar",
      areaName: "Maqsudan",
      costForTwo: "₹150 for two",
      cuisines: ["Snacks", "Street Food"],
      avgRating: 4.6,
      parentId: "128425",
      avgRatingString: "4.6",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 19:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/maddi-refreshments-shastri-nagar-maqsudan-rest98907",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "112607",
      name: "New Aar Kay Vaishno Dhaba (Kapurthala Road)",
      cloudinaryImageId: "hrjpqey3zgbkhvn0ajba",
      locality: "Kapurthala Road",
      areaName: "Kapurthala Road",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Biryani", "Indian", "Punjabi", "Pizzas"],
      avgRating: 4.4,
      veg: true,
      parentId: "145670",
      avgRatingString: "4.4",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/new-aar-kay-vaishno-dhaba-kapurthala-road-kapurthala-road-rest112607",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "285860",
      name: "Nanak Vegetarian Dhaba",
      cloudinaryImageId: "usllk61gnicqmykbiyrb",
      locality: "Model Town",
      areaName: "Model Town",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Biryani", "Indian", "Punjabi", "Desserts"],
      avgRating: 4.4,
      parentId: "143799",
      avgRatingString: "4.4",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 11.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/nanak-vegetarian-dhaba-model-town-rest285860",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "137429",
      name: "GFC- The Chaap Hub",
      cloudinaryImageId: "gozmdkxc3riqz0ot1lcu",
      locality: "Durga Colony",
      areaName: "North_Jalandhar",
      costForTwo: "₹200 for two",
      cuisines: ["Afghani", "Tandoor", "Mughlai", "Punjabi", "Grill"],
      avgRating: 4.2,
      veg: true,
      parentId: "87056",
      avgRatingString: "4.2",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:57:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ef21289-46c5-4f5a-b28a-1a44dcfe3875",
    },
    cta: {
      link: "https://www.swiggy.com/city/jalandhar/gfc-the-chaap-hub-durga-colony-north-jalandhar-rest137429",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const ResturantCard = ({ item }) => {
  const { cloudinaryImageId, name, avgRating, costForTwo, id } = item.info;
  return (
    <>
      <div
        key={id}
        className="  border-b shadow-md p-4 w-[350px] h-[300px] flex flex-col  hover:cursor-pointer hover:-translate-x-2 hover:-translate-y-2 transform transition duration-300 ease-in-out"
      >
        <img
          className="w-full h-40 object-cover object-center rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
        <h1 className="font-bold text-[#F83002]">{name}</h1>
        <div className="flex gap-5 text-violet-900 text-md">
          <a>{avgRating} Star</a>
          <a>{item.info.sla.deliveryTime} mins</a>
          <a>Starting {costForTwo} </a>
        </div>
        <button className="bg-[#eb5938]  text-white p-2 rounded-md m-2">
          Order Food
        </button>
      </div>
    </>
  );
};



const Hero = () => {
  const [restData, setrestData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleButton = () => {
    setClicked(true);
    const Newdata = data.filter((res) => res.info.avgRating >= 4.5);
    setrestData(Newdata);
  };
  const handleBut = () => {
    console.log("clicked");
    setClicked(false);
    setrestData(data);
  };


  useEffect( ()=>{
    FetchData();
  }, [])

  const FetchData = async() => {
    const deta = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.395993917938036&lng=75.53563865788118&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res =  await deta.json();
    console.log(res);
    const k = res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setrestData(k);


  }

  return (
    <>
      <div className="flex gap-2 items-center justify-center ">
        <h1 className="font-bold text-2xl">
          Filter Resturant based on popularity
        </h1>
        {clicked ? (
          <button
            onClick={handleBut}
            className="bg-[#eb5938]  text-white p-2 rounded text-xl"
          >
            Restart
          </button>
        ) : (
          <button
            onClick={handleButton}
            className="bg-[#eb5938]  text-white p-2 rounded text-xl"
          >
            Filter Now
          </button>
        )}
      </div>
      
      <div className="flex flex-col  items-center justify-center ">
        <h1 className="font-bold text-[#F83002] text-2xl py-7">
          Find your Favourite Resturant NOW!!!
        </h1>
        <div className="flex">
        <input className="w-[500px] h-[30px]  border-[3px] rounded-lg" ></input>
        <button className="rounded-lg bg-[#F83002] px-3 text-white text-xl">Search</button>
        </div>
        
      </div>

      <div className=" gap-[40px] flex flex-wrap  p-6  items-center justify-center ">
        {restData.map((item) => (
          <ResturantCard item={item} />
        ))}
      </div>
    </>
  );
};

export default Hero;
