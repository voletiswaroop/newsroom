import React from 'react'
import HomePage from './homePage'
import renderer from 'react-test-renderer'

let pageJson = {
  "hits": [
    {
      "created_at": "2020-06-15T15:18:40.000Z",
      "title": "Adobe to remove Flash Player from web site after December 2020",
      "url": "https://www.adobe.com/products/flashplayer/end-of-life.html",
      "author": "michaelhoffman",
      "points": 803,
      "story_text": null,
      "comment_text": null,
      "num_comments": 441,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592234320,
      "_tags": [
        "story",
        "author_michaelhoffman",
        "story_23528182",
        "front_page"
      ],
      "objectID": "23528182",
      "_highlightResult": {
        "title": {
          "value": "Adobe to remove Flash Player from web site after December 2020",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.adobe.com/products/flashplayer/end-of-life.html",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "michaelhoffman",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T19:22:48.000Z",
      "title": "Recently minted database technologies that I find intriguing",
      "url": "https://lucperkins.dev/blog/new-db-tech-1/",
      "author": "biggestlou",
      "points": 397,
      "story_text": null,
      "comment_text": null,
      "num_comments": 123,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592248968,
      "_tags": [
        "story",
        "author_biggestlou",
        "story_23531825",
        "front_page"
      ],
      "objectID": "23531825",
      "_highlightResult": {
        "title": {
          "value": "Recently minted database technologies that I find intriguing",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://lucperkins.dev/blog/new-db-tech-1/",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "biggestlou",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T07:05:49.000Z",
      "title": "How many of you know that the team is working on something that no-one wants?",
      "url": "https://iism.org/article/how-many-of-you-know-deep-down-that-the-team-is-working-on-something-that-no-customer-wants-54",
      "author": "kiyanwang",
      "points": 394,
      "story_text": null,
      "comment_text": null,
      "num_comments": 243,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592204749,
      "_tags": [
        "story",
        "author_kiyanwang",
        "story_23524605",
        "front_page"
      ],
      "objectID": "23524605",
      "_highlightResult": {
        "title": {
          "value": "How many of you know that the team is working on something that no-one wants?",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://iism.org/article/how-many-of-you-know-deep-down-that-the-team-is-working-on-something-that-no-customer-wants-54",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "kiyanwang",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T20:27:48.000Z",
      "title": "T-Mobile, Verizon and AT&T phone calls are failing across the US",
      "url": "https://www.theverge.com/2020/6/15/21292024/t-mobile-verizon-att-calls-failing-down-phone-networks-us-carriers",
      "author": "keyi",
      "points": 314,
      "story_text": null,
      "comment_text": null,
      "num_comments": 179,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592252868,
      "_tags": [
        "story",
        "author_keyi",
        "story_23532560",
        "front_page"
      ],
      "objectID": "23532560",
      "_highlightResult": {
        "title": {
          "value": "T-Mobile, Verizon and AT&T phone calls are failing across the US",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.theverge.com/2020/6/15/21292024/t-mobile-verizon-att-calls-failing-down-phone-networks-us-carriers",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "keyi",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T00:08:04.000Z",
      "title": "Model S Long Range Plus: Building the First 400-Mile Electric Vehicle",
      "url": "https://www.tesla.com/blog/model-s-long-range-plus-building-first-400-mile-electric-vehicle",
      "author": "Reedx",
      "points": 240,
      "story_text": null,
      "comment_text": null,
      "num_comments": 240,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592266084,
      "_tags": [
        "story",
        "author_Reedx",
        "story_23534540",
        "front_page"
      ],
      "objectID": "23534540",
      "_highlightResult": {
        "title": {
          "value": "Model S Long Range Plus: Building the First 400-Mile Electric Vehicle",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.tesla.com/blog/model-s-long-range-plus-building-first-400-mile-electric-vehicle",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "Reedx",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T20:36:24.000Z",
      "title": "AWS’s Share of Amazon’s Profit",
      "url": "https://www.tbray.org/ongoing/When/202x/2020/06/14/Amazon-profit-from-AWS",
      "author": "nurbel",
      "points": 194,
      "story_text": null,
      "comment_text": null,
      "num_comments": 104,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592253384,
      "_tags": [
        "story",
        "author_nurbel",
        "story_23532662",
        "front_page"
      ],
      "objectID": "23532662",
      "_highlightResult": {
        "title": {
          "value": "AWS’s Share of Amazon’s Profit",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.tbray.org/ongoing/When/202x/2020/06/14/Amazon-profit-from-AWS",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "nurbel",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T01:18:21.000Z",
      "title": "Generics and Compile-Time in Rust",
      "url": "https://pingcap.com/blog/generics-and-compile-time-in-rust/",
      "author": "Bella-Xiang",
      "points": 176,
      "story_text": null,
      "comment_text": null,
      "num_comments": 49,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592270301,
      "_tags": [
        "story",
        "author_Bella-Xiang",
        "story_23534974",
        "front_page"
      ],
      "objectID": "23534974",
      "_highlightResult": {
        "title": {
          "value": "Generics and Compile-Time in Rust",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://pingcap.com/blog/generics-and-compile-time-in-rust/",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "Bella-Xiang",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T21:37:27.000Z",
      "title": "An exploratory statistical analysis of Akira and Ghost in the Shell",
      "url": "https://nibnalin.me/dust-nib/shadows-of-stained-glass.html",
      "author": "nibnalin",
      "points": 146,
      "story_text": null,
      "comment_text": null,
      "num_comments": 29,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592257047,
      "_tags": [
        "story",
        "author_nibnalin",
        "story_23533283",
        "front_page"
      ],
      "objectID": "23533283",
      "_highlightResult": {
        "title": {
          "value": "An exploratory statistical analysis of Akira and Ghost in the Shell",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://nibnalin.me/dust-nib/shadows-of-stained-glass.html",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "nibnalin",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T15:23:04.000Z",
      "title": "Gated Linear Networks",
      "url": "https://arxiv.org/abs/1910.01526",
      "author": "asparagui",
      "points": 143,
      "story_text": null,
      "comment_text": null,
      "num_comments": 26,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592234584,
      "_tags": [
        "story",
        "author_asparagui",
        "story_23528247",
        "front_page"
      ],
      "objectID": "23528247",
      "_highlightResult": {
        "title": {
          "value": "Gated Linear Networks",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://arxiv.org/abs/1910.01526",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "asparagui",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T16:11:40.000Z",
      "title": "Destruction of Nuclear Bombs Using Ultra-High Energy Neutrino Beam (2003)",
      "url": "https://arxiv.org/abs/hep-ph/0305062",
      "author": "monort",
      "points": 109,
      "story_text": null,
      "comment_text": null,
      "num_comments": 76,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592237500,
      "_tags": [
        "story",
        "author_monort",
        "story_23528970",
        "front_page"
      ],
      "objectID": "23528970",
      "_highlightResult": {
        "title": {
          "value": "Destruction of Nuclear Bombs Using Ultra-High Energy Neutrino Beam (2003)",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://arxiv.org/abs/hep-ph/0305062",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "monort",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T04:25:24.000Z",
      "title": "IRS programming mystery continues",
      "url": "https://federalnewsnetwork.com/tom-temin-commentary/2020/01/irs-programming-mystery-continues/",
      "author": "prostoalex",
      "points": 109,
      "story_text": null,
      "comment_text": null,
      "num_comments": 47,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592281524,
      "_tags": [
        "story",
        "author_prostoalex",
        "story_23535937",
        "front_page"
      ],
      "objectID": "23535937",
      "_highlightResult": {
        "title": {
          "value": "IRS programming mystery continues",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://federalnewsnetwork.com/tom-temin-commentary/2020/01/irs-programming-mystery-continues/",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "prostoalex",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T01:55:45.000Z",
      "title": "“Massive DDoS attack” just T-Mobile error?",
      "url": "https://twitter.com/eastdakota/status/1272678168638500864",
      "author": "sethbannon",
      "points": 94,
      "story_text": null,
      "comment_text": null,
      "num_comments": 12,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592272545,
      "_tags": [
        "story",
        "author_sethbannon",
        "story_23535192",
        "front_page"
      ],
      "objectID": "23535192",
      "_highlightResult": {
        "title": {
          "value": "“Massive DDoS attack” just T-Mobile error?",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://twitter.com/eastdakota/status/1272678168638500864",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "sethbannon",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T23:52:03.000Z",
      "title": "Basics of Pneumatic Logic",
      "url": "https://www.hydraulicspneumatics.com/technologies/pneumatic-valves/article/21122363/basics-of-pneumatic-logic",
      "author": "Koshkin",
      "points": 86,
      "story_text": null,
      "comment_text": null,
      "num_comments": 21,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592265123,
      "_tags": [
        "story",
        "author_Koshkin",
        "story_23534422",
        "front_page"
      ],
      "objectID": "23534422",
      "_highlightResult": {
        "title": {
          "value": "Basics of Pneumatic Logic",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.hydraulicspneumatics.com/technologies/pneumatic-valves/article/21122363/basics-of-pneumatic-logic",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "Koshkin",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-14T22:19:15.000Z",
      "title": "Intel’s port 7 AGU blunder (2019)",
      "url": "https://blogs.fau.de/hager/archives/8683",
      "author": "nkurz",
      "points": 70,
      "story_text": null,
      "comment_text": null,
      "num_comments": 12,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592173155,
      "_tags": [
        "story",
        "author_nkurz",
        "story_23521856",
        "front_page"
      ],
      "objectID": "23521856",
      "_highlightResult": {
        "title": {
          "value": "Intel’s port 7 AGU blunder (2019)",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://blogs.fau.de/hager/archives/8683",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "nkurz",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T04:09:21.000Z",
      "title": "Feynman Lectures on the Strong Interactions",
      "url": "https://www.math.columbia.edu/~woit/wordpress/?p=11782",
      "author": "chmaynard",
      "points": 63,
      "story_text": null,
      "comment_text": null,
      "num_comments": 5,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592280561,
      "_tags": [
        "story",
        "author_chmaynard",
        "story_23535868",
        "front_page"
      ],
      "objectID": "23535868",
      "_highlightResult": {
        "title": {
          "value": "Feynman Lectures on the Strong Interactions",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.math.columbia.edu/~woit/wordpress/?p=11782",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "chmaynard",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T22:55:17.000Z",
      "title": "Show HN: Find journalists, bloggers and webmasters covering your niche",
      "url": "https://postbag.co/",
      "author": "ohsik",
      "points": 58,
      "story_text": null,
      "comment_text": null,
      "num_comments": 18,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592261717,
      "_tags": [
        "story",
        "author_ohsik",
        "story_23534026",
        "show_hn",
        "front_page"
      ],
      "objectID": "23534026",
      "_highlightResult": {
        "title": {
          "value": "Show HN: Find journalists, bloggers and webmasters covering your niche",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://postbag.co/",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "ohsik",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T06:19:36.000Z",
      "title": "Facebook Helped Develop a Tails Exploit",
      "url": "https://www.schneier.com/blog/archives/2020/06/facebook_helped.html",
      "author": "1cvmask",
      "points": 52,
      "story_text": null,
      "comment_text": null,
      "num_comments": 10,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592288376,
      "_tags": [
        "story",
        "author_1cvmask",
        "story_23536416",
        "front_page"
      ],
      "objectID": "23536416",
      "_highlightResult": {
        "title": {
          "value": "Facebook Helped Develop a Tails Exploit",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.schneier.com/blog/archives/2020/06/facebook_helped.html",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "1cvmask",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-16T00:50:03.000Z",
      "title": "How the Nintendo Switch prevents downgrades by irreparably blowing its own fuses",
      "url": "https://blog.jonlu.ca/posts/nintendo-switch?ref=hn",
      "author": "jonluca",
      "points": 48,
      "story_text": null,
      "comment_text": null,
      "num_comments": 30,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592268603,
      "_tags": [
        "story",
        "author_jonluca",
        "story_23534793",
        "front_page"
      ],
      "objectID": "23534793",
      "_highlightResult": {
        "title": {
          "value": "How the Nintendo Switch prevents downgrades by irreparably blowing its own fuses",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://blog.jonlu.ca/posts/nintendo-switch?ref=hn",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "jonluca",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T05:52:49.000Z",
      "title": "NetBSD Code Study",
      "url": "http://silas.net.br/codereading/netbsd-code.html",
      "author": "jayp1418",
      "points": 47,
      "story_text": null,
      "comment_text": null,
      "num_comments": 17,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592200369,
      "_tags": [
        "story",
        "author_jayp1418",
        "story_23524195",
        "front_page"
      ],
      "objectID": "23524195",
      "_highlightResult": {
        "title": {
          "value": "NetBSD Code Study",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "http://silas.net.br/codereading/netbsd-code.html",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "jayp1418",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-15T07:34:07.000Z",
      "title": "Solving Online Events",
      "url": "https://www.ben-evans.com/benedictevans/2020/6/4/solving-online-events",
      "author": "tosh",
      "points": 40,
      "story_text": null,
      "comment_text": null,
      "num_comments": 16,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1592206447,
      "_tags": [
        "story",
        "author_tosh",
        "story_23524779",
        "front_page"
      ],
      "objectID": "23524779",
      "_highlightResult": {
        "title": {
          "value": "Solving Online Events",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.ben-evans.com/benedictevans/2020/6/4/solving-online-events",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "tosh",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    }
  ],
  "nbHits": 30,
  "page": 0,
  "nbPages": 2,
  "hitsPerPage": 20,
  "exhaustiveNbHits": true,
  "query": "",
  "params": "advancedSyntax=true&analytics=true&analyticsTags=backend&page=0&tags=front_page",
  "processingTimeMS": 1
}

it('homePage renders correctly', () => {
  const component = renderer.create(<HomePage content={pageJson} />).toJSON()
  expect(component).toMatchSnapshot()
})