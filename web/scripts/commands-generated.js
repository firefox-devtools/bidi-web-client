/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from WebDriver BiDi CDDL specification
 * Source: https://raw.githubusercontent.com/w3c/webref/main/ed/cddl/webdriver-bidi-remote-cddl.cddl
 * Run: npm run build:commands
 *
 * Spec: https://w3c.github.io/webdriver-bidi/
 */

export const COMMAND_MODULES = {
  "browser": {
    "commands": {
      "browser.close": {
        "method": "browser.close",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-close",
        "params": {},
        "placeholder": "{}"
      },
      "browser.createUserContext": {
        "method": "browser.createUserContext",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext",
        "params": {
          "acceptInsecureCerts": {
            "type": "bool",
            "required": false
          },
          "proxy": {
            "type": "session.ProxyConfiguration",
            "required": false
          },
          "unhandledPromptBehavior": {
            "type": "session.UserPromptHandler",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "browser.getClientWindows": {
        "method": "browser.getClientWindows",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-getClientWindows",
        "params": {},
        "placeholder": "{}"
      },
      "browser.getUserContexts": {
        "method": "browser.getUserContexts",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts",
        "params": {},
        "placeholder": "{}"
      },
      "browser.removeUserContext": {
        "method": "browser.removeUserContext",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext",
        "params": {
          "userContext": {
            "type": "browser.UserContext",
            "required": true
          }
        },
        "placeholder": "{\"userContext\":\"\"}"
      },
      "browser.setClientWindowState": {
        "method": "browser.setClientWindowState",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-setClientWindowState",
        "params": {
          "clientWindow": {
            "type": "browser.ClientWindow",
            "required": true
          },
          "[one of]": {
            "type": "browser.ClientWindowNamedState | browser.ClientWindowRectState",
            "required": true,
            "isGroupChoice": true
          }
        },
        "placeholder": "{\"clientWindow\":{}}"
      },
      "browser.setDownloadBehavior": {
        "method": "browser.setDownloadBehavior",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browser-setDownloadBehavior",
        "params": {
          "downloadBehavior": {
            "type": "browser.DownloadBehavior | null",
            "required": true
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"downloadBehavior\":{}}"
      }
    }
  },
  "browsingContext": {
    "commands": {
      "browsingContext.activate": {
        "method": "browsingContext.activate",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.captureScreenshot": {
        "method": "browsingContext.captureScreenshot",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "origin": {
            "type": "(\"viewport\" | \"document\") .default \"viewport\"",
            "required": false
          },
          "format": {
            "type": "browsingContext.ImageFormat",
            "required": false
          },
          "clip": {
            "type": "browsingContext.ClipRectangle",
            "required": false
          },
          "imageSize": {
            "type": "browsingContext.ImageSize",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.close": {
        "method": "browsingContext.close",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-close",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "promptUnload": {
            "type": "bool .default false",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.create": {
        "method": "browsingContext.create",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-create",
        "params": {
          "type": {
            "type": "browsingContext.CreateType",
            "required": true
          },
          "referenceContext": {
            "type": "browsingContext.BrowsingContext",
            "required": false
          },
          "background": {
            "type": "bool .default false",
            "required": false
          },
          "userContext": {
            "type": "browser.UserContext",
            "required": false
          }
        },
        "placeholder": "{\"type\":\"\"}"
      },
      "browsingContext.getTree": {
        "method": "browsingContext.getTree",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree",
        "params": {
          "maxDepth": {
            "type": "js-uint",
            "required": false
          },
          "root": {
            "type": "browsingContext.BrowsingContext",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "browsingContext.handleUserPrompt": {
        "method": "browsingContext.handleUserPrompt",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "accept": {
            "type": "bool",
            "required": false
          },
          "userText": {
            "type": "text",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.locateNodes": {
        "method": "browsingContext.locateNodes",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-locateNodes",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "locator": {
            "type": "browsingContext.Locator",
            "required": true
          },
          "maxNodeCount": {
            "type": "(js-uint .ge 1)",
            "required": false
          },
          "serializationOptions": {
            "type": "script.SerializationOptions",
            "required": false
          },
          "startNodes": {
            "type": "[ + script.SharedReference ]",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\",\"locator\":\"\"}"
      },
      "browsingContext.navigate": {
        "method": "browsingContext.navigate",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "url": {
            "type": "text",
            "required": true
          },
          "wait": {
            "type": "browsingContext.ReadinessState",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\",\"url\":\"\"}"
      },
      "browsingContext.print": {
        "method": "browsingContext.print",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-print",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "background": {
            "type": "bool .default false",
            "required": false
          },
          "margin": {
            "type": "browsingContext.PrintMarginParameters",
            "required": false
          },
          "orientation": {
            "type": "(\"portrait\" | \"landscape\") .default \"portrait\"",
            "required": false
          },
          "page": {
            "type": "browsingContext.PrintPageParameters",
            "required": false
          },
          "pageRanges": {
            "type": "[*(js-uint | text)]",
            "required": false
          },
          "scale": {
            "type": "(0.1..2.0) .default 1.0",
            "required": false
          },
          "shrinkToFit": {
            "type": "bool .default true",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.reload": {
        "method": "browsingContext.reload",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "ignoreCache": {
            "type": "bool",
            "required": false
          },
          "wait": {
            "type": "browsingContext.ReadinessState",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.setBypassCSP": {
        "method": "browsingContext.setBypassCSP",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-setBypassCSP",
        "params": {
          "bypass": {
            "type": "true | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"bypass\":\"\"}"
      },
      "browsingContext.setViewport": {
        "method": "browsingContext.setViewport",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": false
          },
          "viewport": {
            "type": "browsingContext.Viewport | null",
            "required": false
          },
          "devicePixelRatio": {
            "type": "(float .gt 0.0) | null",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "browsingContext.startScreencast": {
        "method": "browsingContext.startScreencast",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-startScreencast",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "destinationFolder": {
            "type": "text",
            "required": false
          },
          "mimeType": {
            "type": "text",
            "required": false
          },
          "video": {
            "type": "browsingContext.MediaTrackConstraints",
            "required": false
          },
          "audio": {
            "type": "bool .default false",
            "required": false
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "browsingContext.stopScreencast": {
        "method": "browsingContext.stopScreencast",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-stopScreencast",
        "params": {
          "screencast": {
            "type": "browsingContext.Screencast",
            "required": true
          }
        },
        "placeholder": "{\"screencast\":\"\"}"
      },
      "browsingContext.traverseHistory": {
        "method": "browsingContext.traverseHistory",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "delta": {
            "type": "js-int",
            "required": true
          }
        },
        "placeholder": "{\"context\":\"\",\"delta\":0}"
      }
    }
  },
  "emulation": {
    "commands": {
      "emulation.setForcedColorsModeThemeOverride": {
        "method": "emulation.setForcedColorsModeThemeOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setForcedColorsModeThemeOverride",
        "params": {
          "theme": {
            "type": "emulation.ForcedColorsModeTheme | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"theme\":{}}"
      },
      "emulation.setGeolocationOverride": {
        "method": "emulation.setGeolocationOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setGeolocationOverride",
        "params": {
          "[one of]": {
            "type": "error: emulation.GeolocationPositionError",
            "required": true,
            "isGroupChoice": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "emulation.setLocaleOverride": {
        "method": "emulation.setLocaleOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setLocaleOverride",
        "params": {
          "locale": {
            "type": "text | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"locale\":\"\"}"
      },
      "emulation.setMediaFeaturesOverride": {
        "method": "emulation.setMediaFeaturesOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setMediaFeaturesOverride",
        "params": {
          "features": {
            "type": "emulation.MediaFeatures | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"features\":{}}"
      },
      "emulation.setNetworkConditions": {
        "method": "emulation.setNetworkConditions",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setNetworkConditions",
        "params": {
          "networkConditions": {
            "type": "emulation.NetworkConditions | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"networkConditions\":{}}"
      },
      "emulation.setScreenOrientationOverride": {
        "method": "emulation.setScreenOrientationOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setScreenOrientationOverride",
        "params": {
          "screenOrientation": {
            "type": "emulation.ScreenOrientation | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"screenOrientation\":{}}"
      },
      "emulation.setScreenSettingsOverride": {
        "method": "emulation.setScreenSettingsOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setScreenSettingsOverride",
        "params": {
          "screenArea": {
            "type": "emulation.ScreenArea | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"screenArea\":{}}"
      },
      "emulation.setScriptingEnabled": {
        "method": "emulation.setScriptingEnabled",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setScriptingEnabled",
        "params": {
          "enabled": {
            "type": "false | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"enabled\":\"\"}"
      },
      "emulation.setScrollbarTypeOverride": {
        "method": "emulation.setScrollbarTypeOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setScrollbarTypeOverride",
        "params": {
          "scrollbarType": {
            "type": "\"classic\" | \"overlay\" | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"scrollbarType\":\"\"}"
      },
      "emulation.setTextLayoutModeOverride": {
        "method": "emulation.setTextLayoutModeOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setTextLayoutModeOverride",
        "params": {
          "textLayoutMode": {
            "type": "emulation.TextLayoutMode | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"textLayoutMode\":{}}"
      },
      "emulation.setTimezoneOverride": {
        "method": "emulation.setTimezoneOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setTimezoneOverride",
        "params": {
          "timezone": {
            "type": "text | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"timezone\":\"\"}"
      },
      "emulation.setTouchOverride": {
        "method": "emulation.setTouchOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setTouchOverride",
        "params": {
          "maxTouchPoints": {
            "type": "(js-uint .ge 1) | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"maxTouchPoints\":0}"
      },
      "emulation.setUserAgentOverride": {
        "method": "emulation.setUserAgentOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setUserAgentOverride",
        "params": {
          "userAgent": {
            "type": "text | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"userAgent\":\"\"}"
      },
      "emulation.setViewportMetaOverride": {
        "method": "emulation.setViewportMetaOverride",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-emulation-setViewportMetaOverride",
        "params": {
          "viewportMeta": {
            "type": "true | null",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"viewportMeta\":\"\"}"
      }
    }
  },
  "input": {
    "commands": {
      "input.performActions": {
        "method": "input.performActions",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-input-performActions",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "actions": {
            "type": "[*input.SourceActions]",
            "required": true
          }
        },
        "placeholder": "{\"context\":\"\",\"actions\":[]}"
      },
      "input.releaseActions": {
        "method": "input.releaseActions",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-input-releaseActions",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          }
        },
        "placeholder": "{\"context\":\"\"}"
      },
      "input.setFiles": {
        "method": "input.setFiles",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-input-setFiles",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": true
          },
          "element": {
            "type": "script.SharedReference",
            "required": true
          },
          "files": {
            "type": "[*text]",
            "required": true
          }
        },
        "placeholder": "{\"context\":\"\",\"element\":{},\"files\":\"\"}"
      }
    }
  },
  "network": {
    "commands": {
      "network.addDataCollector": {
        "method": "network.addDataCollector",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-addDataCollector",
        "params": {
          "dataTypes": {
            "type": "[+network.DataType]",
            "required": true
          },
          "maxEncodedDataSize": {
            "type": "js-uint",
            "required": true
          },
          "collectorType": {
            "type": "network.CollectorType .default \"blob\"",
            "required": false
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"dataTypes\":[],\"maxEncodedDataSize\":0}"
      },
      "network.addIntercept": {
        "method": "network.addIntercept",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-addIntercept",
        "params": {
          "phases": {
            "type": "[+network.InterceptPhase]",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "urlPatterns": {
            "type": "[*network.UrlPattern]",
            "required": false
          }
        },
        "placeholder": "{\"phases\":[]}"
      },
      "network.continueRequest": {
        "method": "network.continueRequest",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-continueRequest",
        "params": {
          "request": {
            "type": "network.Request",
            "required": true
          },
          "body": {
            "type": "network.BytesValue",
            "required": false
          },
          "cookies": {
            "type": "[*network.CookieHeader]",
            "required": false
          },
          "headers": {
            "type": "[*network.Header]",
            "required": false
          },
          "method": {
            "type": "text",
            "required": false
          },
          "url": {
            "type": "text",
            "required": false
          }
        },
        "placeholder": "{\"request\":\"\"}"
      },
      "network.continueResponse": {
        "method": "network.continueResponse",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-continueResponse",
        "params": {
          "request": {
            "type": "network.Request",
            "required": true
          },
          "cookies": {
            "type": "[*network.SetCookieHeader]",
            "required": false
          },
          "credentials": {
            "type": "network.AuthCredentials",
            "required": false
          },
          "headers": {
            "type": "[*network.Header]",
            "required": false
          },
          "reasonPhrase": {
            "type": "text",
            "required": false
          },
          "statusCode": {
            "type": "js-uint",
            "required": false
          }
        },
        "placeholder": "{\"request\":\"\"}"
      },
      "network.continueWithAuth": {
        "method": "network.continueWithAuth",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth",
        "params": {
          "request": {
            "type": "network.Request",
            "required": true
          },
          "[one of]": {
            "type": "network.ContinueWithAuthCredentials | network.ContinueWithAuthNoCredentials",
            "required": true,
            "isGroupChoice": true
          }
        },
        "placeholder": "{\"request\":\"\"}"
      },
      "network.disownData": {
        "method": "network.disownData",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-disownData",
        "params": {
          "dataType": {
            "type": "network.DataType",
            "required": true
          },
          "collector": {
            "type": "network.Collector",
            "required": true
          },
          "request": {
            "type": "network.Request",
            "required": true
          }
        },
        "placeholder": "{\"dataType\":{},\"collector\":{},\"request\":\"\"}"
      },
      "network.failRequest": {
        "method": "network.failRequest",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-failRequest",
        "params": {
          "request": {
            "type": "network.Request",
            "required": true
          }
        },
        "placeholder": "{\"request\":\"\"}"
      },
      "network.getData": {
        "method": "network.getData",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-getData",
        "params": {
          "dataType": {
            "type": "network.DataType",
            "required": true
          },
          "collector": {
            "type": "network.Collector",
            "required": false
          },
          "disown": {
            "type": "bool .default false",
            "required": false
          },
          "request": {
            "type": "network.Request",
            "required": true
          }
        },
        "placeholder": "{\"dataType\":{},\"request\":\"\"}"
      },
      "network.provideResponse": {
        "method": "network.provideResponse",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-provideResponse",
        "params": {
          "request": {
            "type": "network.Request",
            "required": true
          },
          "body": {
            "type": "network.BytesValue",
            "required": false
          },
          "cookies": {
            "type": "[*network.SetCookieHeader]",
            "required": false
          },
          "headers": {
            "type": "[*network.Header]",
            "required": false
          },
          "reasonPhrase": {
            "type": "text",
            "required": false
          },
          "statusCode": {
            "type": "js-uint",
            "required": false
          }
        },
        "placeholder": "{\"request\":\"\"}"
      },
      "network.removeDataCollector": {
        "method": "network.removeDataCollector",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-removeDataCollector",
        "params": {
          "collector": {
            "type": "network.Collector",
            "required": true
          }
        },
        "placeholder": "{\"collector\":{}}"
      },
      "network.removeIntercept": {
        "method": "network.removeIntercept",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept",
        "params": {
          "intercept": {
            "type": "network.Intercept",
            "required": true
          }
        },
        "placeholder": "{\"intercept\":{}}"
      },
      "network.setCacheBehavior": {
        "method": "network.setCacheBehavior",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-setCacheBehavior",
        "params": {
          "cacheBehavior": {
            "type": "\"default\" | \"bypass\"",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          }
        },
        "placeholder": "{\"cacheBehavior\":\"\"}"
      },
      "network.setExtraHeaders": {
        "method": "network.setExtraHeaders",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-network-setExtraHeaders",
        "params": {
          "headers": {
            "type": "[*network.Header]",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"headers\":[]}"
      }
    }
  },
  "script": {
    "commands": {
      "script.addPreloadScript": {
        "method": "script.addPreloadScript",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript",
        "params": {
          "functionDeclaration": {
            "type": "text",
            "required": true
          },
          "arguments": {
            "type": "[*script.ChannelValue]",
            "required": false
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          },
          "sandbox": {
            "type": "text",
            "required": false
          }
        },
        "placeholder": "{\"functionDeclaration\":\"() => {}\"}"
      },
      "script.callFunction": {
        "method": "script.callFunction",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-script-callFunction",
        "params": {
          "functionDeclaration": {
            "type": "text",
            "required": true
          },
          "awaitPromise": {
            "type": "bool",
            "required": true
          },
          "target": {
            "type": "script.Target",
            "required": true
          },
          "arguments": {
            "type": "[*script.LocalValue]",
            "required": false
          },
          "resultOwnership": {
            "type": "script.ResultOwnership",
            "required": false
          },
          "serializationOptions": {
            "type": "script.SerializationOptions",
            "required": false
          },
          "this": {
            "type": "script.LocalValue",
            "required": false
          },
          "userActivation": {
            "type": "bool .default false",
            "required": false
          }
        },
        "placeholder": "{\"functionDeclaration\":\"() => {}\",\"awaitPromise\":false,\"target\":{\"context\":\"\"}}"
      },
      "script.disown": {
        "method": "script.disown",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-script-disown",
        "params": {
          "handles": {
            "type": "[*script.Handle]",
            "required": true
          },
          "target": {
            "type": "script.Target;",
            "required": true
          }
        },
        "placeholder": "{\"handles\":[],\"target\":{\"context\":\"\"}}"
      },
      "script.evaluate": {
        "method": "script.evaluate",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-script-evaluate",
        "params": {
          "expression": {
            "type": "text",
            "required": true
          },
          "target": {
            "type": "script.Target",
            "required": true
          },
          "awaitPromise": {
            "type": "bool",
            "required": true
          },
          "resultOwnership": {
            "type": "script.ResultOwnership",
            "required": false
          },
          "serializationOptions": {
            "type": "script.SerializationOptions",
            "required": false
          },
          "userActivation": {
            "type": "bool .default false",
            "required": false
          }
        },
        "placeholder": "{\"expression\":\"\",\"target\":{\"context\":\"\"},\"awaitPromise\":false}"
      },
      "script.getRealms": {
        "method": "script.getRealms",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-script-getRealms",
        "params": {
          "context": {
            "type": "browsingContext.BrowsingContext",
            "required": false
          },
          "type": {
            "type": "script.RealmType",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "script.removePreloadScript": {
        "method": "script.removePreloadScript",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-script-removePreloadScript",
        "params": {
          "script": {
            "type": "script.PreloadScript",
            "required": true
          }
        },
        "placeholder": "{\"script\":\"\"}"
      }
    }
  },
  "session": {
    "commands": {
      "session.end": {
        "method": "session.end",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-session-end",
        "params": {},
        "placeholder": "{}"
      },
      "session.new": {
        "method": "session.new",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-session-new",
        "params": {
          "capabilities": {
            "type": "session.CapabilitiesRequest",
            "required": true
          }
        },
        "placeholder": "{\"capabilities\":{}}"
      },
      "session.status": {
        "method": "session.status",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-session-status",
        "params": {},
        "placeholder": "{}"
      },
      "session.subscribe": {
        "method": "session.subscribe",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-session-subscribe",
        "params": {
          "events": {
            "type": "[+text]",
            "required": true
          },
          "contexts": {
            "type": "[+browsingContext.BrowsingContext]",
            "required": false
          },
          "userContexts": {
            "type": "[+browser.UserContext]",
            "required": false
          }
        },
        "placeholder": "{\"events\":[]}"
      },
      "session.unsubscribe": {
        "method": "session.unsubscribe",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe",
        "params": {
          "events": {
            "type": "[+text]",
            "required": true
          },
          "subscriptions": {
            "type": "[+session.Subscription]",
            "required": true
          },
          "[one of]": {
            "type": "session.UnsubscribeByAttributesRequest | session.UnsubscribeByIDRequest",
            "required": true,
            "isGroupChoice": true
          }
        },
        "placeholder": "{\"events\":[],\"subscriptions\":[]}"
      }
    }
  },
  "storage": {
    "commands": {
      "storage.deleteCookies": {
        "method": "storage.deleteCookies",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies",
        "params": {
          "filter": {
            "type": "storage.CookieFilter",
            "required": false
          },
          "partition": {
            "type": "storage.PartitionDescriptor",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "storage.getCookies": {
        "method": "storage.getCookies",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-storage-getCookies",
        "params": {
          "filter": {
            "type": "storage.CookieFilter",
            "required": false
          },
          "partition": {
            "type": "storage.PartitionDescriptor",
            "required": false
          }
        },
        "placeholder": "{}"
      },
      "storage.setCookie": {
        "method": "storage.setCookie",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-storage-setCookie",
        "params": {
          "cookie": {
            "type": "storage.PartialCookie",
            "required": true
          },
          "partition": {
            "type": "storage.PartitionDescriptor",
            "required": false
          }
        },
        "placeholder": "{\"cookie\":{}}"
      }
    }
  },
  "webExtension": {
    "commands": {
      "webExtension.install": {
        "method": "webExtension.install",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-webExtension-install",
        "params": {
          "extensionData": {
            "type": "webExtension.ExtensionData",
            "required": true
          }
        },
        "placeholder": "{\"extensionData\":{}}"
      },
      "webExtension.uninstall": {
        "method": "webExtension.uninstall",
        "specUrl": "https://w3c.github.io/webdriver-bidi/#command-webExtension-uninstall",
        "params": {
          "extension": {
            "type": "webExtension.Extension",
            "required": true
          }
        },
        "placeholder": "{\"extension\":{}}"
      }
    }
  }
};

/**
 * Get all module names (session first, then alphabetical)
 */
export function getModuleNames() {
  const names = Object.keys(COMMAND_MODULES);
  return names.sort((a, b) => {
    if (a === "session") return -1;
    if (b === "session") return 1;
    return a.localeCompare(b);
  });
}

/**
 * Get all commands for a module
 */
export function getModuleCommands(moduleName) {
  return COMMAND_MODULES[moduleName]?.commands || {};
}

/**
 * Get a specific command
 */
export function getCommand(method) {
  for (const module of Object.values(COMMAND_MODULES)) {
    if (module.commands[method]) {
      return module.commands[method];
    }
  }
  return null;
}
