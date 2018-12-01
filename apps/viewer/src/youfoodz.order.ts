import {
  Item,
  Packer,
  Bin
} from '../../../libraries/bin-packing/src/index';

// @ts-ignore
const orderJson = {
  order: {
    line_items: [
      {
        id: 1440830390332,
        variant_id: 585749495814,
        title: 'Choc Protein Doughnut',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF049',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79440281606,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Protein Doughnut',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'sweet-tooth-bundle'
          },
          {
            name: 'bundleId',
            value: '5b728297557c4900010945db'
          },
          {
            name: 'bundleHash',
            value: '690DE265F6EDC80D8E63E7878ADAF3704507DD10C3BFC50281799B5F333305D469636219C98FB6B4A86D5CAE195F502871A0E4D0CF76815D3FCFAC7E3D4C5A1C'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 65,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830423100,
        variant_id: 43728018822,
        title: 'Choc-Mint Protein Slice',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF033',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10709705862,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc-Mint Protein Slice',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'sweet-tooth-bundle'
          },
          {
            name: 'bundleId',
            value: '5b728297557c4900010945db'
          },
          {
            name: 'bundleHash',
            value: '690DE265F6EDC80D8E63E7878ADAF3704507DD10C3BFC50281799B5F333305D469636219C98FB6B4A86D5CAE195F502871A0E4D0CF76815D3FCFAC7E3D4C5A1C'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 48,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830455868,
        variant_id: 19035275590,
        title: 'Choc Protein Brownie',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF012',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 6013812422,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Protein Brownie',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'sweet-tooth-bundle'
          },
          {
            name: 'bundleId',
            value: '5b728297557c4900010945db'
          },
          {
            name: 'bundleHash',
            value: '690DE265F6EDC80D8E63E7878ADAF3704507DD10C3BFC50281799B5F333305D469636219C98FB6B4A86D5CAE195F502871A0E4D0CF76815D3FCFAC7E3D4C5A1C'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 55,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830488636,
        variant_id: 16668040582,
        title: 'Raspberry \u0026 Macadamia Protein Blondies',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF011',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 5336841030,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Raspberry \u0026 Macadamia Protein Blondies',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'sweet-tooth-bundle'
          },
          {
            name: 'bundleId',
            value: '5b728297557c4900010945db'
          },
          {
            name: 'bundleHash',
            value: '690DE265F6EDC80D8E63E7878ADAF3704507DD10C3BFC50281799B5F333305D469636219C98FB6B4A86D5CAE195F502871A0E4D0CF76815D3FCFAC7E3D4C5A1C'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 65,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830521404,
        variant_id: 339291963398,
        title: 'Cutlery Set #ForkYes',
        quantity: 1,
        price: '4.95',
        sku: 'ZZZZ14',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 50259984390,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Cutlery Set #ForkYes',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 250,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830554172,
        variant_id: 8923323629628,
        title: 'Coffee Cup',
        quantity: 1,
        price: '9.95',
        sku: 'ZZZZ30',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 752583245884,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Coffee Cup',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830586940,
        variant_id: 8922803011644,
        title: 'Cooler Bag',
        quantity: 1,
        price: '9.95',
        sku: 'ZZZZ29',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 752547758140,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Cooler Bag',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830619708,
        variant_id: 34933026054,
        title: 'Protein Shaker #Wheysted',
        quantity: 1,
        price: '4.95',
        sku: 'ZZZZ02',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 9435195334,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Protein Shaker #Wheysted',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 100,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830652476,
        variant_id: 585795895302,
        title: 'Youjuice Black Magic (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF475',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79441985542,
        requires_shipping: false,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Black Magic (300ml)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830685244,
        variant_id: 585780002822,
        title: 'Youjuice Green Machine (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF478',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79441199110,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Green Machine (300ml)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830718012,
        variant_id: 585760473094,
        title: 'Youjuice The Real OJ (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF479',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79440510982,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice The Real OJ (300ml)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830750780,
        variant_id: 50844441926,
        title: 'Youjuice One In A Melon (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZZYF474',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813669894,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice One In A Melon (300ml)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830783548,
        variant_id: 50844391174,
        title: 'Youjuice Awaken (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZZYF475',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813667846,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Awaken (300ml)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830816316,
        variant_id: 1518150057990,
        title: '4 Pack - Youjuice Black Magic (300ml x 4)',
        quantity: 1,
        price: '16.95',
        sku: 'ZZYF484',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 241405984774,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: '4 Pack - Youjuice Black Magic (300ml x 4)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 1200,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '16.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '16.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '16.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '16.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '16.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830849084,
        variant_id: 1518149992454,
        title: '4 Pack - Youjuice Awaken (300ml x 4)',
        quantity: 1,
        price: '16.95',
        sku: 'ZZYF480',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 241405919238,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: '4 Pack - Youjuice Awaken (300ml x 4)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 1200,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '16.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '16.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '16.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '16.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '16.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830881852,
        variant_id: 8791417684028,
        title: '4 Pack- Youjuice Winter Warrior - (300ml x 4)',
        quantity: 1,
        price: '16.95',
        sku: 'ZZYF487',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 735508725820,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: '4 Pack- Youjuice Winter Warrior - (300ml x 4)',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 1200,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '16.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '16.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '16.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '16.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '16.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830914620,
        variant_id: 8688707338300,
        title: 'Mini Shiraz',
        quantity: 1,
        price: '9.95',
        sku: 'ZZZZ25',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 722569920572,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Mini Shiraz',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 187,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830947388,
        variant_id: 126778703878,
        title: 'Natural Protein Powder - Vanilla (5 x 30g Single Serves)',
        quantity: 1,
        price: '9.95',
        sku: 'ZYFS04',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 17981997062,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Natural Protein Powder - Vanilla (5 x 30g Single Serves)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 30,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440830980156,
        variant_id: 24254036998,
        title: 'Natural Protein Powder - Vanilla (600g)',
        quantity: 1,
        price: '24.95',
        sku: 'ZYFS02',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 7572829318,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Natural Protein Powder - Vanilla (600g)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 600,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '24.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '24.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '24.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '24.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '24.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831012924,
        variant_id: 126774706182,
        title: 'Natural Protein Powder - Chocolate (5 x 30g Single Serves)',
        quantity: 1,
        price: '9.95',
        sku: 'ZYFS03',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 17981440006,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Natural Protein Powder - Chocolate (5 x 30g Single Serves)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 30,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831045692,
        variant_id: 24246232262,
        title: 'Natural Protein Powder - Chocolate (600g)',
        quantity: 1,
        price: '24.95',
        sku: 'ZYFS01',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 7570076998,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Natural Protein Powder - Chocolate (600g)',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 600,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '24.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '24.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '24.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '24.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '24.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831078460,
        variant_id: 711695199,
        title: 'Southern Spiced Tenders with Chia Mayo',
        quantity: 1,
        price: '4.95',
        sku: 'YF410',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 305266355,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Southern Spiced Tenders with Chia Mayo',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 150,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831111228,
        variant_id: 43728627142,
        title: 'Maple Protein Almonds',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF036',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10709748998,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Maple Protein Almonds',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 160,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831143996,
        variant_id: 218229309446,
        title: 'Broccoli Chips',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF042',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 32718323718,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Broccoli Chips',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 50,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831176764,
        variant_id: 40637615174,
        title: 'Choc Peanut Superstar Bites',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF029',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10172107462,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Peanut Superstar Bites',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 80,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831209532,
        variant_id: 16668040582,
        title: 'Raspberry \u0026 Macadamia Protein Blondies',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF011',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 5336841030,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Raspberry \u0026 Macadamia Protein Blondies',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 65,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831242300,
        variant_id: 36597148422,
        title: 'Coconut Paradise Protein Bar',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF028',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 9672240518,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Coconut Paradise Protein Bar',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 75,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831275068,
        variant_id: 50850477574,
        title: 'Cranberry Super-Bites',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF040',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813985542,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Cranberry Super-Bites',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 120,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831307836,
        variant_id: 43714578630,
        title: 'Youtella Protein Cookies',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF032',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10708778566,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youtella Protein Cookies',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 96,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831340604,
        variant_id: 214227058694,
        title: 'Dunk\'d Cookies \u0026 Cream Protein Bites',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF045',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 32555204614,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Dunk\'d Cookies \u0026 Cream Protein Bites',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 80,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831373372,
        variant_id: 214624239622,
        title: 'Bumble Honeycomb Protein Bites',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF046',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 32580304902,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Bumble Honeycomb Protein Bites',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831406140,
        variant_id: 43728018822,
        title: 'Choc-Mint Protein Slice',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF033',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10709705862,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc-Mint Protein Slice',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 48,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831438908,
        variant_id: 43316891270,
        title: 'Hazelnut Protein Balls - 2 Pack',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF030',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10659223686,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Hazelnut Protein Balls - 2 Pack',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 80,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831471676,
        variant_id: 585749495814,
        title: 'Choc Protein Doughnut',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF049',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79440281606,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Protein Doughnut',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 65,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831504444,
        variant_id: 1232188932102,
        title: 'Choc Orange Superfood Bar',
        quantity: 1,
        price: '3.95',
        sku: 'ZYF058',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: 210398150662,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Orange Superfood Bar',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 60,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '3.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '3.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '3.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '3.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '3.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831537212,
        variant_id: 1232188538886,
        title: 'Choc Cherry Superfood Bar',
        quantity: 1,
        price: '3.95',
        sku: 'ZYF057',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: 210398052358,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Cherry Superfood Bar',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 60,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '3.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '3.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '3.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '3.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '3.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831569980,
        variant_id: 1232188211206,
        title: 'Blueberry Bliss Ball',
        quantity: 1,
        price: '2.99',
        sku: 'ZYF056',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: 210397921286,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Blueberry Bliss Ball',
        variant_inventory_management: null,
        properties: [
          {
            name: 'TEST_299',
            value: '1'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.99',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.99',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.99',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.99',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.99',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831602748,
        variant_id: 8721985699900,
        title: 'Cran-Peary Bliss Ball - Single Pack',
        quantity: 1,
        price: '2.99',
        sku: 'ZYF069',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 725462614076,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Cran-Peary Bliss Ball - Single Pack',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.99',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.99',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.99',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.99',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.99',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831635516,
        variant_id: 8750522007612,
        title: 'Veg Sticks \'N\' Dip',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF240',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 729858539580,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Veg Sticks \'N\' Dip',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 165,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831668284,
        variant_id: 8751229730876,
        title: 'Gingernutz Protein Ball',
        quantity: 1,
        price: '2.99',
        sku: 'ZYF239',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 729950683196,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Gingernutz Protein Ball',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.99',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.99',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.99',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.99',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.99',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831701052,
        variant_id: 1515363041286,
        title: 'Coconut Charity Protein Ball',
        quantity: 1,
        price: '2.09',
        sku: 'ZYF059',
        variant_title: 'Single Pack',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 240703733766,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Coconut Charity Protein Ball - Single Pack',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.09',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.09',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.09',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.09',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.09',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831733820,
        variant_id: 1515365990406,
        title: '5-pack Coconut Charity Protein Ballz',
        quantity: 1,
        price: '10.45',
        sku: 'ZYF065',
        variant_title: '5 Pack',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 240704290822,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: '5-pack Coconut Charity Protein Ballz - 5 Pack',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 200,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '10.45',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '10.45',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '10.45',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '10.45',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '10.45',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831766588,
        variant_id: 1517580582918,
        title: '10-Pack Coconut Charity Protein Ballz',
        quantity: 1,
        price: '20.93',
        sku: 'ZYF067',
        variant_title: '10 Pack',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 241179852806,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: '10-Pack Coconut Charity Protein Ballz - 10 Pack',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 400,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '20.93',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '20.93',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '20.93',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '20.93',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '20.93',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831799356,
        variant_id: 1515366088710,
        title: '20-Pack Coconut Charity Protein Ballz',
        quantity: 1,
        price: '41.85',
        sku: 'ZZZYF129',
        variant_title: '20 Pack',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 240704356358,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: '20-Pack Coconut Charity Protein Ballz - 20 Pack',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 800,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '41.85',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '41.85',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '41.85',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '41.85',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '41.85',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831832124,
        variant_id: 214748102662,
        title: 'Two to Mango Yoghurt with Protein Granola',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF044',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 32589479942,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Two to Mango Yoghurt with Protein Granola',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 180,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831864892,
        variant_id: 585616228358,
        title: 'Stacked Brekky Omelette',
        quantity: 1,
        price: '9.95',
        sku: 'YF707',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Stacked Brekky Omelette',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 240,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831897660,
        variant_id: 43710768838,
        title: 'Choc Hazelnut Waffle',
        quantity: 1,
        price: '4.95',
        sku: 'YF568',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10708245190,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Hazelnut Waffle',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 140,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831930428,
        variant_id: 1232175431686,
        title: 'Blueberry Yoghurt with Protein Granola',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF055',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: 210396053510,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Blueberry Yoghurt with Protein Granola',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 180,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831963196,
        variant_id: 8622013481020,
        title: 'Loaded Brekky Pie',
        quantity: 1,
        price: '4.95',
        sku: 'YF731',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709298126908,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Loaded Brekky Pie',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 220,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440831995964,
        variant_id: 40639720262,
        title: 'Glazed Tasmanian Salmon',
        quantity: 1,
        price: '9.95',
        sku: 'YF548',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10172834246,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Glazed Tasmanian Salmon',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 295,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832028732,
        variant_id: 585623863302,
        title: 'Satay Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF709',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79435005958,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Satay Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 295,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832127036,
        variant_id: 585667674118,
        title: 'Tasty Turkey Rissoles',
        quantity: 1,
        price: '9.95',
        sku: 'YF714',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79438675974,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Tasty Turkey Rissoles',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 285,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832225340,
        variant_id: 35786098822,
        title: 'Flamin’ Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF535',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 9551963142,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Flamin’ Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832290876,
        variant_id: 42828669766,
        title: 'Hawaiian Chicken Parma',
        quantity: 1,
        price: '9.95',
        sku: 'YF552',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10586953158,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Hawaiian Chicken Parma',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 305000,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832323644,
        variant_id: 43713712006,
        title: 'BBQ Chicken Wrap',
        quantity: 1,
        price: '9.95',
        sku: 'YF567',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10708669766,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'BBQ Chicken Wrap',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 210,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832356412,
        variant_id: 1152990773254,
        title: 'Chicken Biryani',
        quantity: 1,
        price: '9.95',
        sku: 'YF717',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Chicken Biryani',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832389180,
        variant_id: 1232187555846,
        title: 'Roast Veg Bake',
        quantity: 1,
        price: '9.95',
        sku: 'YF722',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Roast Veg Bake',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 265,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832421948,
        variant_id: 1232186572806,
        title: 'Coconut Fish Curry',
        quantity: 1,
        price: '9.95',
        sku: 'YF720',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Coconut Fish Curry',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 325,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832454716,
        variant_id: 1232180641798,
        title: 'Pesto Pumpkin Risotto',
        quantity: 1,
        price: '9.95',
        sku: 'YF724',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Pesto Pumpkin Risotto',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 310,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832487484,
        variant_id: 1232176349190,
        title: 'Clean Roast Pork \u0026 Veg',
        quantity: 1,
        price: '9.95',
        sku: 'YF723',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: 210396381190,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Clean Roast Pork \u0026 Veg',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 330,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832520252,
        variant_id: 8622012301372,
        title: 'Sunday Roast Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF730',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709297963068,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Sunday Roast Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 310,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832553020,
        variant_id: 585609248774,
        title: 'Bangin’ Brekky Wrap',
        quantity: 1,
        price: '9.95',
        sku: 'YF706',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79431761926,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Bangin’ Brekky Wrap',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 218,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832585788,
        variant_id: 27912499014,
        title: 'Chargrilled Lemon Pepper Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF512',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 8338950726,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Chargrilled Lemon Pepper Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 285,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832618556,
        variant_id: 831218810886,
        title: 'Straya Beef Pie',
        quantity: 1,
        price: '4.95',
        sku: 'YF715',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 106530406406,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Straya Beef Pie',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 175,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832651324,
        variant_id: 8746826039356,
        title: 'Thai Chicken \u0026 Stir-Fry Veg',
        quantity: 1,
        price: '9.95',
        sku: 'YF740',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Thai Chicken \u0026 Stir-Fry Veg',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832684092,
        variant_id: 8746457432124,
        title: 'Thai BBQ Pork Noodles',
        quantity: 1,
        price: '9.95',
        sku: 'YF738',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Thai BBQ Pork Noodles',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 250,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832716860,
        variant_id: 15607430982,
        title: 'Karaage Chicken \u0026 Asian Slaw',
        quantity: 1,
        price: '9.95',
        sku: 'YF467',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 4774438662,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Karaage Chicken \u0026 Asian Slaw',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832749628,
        variant_id: 8802150580284,
        title: 'BBQ Chicken, Chips and Slaw',
        quantity: 1,
        price: '9.95',
        sku: 'YF745',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 737571864636,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'BBQ Chicken, Chips and Slaw',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832782396,
        variant_id: 8776704163900,
        title: 'Stacked Quesadilla',
        quantity: 1,
        price: '9.95',
        sku: 'YF739',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 733646389308,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Stacked Quesadilla',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 225,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832815164,
        variant_id: 1232186146822,
        title: 'Clean Savoury Mince',
        quantity: 1,
        price: '9.95',
        sku: 'YF719',
        variant_title: '',
        vendor: 'Youfoodz',
        fulfillment_service: 'manual',
        product_id: 210397331462,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Clean Savoury Mince',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 305,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832847932,
        variant_id: 50848270598,
        title: 'Teriyaki Chicken \u0026 Tokyo Potatoes',
        quantity: 1,
        price: '9.95',
        sku: 'YF592',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813919430,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Teriyaki Chicken \u0026 Tokyo Potatoes',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 255,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832880700,
        variant_id: 50848192006,
        title: 'Healthy Chicken Hot Pot',
        quantity: 1,
        price: '9.95',
        sku: 'YF587',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813916614,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Healthy Chicken Hot Pot',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 330,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832913468,
        variant_id: 8622003716156,
        title: 'Classic Chicken Pot Pie',
        quantity: 1,
        price: '9.95',
        sku: 'YF729',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709296783420,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Classic Chicken Pot Pie',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 235,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832946236,
        variant_id: 8746431840316,
        title: 'Creamy Chicken Laksa',
        quantity: 1,
        price: '9.95',
        sku: 'YF737',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 729216450620,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Creamy Chicken Laksa',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 290,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440832979004,
        variant_id: 50272787142,
        title: 'The Mac Daddy',
        quantity: 1,
        price: '9.95',
        sku: 'YF586',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11698526918,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'The Mac Daddy',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833011772,
        variant_id: 273634820102,
        title: 'Chicken Schnitty \u0026 Wedges',
        quantity: 1,
        price: '9.95',
        sku: 'YF703',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 41365667846,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Chicken Schnitty \u0026 Wedges',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833044540,
        variant_id: 8721450336316,
        title: 'Lemon Thyme Pork',
        quantity: 1,
        price: '9.95',
        sku: 'YF732',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Lemon Thyme Pork',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 265,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833077308,
        variant_id: 8721982292028,
        title: 'Clean Paprika Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF734',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 725462286396,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Clean Paprika Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 260,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833110076,
        variant_id: 8784942268476,
        title: 'Mexi-Beef Pasta',
        quantity: 1,
        price: '9.95',
        sku: 'YF741',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: null,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Mexi-Beef Pasta',
        variant_inventory_management: null,
        properties: [],
        product_exists: false,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833142844,
        variant_id: 8802499788860,
        title: 'Buffalo Chicken Pizza',
        quantity: 1,
        price: '9.95',
        sku: 'YF743',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 737609547836,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Buffalo Chicken Pizza',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833175612,
        variant_id: 46701331398,
        title: 'Mohit’s Butter Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF580',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11446350406,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Mohit’s Butter Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 305,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833208380,
        variant_id: 38984975174,
        title: 'Creamy Mushroom Cannelloni',
        quantity: 1,
        price: '9.95',
        sku: 'YF538',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 9955242438,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Creamy Mushroom Cannelloni',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 270,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833241148,
        variant_id: 39317254342,
        title: 'Roast Lamb \u0026 3 Veg',
        quantity: 1,
        price: '9.95',
        sku: 'YF543',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 9970171462,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Roast Lamb \u0026 3 Veg',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 350,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833273916,
        variant_id: 8721946738748,
        title: 'Creamy Chicken Carbonara',
        quantity: 1,
        price: '9.95',
        sku: 'YF733',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 725458878524,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Creamy Chicken Carbonara',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 280,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833306684,
        variant_id: 41585395782,
        title: 'Nonna\'s Spaghetti Bolognese',
        quantity: 1,
        price: '9.95',
        sku: 'YF549',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10357358278,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Nonna\'s Spaghetti Bolognese',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 270,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833339452,
        variant_id: 1517342982150,
        title: 'YF Fried Chicken \u0026 Gravy',
        quantity: 1,
        price: '9.95',
        sku: 'YF725',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 241084399622,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'YF Fried Chicken \u0026 Gravy',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 305,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833372220,
        variant_id: 43712396998,
        title: 'Slow-cooked Lamb Shanks',
        quantity: 1,
        price: '9.95',
        sku: 'YF562',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10708480262,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Slow-cooked Lamb Shanks',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-faves-bundle'
          },
          {
            name: 'bundleId',
            value: '5b62604f557c4900010945d8'
          },
          {
            name: 'bundleHash',
            value: '3800E06BF6ECC80D8E63E7858FDAA9701F07DD10C3BFC5028C7B955F323305D469636219C98FB6E5A86D5CAE195F502873AEE4D1CF7681073FCFAC7E3D4C0B11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 310,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833404988,
        variant_id: 8621982613564,
        title: 'Honey Mustard Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF726',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709294030908,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Honey Mustard Chicken',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-faves-bundle'
          },
          {
            name: 'bundleId',
            value: '5b62604f557c4900010945d8'
          },
          {
            name: 'bundleHash',
            value: '3800E06BF6ECC80D8E63E7858FDAA9701F07DD10C3BFC5028C7B955F323305D469636219C98FB6E5A86D5CAE195F502873AEE4D1CF7681073FCFAC7E3D4C0B11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833437756,
        variant_id: 8622012301372,
        title: 'Sunday Roast Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF730',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709297963068,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Sunday Roast Chicken',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-faves-bundle'
          },
          {
            name: 'bundleId',
            value: '5b62604f557c4900010945d8'
          },
          {
            name: 'bundleHash',
            value: '3800E06BF6ECC80D8E63E7858FDAA9701F07DD10C3BFC5028C7B955F323305D469636219C98FB6E5A86D5CAE195F502873AEE4D1CF7681073FCFAC7E3D4C0B11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 310,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833470524,
        variant_id: 41585395782,
        title: 'Nonna\'s Spaghetti Bolognese',
        quantity: 1,
        price: '9.95',
        sku: 'YF549',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10357358278,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Nonna\'s Spaghetti Bolognese',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-faves-bundle'
          },
          {
            name: 'bundleId',
            value: '5b62604f557c4900010945d8'
          },
          {
            name: 'bundleHash',
            value: '3800E06BF6ECC80D8E63E7858FDAA9701F07DD10C3BFC5028C7B955F323305D469636219C98FB6E5A86D5CAE195F502873AEE4D1CF7681073FCFAC7E3D4C0B11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 270,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833503292,
        variant_id: 38984975174,
        title: 'Creamy Mushroom Cannelloni',
        quantity: 1,
        price: '9.95',
        sku: 'YF538',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 9955242438,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Creamy Mushroom Cannelloni',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-faves-bundle'
          },
          {
            name: 'bundleId',
            value: '5b62604f557c4900010945d8'
          },
          {
            name: 'bundleHash',
            value: '3800E06BF6ECC80D8E63E7858FDAA9701F07DD10C3BFC5028C7B955F323305D469636219C98FB6E5A86D5CAE195F502873AEE4D1CF7681073FCFAC7E3D4C0B11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 270,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833536060,
        variant_id: 8746431840316,
        title: 'Creamy Chicken Laksa',
        quantity: 1,
        price: '9.95',
        sku: 'YF737',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 729216450620,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Creamy Chicken Laksa',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-winter-collection-bundle'
          },
          {
            name: 'bundleId',
            value: '5b626b47557c4900010945d9'
          },
          {
            name: 'bundleHash',
            value: '6900B26BF6ECC80D8E63E7858FDAA8701E07DD10C3BFC5028C29955F323305D469636219C98FB6B4A86D5CAE195F502821AEE4D1CF7681063FCFAC7E3D4C5A11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 290,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833568828,
        variant_id: 8721946738748,
        title: 'Creamy Chicken Carbonara',
        quantity: 1,
        price: '9.95',
        sku: 'YF733',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 725458878524,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Creamy Chicken Carbonara',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-winter-collection-bundle'
          },
          {
            name: 'bundleId',
            value: '5b626b47557c4900010945d9'
          },
          {
            name: 'bundleHash',
            value: '6900B26BF6ECC80D8E63E7858FDAA8701E07DD10C3BFC5028C29955F323305D469636219C98FB6B4A86D5CAE195F502821AEE4D1CF7681063FCFAC7E3D4C5A11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 280,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833601596,
        variant_id: 8776704163900,
        title: 'Stacked Quesadilla',
        quantity: 1,
        price: '9.95',
        sku: 'YF739',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 733646389308,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Stacked Quesadilla',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-winter-collection-bundle'
          },
          {
            name: 'bundleId',
            value: '5b626b47557c4900010945d9'
          },
          {
            name: 'bundleHash',
            value: '6900B26BF6ECC80D8E63E7858FDAA8701E07DD10C3BFC5028C29955F323305D469636219C98FB6B4A86D5CAE195F502821AEE4D1CF7681063FCFAC7E3D4C5A11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 225,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833634364,
        variant_id: 8621990379580,
        title: 'Steak and Creamy Mushroom Sauce',
        quantity: 1,
        price: '9.95',
        sku: 'YF727',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709295439932,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Steak and Creamy Mushroom Sauce',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-winter-collection-bundle'
          },
          {
            name: 'bundleId',
            value: '5b626b47557c4900010945d9'
          },
          {
            name: 'bundleHash',
            value: '6900B26BF6ECC80D8E63E7858FDAA8701E07DD10C3BFC5028C29955F323305D469636219C98FB6B4A86D5CAE195F502821AEE4D1CF7681063FCFAC7E3D4C5A11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833667132,
        variant_id: 8721459380284,
        title: 'Hearty Lentil Bolognese',
        quantity: 1,
        price: '9.95',
        sku: 'YF735',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 725381120060,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Hearty Lentil Bolognese',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'yf-winter-collection-bundle'
          },
          {
            name: 'bundleId',
            value: '5b626b47557c4900010945d9'
          },
          {
            name: 'bundleHash',
            value: '6900B26BF6ECC80D8E63E7858FDAA8701E07DD10C3BFC5028C29955F323305D469636219C98FB6B4A86D5CAE195F502821AEE4D1CF7681063FCFAC7E3D4C5A11'
          },
          {
            name: 'bundlePrice',
            value: '4495'
          },
          {
            name: 'bundleTotalItems',
            value: '5'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 265,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833699900,
        variant_id: 43316891270,
        title: 'Hazelnut Protein Balls - 2 Pack',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF030',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10659223686,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Hazelnut Protein Balls - 2 Pack',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'the-protein-ball-sampler'
          },
          {
            name: 'bundleId',
            value: '5b625fb2557c4900010945d7'
          },
          {
            name: 'bundleHash',
            value: '6C56B668F6ECC80D8E63E7818ADAA6701007DD10C3BFC502DA2D965F323305D469636219C98FB6B1A86D5CAE195F502825ADE4D1CF7681083FCFAC7E3D4C5F47'
          },
          {
            name: 'bundlePrice',
            value: '1095'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 80,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833732668,
        variant_id: 8751229730876,
        title: 'Gingernutz Protein Ball',
        quantity: 1,
        price: '2.99',
        sku: 'ZYF239',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 729950683196,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Gingernutz Protein Ball',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'the-protein-ball-sampler'
          },
          {
            name: 'bundleId',
            value: '5b625fb2557c4900010945d7'
          },
          {
            name: 'bundleHash',
            value: '6C56B668F6ECC80D8E63E7818ADAA6701007DD10C3BFC502DA2D965F323305D469636219C98FB6B1A86D5CAE195F502825ADE4D1CF7681083FCFAC7E3D4C5F47'
          },
          {
            name: 'bundlePrice',
            value: '1095'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.99',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.99',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.99',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.99',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.99',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833765436,
        variant_id: 8622026063932,
        title: 'Honeycomb Protein Ball',
        quantity: 1,
        price: '2.99',
        sku: 'ZYF235',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709300518972,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Honeycomb Protein Ball',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'the-protein-ball-sampler'
          },
          {
            name: 'bundleId',
            value: '5b625fb2557c4900010945d7'
          },
          {
            name: 'bundleHash',
            value: '6C56B668F6ECC80D8E63E7818ADAA6701007DD10C3BFC502DA2D965F323305D469636219C98FB6B1A86D5CAE195F502825ADE4D1CF7681083FCFAC7E3D4C5F47'
          },
          {
            name: 'bundlePrice',
            value: '1095'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.99',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.99',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.99',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.99',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.99',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833798204,
        variant_id: 1515363041286,
        title: 'Coconut Charity Protein Ball',
        quantity: 1,
        price: '2.09',
        sku: 'ZYF059',
        variant_title: 'Single Pack',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 240703733766,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Coconut Charity Protein Ball - Single Pack',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'the-protein-ball-sampler'
          },
          {
            name: 'bundleId',
            value: '5b625fb2557c4900010945d7'
          },
          {
            name: 'bundleHash',
            value: '6C56B668F6ECC80D8E63E7818ADAA6701007DD10C3BFC502DA2D965F323305D469636219C98FB6B1A86D5CAE195F502825ADE4D1CF7681083FCFAC7E3D4C5F47'
          },
          {
            name: 'bundlePrice',
            value: '1095'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.09',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.09',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.09',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.09',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.09',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833830972,
        variant_id: 50844441926,
        title: 'Youjuice One In A Melon (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZZYF474',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813669894,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice One In A Melon (300ml)',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'juice-bundle'
          },
          {
            name: 'bundleId',
            value: '5b4ed8e35283090005e86a13'
          },
          {
            name: 'bundleHash',
            value: '3953E96CA5EEC80D8E63E783DAD5A52514528912C2EAC102DD73C708303305D469636649C688B6B0FD395EAF4C5B50287BFCB3D3CF76810C3FCBFC713A4C5E40'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833863740,
        variant_id: 585780002822,
        title: 'Youjuice Green Machine (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF478',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 79441199110,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Green Machine (300ml)',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'juice-bundle'
          },
          {
            name: 'bundleId',
            value: '5b4ed8e35283090005e86a13'
          },
          {
            name: 'bundleHash',
            value: '3953E96CA5EEC80D8E63E783DAD5A52514528912C2EAC102DD73C708303305D469636649C688B6B0FD395EAF4C5B50287BFCB3D3CF76810C3FCBFC713A4C5E40'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 0,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833896508,
        variant_id: 8791069786172,
        title: 'Youjuice Winter Warrior (300 ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZZYF486',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 735463505980,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Winter Warrior (300 ml)',
        variant_inventory_management: 'shopify',
        properties: [
          {
            name: 'bundle',
            value: 'juice-bundle'
          },
          {
            name: 'bundleId',
            value: '5b4ed8e35283090005e86a13'
          },
          {
            name: 'bundleHash',
            value: '3953E96CA5EEC80D8E63E783DAD5A52514528912C2EAC102DD73C708303305D469636649C688B6B0FD395EAF4C5B50287BFCB3D3CF76810C3FCBFC713A4C5E40'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833929276,
        variant_id: 50844391174,
        title: 'Youjuice Awaken (300ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZZYF475',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 11813667846,
        requires_shipping: true,
        taxable: false,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Awaken (300ml)',
        variant_inventory_management: null,
        properties: [
          {
            name: 'bundle',
            value: 'juice-bundle'
          },
          {
            name: 'bundleId',
            value: '5b4ed8e35283090005e86a13'
          },
          {
            name: 'bundleHash',
            value: '3953E96CA5EEC80D8E63E783DAD5A52514528912C2EAC102DD73C708303305D469636649C688B6B0FD395EAF4C5B50287BFCB3D3CF76810C3FCBFC713A4C5E40'
          },
          {
            name: 'bundlePrice',
            value: '1695'
          },
          {
            name: 'bundleTotalItems',
            value: '4'
          }
        ],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833962044,
        variant_id: 19035275590,
        title: 'Choc Protein Brownie',
        quantity: 1,
        price: '4.95',
        sku: 'ZYF012',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 6013812422,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Choc Protein Brownie',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 55,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440833994812,
        variant_id: 8791069786172,
        title: 'Youjuice Winter Warrior (300 ml)',
        quantity: 1,
        price: '4.95',
        sku: 'ZZYF486',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 735463505980,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Youjuice Winter Warrior (300 ml)',
        variant_inventory_management: 'shopify',
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '4.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '4.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '4.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '4.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '4.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834027580,
        variant_id: 8622026063932,
        title: 'Honeycomb Protein Ball',
        quantity: 1,
        price: '2.99',
        sku: 'ZYF235',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709300518972,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Honeycomb Protein Ball',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 40,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '2.99',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '2.99',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '2.99',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '2.99',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '2.99',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834060348,
        variant_id: 8862761975868,
        title: 'Karaage Chicken Wrap',
        quantity: 1,
        price: '9.95',
        sku: 'YF746',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 744836694076,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Karaage Chicken Wrap',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 190,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834093116,
        variant_id: 711111999,
        title: 'Beef Lasagne',
        quantity: 1,
        price: '9.95',
        sku: 'WYF003',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 304924959,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Beef Lasagne',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834125884,
        variant_id: 8621982613564,
        title: 'Honey Mustard Chicken',
        quantity: 1,
        price: '9.95',
        sku: 'YF726',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709294030908,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Honey Mustard Chicken',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 275,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834158652,
        variant_id: 8621990379580,
        title: 'Steak and Creamy Mushroom Sauce',
        quantity: 1,
        price: '9.95',
        sku: 'YF727',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 709295439932,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Steak and Creamy Mushroom Sauce',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 300,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834191420,
        variant_id: 8721459380284,
        title: 'Hearty Lentil Bolognese',
        quantity: 1,
        price: '9.95',
        sku: 'YF735',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 725381120060,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Hearty Lentil Bolognese',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 265,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834224188,
        variant_id: 8784959864892,
        title: 'Clean Chicken \u0026 Broccoli',
        quantity: 1,
        price: '9.95',
        sku: 'YF742',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 734891868220,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Clean Chicken \u0026 Broccoli',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 245,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      },
      {
        id: 1440834256956,
        variant_id: 43712396998,
        title: 'Slow-cooked Lamb Shanks',
        quantity: 1,
        price: '9.95',
        sku: 'YF562',
        variant_title: '',
        vendor: 'youfoodz',
        fulfillment_service: 'manual',
        product_id: 10708480262,
        requires_shipping: true,
        taxable: true,
        gift_card: false,
        pre_tax_price: '0.00',
        name: 'Slow-cooked Lamb Shanks',
        variant_inventory_management: null,
        properties: [],
        product_exists: true,
        fulfillable_quantity: 0,
        grams: 310,
        total_discount: '0.00',

        price_set: {
          shop_money: {
            amount: '9.95',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '9.95',
            currency_code: 'AUD'
          }
        },
        pre_tax_price_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'AUD'
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'AUD'
          }
        },
        discount_allocations: [
          {
            amount: '9.95',
            discount_application_index: 0,
            amount_set: {
              shop_money: {
                amount: '9.95',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '9.95',
                currency_code: 'AUD'
              }
            }
          }
        ],
        tax_lines: [
          {
            title: 'GST',
            price: '0.00',
            rate: 0.1,
            price_set: {
              shop_money: {
                amount: '0.00',
                currency_code: 'AUD'
              },
              presentment_money: {
                amount: '0.00',
                currency_code: 'AUD'
              }
            }
          }
        ],
        destination_location: {
          id: 301061996550,
          country_code: 'AU',
          province_code: 'QLD',
          name: 'Ben Emerson',
          address1: '186 Granite St',
          address2: '',
          city: 'GEEBUNG',
          zip: '4034'
        }
      }
    ]
  }
};

function getDimensionsForSku(sku: string) {

  // Meals
  if (sku.indexOf('YF') === 0) {
    return {
      w: 100,
      h: 150,
      d: 50
    };
  }

  // Snacks
  if (sku.indexOf('ZYF40') !== -1) {
    return {
      w: 40,
      h: 80,
      d: 60
    };
  }

  // juices
  if (sku.indexOf('ZYF4') !== -1) {
    return {
      w: 60,
      h: 120,
      d: 60
    };
  }

  // Merch - will be vastly varying
  if (sku.indexOf('ZZZZ') !== -1) {
    return {
      w: 60,
      h: 60,
      d: 60
    };
  }

  // Protien Powders
  if (sku.indexOf('ZYFS') !== -1) {
    return {
      w: 60,
      h: 120,
      d: 60
    };
  }

  return {
    w: 50,
    h: 50,
    d: 50
  };

}

const items = orderJson.order.line_items.reduce(
  (agg: Item[], lineItem: any) => {
    const dimensions = getDimensionsForSku(lineItem.sku);

    for (let i = 0; i < lineItem.quantity; i++) {
      agg.push(
        new Item(
          lineItem.sku,
          dimensions.w,
          dimensions.h,
          dimensions.d,
          200 // fake because of YF552
        )
      );
    }

    return agg;
  },
  []
);

export const packer = new Packer({removeEmptyBins: true});
packer.addBin(new Bin('Box Small', 100, 200, 75));
packer.addBin(new Bin('Box Medium', 300, 600, 200));
packer.addBin(new Bin('Box Large', 400, 600, 200));

items.forEach((item: Item) => {
  packer.addItem(item);
});
packer.pack();
