export const hotel_mock_data = {
	"status": true,
	"message": "Success",
	"timestamp": 1753674894992,
	"data": {
		"filters": [
			{
				"field": "price",
				"title": "Your budget (for 2 nights)"
			},
			{
				"field": "tdb",
				"title": "Bed Preference"
			},
			{
				"title": "Room Facilities",
				"field": "roomfacility"
			},
			{
				"field": "fc",
				"title": "Free cancellation "
			},
			{
				"title": "Online Payment",
				"field": "pmt"
			},
			{
				"field": "entire_place_bedroom_count",
				"title": "Number of bedrooms"
			},
			{
				"title": "Meals",
				"field": "mealplan"
			},
			{
				"field": "any_deal",
				"title": "Deals"
			}
		],
		"applied_filters": [],
		"b_max_los_data": {
			"extended_los": 90,
			"default_los": 45,
			"has_extended_los": 1,
			"is_fullon": 0,
			"max_allowed_los": 90,
			"experiment": "long_stays_ios_extend_los_2"
		},
		"result": [
			{
				"hotel_id": 13360368,
				"block_ids": [
					"1336036801_406059029_2_0_0"
				],
				"ufi": -782831,
				"is_tpi_exclusive_property": 0,
				"id": "property_card_13360368",
				"city": "Dubai",
				"city_in_trans": "in Dubai",
				"genius_discount_percentage": 0,
				"main_photo_id": 632520314,
				"soldout": 0,
				"is_free_cancellable": 0,
				"extended": 0,
				"review_score_word": "Good",
				"checkout": {
					"from": "12:00",
					"until": "13:00"
				},
				"hotel_name": "Tanha Palace Hotel",
				"is_genius_deal": 0,
				"distances": [],
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 25.2710618,
				"preferred": 0,
				"updated_checkin": null,
				"cant_book": null,
				"longitude": 55.3034646,
				"review_score": 7.1,
				"default_language": "xu",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/632520314.jpg?k=7861bd1b50abc6b30481bcb6e38b19aa3bf48ae72e8777a39d9513b2a9fb9b58&o=",
				"currencycode": "AED",
				"class": 1,
				"default_wishlist_name": "Dubai",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"strikethrough_amount": {
						"amount_unrounded": "$63.71",
						"currency": "USD",
						"value": 63.7081405376778,
						"amount_rounded": "$64"
					},
					"discounted_amount": {
						"amount_rounded": "$19",
						"value": 19.1124421613033,
						"currency": "USD",
						"amount_unrounded": "$19.11"
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"amount": {
							"value": 17,
							"currency": "USD"
						},
						"mode": "extra_charges",
						"translated_copy": ""
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"value": 1,
							"key": "use_js_tracking"
						}
					],
					"gross_amount": {
						"amount_unrounded": "$44.60",
						"currency": "USD",
						"value": 44.5956983763745,
						"amount_rounded": "$45"
					},
					"strikethrough_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$31.85",
						"amount_rounded": "$32",
						"value": 31.8540702688389
					},
					"gross_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$22.30",
						"amount_rounded": "$22",
						"value": 22.2978491881872
					},
					"items": [
						{
							"kind": "charge",
							"name": "TAX",
							"inclusion_type": "excluded",
							"base": {
								"kind": "percentage",
								"percentage": 7
							},
							"details": "7 % TAX",
							"item_amount": {
								"amount_unrounded": "$3.12",
								"currency": "USD",
								"value": 3.12169888634621,
								"amount_rounded": "$3"
							}
						},
						{
							"item_amount": {
								"amount_rounded": "$2",
								"value": 2.4527634107006,
								"currency": "USD",
								"amount_unrounded": "$2.45"
							},
							"base": {
								"percentage": 5,
								"kind": "percentage"
							},
							"details": "5 % VAT",
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "VAT"
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Municipality fee",
							"item_amount": {
								"value": 3.12169888634621,
								"amount_rounded": "$3",
								"amount_unrounded": "$3.12",
								"currency": "USD"
							},
							"base": {
								"percentage": 7,
								"kind": "percentage"
							},
							"details": "7 % Municipality fee"
						},
						{
							"kind": "charge",
							"name": "Service charge",
							"inclusion_type": "excluded",
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"details": "10 % Service charge",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$4.46",
								"amount_rounded": "$4",
								"value": 4.45956983763744
							}
						},
						{
							"inclusion_type": "excluded",
							"name": "Tourism fee",
							"kind": "charge",
							"item_amount": {
								"amount_unrounded": "$3.81",
								"currency": "USD",
								"value": 3.81159815182688,
								"amount_rounded": "$4"
							},
							"details": null,
							"base": {
								"kind": "per_night",
								"base_amount": 7
							}
						},
						{
							"identifier": "limited-time-deal",
							"item_amount": {
								"amount_rounded": "$19",
								"value": 19.1124421613033,
								"currency": "USD",
								"amount_unrounded": "$19.11"
							},
							"details": "You're getting a discount because—for a limited time only—this property is offering reduced rates on rooms that match your search.",
							"base": {
								"kind": "rate"
							},
							"name": "Limited-time Deal",
							"kind": "discount"
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [
						{
							"icon": null,
							"kind": "badge",
							"identifier": "limited-time-deal",
							"badge_variant": "constructive",
							"details": "You’re getting a reduced rate because this property has a limited-time deal running. These deals only last up to 48 hours.",
							"name": "Limited-time Deal"
						}
					],
					"excluded_amount": {
						"amount_unrounded": "$16.97",
						"currency": "USD",
						"value": 16.9673291728573,
						"amount_rounded": "$17"
					},
					"net_amount": {
						"amount_unrounded": "$44.60",
						"currency": "USD",
						"value": 44.5956983763745,
						"amount_rounded": "$45"
					},
					"all_inclusive_amount_hotel_currency": {
						"amount_rounded": "AED 226",
						"value": 226.121,
						"currency": "AED",
						"amount_unrounded": "AED 226.12"
					},
					"all_inclusive_amount": {
						"amount_rounded": "$62",
						"value": 61.5630275492318,
						"currency": "USD",
						"amount_unrounded": "$61.56"
					},
					"included_taxes_and_charges_amount": {
						"amount_rounded": "$0",
						"value": 0,
						"currency": "USD",
						"amount_unrounded": "$0"
					},
					"gross_amount_hotel_currency": {
						"value": 163.8,
						"amount_rounded": "AED 164",
						"amount_unrounded": "AED 163.80",
						"currency": "AED"
					}
				},
				"is_smart_deal": 0,
				"checkin": {
					"from": "14:00",
					"until": "23:00"
				},
				"timezone": "Asia/Dubai",
				"countrycode": "ae",
				"updated_checkout": null,
				"class_is_estimated": 0,
				"is_geo_rate": "",
				"accommodation_type": 204,
				"preferred_plus": 0,
				"children_not_allowed": null,
				"min_total_price": 163.8,
				"review_nr": 39,
				"is_no_prepayment_block": 0,
				"urgency_message": "Only 2 left at this price on Booking.com",
				"type": "property_card",
				"badges": [
					{
						"id": "Limited Time Deal",
						"badge_variant": "constructive",
						"text": "Limited-time Deal"
					}
				],
				"hotel_has_vb_boost": 0,
				"hotel_name_trans": "Tanha Palace Hotel",
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: 1 bed"
			},
			{
				"hotel_id": 10252733,
				"ribbon_text": "Breakfast included",
				"block_ids": [
					"1025273301_0_1_1_0"
				],
				"ufi": -782831,
				"is_tpi_exclusive_property": 0,
				"id": "property_card_10252733",
				"city": "Dubai",
				"city_in_trans": "in Dubai",
				"genius_discount_percentage": 0,
				"has_swimming_pool": 1,
				"main_photo_id": 546843825,
				"soldout": 0,
				"is_free_cancellable": 0,
				"extended": 0,
				"review_score_word": "Wonderful",
				"hotel_name": "One&Only One Za'abeel",
				"checkout": {
					"from": "",
					"until": "12:00"
				},
				"is_genius_deal": 0,
				"distances": [],
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 25.2279422427298,
				"has_free_parking": 1,
				"updated_checkin": null,
				"preferred": 1,
				"cant_book": null,
				"longitude": 55.2903966104718,
				"review_score": 9,
				"default_language": "xu",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/546843825.jpg?k=fb0ad88c46dcea803182696f1d98d9f77533f022358aeb30d0d780217162b46c&o=",
				"class": 5,
				"default_wishlist_name": "Dubai",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"all_inclusive_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 2,458.19",
						"amount_rounded": "AED 2,458",
						"value": 2458.19197795266
					},
					"included_taxes_and_charges_amount": {
						"amount_rounded": "$0",
						"value": 0,
						"currency": "USD",
						"amount_unrounded": "$0"
					},
					"all_inclusive_amount": {
						"amount_rounded": "$669",
						"value": 669.26,
						"currency": "USD",
						"amount_unrounded": "$669.26"
					},
					"gross_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 1,995.25",
						"amount_rounded": "AED 1,995",
						"value": 1995.24705833823
					},
					"items": [
						{
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded",
							"base": {
								"base_amount": 26.88,
								"kind": "per_stay"
							},
							"details": null,
							"item_amount": {
								"value": 26.88,
								"amount_rounded": "$27",
								"amount_unrounded": "$26.88",
								"currency": "USD"
							}
						},
						{
							"details": null,
							"base": {
								"base_amount": 46.44,
								"kind": "per_stay"
							},
							"item_amount": {
								"amount_rounded": "$46",
								"value": 46.44,
								"currency": "USD",
								"amount_unrounded": "$46.44"
							},
							"name": "Municipality fee",
							"kind": "charge",
							"inclusion_type": "excluded"
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Tourism fee",
							"item_amount": {
								"amount_rounded": "$4",
								"value": 3.82,
								"currency": "USD",
								"amount_unrounded": "$3.82"
							},
							"base": {
								"kind": "per_stay",
								"base_amount": 3.82
							},
							"details": null
						},
						{
							"item_amount": {
								"value": 48.9,
								"amount_rounded": "$49",
								"amount_unrounded": "$48.90",
								"currency": "USD"
							},
							"details": null,
							"base": {
								"base_amount": 48.9,
								"kind": "per_stay"
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						}
					],
					"gross_amount_per_night": {
						"amount_unrounded": "$271.61",
						"currency": "USD",
						"value": 271.61,
						"amount_rounded": "$272"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"excluded_amount": {
						"currency": "USD",
						"amount_unrounded": "$126.04",
						"amount_rounded": "$126",
						"value": 126.04
					},
					"net_amount": {
						"amount_rounded": "$543",
						"value": 543.22,
						"currency": "USD",
						"amount_unrounded": "$543.22"
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"amount": {
							"currency": "USD",
							"value": 126
						},
						"translated_copy": "",
						"mode": "extra_charges"
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"value": 1,
							"key": "use_js_tracking"
						}
					],
					"gross_amount": {
						"amount_unrounded": "$543.22",
						"currency": "USD",
						"value": 543.22,
						"amount_rounded": "$543"
					}
				},
				"is_smart_deal": 0,
				"checkin": {
					"until": "",
					"from": "15:00"
				},
				"timezone": "Asia/Dubai",
				"countrycode": "ae",
				"updated_checkout": null,
				"class_is_estimated": 0,
				"is_geo_rate": "",
				"accommodation_type": 204,
				"preferred_plus": 1,
				"children_not_allowed": null,
				"min_total_price": 1995.24705833823,
				"review_nr": 1223,
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"badges": [],
				"hotel_has_vb_boost": 0,
				"hotel_name_trans": "One&Only One Za'abeel",
				"unit_configuration_label": "<b>Room with shared bathroom</b>: 1 bed"
			},
			{
				"hotel_id": 13166808,
				"ufi": -784007,
				"block_ids": [
					"1316680801_405439499_0_42_0"
				],
				"city_in_trans": "in Ras al Khaimah",
				"id": "property_card_13166808",
				"city": "Ras Al Khima",
				"is_tpi_exclusive_property": 0,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"is_free_cancellable": 0,
				"soldout": 0,
				"main_photo_id": 669461694,
				"extended": 0,
				"review_score_word": "Wonderful",
				"checkout": {
					"from": "",
					"until": "14:00"
				},
				"hotel_name": "Rove Al Marjan Island",
				"distances": [],
				"is_genius_deal": 0,
				"latitude": 25.6731907198606,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"has_free_parking": 1,
				"preferred": 1,
				"updated_checkin": null,
				"cant_book": null,
				"review_score": 9.2,
				"longitude": 55.7420444872928,
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/669461694.jpg?k=ffa6e75543fead8f5e23edee398990d7eae884a4cbec4bfb1ea7187b9e0c898a&o=",
				"default_language": "en",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"all_inclusive_amount_hotel_currency": {
						"amount_unrounded": "AED 532.05",
						"currency": "AED",
						"value": 532.05,
						"amount_rounded": "AED 532"
					},
					"gross_amount_hotel_currency": {
						"amount_rounded": "AED 418",
						"value": 418,
						"currency": "AED",
						"amount_unrounded": "AED 418"
					},
					"all_inclusive_amount": {
						"value": 144.854342619964,
						"amount_rounded": "$145",
						"amount_unrounded": "$144.85",
						"currency": "USD"
					},
					"included_taxes_and_charges_amount": {
						"currency": "USD",
						"amount_unrounded": "$0",
						"amount_rounded": "$0",
						"value": 0
					},
					"excluded_amount": {
						"currency": "USD",
						"amount_unrounded": "$31.05",
						"amount_rounded": "$31",
						"value": 31.0509120868468
					},
					"benefits": [
						{
							"identifier": "getaway-2021",
							"badge_variant": "constructive",
							"details": "This property is offering a discount on stays between Mar 28 and Sep 30, 2025.",
							"name": "Getaway Deal",
							"icon": null,
							"kind": "badge"
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"items": [
						{
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded",
							"base": {
								"percentage": 5,
								"kind": "percentage"
							},
							"details": "5 % VAT",
							"item_amount": {
								"value": 6.25918867932142,
								"amount_rounded": "$6",
								"amount_unrounded": "$6.26",
								"currency": "USD"
							}
						},
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$5.45",
								"amount_rounded": "$5",
								"value": 5.44514021689554
							},
							"details": null,
							"base": {
								"base_amount": 10,
								"kind": "per_night"
							},
							"inclusion_type": "excluded",
							"name": "Tourism fee",
							"kind": "charge"
						},
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$7.97",
								"amount_rounded": "$8",
								"value": 7.96624013731817
							},
							"base": {
								"percentage": 7,
								"kind": "percentage"
							},
							"details": "7 % Municipality fee",
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Municipality fee"
						},
						{
							"kind": "charge",
							"name": "Service charge",
							"inclusion_type": "excluded",
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"details": "10 % Service charge",
							"item_amount": {
								"value": 11.3803430533117,
								"amount_rounded": "$11",
								"amount_unrounded": "$11.38",
								"currency": "USD"
							}
						},
						{
							"kind": "discount",
							"name": "Getaway Deal",
							"identifier": "campaign_38",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$28.45",
								"amount_rounded": "$28",
								"value": 28.4508576332792
							},
							"base": {
								"kind": "rate"
							},
							"details": "This property is offering a discount on stays between Mar 28 and Sep 30, 2025."
						}
					],
					"gross_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$56.90",
						"amount_rounded": "$57",
						"value": 56.9017152665584
					},
					"net_amount": {
						"currency": "USD",
						"amount_unrounded": "$113.80",
						"amount_rounded": "$114",
						"value": 113.803430533117
					},
					"gross_amount": {
						"value": 113.803430533117,
						"amount_rounded": "$114",
						"amount_unrounded": "$113.80",
						"currency": "USD"
					},
					"strikethrough_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$71.13",
						"amount_rounded": "$71",
						"value": 71.127144083198
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"mode": "extra_charges",
						"translated_copy": "",
						"amount": {
							"value": 31,
							"currency": "USD"
						}
					},
					"discounted_amount": {
						"amount_rounded": "$28",
						"value": 28.4508576332792,
						"currency": "USD",
						"amount_unrounded": "$28.45"
					},
					"strikethrough_amount": {
						"amount_unrounded": "$142.25",
						"currency": "USD",
						"value": 142.254288166396,
						"amount_rounded": "$142"
					}
				},
				"default_wishlist_name": "Ras al Khaimah",
				"class": 3,
				"checkin": {
					"until": "",
					"from": "16:00"
				},
				"is_smart_deal": 0,
				"timezone": "Asia/Dubai",
				"class_is_estimated": 0,
				"updated_checkout": null,
				"countrycode": "ae",
				"is_geo_rate": "",
				"children_not_allowed": null,
				"preferred_plus": 0,
				"accommodation_type": 204,
				"is_no_prepayment_block": 0,
				"urgency_message": "Only 2 left at this price on Booking.com",
				"type": "property_card",
				"review_nr": 976,
				"min_total_price": 418,
				"hotel_has_vb_boost": 0,
				"badges": [
					{
						"id": "Getaway 2021 Deals",
						"badge_variant": "constructive",
						"text": "Getaway Deal"
					}
				],
				"unit_configuration_label": "<b>Hotel room</b>: 3 beds",
				"hotel_include_breakfast": 0,
				"hotel_name_trans": "Rove Al Marjan Island"
			},
			{
				"hotel_id": 71609,
				"timezone": "Asia/Dubai",
				"countrycode": "ae",
				"updated_checkout": null,
				"class_is_estimated": 0,
				"is_geo_rate": "",
				"accommodation_type": 206,
				"preferred_plus": 0,
				"children_not_allowed": null,
				"min_total_price": 1109.25,
				"review_nr": 2358,
				"is_no_prepayment_block": 1,
				"type": "property_card",
				"badges": [
					{
						"text": "Mobile-only price",
						"badge_variant": "constructive",
						"id": "Mobile Rate"
					}
				],
				"hotel_has_vb_boost": 1,
				"hotel_name_trans": "JA Hatta Fort Hotel",
				"unit_configuration_label": "<b>Room with shared bathroom</b>: 1 bed",
				"cant_book": null,
				"longitude": 56.1352872848511,
				"review_score": 8.7,
				"default_language": "en",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/720502797.jpg?k=ada0a8b6db3aeed250e7adb52e09d1454def99fa11901a9df431d3fb6159f83d&o=",
				"class": 4,
				"default_wishlist_name": "Hatta",
				"composite_price_breakdown": {
					"net_amount": {
						"amount_unrounded": "$302",
						"currency": "USD",
						"value": 302.001089279569,
						"amount_rounded": "$302"
					},
					"excluded_amount": {
						"amount_rounded": "$76",
						"value": 76.1179690260968,
						"currency": "USD",
						"amount_unrounded": "$76.12"
					},
					"benefits": [
						{
							"name": "Mobile-only price",
							"identifier": "mobile-rate",
							"badge_variant": "constructive",
							"details": "You’re getting a reduced rate compared to the rate available on a computer or laptop.",
							"icon": null,
							"kind": "badge"
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"items": [
						{
							"name": "VAT",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": "5 % VAT",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$16.61",
								"amount_rounded": "$17",
								"value": 16.6100735232268
							}
						},
						{
							"item_amount": {
								"value": 30.2001089279569,
								"amount_rounded": "$30",
								"amount_unrounded": "$30.20",
								"currency": "USD"
							},
							"details": "10 % Service charge",
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						},
						{
							"base": {
								"kind": "per_night",
								"base_amount": 15
							},
							"details": null,
							"item_amount": {
								"amount_unrounded": "$8.17",
								"currency": "USD",
								"value": 8.16771032534331,
								"amount_rounded": "$8"
							},
							"kind": "charge",
							"name": "Tourism fee",
							"inclusion_type": "excluded"
						},
						{
							"name": "Municipality fee",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": "7 % Municipality fee",
							"base": {
								"kind": "percentage",
								"percentage": 7
							},
							"item_amount": {
								"value": 21.1400762495698,
								"amount_rounded": "$21",
								"amount_unrounded": "$21.14",
								"currency": "USD"
							}
						},
						{
							"identifier": "mobile-discount",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$53.29",
								"amount_rounded": "$53",
								"value": 53.2943098728651
							},
							"details": "You’re getting a reduced rate compared to the rate available on a computer or laptop.",
							"base": {
								"kind": "rate"
							},
							"name": "Mobile-only price",
							"kind": "discount"
						},
						{
							"base": {
								"kind": "rate"
							},
							"details": "You’re getting a reduced rate because this property is offering a discount.",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$39.48",
								"amount_rounded": "$39",
								"value": 39.4772665724926
							},
							"identifier": "basic-deal",
							"kind": "discount",
							"name": "Bonus savings"
						}
					],
					"gross_amount_per_night": {
						"amount_rounded": "$151",
						"value": 151.000544639784,
						"currency": "USD",
						"amount_unrounded": "$151"
					},
					"gross_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 1,109.25",
						"amount_rounded": "AED 1,109",
						"value": 1109.25
					},
					"included_taxes_and_charges_amount": {
						"amount_rounded": "$0",
						"value": 0,
						"currency": "USD",
						"amount_unrounded": "$0"
					},
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$378.12",
						"amount_rounded": "$378",
						"value": 378.119044692815
					},
					"all_inclusive_amount_hotel_currency": {
						"value": 1388.83125,
						"amount_rounded": "AED 1,389",
						"amount_unrounded": "AED 1,388.83",
						"currency": "AED"
					},
					"discounted_amount": {
						"value": 92.7715764453578,
						"amount_rounded": "$93",
						"amount_unrounded": "$92.77",
						"currency": "USD"
					},
					"strikethrough_amount": {
						"amount_unrounded": "$394.77",
						"currency": "USD",
						"value": 394.772665724927,
						"amount_rounded": "$395"
					},
					"strikethrough_amount_per_night": {
						"value": 197.386332862463,
						"amount_rounded": "$197",
						"amount_unrounded": "$197.39",
						"currency": "USD"
					},
					"gross_amount": {
						"currency": "USD",
						"amount_unrounded": "$302",
						"amount_rounded": "$302",
						"value": 302.001089279569
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"amount": {
							"value": 76,
							"currency": "USD"
						},
						"mode": "extra_charges",
						"translated_copy": ""
					}
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"is_smart_deal": 0,
				"checkin": {
					"until": "",
					"from": "15:00"
				},
				"extended": 0,
				"review_score_word": "Excellent",
				"hotel_name": "JA Hatta Fort Hotel",
				"checkout": {
					"until": "12:00",
					"from": ""
				},
				"is_genius_deal": 0,
				"distances": [],
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 24.8202931131408,
				"has_free_parking": 1,
				"preferred": 0,
				"updated_checkin": null,
				"ribbon_text": "Breakfast included",
				"block_ids": [
					"7160912_84442819_2_33_0"
				],
				"ufi": 900040195,
				"is_tpi_exclusive_property": 0,
				"city": "Hatta",
				"id": "property_card_71609",
				"city_in_trans": "in Hatta",
				"genius_discount_percentage": 0,
				"has_swimming_pool": 1,
				"main_photo_id": 720502797,
				"soldout": 0,
				"is_free_cancellable": 0
			},
			{
				"hotel_id": 9570674,
				"timezone": "Asia/Dubai",
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"is_geo_rate": "",
				"children_not_allowed": null,
				"accommodation_type": 206,
				"preferred_plus": 1,
				"is_no_prepayment_block": 1,
				"urgency_message": "Only 2 left at this price on Booking.com",
				"type": "property_card",
				"min_total_price": 4600,
				"review_nr": 217,
				"badges": [],
				"hotel_has_vb_boost": 0,
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: 2 beds",
				"hotel_name_trans": "Jumeirah Marsa Al Arab Dubai",
				"cant_book": null,
				"longitude": 55.1890366242066,
				"review_score": 8.5,
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/658287918.jpg?k=e8a67792c88dc0bcdc7a3c5243522c747cb7bf48a49da1995681d96ebcd612d1&o=",
				"currencycode": "AED",
				"default_language": "xu",
				"default_wishlist_name": "Dubai",
				"composite_price_breakdown": {
					"all_inclusive_amount": {
						"amount_rounded": "$1,545",
						"value": 1545.05853654411,
						"currency": "USD",
						"amount_unrounded": "$1,545.06"
					},
					"included_taxes_and_charges_amount": {
						"value": 0,
						"amount_rounded": "$0",
						"amount_unrounded": "$0",
						"currency": "USD"
					},
					"gross_amount_hotel_currency": {
						"amount_unrounded": "AED 4,600",
						"currency": "AED",
						"value": 4600,
						"amount_rounded": "AED 4,600"
					},
					"all_inclusive_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 5,675",
						"amount_rounded": "AED 5,675",
						"value": 5675
					},
					"net_amount": {
						"amount_rounded": "$1,252",
						"value": 1252.38224988597,
						"currency": "USD",
						"amount_unrounded": "$1,252.38"
					},
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"excluded_amount": {
						"amount_unrounded": "$292.68",
						"currency": "USD",
						"value": 292.676286658135,
						"amount_rounded": "$293"
					},
					"gross_amount_per_night": {
						"amount_rounded": "$626",
						"value": 626.191124942987,
						"currency": "USD",
						"amount_unrounded": "$626.19"
					},
					"items": [
						{
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"details": "5 % VAT",
							"item_amount": {
								"amount_unrounded": "$68.88",
								"currency": "USD",
								"value": 68.8810237437286,
								"amount_rounded": "$69"
							}
						},
						{
							"item_amount": {
								"value": 10.8902804337911,
								"amount_rounded": "$11",
								"amount_unrounded": "$10.89",
								"currency": "USD"
							},
							"base": {
								"base_amount": 20,
								"kind": "per_night"
							},
							"details": null,
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Tourism fee"
						},
						{
							"details": "7 % Municipality fee",
							"base": {
								"kind": "percentage",
								"percentage": 7
							},
							"item_amount": {
								"value": 87.6667574920181,
								"amount_rounded": "$88",
								"amount_unrounded": "$87.67",
								"currency": "USD"
							},
							"name": "Municipality fee",
							"kind": "charge",
							"inclusion_type": "excluded"
						},
						{
							"item_amount": {
								"value": 125.238224988597,
								"amount_rounded": "$125",
								"amount_unrounded": "$125.24",
								"currency": "USD"
							},
							"base": {
								"kind": "percentage",
								"percentage": 10
							},
							"details": "10 % Service charge",
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Service charge"
						}
					],
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"gross_amount": {
						"amount_rounded": "$1,252",
						"value": 1252.38224988597,
						"currency": "USD",
						"amount_unrounded": "$1,252.38"
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"mode": "extra_charges",
						"translated_copy": "",
						"amount": {
							"currency": "USD",
							"value": 293
						}
					}
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"class": 5,
				"checkin": {
					"until": "",
					"from": "15:00"
				},
				"is_smart_deal": 0,
				"extended": 0,
				"review_score_word": "Very Good",
				"checkout": {
					"from": "",
					"until": "12:00"
				},
				"hotel_name": "Jumeirah Marsa Al Arab Dubai",
				"distances": [],
				"is_genius_deal": 0,
				"latitude": 25.1447894334465,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"preferred": 1,
				"updated_checkin": null,
				"ufi": -782831,
				"block_ids": [
					"957067403_399951014_2_2_0"
				],
				"city": "Dubai",
				"id": "property_card_9570674",
				"city_in_trans": "in Dubai",
				"is_tpi_exclusive_property": 0,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"soldout": 0,
				"is_free_cancellable": 0,
				"main_photo_id": 658287918
			},
			{
				"hotel_id": 1880958,
				"ufi": -782066,
				"block_ids": [
					"188095803_371175426_2_42_0"
				],
				"city_in_trans": "in Abu Dhabi",
				"city": "Abu Dhabi",
				"id": "property_card_1880958",
				"is_tpi_exclusive_property": 0,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"is_free_cancellable": 0,
				"soldout": 0,
				"main_photo_id": 407612976,
				"latitude": 24.4584640769069,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"has_free_parking": 1,
				"updated_checkin": null,
				"preferred": 1,
				"extended": 0,
				"review_score_word": "Excellent",
				"checkout": {
					"until": "12:00",
					"from": ""
				},
				"hotel_name": "Bab Al Qasr Hotel",
				"distances": [],
				"is_genius_deal": 0,
				"composite_price_breakdown": {
					"net_amount": {
						"currency": "USD",
						"amount_unrounded": "$217.81",
						"amount_rounded": "$218",
						"value": 217.805608675822
					},
					"gross_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$108.90",
						"amount_rounded": "$109",
						"value": 108.902804337911
					},
					"items": [
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$11.98",
								"amount_rounded": "$12",
								"value": 11.9793084771702
							},
							"base": {
								"percentage": 5,
								"kind": "percentage"
							},
							"details": "5 % VAT",
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "VAT"
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Municipality fee",
							"item_amount": {
								"amount_rounded": "$9",
								"value": 8.71222434703286,
								"currency": "USD",
								"amount_unrounded": "$8.71"
							},
							"base": {
								"kind": "percentage",
								"percentage": 4
							},
							"details": "4 % Municipality fee"
						},
						{
							"details": "4 % Destination tax",
							"base": {
								"kind": "percentage",
								"percentage": 4
							},
							"item_amount": {
								"amount_unrounded": "$8.71",
								"currency": "USD",
								"value": 8.71222434703286,
								"amount_rounded": "$9"
							},
							"name": "Destination tax",
							"kind": "charge",
							"inclusion_type": "excluded"
						},
						{
							"item_amount": {
								"amount_rounded": "$22",
								"value": 21.7805608675821,
								"currency": "USD",
								"amount_unrounded": "$21.78"
							},
							"details": "10 % Service charge",
							"base": {
								"kind": "percentage",
								"percentage": 10
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						}
					],
					"excluded_amount": {
						"value": 51.1843180388181,
						"amount_rounded": "$51",
						"amount_unrounded": "$51.18",
						"currency": "USD"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"gross_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 800",
						"amount_rounded": "AED 800",
						"value": 800
					},
					"all_inclusive_amount": {
						"amount_rounded": "$269",
						"value": 268.98992671464,
						"currency": "USD",
						"amount_unrounded": "$268.99"
					},
					"included_taxes_and_charges_amount": {
						"amount_unrounded": "$0",
						"currency": "USD",
						"value": 0,
						"amount_rounded": "$0"
					},
					"all_inclusive_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 988",
						"amount_rounded": "AED 988",
						"value": 988
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"amount": {
							"value": 51,
							"currency": "USD"
						},
						"mode": "extra_charges",
						"translated_copy": ""
					},
					"gross_amount": {
						"amount_unrounded": "$217.81",
						"currency": "USD",
						"value": 217.805608675822,
						"amount_rounded": "$218"
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					]
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"default_wishlist_name": "Abu Dhabi",
				"class": 5,
				"checkin": {
					"from": "15:00",
					"until": ""
				},
				"is_smart_deal": 0,
				"cant_book": null,
				"review_score": 8.7,
				"longitude": 54.3200876242149,
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/407612976.jpg?k=efdd99c8c2fd37e65806506c1482ce68231df287e2a479c8bb096cab5056f0c5&o=",
				"default_language": "xu",
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"review_nr": 2549,
				"min_total_price": 800,
				"hotel_has_vb_boost": 0,
				"badges": [],
				"unit_configuration_label": "<b>Hotel room</b>: 2 beds",
				"hotel_include_breakfast": 0,
				"hotel_name_trans": "Bab Al Qasr Hotel",
				"timezone": "Asia/Dubai",
				"class_is_estimated": 0,
				"updated_checkout": null,
				"countrycode": "ae",
				"is_geo_rate": "",
				"children_not_allowed": null,
				"preferred_plus": 1,
				"accommodation_type": 204
			},
			{
				"hotel_id": 304686,
				"main_photo_id": 260872886,
				"soldout": 0,
				"is_free_cancellable": 1,
				"genius_discount_percentage": 0,
				"is_tpi_exclusive_property": 0,
				"city": "Sharjah",
				"id": "property_card_304686",
				"city_in_trans": "in Sharjah",
				"block_ids": [
					"30468604_399495582_0_42_0"
				],
				"ufi": -782371,
				"is_genius_deal": 0,
				"distances": [],
				"hotel_name": "Citymax Sharjah",
				"checkout": {
					"from": "",
					"until": "12:00"
				},
				"review_score_word": "Good",
				"extended": 0,
				"updated_checkin": null,
				"preferred": 1,
				"has_free_parking": 1,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 25.337013029376,
				"default_language": "en",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/260872886.jpg?k=e2722fbafa16172e03cb39f7a8c3e81b7021eb6292bc18052475f1208a57c98a&o=",
				"longitude": 55.4003982245922,
				"review_score": 7.2,
				"cant_book": null,
				"is_smart_deal": 0,
				"checkin": {
					"until": "",
					"from": "14:00"
				},
				"class": 3,
				"default_wishlist_name": "Sharjah",
				"composite_price_breakdown": {
					"net_amount": {
						"amount_rounded": "$63",
						"value": 63.435883526833,
						"currency": "USD",
						"amount_unrounded": "$63.44"
					},
					"gross_amount_per_night": {
						"value": 31.7179417634165,
						"amount_rounded": "$32",
						"amount_unrounded": "$31.72",
						"currency": "USD"
					},
					"items": [
						{
							"base": {
								"kind": "percentage",
								"percentage": 10
							},
							"details": "10 % City tax",
							"item_amount": {
								"amount_rounded": "$6",
								"value": 6.3435883526833,
								"currency": "USD",
								"amount_unrounded": "$6.34"
							},
							"kind": "charge",
							"name": "City tax",
							"inclusion_type": "excluded"
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "VAT",
							"item_amount": {
								"amount_rounded": "$3",
								"value": 3.48897359397582,
								"currency": "USD",
								"amount_unrounded": "$3.49"
							},
							"base": {
								"percentage": 5,
								"kind": "percentage"
							},
							"details": "5 % VAT"
						},
						{
							"details": "10 % Service charge",
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"item_amount": {
								"value": 6.3435883526833,
								"amount_rounded": "$6",
								"amount_unrounded": "$6.34",
								"currency": "USD"
							},
							"name": "Service charge",
							"kind": "charge",
							"inclusion_type": "excluded"
						}
					],
					"excluded_amount": {
						"value": 16.1761502993424,
						"amount_rounded": "$16",
						"amount_unrounded": "$16.18",
						"currency": "USD"
					},
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"gross_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 233",
						"amount_rounded": "AED 233",
						"value": 233
					},
					"included_taxes_and_charges_amount": {
						"currency": "USD",
						"amount_unrounded": "$0",
						"amount_rounded": "$0",
						"value": 0
					},
					"all_inclusive_amount": {
						"value": 79.6120338261754,
						"amount_rounded": "$80",
						"amount_unrounded": "$79.61",
						"currency": "USD"
					},
					"all_inclusive_amount_hotel_currency": {
						"value": 292.415,
						"amount_rounded": "AED 292",
						"amount_unrounded": "AED 292.42",
						"currency": "AED"
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"translated_copy": "",
						"mode": "extra_charges",
						"amount": {
							"value": 16,
							"currency": "USD"
						}
					},
					"gross_amount": {
						"amount_rounded": "$63",
						"value": 63.435883526833,
						"currency": "USD",
						"amount_unrounded": "$63.44"
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					]
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"accommodation_type": 204,
				"preferred_plus": 0,
				"children_not_allowed": null,
				"is_geo_rate": "",
				"countrycode": "ae",
				"updated_checkout": null,
				"class_is_estimated": 0,
				"timezone": "Asia/Dubai",
				"hotel_name_trans": "Citymax Sharjah",
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: Beds: 1 double or 2 twins",
				"badges": [],
				"hotel_has_vb_boost": 0,
				"min_total_price": 233,
				"review_nr": 5848,
				"is_no_prepayment_block": 0,
				"type": "property_card"
			},
			{
				"hotel_id": 12832186,
				"countrycode": "ae",
				"updated_checkout": null,
				"class_is_estimated": 0,
				"timezone": "Asia/Dubai",
				"accommodation_type": 204,
				"preferred_plus": 1,
				"children_not_allowed": null,
				"is_geo_rate": "",
				"badges": [
					{
						"text": "Getaway Deal",
						"badge_variant": "constructive",
						"id": "Getaway 2021 Deals"
					}
				],
				"hotel_has_vb_boost": 0,
				"min_total_price": 218.96,
				"review_nr": 160,
				"urgency_message": "Only 1 left at this price on Booking.com",
				"is_no_prepayment_block": 0,
				"type": "property_card",
				"hotel_name_trans": "Four Stars Dubai Marina JBR",
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Room with shared bathroom</b>: 1 bed",
				"longitude": 55.1384604350571,
				"review_score": 7.9,
				"cant_book": null,
				"default_language": "ro",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/598596466.jpg?k=f9fa53990271d420a21fb4414ddd0c2723a2a057e65f70ebdb57cde6a3da51c3&o=",
				"class": 0,
				"default_wishlist_name": "Dubai Marina",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"gross_amount": {
						"currency": "USD",
						"amount_unrounded": "$59.61",
						"amount_rounded": "$60",
						"value": 59.6133950945723
					},
					"strikethrough_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$64.80",
						"amount_rounded": "$65",
						"value": 64.7971685810569
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"charges_details": {
						"amount": {
							"currency": "USD",
							"value": 3
						},
						"mode": "extra_charges",
						"translated_copy": ""
					},
					"has_long_stays_monthly_rate_price": 0,
					"strikethrough_amount": {
						"currency": "USD",
						"amount_unrounded": "$129.59",
						"amount_rounded": "$130",
						"value": 129.594337162114
					},
					"discounted_amount": {
						"currency": "USD",
						"amount_unrounded": "$69.98",
						"amount_rounded": "$70",
						"value": 69.9809420675414
					},
					"gross_amount_hotel_currency": {
						"value": 218.96,
						"amount_rounded": "AED 219",
						"amount_unrounded": "AED 218.96",
						"currency": "AED"
					},
					"all_inclusive_amount": {
						"amount_rounded": "$63",
						"value": 62.8532535236252,
						"currency": "USD",
						"amount_unrounded": "$62.85"
					},
					"included_taxes_and_charges_amount": {
						"amount_unrounded": "$0",
						"currency": "USD",
						"value": 0,
						"amount_rounded": "$0"
					},
					"all_inclusive_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 230.86",
						"amount_rounded": "AED 231",
						"value": 230.86
					},
					"net_amount": {
						"value": 59.6133950945723,
						"amount_rounded": "$60",
						"amount_unrounded": "$59.61",
						"currency": "USD"
					},
					"excluded_amount": {
						"amount_rounded": "$3",
						"value": 3.23985842905285,
						"currency": "USD",
						"amount_unrounded": "$3.24"
					},
					"benefits": [
						{
							"icon": null,
							"kind": "badge",
							"details": "This property is offering a discount on stays between Mar 28 and Sep 30, 2025.",
							"identifier": "getaway-2021",
							"badge_variant": "constructive",
							"name": "Getaway Deal"
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"gross_amount_per_night": {
						"amount_rounded": "$30",
						"value": 29.8066975472862,
						"currency": "USD",
						"amount_unrounded": "$29.81"
					},
					"items": [
						{
							"inclusion_type": "included",
							"kind": "charge",
							"name": "City tax",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$0",
								"amount_rounded": "$0",
								"value": 0
							},
							"base": {
								"kind": "percentage",
								"percentage": 0
							},
							"details": "0 % City tax"
						},
						{
							"inclusion_type": "excluded",
							"name": "VAT",
							"kind": "charge",
							"item_amount": {
								"amount_rounded": "$3",
								"value": 3.23985842905285,
								"currency": "USD",
								"amount_unrounded": "$3.24"
							},
							"details": "5 % VAT",
							"base": {
								"percentage": 5,
								"kind": "percentage"
							}
						},
						{
							"name": "Getaway Deal",
							"kind": "discount",
							"item_amount": {
								"value": 64.7971685810569,
								"amount_rounded": "$65",
								"amount_unrounded": "$64.80",
								"currency": "USD"
							},
							"identifier": "campaign_38",
							"details": "This property is offering a discount on stays between Mar 28 and Sep 30, 2025.",
							"base": {
								"kind": "rate"
							}
						},
						{
							"kind": "discount",
							"name": "Booking.com pays",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$5.18",
								"amount_rounded": "$5",
								"value": 5.18377348648455
							},
							"identifier": "BSB",
							"base": {
								"kind": "bsb"
							},
							"details": "You’ll get a reduced rate when you pay online because Booking.com will pay part of the price."
						}
					]
				},
				"is_smart_deal": 0,
				"checkin": {
					"from": "15:00",
					"until": "23:00"
				},
				"review_score_word": "Good",
				"extended": 0,
				"is_genius_deal": 0,
				"distances": [],
				"checkout": {
					"until": "11:30",
					"from": ""
				},
				"hotel_name": "Four Stars Dubai Marina JBR",
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 25.0817121364225,
				"updated_checkin": null,
				"preferred": 1,
				"is_tpi_exclusive_property": 0,
				"id": "property_card_12832186",
				"city": "Dubai Marina, Pinnacle",
				"city_in_trans": "in Dubai Marina",
				"block_ids": [
					"1283218605_411396991_1_0_0"
				],
				"ufi": 900062148,
				"main_photo_id": 598596466,
				"soldout": 0,
				"is_free_cancellable": 0,
				"genius_discount_percentage": 0,
				"has_swimming_pool": 1
			},
			{
				"hotel_id": 7915889,
				"checkin": {
					"from": "15:00",
					"until": ""
				},
				"is_smart_deal": 0,
				"default_wishlist_name": "Ras al Khaimah",
				"composite_price_breakdown": {
					"items": [
						{
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"details": "5 % VAT",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$7.79",
								"amount_rounded": "$8",
								"value": 7.78655051016062
							}
						},
						{
							"name": "Service charge",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": "10 % Service charge",
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"item_amount": {
								"amount_unrounded": "$14.16",
								"currency": "USD",
								"value": 14.1573645639284,
								"amount_rounded": "$14"
							}
						},
						{
							"item_amount": {
								"amount_rounded": "$8",
								"value": 8.16771032534331,
								"currency": "USD",
								"amount_unrounded": "$8.17"
							},
							"details": null,
							"base": {
								"kind": "per_night",
								"base_amount": 15
							},
							"inclusion_type": "excluded",
							"name": "Tourism fee",
							"kind": "charge"
						},
						{
							"inclusion_type": "excluded",
							"name": "Municipality fee",
							"kind": "charge",
							"item_amount": {
								"amount_unrounded": "$9.91",
								"currency": "USD",
								"value": 9.91015519474988,
								"amount_rounded": "$10"
							},
							"details": "7 % Municipality fee",
							"base": {
								"percentage": 7,
								"kind": "percentage"
							}
						}
					],
					"gross_amount_per_night": {
						"value": 70.786822819642,
						"amount_rounded": "$71",
						"amount_unrounded": "$70.79",
						"currency": "USD"
					},
					"excluded_amount": {
						"amount_unrounded": "$40.02",
						"currency": "USD",
						"value": 40.0217805941822,
						"amount_rounded": "$40"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"net_amount": {
						"amount_rounded": "$142",
						"value": 141.573645639284,
						"currency": "USD",
						"amount_unrounded": "$141.57"
					},
					"all_inclusive_amount_hotel_currency": {
						"value": 667,
						"amount_rounded": "AED 667",
						"amount_unrounded": "AED 667",
						"currency": "AED"
					},
					"gross_amount_hotel_currency": {
						"value": 520,
						"amount_rounded": "AED 520",
						"amount_unrounded": "AED 520",
						"currency": "AED"
					},
					"included_taxes_and_charges_amount": {
						"currency": "USD",
						"amount_unrounded": "$0",
						"amount_rounded": "$0",
						"value": 0
					},
					"all_inclusive_amount": {
						"value": 181.595426233466,
						"amount_rounded": "$182",
						"amount_unrounded": "$181.60",
						"currency": "USD"
					},
					"charges_details": {
						"amount": {
							"currency": "USD",
							"value": 40
						},
						"translated_copy": "",
						"mode": "extra_charges"
					},
					"has_long_stays_monthly_rate_price": 0,
					"gross_amount": {
						"amount_unrounded": "$141.57",
						"currency": "USD",
						"value": 141.573645639284,
						"amount_rounded": "$142"
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"value": 1,
							"key": "use_js_tracking"
						}
					]
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"class": 4,
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/591484573.jpg?k=01ca5229450e2844c99e31d20c7c581390b4e587fde29ea99a9670ea930d1ad7&o=",
				"currencycode": "AED",
				"default_language": "en",
				"longitude": 55.75027,
				"review_score": 7.6,
				"cant_book": null,
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: 2 beds",
				"hotel_name_trans": "Radisson Resort Ras Al Khaimah Marjan Island",
				"badges": [],
				"hotel_has_vb_boost": 0,
				"is_no_prepayment_block": 1,
				"type": "property_card",
				"min_total_price": 520,
				"review_nr": 5338,
				"children_not_allowed": null,
				"accommodation_type": 206,
				"preferred_plus": 0,
				"is_geo_rate": "",
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"timezone": "Asia/Dubai",
				"soldout": 0,
				"is_free_cancellable": 1,
				"main_photo_id": 591484573,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"id": "property_card_7915889",
				"city": "Ras Al-Khaimah",
				"city_in_trans": "in Ras al Khaimah",
				"is_tpi_exclusive_property": 0,
				"ufi": -784007,
				"block_ids": [
					"791588901_338960137_2_42_0"
				],
				"preferred": 1,
				"updated_checkin": null,
				"has_free_parking": 1,
				"latitude": 25.6802,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"distances": [],
				"is_genius_deal": 0,
				"checkout": {
					"from": "",
					"until": "12:00"
				},
				"hotel_name": "Radisson Resort Ras Al Khaimah Marjan Island",
				"review_score_word": "Good",
				"extended": 0
			},
			{
				"hotel_id": 14266380,
				"timezone": "Asia/Dubai",
				"updated_checkout": null,
				"countrycode": "ae",
				"class_is_estimated": 0,
				"is_geo_rate": "",
				"preferred_plus": 0,
				"accommodation_type": 204,
				"children_not_allowed": null,
				"review_nr": 8,
				"min_total_price": 498,
				"urgency_message": "Only 1 left at this price on Booking.com",
				"type": "property_card",
				"is_no_prepayment_block": 1,
				"hotel_has_vb_boost": 0,
				"badges": [],
				"hotel_name_trans": "Abu Dhabi Villa Full Studio Apartments",
				"unit_configuration_label": "<b>Entire apartment</b>: 1 bed • 1 bedroom • 1 bathroom",
				"hotel_include_breakfast": 0,
				"cant_book": null,
				"review_score": 4.2,
				"longitude": 54.3629437926354,
				"default_language": "en",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/690426612.jpg?k=8abfd31be514f92589ed4edc83551fecb4ae2a3ede9b552981f93a293fa02a34&o=",
				"currencycode": "AED",
				"class": 5,
				"composite_price_breakdown": {
					"net_amount": {
						"value": 135.583991400699,
						"amount_rounded": "$136",
						"amount_unrounded": "$135.58",
						"currency": "USD"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"excluded_amount": {
						"amount_rounded": "$26",
						"value": 25.7609583661328,
						"currency": "USD",
						"amount_unrounded": "$25.76"
					},
					"gross_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$67.79",
						"amount_rounded": "$68",
						"value": 67.7919957003494
					},
					"items": [
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$13.56",
								"amount_rounded": "$14",
								"value": 13.5583991400699
							},
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"details": "10 % City tax",
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "City tax"
						},
						{
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"details": "5 % VAT",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$6.78",
								"amount_rounded": "$7",
								"value": 6.77919957003494
							}
						},
						{
							"item_amount": {
								"amount_rounded": "$5",
								"value": 5.42335965602796,
								"currency": "USD",
								"amount_unrounded": "$5.42"
							},
							"details": "4 % Tourism fee",
							"base": {
								"kind": "percentage",
								"percentage": 4
							},
							"inclusion_type": "excluded",
							"name": "Tourism fee",
							"kind": "charge"
						}
					],
					"included_taxes_and_charges_amount": {
						"value": 0,
						"amount_rounded": "$0",
						"amount_unrounded": "$0",
						"currency": "USD"
					},
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$161.34",
						"amount_rounded": "$161",
						"value": 161.344949766832
					},
					"gross_amount_hotel_currency": {
						"value": 498,
						"amount_rounded": "AED 498",
						"amount_unrounded": "AED 498",
						"currency": "AED"
					},
					"all_inclusive_amount_hotel_currency": {
						"amount_unrounded": "AED 592.62",
						"currency": "AED",
						"value": 592.62,
						"amount_rounded": "AED 593"
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"value": 1,
							"key": "use_js_tracking"
						}
					],
					"gross_amount": {
						"amount_rounded": "$136",
						"value": 135.583991400699,
						"currency": "USD",
						"amount_unrounded": "$135.58"
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"amount": {
							"value": 26,
							"currency": "USD"
						},
						"translated_copy": "",
						"mode": "extra_charges"
					}
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"default_wishlist_name": "Sabkhah",
				"is_smart_deal": 0,
				"checkin": {
					"until": "23:00",
					"from": "14:00"
				},
				"extended": 0,
				"review_score_word": "Disappointing",
				"hotel_name": "Abu Dhabi Villa Full Studio Apartments",
				"checkout": {
					"from": "11:00",
					"until": "12:00"
				},
				"is_genius_deal": 0,
				"distances": [],
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 24.4660165660486,
				"updated_checkin": null,
				"preferred": 0,
				"block_ids": [
					"1426638001_414244805_2_0_0"
				],
				"ufi": -784097,
				"is_tpi_exclusive_property": 0,
				"city_in_trans": "in Sabkhah",
				"city": "Abu Dhabi",
				"id": "property_card_14266380",
				"genius_discount_percentage": 0,
				"main_photo_id": 690426612,
				"is_free_cancellable": 1,
				"soldout": 0
			},
			{
				"hotel_id": 7181225,
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/562790074.jpg?k=a5feb1d6686ef9eceb10e6243a8875a44045e7cdaab9b8052d0fd2fa6c803d41&o=",
				"currencycode": "AED",
				"default_language": "xu",
				"review_score": 8.1,
				"longitude": 55.1564700126419,
				"cant_book": null,
				"checkin": {
					"until": "00:00",
					"from": "14:00"
				},
				"is_smart_deal": 0,
				"composite_price_breakdown": {
					"all_inclusive_amount_hotel_currency": {
						"amount_unrounded": "AED 287.04",
						"currency": "AED",
						"value": 287.04494976093,
						"amount_rounded": "AED 287"
					},
					"gross_amount_hotel_currency": {
						"value": 222.914369814342,
						"amount_rounded": "AED 223",
						"amount_unrounded": "AED 222.91",
						"currency": "AED"
					},
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$78.15",
						"amount_rounded": "$78",
						"value": 78.15
					},
					"included_taxes_and_charges_amount": {
						"currency": "USD",
						"amount_unrounded": "$0",
						"amount_rounded": "$0",
						"value": 0
					},
					"items": [
						{
							"item_amount": {
								"value": 2.4,
								"amount_rounded": "$2",
								"amount_unrounded": "$2.40",
								"currency": "USD"
							},
							"details": null,
							"base": {
								"kind": "per_stay",
								"base_amount": 2.4
							},
							"inclusion_type": "excluded",
							"name": "VAT",
							"kind": "charge"
						},
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$3.82",
								"amount_rounded": "$4",
								"value": 3.82
							},
							"base": {
								"kind": "per_stay",
								"base_amount": 3.82
							},
							"details": null,
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Tourism fee"
						},
						{
							"item_amount": {
								"value": 4.38,
								"amount_rounded": "$4",
								"amount_unrounded": "$4.38",
								"currency": "USD"
							},
							"base": {
								"base_amount": 4.38,
								"kind": "per_stay"
							},
							"details": null,
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Service charge"
						},
						{
							"base": {
								"kind": "per_stay",
								"base_amount": 2.5
							},
							"details": null,
							"item_amount": {
								"amount_rounded": "$3",
								"value": 2.5,
								"currency": "USD",
								"amount_unrounded": "$2.50"
							},
							"kind": "charge",
							"name": "Cleaning fee",
							"inclusion_type": "excluded"
						},
						{
							"base": {
								"kind": "per_stay",
								"base_amount": 4.36
							},
							"details": null,
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$4.36",
								"amount_rounded": "$4",
								"value": 4.36
							},
							"kind": "charge",
							"name": "Municipality fee",
							"inclusion_type": "excluded"
						}
					],
					"gross_amount_per_night": {
						"amount_unrounded": "$30.34",
						"currency": "USD",
						"value": 30.345,
						"amount_rounded": "$30"
					},
					"excluded_amount": {
						"amount_unrounded": "$17.46",
						"currency": "USD",
						"value": 17.46,
						"amount_rounded": "$17"
					},
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"net_amount": {
						"value": 60.69,
						"amount_rounded": "$61",
						"amount_unrounded": "$60.69",
						"currency": "USD"
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"translated_copy": "",
						"mode": "extra_charges",
						"amount": {
							"currency": "USD",
							"value": 17
						}
					},
					"gross_amount": {
						"value": 60.69,
						"amount_rounded": "$61",
						"amount_unrounded": "$60.69",
						"currency": "USD"
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					]
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"default_wishlist_name": "Dubai",
				"class": 2,
				"children_not_allowed": null,
				"preferred_plus": 1,
				"accommodation_type": 204,
				"is_geo_rate": "",
				"class_is_estimated": 0,
				"updated_checkout": null,
				"countrycode": "ae",
				"timezone": "Asia/Dubai",
				"unit_configuration_label": "<b>Hotel room</b>: 2 beds",
				"hotel_include_breakfast": 0,
				"hotel_name_trans": "Resivation Hotel",
				"hotel_has_vb_boost": 0,
				"badges": [],
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"review_nr": 3801,
				"min_total_price": 222.914369814342,
				"is_free_cancellable": 0,
				"soldout": 0,
				"main_photo_id": 562790074,
				"genius_discount_percentage": 0,
				"city_in_trans": "in Dubai",
				"id": "property_card_7181225",
				"city": "Dubai",
				"is_tpi_exclusive_property": 0,
				"ufi": -782831,
				"block_ids": [
					"718122501_0_1_0_0"
				],
				"distances": [],
				"is_genius_deal": 0,
				"hotel_name": "Resivation Hotel",
				"checkout": {
					"from": "00:00",
					"until": "12:00"
				},
				"review_score_word": "Very Good",
				"extended": 0,
				"updated_checkin": null,
				"preferred": 1,
				"has_free_parking": 1,
				"latitude": 25.022261805275,
				"bwallet": {
					"hotel_eligibility": 0
				}
			},
			{
				"hotel_id": 3397616,
				"is_free_cancellable": 0,
				"soldout": 0,
				"main_photo_id": 711612697,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"city_in_trans": "in Ajman ",
				"id": "property_card_3397616",
				"city": "Ajman",
				"is_tpi_exclusive_property": 0,
				"ufi": -782102,
				"block_ids": [
					"339761601_0_1_0_0"
				],
				"preferred": 1,
				"updated_checkin": null,
				"has_free_parking": 1,
				"latitude": 25.408398,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"distances": [],
				"is_genius_deal": 0,
				"checkout": {
					"from": "",
					"until": "12:00"
				},
				"hotel_name": "Wyndham Garden Ajman Corniche",
				"review_score_word": "Excellent",
				"extended": 0,
				"checkin": {
					"until": "",
					"from": "14:00"
				},
				"is_smart_deal": 0,
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"gross_amount": {
						"value": 115.44,
						"amount_rounded": "$115",
						"amount_unrounded": "$115.44",
						"currency": "USD"
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"mode": "extra_charges",
						"translated_copy": "",
						"amount": {
							"value": 18,
							"currency": "USD"
						}
					},
					"gross_amount_hotel_currency": {
						"value": 424.011119646856,
						"amount_rounded": "AED 424",
						"amount_unrounded": "AED 424.01",
						"currency": "AED"
					},
					"included_taxes_and_charges_amount": {
						"amount_unrounded": "$0",
						"currency": "USD",
						"value": 0,
						"amount_rounded": "$0"
					},
					"all_inclusive_amount": {
						"amount_unrounded": "$133.34",
						"currency": "USD",
						"value": 133.34,
						"amount_rounded": "$133"
					},
					"all_inclusive_amount_hotel_currency": {
						"value": 489.757819592098,
						"amount_rounded": "AED 490",
						"amount_unrounded": "AED 489.76",
						"currency": "AED"
					},
					"net_amount": {
						"currency": "USD",
						"amount_unrounded": "$115.44",
						"amount_rounded": "$115",
						"value": 115.44
					},
					"excluded_amount": {
						"amount_unrounded": "$17.90",
						"currency": "USD",
						"value": 17.9,
						"amount_rounded": "$18"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"gross_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$57.72",
						"amount_rounded": "$58",
						"value": 57.72
					},
					"items": [
						{
							"item_amount": {
								"amount_unrounded": "$7.80",
								"currency": "USD",
								"value": 7.8,
								"amount_rounded": "$8"
							},
							"details": null,
							"base": {
								"base_amount": 7.8,
								"kind": "per_stay"
							},
							"inclusion_type": "excluded",
							"name": "VAT",
							"kind": "charge"
						},
						{
							"base": {
								"kind": "per_stay",
								"base_amount": 10.1
							},
							"details": null,
							"item_amount": {
								"amount_unrounded": "$10.10",
								"currency": "USD",
								"value": 10.1,
								"amount_rounded": "$10"
							},
							"kind": "charge",
							"name": "Service charge",
							"inclusion_type": "excluded"
						}
					]
				},
				"default_wishlist_name": "Ajman",
				"class": 4,
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/711612697.jpg?k=c3eed60f8f0f313e2ef856b4da92512b0472c24e67c25a0794137d4ee5f72e6d&o=",
				"currencycode": "AED",
				"default_language": "en",
				"review_score": 8.7,
				"longitude": 55.433064,
				"cant_book": null,
				"unit_configuration_label": "<b>Hotel room</b>: 1 bed",
				"hotel_include_breakfast": 0,
				"hotel_name_trans": "Wyndham Garden Ajman Corniche",
				"hotel_has_vb_boost": 0,
				"badges": [],
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"review_nr": 2322,
				"min_total_price": 424.011119646856,
				"children_not_allowed": null,
				"preferred_plus": 0,
				"accommodation_type": 204,
				"is_geo_rate": "",
				"class_is_estimated": 0,
				"updated_checkout": null,
				"countrycode": "ae",
				"timezone": "Asia/Dubai"
			},
			{
				"hotel_id": 5922590,
				"main_photo_id": 233764740,
				"is_free_cancellable": 0,
				"soldout": 0,
				"genius_discount_percentage": 0,
				"has_swimming_pool": 1,
				"is_tpi_exclusive_property": 0,
				"city_in_trans": "in Dubai",
				"city": "Dubai",
				"id": "property_card_5922590",
				"block_ids": [
					"592259001_0_1_0_0"
				],
				"ufi": -782831,
				"is_genius_deal": 0,
				"distances": [],
				"hotel_name": "Lemon Tree Hotel, Jumeirah Dubai",
				"checkout": {
					"until": "12:00",
					"from": ""
				},
				"review_score_word": "Excellent",
				"extended": 0,
				"updated_checkin": null,
				"preferred": 1,
				"has_free_parking": 1,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 25.1385401993504,
				"default_language": "xu",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/233764740.jpg?k=842099afa1b015ce6558f7d8a15a2a9d22d6c4f9ece7aea0a662abfa2cebeb80&o=",
				"review_score": 8.8,
				"longitude": 55.2036981098175,
				"cant_book": null,
				"is_smart_deal": 0,
				"checkin": {
					"from": "14:00",
					"until": ""
				},
				"class": 4,
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"net_amount": {
						"amount_unrounded": "$91.44",
						"currency": "USD",
						"value": 91.44,
						"amount_rounded": "$91"
					},
					"gross_amount_per_night": {
						"amount_rounded": "$46",
						"value": 45.72,
						"currency": "USD",
						"amount_unrounded": "$45.72"
					},
					"items": [
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "VAT",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$4.42",
								"amount_rounded": "$4",
								"value": 4.42
							},
							"base": {
								"base_amount": 4.42,
								"kind": "per_stay"
							},
							"details": null
						},
						{
							"item_amount": {
								"value": 8.06,
								"amount_rounded": "$8",
								"amount_unrounded": "$8.06",
								"currency": "USD"
							},
							"details": null,
							"base": {
								"base_amount": 8.06,
								"kind": "per_stay"
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						},
						{
							"details": null,
							"base": {
								"kind": "per_stay",
								"base_amount": 8.1
							},
							"item_amount": {
								"value": 8.1,
								"amount_rounded": "$8",
								"amount_unrounded": "$8.10",
								"currency": "USD"
							},
							"name": "Municipality fee",
							"kind": "charge",
							"inclusion_type": "excluded"
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"excluded_amount": {
						"amount_rounded": "$21",
						"value": 20.58,
						"currency": "USD",
						"amount_unrounded": "$20.58"
					},
					"all_inclusive_amount": {
						"value": 112.02,
						"amount_rounded": "$112",
						"amount_unrounded": "$112.02",
						"currency": "USD"
					},
					"included_taxes_and_charges_amount": {
						"amount_unrounded": "$0",
						"currency": "USD",
						"value": 0,
						"amount_rounded": "$0"
					},
					"gross_amount_hotel_currency": {
						"amount_rounded": "AED 336",
						"value": 335.859119720275,
						"currency": "AED",
						"amount_unrounded": "AED 335.86"
					},
					"all_inclusive_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 411.45",
						"amount_rounded": "AED 411",
						"value": 411.449459657318
					},
					"charges_details": {
						"mode": "extra_charges",
						"translated_copy": "",
						"amount": {
							"currency": "USD",
							"value": 21
						}
					},
					"has_long_stays_monthly_rate_price": 0,
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"gross_amount": {
						"amount_rounded": "$91",
						"value": 91.44,
						"currency": "USD",
						"amount_unrounded": "$91.44"
					}
				},
				"default_wishlist_name": "Dubai",
				"preferred_plus": 1,
				"accommodation_type": 204,
				"children_not_allowed": null,
				"is_geo_rate": "",
				"updated_checkout": null,
				"countrycode": "ae",
				"class_is_estimated": 0,
				"timezone": "Asia/Dubai",
				"hotel_name_trans": "Lemon Tree Hotel, Jumeirah Dubai",
				"unit_configuration_label": "<b>Hotel room</b>: Beds: 1 double or 2 twins",
				"hotel_include_breakfast": 0,
				"hotel_has_vb_boost": 0,
				"badges": [],
				"review_nr": 3054,
				"min_total_price": 335.859119720275,
				"type": "property_card",
				"is_no_prepayment_block": 0
			},
			{
				"hotel_id": 1405670,
				"class": 4,
				"composite_price_breakdown": {
					"strikethrough_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$45.63",
						"amount_rounded": "$46",
						"value": 45.6329975876931
					},
					"gross_amount": {
						"currency": "USD",
						"amount_unrounded": "$83.96",
						"amount_rounded": "$84",
						"value": 83.9640621445292
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"value": 1,
							"key": "use_js_tracking"
						}
					],
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"mode": "extra_charges",
						"translated_copy": "",
						"amount": {
							"currency": "USD",
							"value": 29
						}
					},
					"discounted_amount": {
						"value": 7.30193303085692,
						"amount_rounded": "$7",
						"amount_unrounded": "$7.30",
						"currency": "USD"
					},
					"strikethrough_amount": {
						"value": 91.2659951753861,
						"amount_rounded": "$91",
						"amount_unrounded": "$91.27",
						"currency": "USD"
					},
					"all_inclusive_amount_hotel_currency": {
						"value": 413.8245,
						"amount_rounded": "AED 414",
						"amount_unrounded": "AED 413.82",
						"currency": "AED"
					},
					"gross_amount_hotel_currency": {
						"value": 308.4,
						"amount_rounded": "AED 308",
						"amount_unrounded": "AED 308.40",
						"currency": "AED"
					},
					"included_taxes_and_charges_amount": {
						"value": 0,
						"amount_rounded": "$0",
						"amount_unrounded": "$0",
						"currency": "USD"
					},
					"all_inclusive_amount": {
						"value": 112.666621384334,
						"amount_rounded": "$113",
						"amount_unrounded": "$112.67",
						"currency": "USD"
					},
					"excluded_amount": {
						"amount_unrounded": "$28.70",
						"currency": "USD",
						"value": 28.7025592398052,
						"amount_rounded": "$29"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"gross_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$41.98",
						"amount_rounded": "$42",
						"value": 41.9820310722646
					},
					"items": [
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$5.02",
								"amount_rounded": "$5",
								"value": 5.01962973464624
							},
							"details": "5 % VAT",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"inclusion_type": "excluded",
							"name": "VAT",
							"kind": "charge"
						},
						{
							"base": {
								"kind": "percentage",
								"percentage": 10
							},
							"details": "10 % Service charge",
							"item_amount": {
								"value": 9.12659951753861,
								"amount_rounded": "$9",
								"amount_unrounded": "$9.13",
								"currency": "USD"
							},
							"kind": "charge",
							"name": "Service charge",
							"inclusion_type": "excluded"
						},
						{
							"base": {
								"base_amount": 15,
								"kind": "per_night"
							},
							"details": null,
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$8.17",
								"amount_rounded": "$8",
								"value": 8.16771032534331
							},
							"kind": "charge",
							"name": "Tourism fee",
							"inclusion_type": "excluded"
						},
						{
							"item_amount": {
								"amount_unrounded": "$6.39",
								"currency": "USD",
								"value": 6.38861966227703,
								"amount_rounded": "$6"
							},
							"base": {
								"kind": "percentage",
								"percentage": 7
							},
							"details": "7 % Municipality fee",
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Municipality fee"
						},
						{
							"item_amount": {
								"value": 7.30193303085691,
								"amount_rounded": "$7",
								"amount_unrounded": "$7.30",
								"currency": "USD"
							},
							"identifier": "BSB",
							"base": {
								"kind": "bsb"
							},
							"details": "You’ll get a reduced rate when you pay online because Booking.com will pay part of the price.",
							"kind": "discount",
							"name": "Booking.com pays"
						}
					],
					"net_amount": {
						"amount_rounded": "$84",
						"value": 83.9640621445292,
						"currency": "USD",
						"amount_unrounded": "$83.96"
					}
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"default_wishlist_name": "Dubai",
				"is_smart_deal": 0,
				"checkin": {
					"from": "14:00",
					"until": ""
				},
				"cant_book": null,
				"review_score": 8.2,
				"longitude": 55.1961413025856,
				"default_language": "en",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/509742131.jpg?k=d192b813d913552aea39a51b529b431c422e2fb872b99a603f1b86339f628ca1&o=",
				"review_nr": 7628,
				"min_total_price": 308.4,
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"hotel_has_vb_boost": 0,
				"badges": [],
				"hotel_name_trans": "Flora Al Barsha Hotel At The Mall",
				"unit_configuration_label": "<b>Hotel room</b>: 1 bed",
				"hotel_include_breakfast": 0,
				"timezone": "Asia/Dubai",
				"updated_checkout": null,
				"countrycode": "ae",
				"class_is_estimated": 0,
				"is_geo_rate": 1,
				"preferred_plus": 1,
				"accommodation_type": 204,
				"children_not_allowed": null,
				"block_ids": [
					"140567008_413086964_2_42_0"
				],
				"ufi": -782831,
				"is_tpi_exclusive_property": 0,
				"city_in_trans": "in Dubai",
				"city": "Dubai",
				"id": "property_card_1405670",
				"genius_discount_percentage": 0,
				"has_swimming_pool": 1,
				"main_photo_id": 509742131,
				"is_free_cancellable": 1,
				"soldout": 0,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 25.1175270085305,
				"has_free_parking": 1,
				"preferred": 1,
				"updated_checkin": null,
				"extended": 0,
				"review_score_word": "Very Good",
				"checkout": {
					"from": "",
					"until": "12:00"
				},
				"hotel_name": "Flora Al Barsha Hotel At The Mall",
				"is_genius_deal": 0,
				"distances": []
			},
			{
				"hotel_id": 6179144,
				"extended": 0,
				"review_score_word": "Very Good",
				"booking_home": {
					"segment": 1,
					"is_booking_home": 1,
					"group": "apartment_like",
					"quality_class": 5,
					"is_single_unit_property": ""
				},
				"checkout": {
					"until": "12:30",
					"from": "12:00"
				},
				"hotel_name": "Dusit Princess Residences Dubai Marina",
				"distances": [],
				"is_genius_deal": 0,
				"latitude": 25.0830982636942,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"has_free_parking": 1,
				"updated_checkin": null,
				"preferred": 1,
				"ufi": -782831,
				"block_ids": [
					"617914404_241280473_2_0_0"
				],
				"id": "property_card_6179144",
				"city": "Dubai",
				"city_in_trans": "in Dubai",
				"is_tpi_exclusive_property": 0,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"soldout": 0,
				"is_free_cancellable": 0,
				"main_photo_id": 555928298,
				"timezone": "Asia/Dubai",
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"is_geo_rate": "",
				"children_not_allowed": null,
				"accommodation_type": 201,
				"preferred_plus": 1,
				"is_no_prepayment_block": 0,
				"type": "property_card",
				"min_total_price": 527.85,
				"review_nr": 3014,
				"badges": [
					{
						"badge_variant": "constructive",
						"id": "Getaway 2021 Deals",
						"text": "Getaway Deal"
					}
				],
				"hotel_has_vb_boost": 0,
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Entire apartment – 80 m²</b>: 1 bed • 1 bedroom • 1 living room • 2 bathrooms",
				"hotel_name_trans": "Dusit Princess Residences Dubai Marina",
				"cant_book": null,
				"longitude": 55.1444398234177,
				"review_score": 8.4,
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/555928298.jpg?k=bb0fcdf2fcf71a1192f85de74e9630e530e1d5ebdaae9976701d9b88780068d1&o=",
				"currencycode": "AED",
				"default_language": "en",
				"default_wishlist_name": "Dubai",
				"composite_price_breakdown": {
					"charges_details": {
						"amount": {
							"value": 30,
							"currency": "USD"
						},
						"translated_copy": "",
						"mode": "extra_charges"
					},
					"has_long_stays_monthly_rate_price": 0,
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"strikethrough_amount_per_night": {
						"currency": "USD",
						"amount_unrounded": "$104.14",
						"amount_rounded": "$104",
						"value": 104.138306648127
					},
					"gross_amount": {
						"amount_unrounded": "$143.71",
						"currency": "USD",
						"value": 143.710863174415,
						"amount_rounded": "$144"
					},
					"discounted_amount": {
						"amount_rounded": "$65",
						"value": 64.5657501218388,
						"currency": "USD",
						"amount_unrounded": "$64.57"
					},
					"strikethrough_amount": {
						"amount_unrounded": "$208.28",
						"currency": "USD",
						"value": 208.276613296254,
						"amount_rounded": "$208"
					},
					"all_inclusive_amount_hotel_currency": {
						"amount_rounded": "AED 637",
						"value": 636.78125,
						"currency": "AED",
						"amount_unrounded": "AED 636.78"
					},
					"included_taxes_and_charges_amount": {
						"amount_unrounded": "$0",
						"currency": "USD",
						"value": 0,
						"amount_rounded": "$0"
					},
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$173.37",
						"amount_rounded": "$173",
						"value": 173.368159687001
					},
					"gross_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 527.85",
						"amount_rounded": "AED 528",
						"value": 527.85
					},
					"items": [
						{
							"item_amount": {
								"value": 0,
								"amount_rounded": "$0",
								"amount_unrounded": "$0",
								"currency": "USD"
							},
							"details": "0 % City tax",
							"base": {
								"percentage": 0,
								"kind": "percentage"
							},
							"inclusion_type": "included",
							"name": "City tax",
							"kind": "charge"
						},
						{
							"name": "VAT",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": "5 % VAT",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"item_amount": {
								"value": 8.59142391132103,
								"amount_rounded": "$9",
								"amount_unrounded": "$8.59",
								"currency": "USD"
							}
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Tourism fee",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$5.45",
								"amount_rounded": "$5",
								"value": 5.44514021689554
							},
							"base": {
								"kind": "per_night",
								"base_amount": 10
							},
							"details": null
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Service charge",
							"item_amount": {
								"amount_rounded": "$16",
								"value": 15.6207459972191,
								"currency": "USD",
								"amount_unrounded": "$15.62"
							},
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"details": "10 % Service charge"
						},
						{
							"kind": "discount",
							"name": "Getaway Deal",
							"base": {
								"kind": "rate"
							},
							"details": "This property is offering a discount on stays between Mar 28 and Sep 30, 2025.",
							"item_amount": {
								"amount_rounded": "$52",
								"value": 52.0691533240636,
								"currency": "USD",
								"amount_unrounded": "$52.07"
							},
							"identifier": "campaign_38"
						},
						{
							"details": "You’ll get a reduced rate when you pay online because Booking.com will pay part of the price.",
							"base": {
								"kind": "bsb"
							},
							"identifier": "BSB",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$12.50",
								"amount_rounded": "$12",
								"value": 12.4965967977753
							},
							"name": "Booking.com pays",
							"kind": "discount"
						}
					],
					"gross_amount_per_night": {
						"value": 71.8554315872077,
						"amount_rounded": "$72",
						"amount_unrounded": "$71.86",
						"currency": "USD"
					},
					"benefits": [
						{
							"details": "This property is offering a discount on stays between Mar 28 and Sep 30, 2025.",
							"badge_variant": "constructive",
							"identifier": "getaway-2021",
							"name": "Getaway Deal",
							"kind": "badge",
							"icon": null
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"excluded_amount": {
						"currency": "USD",
						"amount_unrounded": "$29.66",
						"amount_rounded": "$30",
						"value": 29.6573101254356
					},
					"net_amount": {
						"amount_unrounded": "$143.71",
						"currency": "USD",
						"value": 143.710863174416,
						"amount_rounded": "$144"
					}
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"class": 0,
				"checkin": {
					"from": "14:00",
					"until": ""
				},
				"is_smart_deal": 0
			},
			{
				"hotel_id": 7085071,
				"city": "Dubai",
				"id": "property_card_7085071",
				"city_in_trans": "in Dubai",
				"is_tpi_exclusive_property": 0,
				"ufi": -782831,
				"block_ids": [
					"708507126_393096876_2_42_0"
				],
				"soldout": 0,
				"is_free_cancellable": 0,
				"main_photo_id": 551820324,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"latitude": 25.1179844776,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"updated_checkin": null,
				"preferred": 1,
				"has_free_parking": 1,
				"review_score_word": "Excellent",
				"extended": 0,
				"distances": [],
				"is_genius_deal": 0,
				"checkout": {
					"from": "",
					"until": "11:00"
				},
				"hotel_name": "Th8 Palm Dubai Beach Resort, Vignette Collection by IHG",
				"default_wishlist_name": "Dubai",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"gross_amount_hotel_currency": {
						"amount_rounded": "AED 1,148",
						"value": 1148,
						"currency": "AED",
						"amount_unrounded": "AED 1,148"
					},
					"all_inclusive_amount": {
						"amount_rounded": "$394",
						"value": 393.765314784801,
						"currency": "USD",
						"amount_unrounded": "$393.77"
					},
					"included_taxes_and_charges_amount": {
						"value": 0,
						"amount_rounded": "$0",
						"amount_unrounded": "$0",
						"currency": "USD"
					},
					"all_inclusive_amount_hotel_currency": {
						"value": 1446.3,
						"amount_rounded": "AED 1,446",
						"amount_unrounded": "AED 1,446.30",
						"currency": "AED"
					},
					"net_amount": {
						"currency": "USD",
						"amount_unrounded": "$312.55",
						"amount_rounded": "$313",
						"value": 312.551048449804
					},
					"items": [
						{
							"base": {
								"percentage": 5,
								"kind": "percentage"
							},
							"details": "5 % VAT",
							"item_amount": {
								"amount_unrounded": "$17.19",
								"currency": "USD",
								"value": 17.1903076647392,
								"amount_rounded": "$17"
							},
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded"
						},
						{
							"base": {
								"kind": "percentage",
								"percentage": 10
							},
							"details": "10 % Service charge",
							"item_amount": {
								"value": 31.2551048449804,
								"amount_rounded": "$31",
								"amount_unrounded": "$31.26",
								"currency": "USD"
							},
							"kind": "charge",
							"name": "Service charge",
							"inclusion_type": "excluded"
						},
						{
							"name": "Municipality fee",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": "7 % Municipality fee",
							"base": {
								"percentage": 7,
								"kind": "percentage"
							},
							"item_amount": {
								"value": 21.8785733914863,
								"amount_rounded": "$22",
								"amount_unrounded": "$21.88",
								"currency": "USD"
							}
						},
						{
							"kind": "charge",
							"name": "Tourism fee",
							"inclusion_type": "excluded",
							"base": {
								"base_amount": 20,
								"kind": "per_night"
							},
							"details": null,
							"item_amount": {
								"amount_rounded": "$11",
								"value": 10.8902804337911,
								"currency": "USD",
								"amount_unrounded": "$10.89"
							}
						}
					],
					"gross_amount_per_night": {
						"amount_rounded": "$156",
						"value": 156.275524224902,
						"currency": "USD",
						"amount_unrounded": "$156.28"
					},
					"excluded_amount": {
						"amount_rounded": "$81",
						"value": 81.2142663349969,
						"currency": "USD",
						"amount_unrounded": "$81.21"
					},
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"translated_copy": "",
						"mode": "extra_charges",
						"amount": {
							"value": 81,
							"currency": "USD"
						}
					},
					"gross_amount": {
						"amount_rounded": "$313",
						"value": 312.551048449804,
						"currency": "USD",
						"amount_unrounded": "$312.55"
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"value": 0,
							"key": "use_nightly_as_dominant"
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					]
				},
				"class": 5,
				"checkin": {
					"from": "15:00",
					"until": ""
				},
				"is_smart_deal": 0,
				"longitude": 55.1099505499,
				"review_score": 8.6,
				"cant_book": null,
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/551820324.jpg?k=d1934e621f883092d180c342db6ffe74111f3241fad03683b551f986fb3df045&o=",
				"default_language": "ar",
				"badges": [],
				"hotel_has_vb_boost": 1,
				"type": "property_card",
				"is_no_prepayment_block": 1,
				"min_total_price": 1148,
				"review_nr": 2092,
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: 1 bed",
				"hotel_name_trans": "Th8 Palm Dubai Beach Resort, Vignette Collection by IHG",
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"timezone": "Asia/Dubai",
				"children_not_allowed": null,
				"accommodation_type": 206,
				"preferred_plus": 0,
				"is_geo_rate": ""
			},
			{
				"hotel_id": 5468051,
				"preferred": 1,
				"updated_checkin": null,
				"has_free_parking": 1,
				"latitude": 25.0539662310156,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"distances": [],
				"is_genius_deal": 0,
				"hotel_name": "FIVE Jumeirah Village",
				"checkout": {
					"until": "12:00",
					"from": "00:00"
				},
				"review_score_word": "Wonderful",
				"extended": 0,
				"soldout": 0,
				"is_free_cancellable": 0,
				"main_photo_id": 213805052,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"city": "Dubai",
				"id": "property_card_5468051",
				"city_in_trans": "in Dubai",
				"is_tpi_exclusive_property": 0,
				"ufi": -782831,
				"block_ids": [
					"546805104_0_1_0_0"
				],
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: 2 beds",
				"hotel_name_trans": "FIVE Jumeirah Village",
				"badges": [],
				"hotel_has_vb_boost": 1,
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"min_total_price": 382.506219681424,
				"review_nr": 34180,
				"children_not_allowed": null,
				"accommodation_type": 204,
				"preferred_plus": 0,
				"is_geo_rate": "",
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"timezone": "Asia/Dubai",
				"checkin": {
					"until": "00:00",
					"from": "15:00"
				},
				"is_smart_deal": 0,
				"default_wishlist_name": "Dubai",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"included_taxes_and_charges_amount": {
						"amount_rounded": "$0",
						"value": 0,
						"currency": "USD",
						"amount_unrounded": "$0"
					},
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$138.48",
						"amount_rounded": "$138",
						"value": 138.48
					},
					"gross_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 382.51",
						"amount_rounded": "AED 383",
						"value": 382.506219681424
					},
					"all_inclusive_amount_hotel_currency": {
						"currency": "AED",
						"amount_unrounded": "AED 508.64",
						"amount_rounded": "AED 509",
						"value": 508.637039576374
					},
					"net_amount": {
						"currency": "USD",
						"amount_unrounded": "$104.14",
						"amount_rounded": "$104",
						"value": 104.14
					},
					"gross_amount_per_night": {
						"amount_unrounded": "$52.07",
						"currency": "USD",
						"value": 52.07,
						"amount_rounded": "$52"
					},
					"items": [
						{
							"inclusion_type": "excluded",
							"name": "VAT",
							"kind": "charge",
							"item_amount": {
								"value": 4.86,
								"amount_rounded": "$5",
								"amount_unrounded": "$4.86",
								"currency": "USD"
							},
							"details": null,
							"base": {
								"kind": "per_stay",
								"base_amount": 4.86
							}
						},
						{
							"details": null,
							"base": {
								"base_amount": 10.9,
								"kind": "per_stay"
							},
							"item_amount": {
								"value": 10.9,
								"amount_rounded": "$11",
								"amount_unrounded": "$10.90",
								"currency": "USD"
							},
							"name": "Tourism fee",
							"kind": "charge",
							"inclusion_type": "excluded"
						},
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$8.86",
								"amount_rounded": "$9",
								"value": 8.86
							},
							"details": null,
							"base": {
								"base_amount": 8.86,
								"kind": "per_stay"
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						},
						{
							"base": {
								"kind": "per_stay",
								"base_amount": 9.72
							},
							"details": null,
							"item_amount": {
								"amount_unrounded": "$9.72",
								"currency": "USD",
								"value": 9.72,
								"amount_rounded": "$10"
							},
							"kind": "charge",
							"name": "Municipality fee",
							"inclusion_type": "excluded"
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"excluded_amount": {
						"amount_unrounded": "$34.34",
						"currency": "USD",
						"value": 34.34,
						"amount_rounded": "$34"
					},
					"charges_details": {
						"translated_copy": "",
						"mode": "extra_charges",
						"amount": {
							"currency": "USD",
							"value": 34
						}
					},
					"has_long_stays_monthly_rate_price": 0,
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"gross_amount": {
						"currency": "USD",
						"amount_unrounded": "$104.14",
						"amount_rounded": "$104",
						"value": 104.14
					}
				},
				"class": 5,
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/213805052.jpg?k=fb2d1ec9240bb7a805d448dfbe81fc3f406fe2f756feb3bc15ac2dce65061956&o=",
				"currencycode": "AED",
				"default_language": "en",
				"longitude": 55.2071918217431,
				"review_score": 9.1,
				"cant_book": null
			},
			{
				"hotel_id": 507230,
				"hotel_name_trans": "Dusit Thani Abu Dhabi",
				"unit_configuration_label": "<b>Hotel room</b>: 1 bed",
				"hotel_include_breakfast": 0,
				"hotel_has_vb_boost": 0,
				"badges": [],
				"review_nr": 5661,
				"min_total_price": 693.168559422684,
				"type": "property_card",
				"is_no_prepayment_block": 0,
				"preferred_plus": 1,
				"accommodation_type": 204,
				"children_not_allowed": null,
				"is_geo_rate": "",
				"updated_checkout": null,
				"countrycode": "ae",
				"class_is_estimated": 0,
				"timezone": "Asia/Dubai",
				"is_smart_deal": 0,
				"checkin": {
					"from": "14:00",
					"until": "00:00"
				},
				"class": 5,
				"composite_price_breakdown": {
					"benefits": [],
					"has_long_stays_weekly_rate_price": 0,
					"excluded_amount": {
						"value": 44.36,
						"amount_rounded": "$44",
						"amount_unrounded": "$44.36",
						"currency": "USD"
					},
					"items": [
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$14.48",
								"amount_rounded": "$14",
								"value": 14.48
							},
							"details": null,
							"base": {
								"base_amount": 14.48,
								"kind": "per_stay"
							},
							"inclusion_type": "excluded",
							"name": "City tax",
							"kind": "charge"
						},
						{
							"name": "VAT",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": null,
							"base": {
								"base_amount": 8.44,
								"kind": "per_stay"
							},
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$8.44",
								"amount_rounded": "$8",
								"value": 8.44
							}
						},
						{
							"base": {
								"kind": "per_stay",
								"base_amount": 6.14
							},
							"details": null,
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$6.14",
								"amount_rounded": "$6",
								"value": 6.14
							},
							"kind": "charge",
							"name": "Municipality fee",
							"inclusion_type": "excluded"
						},
						{
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Service charge",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$15.30",
								"amount_rounded": "$15",
								"value": 15.3
							},
							"base": {
								"base_amount": 15.3,
								"kind": "per_stay"
							},
							"details": null
						}
					],
					"gross_amount_per_night": {
						"value": 94.36,
						"amount_rounded": "$94",
						"amount_unrounded": "$94.36",
						"currency": "USD"
					},
					"net_amount": {
						"amount_rounded": "$189",
						"value": 188.72,
						"currency": "USD",
						"amount_unrounded": "$188.72"
					},
					"all_inclusive_amount_hotel_currency": {
						"amount_rounded": "AED 856",
						"value": 856.102839286982,
						"currency": "AED",
						"amount_unrounded": "AED 856.10"
					},
					"all_inclusive_amount": {
						"amount_unrounded": "$233.08",
						"currency": "USD",
						"value": 233.08,
						"amount_rounded": "$233"
					},
					"included_taxes_and_charges_amount": {
						"currency": "USD",
						"amount_unrounded": "$0",
						"amount_rounded": "$0",
						"value": 0
					},
					"gross_amount_hotel_currency": {
						"value": 693.168559422684,
						"amount_rounded": "AED 693",
						"amount_unrounded": "AED 693.17",
						"currency": "AED"
					},
					"price_display_config": [
						{
							"value": 0,
							"key": "use_nightly_prices"
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"gross_amount": {
						"currency": "USD",
						"amount_unrounded": "$188.72",
						"amount_rounded": "$189",
						"value": 188.72
					},
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"amount": {
							"value": 44,
							"currency": "USD"
						},
						"translated_copy": "",
						"mode": "extra_charges"
					}
				},
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"default_wishlist_name": "Abu Dhabi",
				"default_language": "en",
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/538681843.jpg?k=3b55794176f79e98c7719c7637401badce6aaf5143e4d94733251a2e02672abe&o=",
				"review_score": 8.8,
				"longitude": 54.3946127593517,
				"cant_book": null,
				"updated_checkin": null,
				"preferred": 1,
				"has_free_parking": 1,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"latitude": 24.4548871986046,
				"is_genius_deal": 0,
				"distances": [],
				"hotel_name": "Dusit Thani Abu Dhabi",
				"checkout": {
					"until": "12:30",
					"from": "12:00"
				},
				"review_score_word": "Excellent",
				"extended": 0,
				"main_photo_id": 538681843,
				"is_free_cancellable": 0,
				"soldout": 0,
				"genius_discount_percentage": 0,
				"has_swimming_pool": 1,
				"is_tpi_exclusive_property": 0,
				"city_in_trans": "in Abu Dhabi",
				"id": "property_card_507230",
				"city": "Abu Dhabi",
				"block_ids": [
					"50723001_0_1_0_0"
				],
				"ufi": -782066
			},
			{
				"hotel_id": 73579,
				"latitude": 25.0957380024861,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"preferred": 1,
				"updated_checkin": null,
				"has_free_parking": 1,
				"review_score_word": "Very Good",
				"extended": 0,
				"distances": [],
				"is_genius_deal": 0,
				"hotel_name": "Arjaan by Rotana - Dubai Media City",
				"checkout": {
					"until": "12:00",
					"from": ""
				},
				"city": "Dubai",
				"id": "property_card_73579",
				"city_in_trans": "in Dubai",
				"is_tpi_exclusive_property": 0,
				"ufi": -782831,
				"block_ids": [
					"7357932_380530247_2_2_0"
				],
				"soldout": 0,
				"is_free_cancellable": 0,
				"main_photo_id": 651923695,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"badges": [],
				"hotel_has_vb_boost": 0,
				"type": "property_card",
				"is_no_prepayment_block": 1,
				"min_total_price": 458,
				"review_nr": 2170,
				"hotel_include_breakfast": 0,
				"unit_configuration_label": "<b>Hotel room</b>: 1 bed",
				"hotel_name_trans": "Arjaan by Rotana - Dubai Media City",
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"timezone": "Asia/Dubai",
				"children_not_allowed": null,
				"accommodation_type": 204,
				"preferred_plus": 0,
				"is_geo_rate": "",
				"default_wishlist_name": "Dubai",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$160.92",
						"amount_rounded": "$161",
						"value": 160.917506259805
					},
					"included_taxes_and_charges_amount": {
						"currency": "USD",
						"amount_unrounded": "$0",
						"amount_rounded": "$0",
						"value": 0
					},
					"gross_amount_hotel_currency": {
						"value": 458,
						"amount_rounded": "AED 458",
						"amount_unrounded": "AED 458",
						"currency": "AED"
					},
					"all_inclusive_amount_hotel_currency": {
						"amount_unrounded": "AED 591.05",
						"currency": "AED",
						"value": 591.05,
						"amount_rounded": "AED 591"
					},
					"net_amount": {
						"currency": "USD",
						"amount_unrounded": "$124.69",
						"amount_rounded": "$125",
						"value": 124.693710966908
					},
					"gross_amount_per_night": {
						"amount_rounded": "$62",
						"value": 62.3468554834539,
						"currency": "USD",
						"amount_unrounded": "$62.35"
					},
					"items": [
						{
							"kind": "charge",
							"name": "VAT",
							"inclusion_type": "excluded",
							"base": {
								"kind": "percentage",
								"percentage": 5
							},
							"details": "5 % VAT",
							"item_amount": {
								"amount_unrounded": "$6.86",
								"currency": "USD",
								"value": 6.85815410317993,
								"amount_rounded": "$7"
							}
						},
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$12.47",
								"amount_rounded": "$12",
								"value": 12.4693710966908
							},
							"details": "10 % Service charge",
							"base": {
								"percentage": 10,
								"kind": "percentage"
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						},
						{
							"item_amount": {
								"amount_rounded": "$8",
								"value": 8.16771032534331,
								"currency": "USD",
								"amount_unrounded": "$8.17"
							},
							"base": {
								"kind": "per_night",
								"base_amount": 15
							},
							"details": null,
							"inclusion_type": "excluded",
							"kind": "charge",
							"name": "Tourism fee"
						},
						{
							"kind": "charge",
							"name": "Municipality fee",
							"inclusion_type": "excluded",
							"base": {
								"kind": "percentage",
								"percentage": 7
							},
							"details": "7 % Municipality fee",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$8.73",
								"amount_rounded": "$9",
								"value": 8.72855976768355
							}
						}
					],
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"excluded_amount": {
						"amount_unrounded": "$36.22",
						"currency": "USD",
						"value": 36.2237952928976,
						"amount_rounded": "$36"
					},
					"charges_details": {
						"amount": {
							"value": 36,
							"currency": "USD"
						},
						"mode": "extra_charges",
						"translated_copy": ""
					},
					"has_long_stays_monthly_rate_price": 0,
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"value": 1,
							"key": "use_js_tracking"
						}
					],
					"gross_amount": {
						"currency": "USD",
						"amount_unrounded": "$124.69",
						"amount_rounded": "$125",
						"value": 124.693710966908
					}
				},
				"class": 4,
				"checkin": {
					"from": "14:00",
					"until": ""
				},
				"is_smart_deal": 0,
				"longitude": 55.1534914970398,
				"review_score": 8.3,
				"cant_book": null,
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/651923695.jpg?k=db9b0a92bb1edf5cb26ce957ceff8aab682c8850da167e6e8b0975cccc2abf2e&o=",
				"default_language": "en"
			},
			{
				"hotel_id": 236039,
				"longitude": 55.834847,
				"review_score": 9.2,
				"cant_book": null,
				"currencycode": "AED",
				"main_photo_url": "https://cf.bstatic.com/xdata/images/hotel/square60/469199434.jpg?k=1bf3fdf8a66959d106869f926f50d864b0aa2db8a1bdb20ce8ab7e8aa1e159de&o=",
				"default_language": "en",
				"default_wishlist_name": "Ras al Khaimah",
				"last_reservation_data": {
					"last_reservation_ellapsed_months": 1
				},
				"composite_price_breakdown": {
					"gross_amount": {
						"amount_unrounded": "$1,034.58",
						"currency": "USD",
						"value": 1034.57664121015,
						"amount_rounded": "$1,035"
					},
					"price_display_config": [
						{
							"key": "use_nightly_prices",
							"value": 0
						},
						{
							"key": "use_nightly_as_dominant",
							"value": 0
						},
						{
							"key": "use_js_tracking",
							"value": 1
						}
					],
					"has_long_stays_monthly_rate_price": 0,
					"charges_details": {
						"mode": "extra_charges",
						"translated_copy": "",
						"amount": {
							"value": 244,
							"currency": "USD"
						}
					},
					"excluded_amount": {
						"value": 243.670024706075,
						"amount_rounded": "$244",
						"amount_unrounded": "$243.67",
						"currency": "USD"
					},
					"has_long_stays_weekly_rate_price": 0,
					"benefits": [],
					"gross_amount_per_night": {
						"value": 517.288320605076,
						"amount_rounded": "$517",
						"amount_unrounded": "$517.29",
						"currency": "USD"
					},
					"items": [
						{
							"name": "VAT",
							"kind": "charge",
							"inclusion_type": "excluded",
							"details": "5 % VAT",
							"base": {
								"percentage": 5,
								"kind": "percentage"
							},
							"item_amount": {
								"value": 51.7288320605076,
								"amount_rounded": "$52",
								"amount_unrounded": "$51.73",
								"currency": "USD"
							}
						},
						{
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$10.89",
								"amount_rounded": "$11",
								"value": 10.8902804337911
							},
							"details": null,
							"base": {
								"kind": "per_night",
								"base_amount": 20
							},
							"inclusion_type": "excluded",
							"name": "Tourism fee",
							"kind": "charge"
						},
						{
							"item_amount": {
								"amount_unrounded": "$108.63",
								"currency": "USD",
								"value": 108.630547327066,
								"amount_rounded": "$109"
							},
							"details": "10.50 % Service charge",
							"base": {
								"kind": "percentage",
								"percentage": 10.5
							},
							"inclusion_type": "excluded",
							"name": "Service charge",
							"kind": "charge"
						},
						{
							"inclusion_type": "excluded",
							"name": "Destination charge",
							"kind": "charge",
							"item_amount": {
								"currency": "USD",
								"amount_unrounded": "$72.42",
								"amount_rounded": "$72",
								"value": 72.4203648847107
							},
							"details": "7 % Destination charge",
							"base": {
								"kind": "percentage",
								"percentage": 7
							}
						}
					],
					"net_amount": {
						"amount_rounded": "$1,035",
						"value": 1034.57664121015,
						"currency": "USD",
						"amount_unrounded": "$1,034.58"
					},
					"all_inclusive_amount_hotel_currency": {
						"amount_unrounded": "AED 4,695",
						"currency": "AED",
						"value": 4695,
						"amount_rounded": "AED 4,695"
					},
					"gross_amount_hotel_currency": {
						"amount_unrounded": "AED 3,800",
						"currency": "AED",
						"value": 3800,
						"amount_rounded": "AED 3,800"
					},
					"included_taxes_and_charges_amount": {
						"amount_unrounded": "$0",
						"currency": "USD",
						"value": 0,
						"amount_rounded": "$0"
					},
					"all_inclusive_amount": {
						"currency": "USD",
						"amount_unrounded": "$1,278.25",
						"amount_rounded": "$1,278",
						"value": 1278.24666591623
					}
				},
				"class": 5,
				"checkin": {
					"until": "",
					"from": "15:00"
				},
				"is_smart_deal": 0,
				"class_is_estimated": 0,
				"countrycode": "ae",
				"updated_checkout": null,
				"timezone": "Asia/Dubai",
				"children_not_allowed": null,
				"accommodation_type": 206,
				"preferred_plus": 0,
				"is_geo_rate": "",
				"badges": [],
				"hotel_has_vb_boost": 0,
				"is_no_prepayment_block": 1,
				"type": "property_card",
				"min_total_price": 3800,
				"review_nr": 1741,
				"unit_configuration_label": "<b>Entire villa – 158 m²</b>: 1 bed • 1 bedroom • 1 bathroom",
				"hotel_name_trans": "The Ritz-Carlton Ras Al Khaimah, Al Wadi Desert",
				"ribbon_text": "Breakfast included",
				"city": "Ras Al Khaimah",
				"id": "property_card_236039",
				"city_in_trans": "in Ras al Khaimah",
				"is_tpi_exclusive_property": 0,
				"ufi": -784007,
				"block_ids": [
					"23603914_406410722_2_1_0"
				],
				"soldout": 0,
				"is_free_cancellable": 0,
				"main_photo_id": 469199434,
				"has_swimming_pool": 1,
				"genius_discount_percentage": 0,
				"review_score_word": "Wonderful",
				"extended": 0,
				"distances": [],
				"is_genius_deal": 0,
				"hotel_name": "The Ritz-Carlton Ras Al Khaimah, Al Wadi Desert",
				"checkout": {
					"until": "12:00",
					"from": ""
				},
				"latitude": 25.584408,
				"bwallet": {
					"hotel_eligibility": 0
				},
				"preferred": 1,
				"updated_checkin": null,
				"has_free_parking": 1
			}
		],
		"room_distribution": [
			{
				"children": [],
				"adults": "1"
			}
		],
		"primary_count": 5108,
		"unfiltered_primary_count": 21534,
		"count": 5108,
		"page_loading_threshold": 10,
		"extended_count": 0,
		"unfiltered_count": 21534,
		"has_low_availability": ""
	}
}