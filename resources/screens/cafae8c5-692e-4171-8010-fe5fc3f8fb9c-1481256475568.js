jQuery("#simulation")
  .on("click", ".s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_43 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_43": {
                      "attributes": {
                        "opacity": "0.54"
                      }
                    }
                  },{
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  },{
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_43": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ce8fe72c-31ae-49fc-b8b5-278176b04086",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 200
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_36 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_36": {
                      "attributes": {
                        "opacity": "0.54"
                      }
                    }
                  },{
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_36": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  },{
                    "#s-cafae8c5-692e-4171-8010-fe5fc3f8fb9c #s-Image_36": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a17f6f2c-3270-4d59-b0bb-cced3df32b66",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 200
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });