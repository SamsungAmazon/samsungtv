{
  "con:soapui-project": {
    "-activeEnvironment": "Default",
    "-name": "YouTube",
    "-soapui-version": "4.5.2",
    "-xmlns:con": "http://eviware.com/soapui/config",
    "con:interface": {
      "-xsi:type": "con:RestService",
      "-wadlVersion": "http://wadl.dev.java.net/2009/02",
      "-name": "YouTube",
      "-type": "rest",
      "-basePath": "/",
      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "con:definitionCache": { "-type": "TEXT" },
      "con:endpoints": { "con:endpoint": "http://gdata.youtube.com" },
      "con:resource": {
        "-name": "feeds",
        "-path": "feeds",
        "con:parameters": {
          "con:parameter": [
            {
              "con:name": "alt",
              "con:value": "atom",
              "con:style": "QUERY",
              "con:default": "atom",
              "con:option": [
                "atom",
                "json",
                "rss",
                "json-in-script",
                "jsonc"
              ]
            },
            {
              "con:name": "v",
              "con:value": "2",
              "con:style": "QUERY",
              "con:default": "2",
              "con:option": [
                "1",
                "2",
                "2.1"
              ]
            }
          ]
        },
        "con:resource": [
          {
            "-name": "videos",
            "-path": "/api/videos",
            "con:parameters": {
              "con:parameter": [
                {
                  "con:name": "q",
                  "con:style": "QUERY",
                  "con:type": {
                    "-xmlns:xs": "http://www.w3.org/2001/XMLSchema",
                    "#text": "xs:string"
                  },
                  "con:path": { "-xsi:nil": "true" },
                  "con:description": { "-xsi:nil": "true" }
                },
                {
                  "con:name": "start-index",
                  "con:style": "QUERY",
                  "con:type": {
                    "-xmlns:xs": "http://www.w3.org/2001/XMLSchema",
                    "#text": "xs:string"
                  },
                  "con:path": { "-xsi:nil": "true" },
                  "con:description": { "-xsi:nil": "true" }
                },
                {
                  "con:name": "max-results",
                  "con:style": "QUERY",
                  "con:type": {
                    "-xmlns:xs": "http://www.w3.org/2001/XMLSchema",
                    "#text": "xs:string"
                  },
                  "con:path": { "-xsi:nil": "true" },
                  "con:description": { "-xsi:nil": "true" }
                }
              ]
            },
            "con:method": {
              "-name": "GET",
              "-method": "GET",
              "con:representation": [
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "application/atom+xml; charset=UTF-8",
                  "con:status": "200",
                  "con:element": {
                    "-xmlns:atom": "http://www.w3.org/2005/Atom",
                    "#text": "atom:feed"
                  }
                },
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "application/json; charset=UTF-8",
                  "con:status": "200",
                  "con:element": {
                    "-xmlns:vid": "http://gdata.youtube.com/feeds/api/videos",
                    "#text": "vid:Response"
                  }
                },
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "application/rss+xml; charset=UTF-8",
                  "con:status": "200",
                  "con:element": "rss"
                },
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "text/javascript; charset=UTF-8",
                  "con:status": "200"
                },
                {
                  "-type": "FAULT",
                  "con:mediaType": "application/json; charset=UTF-8",
                  "con:status": "400",
                  "con:element": {
                    "-xmlns:vid": "http://gdata.youtube.com/feeds/api/videos",
                    "#text": "vid:Fault"
                  }
                },
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "application/json;charset=UTF-8",
                  "con:status": "200",
                  "con:element": {
                    "-xmlns:vid": "http://gdata.youtube.com/feeds/api/videos",
                    "#text": "vid:Response"
                  }
                }
              ],
              "con:request": {
                "-name": "Request 1",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "con:entry": [
                    {
                      "-key": "alt",
                      "-value": "json-in-script"
                    },
                    {
                      "-key": "q",
                      "-value": "soapui"
                    }
                  ]
                }
              }
            }
          },
          {
            "-name": "channels",
            "-path": "/api/channels",
            "con:parameters": {
              "con:parameter": [
                {
                  "con:name": "q",
                  "con:style": "QUERY",
                  "con:type": {
                    "-xmlns:xs": "http://www.w3.org/2001/XMLSchema",
                    "#text": "xs:string"
                  },
                  "con:path": { "-xsi:nil": "true" },
                  "con:description": { "-xsi:nil": "true" }
                },
                {
                  "con:name": "start-index",
                  "con:style": "QUERY",
                  "con:type": {
                    "-xmlns:xs": "http://www.w3.org/2001/XMLSchema",
                    "#text": "xs:string"
                  },
                  "con:path": { "-xsi:nil": "true" },
                  "con:description": { "-xsi:nil": "true" }
                },
                {
                  "con:name": "max-results",
                  "con:style": "QUERY",
                  "con:type": {
                    "-xmlns:xs": "http://www.w3.org/2001/XMLSchema",
                    "#text": "xs:string"
                  },
                  "con:path": { "-xsi:nil": "true" },
                  "con:description": { "-xsi:nil": "true" }
                }
              ]
            },
            "con:method": {
              "-name": "GET",
              "-method": "GET",
              "con:representation": [
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "application/atom+xml; charset=UTF-8; type=feed",
                  "con:status": "200",
                  "con:element": {
                    "-xmlns:atom": "http://www.w3.org/2005/Atom",
                    "#text": "atom:feed"
                  }
                },
                {
                  "-type": "RESPONSE",
                  "con:mediaType": "application/json; charset=UTF-8",
                  "con:status": "200",
                  "con:element": {
                    "-xmlns:chan": "http://gdata.youtube.com/feeds/api/channels",
                    "#text": "chan:Response"
                  }
                }
              ],
              "con:request": {
                "-name": "Request 1",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "entry": {
                    "-key": "q",
                    "-value": "smartbear",
                    "-xmlns": "http://eviware.com/soapui/config"
                  }
                }
              }
            }
          },
          {
            "-name": "standard",
            "-path": "api/standardfeeds",
            "con:resource": [
              {
                "-name": "top_rated",
                "-path": "top_rated",
                "con:method": {
                  "-name": "Method 1",
                  "-method": "GET",
                  "con:representation": [
                    {
                      "-type": "FAULT",
                      "con:mediaType": "application/vnd.google.gdata.error+xml",
                      "con:status": "404 400",
                      "con:element": {
                        "-xmlns:ns": "http://schemas.google.com/g/2005",
                        "#text": "ns:errors"
                      }
                    },
                    {
                      "-type": "RESPONSE",
                      "con:mediaType": "application/atom+xml; charset=UTF-8; type=feed",
                      "con:status": "200",
                      "con:element": {
                        "-xmlns:atom": "http://www.w3.org/2005/Atom",
                        "#text": "atom:feed"
                      }
                    },
                    {
                      "-type": "RESPONSE",
                      "con:mediaType": "application/rss+xml; charset=UTF-8",
                      "con:status": "200",
                      "con:element": "rss"
                    }
                  ],
                  "con:request": {
                    "-name": "Request 1",
                    "-mediaType": "application/xml",
                    "con:settings": {
                      "con:setting": {
                        "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                        "#text": "<xml-fragment/>"
                      }
                    },
                    "con:endpoint": "http://gdata.youtube.com",
                    "con:credentials": { "con:authType": "Global HTTP Settings" },
                    "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                    "con:parameters": {
                      "entry": {
                        "-key": "alt",
                        "-value": "rss",
                        "-xmlns": "http://eviware.com/soapui/config"
                      }
                    }
                  }
                }
              },
              {
                "-name": "most_popular",
                "-path": "most_popular",
                "con:method": {
                  "-name": "Method 1",
                  "-method": "GET",
                  "con:representation": {
                    "-type": "RESPONSE",
                    "con:mediaType": "application/json; charset=UTF-8",
                    "con:status": "200",
                    "con:element": {
                      "-xmlns:most": "http://gdata.youtube.com/feeds/api/standardfeeds/most_popular",
                      "#text": "most:Response"
                    }
                  },
                  "con:request": {
                    "-name": "Request 1",
                    "-mediaType": "application/xml",
                    "con:endpoint": "http://gdata.youtube.com",
                    "con:credentials": { "con:authType": "Global HTTP Settings" },
                    "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" }
                  }
                }
              },
              {
                "-name": "most_viewed",
                "-path": "most_viewed",
                "con:method": {
                  "-name": "Method 1",
                  "-method": "GET",
                  "con:representation": [
                    {
                      "-type": "RESPONSE",
                      "con:mediaType": "application/atom+xml; charset=UTF-8; type=feed",
                      "con:status": "200",
                      "con:element": {
                        "-xmlns:atom": "http://www.w3.org/2005/Atom",
                        "#text": "atom:feed"
                      }
                    },
                    {
                      "-type": "RESPONSE",
                      "con:mediaType": "text/javascript; charset=UTF-8",
                      "con:status": "200"
                    },
                    {
                      "-type": "RESPONSE",
                      "con:mediaType": "text/javascript;charset=UTF-8",
                      "con:status": "200"
                    }
                  ],
                  "con:request": {
                    "-name": "Request 1",
                    "-mediaType": "application/xml",
                    "con:settings": {
                      "con:setting": {
                        "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                        "#text": "<xml-fragment/>"
                      }
                    },
                    "con:endpoint": "http://gdata.youtube.com",
                    "con:credentials": { "con:authType": "Global HTTP Settings" },
                    "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    "con:testSuite": {
      "-name": "TestSuite",
      "con:runType": "SEQUENTIAL",
      "con:testCase": {
        "-failOnError": "true",
        "-failTestCaseOnErrors": "true",
        "-keepSession": "false",
        "-maxResults": "0",
        "-name": "TestCase",
        "-searchProperties": "true",
        "-id": "ebc9d39a-3df0-417f-b80b-c08f213b582d",
        "con:description": "Basic requests with the YouTube API: - Channel Search ; searches for channels named \"smartbear\" - JSON Response - validates that there is at least one hit - Video Search : searches for videos named \"unprepared geeks\" - ATOM XML Response - validates that there is at least one hit - Top Rated : validates that the top-rated RSS listing contains the correct youtube image - Most Popular : validates that the Most Popular response in JSONC format contains the expected access-control permissions - Most Viewed : validates that the Most Viewed response in JSON-in-Script format starts with the expected script call see https://developers.google.com/youtube/2.0/developers_guide_protocol_audience",
        "con:testStep": [
          {
            "-type": "restrequest",
            "-name": "Channel Search - JSON",
            "con:config": {
              "-service": "YouTube",
              "-resourcePath": "/feeds/api/channels",
              "-methodName": "GET",
              "-xsi:type": "con:RestRequestStep",
              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "con:restRequest": {
                "-name": "Channel Search - JSON",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:assertion": {
                  "-type": "XPath Match",
                  "-name": "Check count of [e]",
                  "con:configuration": {
                    "path": "declare namespace ns1='http://gdata.youtube.com/feeds/api/channels'; count( //ns1:Response/ns1:feed/ns1:entry/ns1:e) > 0",
                    "content": "true",
                    "allowWildcards": "false",
                    "ignoreNamspaceDifferences": "false",
                    "ignoreComments": "false"
                  }
                },
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "con:entry": [
                    {
                      "-key": "alt",
                      "-value": "json"
                    },
                    {
                      "-key": "q",
                      "-value": "smartbear"
                    }
                  ]
                }
              }
            }
          },
          {
            "-type": "restrequest",
            "-name": "Video Search - ATOM",
            "con:config": {
              "-service": "YouTube",
              "-resourcePath": "/feeds/api/videos",
              "-methodName": "GET",
              "-xsi:type": "con:RestRequestStep",
              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "con:restRequest": {
                "-name": "Video Search - ATOM",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:assertion": {
                  "-type": "XPath Match",
                  "-name": "Check for existance of [entry]",
                  "con:configuration": {
                    "path": "declare namespace ns1='http://www.w3.org/2005/Atom'; exists( //ns1:feed/ns1:entry)",
                    "content": "true",
                    "allowWildcards": "false",
                    "ignoreNamspaceDifferences": "false",
                    "ignoreComments": "false"
                  }
                },
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "con:entry": [
                    {
                      "-key": "v",
                      "-value": "1"
                    },
                    {
                      "-key": "q",
                      "-value": "\"unprepared geeks\""
                    }
                  ]
                }
              }
            }
          },
          {
            "-type": "restrequest",
            "-name": "Top Rated - RSS",
            "con:config": {
              "-service": "YouTube",
              "-resourcePath": "/feeds/api/standardfeeds/top_rated",
              "-methodName": "Method 1",
              "-xsi:type": "con:RestRequestStep",
              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "con:restRequest": {
                "-name": "Top Rated - RSS",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:assertion": {
                  "-type": "XPath Match",
                  "-name": "Match content of [image]",
                  "con:configuration": {
                    "path": "//rss[1]/channel[1]/image[1]",
                    "content": "
                                    <image xmlns:app=\"http://www.w3.org/2007/app\" xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:media=\"http://search.yahoo.com/mrss/\" xmlns:openSearch=\"http://a9.com/-/spec/opensearch/1.1/\" xmlns:gd=\"http://schemas.google.com/g/2005\" xmlns:yt=\"http://gdata.youtube.com/schemas/2007\">
  <url>http://www.youtube.com/img/pic_youtubelogo_123x63.gif</url>
  <title>Top Rated</title>
  <link>http://www.youtube.com/channel/HCWKQJPHqP4J0</link>
</image>
                                ",
                    "allowWildcards": "false",
                    "ignoreNamspaceDifferences": "false",
                    "ignoreComments": "false"
                  }
                },
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "entry": {
                    "-key": "alt",
                    "-value": "rss",
                    "-xmlns": "http://eviware.com/soapui/config"
                  }
                }
              }
            }
          },
          {
            "-type": "restrequest",
            "-name": "Most Popular - JSONC",
            "con:config": {
              "-service": "YouTube",
              "-resourcePath": "/feeds/api/standardfeeds/most_popular",
              "-methodName": "Method 1",
              "-xsi:type": "con:RestRequestStep",
              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "con:restRequest": {
                "-name": "Most Popular - JSONC",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:assertion": {
                  "-type": "XPath Match",
                  "-name": "Match content of [accessControl]",
                  "con:configuration": {
                    "path": "declare namespace ns1='http://gdata.youtube.com/feeds/api/standardfeeds/most_popular'; //ns1:Response[1]/ns1:data[1]/ns1:items[1]/ns1:e[1]/ns1:accessControl[1]
                                ",
                    "content": "
                                    <accessControl xmlns=\"http://gdata.youtube.com/feeds/api/standardfeeds/most_popular\">
  <autoPlay>allowed</autoPlay>
  <comment>allowed</comment>
  <commentVote>allowed</commentVote>
  <embed>allowed</embed>
  <list>allowed</list>
  <rate>allowed</rate>
  <syndicate>allowed</syndicate>
  <videoRespond>moderated</videoRespond>
</accessControl>
                                ",
                    "allowWildcards": "false",
                    "ignoreNamspaceDifferences": "false",
                    "ignoreComments": "false"
                  }
                },
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "entry": {
                    "-key": "alt",
                    "-value": "jsonc",
                    "-xmlns": "http://eviware.com/soapui/config"
                  }
                }
              }
            }
          },
          {
            "-type": "restrequest",
            "-name": "Most Viewed - JSON in Script",
            "con:config": {
              "-service": "YouTube",
              "-resourcePath": "/feeds/api/standardfeeds/most_viewed",
              "-methodName": "Method 1",
              "-xsi:type": "con:RestRequestStep",
              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "con:restRequest": {
                "-name": "Most Viewed - JSON in Script",
                "-mediaType": "application/xml",
                "con:settings": {
                  "con:setting": {
                    "-id": "com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers",
                    "#text": "<xml-fragment/>"
                  }
                },
                "con:endpoint": "http://gdata.youtube.com",
                "con:assertion": {
                  "-type": "Simple Contains",
                  "-name": "Contains",
                  "con:configuration": {
                    "token": "gdata\\.io\\.handleScriptLoaded(.*);",
                    "ignoreCase": "false",
                    "useRegEx": "true"
                  }
                },
                "con:credentials": { "con:authType": "Global HTTP Settings" },
                "con:jmsConfig": { "-JMSDeliveryMode": "PERSISTENT" },
                "con:parameters": {
                  "entry": {
                    "-key": "alt",
                    "-value": "json-in-script",
                    "-xmlns": "http://eviware.com/soapui/config"
                  }
                }
              }
            }
          }
        ]
      }
    },
    "con:reporting": {
      
    }
  }
}