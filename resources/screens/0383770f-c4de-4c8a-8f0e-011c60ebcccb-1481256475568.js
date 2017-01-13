jQuery("#simulation")
  .on("click", ".s-0383770f-c4de-4c8a-8f0e-011c60ebcccb .click", function(event, data) {
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
                    "#s-0383770f-c4de-4c8a-8f0e-011c60ebcccb #s-Image_43 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-0383770f-c4de-4c8a-8f0e-011c60ebcccb #s-Image_43": {
                      "attributes": {
                        "opacity": "0.54"
                      }
                    }
                  },{
                    "#s-0383770f-c4de-4c8a-8f0e-011c60ebcccb #s-Image_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  },{
                    "#s-0383770f-c4de-4c8a-8f0e-011c60ebcccb #s-Image_43": {
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0383770f-c4de-4c8a-8f0e-011c60ebcccb #s-Button_5": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-0383770f-c4de-4c8a-8f0e-011c60ebcccb #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
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
                    "target": "screens/72761a2f-185d-49be-a30a-c75b38434ae6"
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/50c8e7c1-6be3-4a06-9ffa-c996bb590a7f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });