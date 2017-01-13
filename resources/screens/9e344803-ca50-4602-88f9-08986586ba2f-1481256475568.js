jQuery("#simulation")
  .on("click", ".s-9e344803-ca50-4602-88f9-08986586ba2f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9e344803-ca50-4602-88f9-08986586ba2f #s-Button_2": {
                      "attributes": {
                        "opacity": "0.7"
                      }
                    }
                  },{
                    "#s-9e344803-ca50-4602-88f9-08986586ba2f #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                        "filter": "alpha(opacity=70)"
                      }
                    }
                  },{
                    "#s-9e344803-ca50-4602-88f9-08986586ba2f #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                        "filter": "alpha(opacity=70)"
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
                    "target": "screens/cafae8c5-692e-4171-8010-fe5fc3f8fb9c",
                    "transition": "slideleft"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9e344803-ca50-4602-88f9-08986586ba2f #s-Button_3": {
                      "attributes": {
                        "opacity": "0.7"
                      }
                    }
                  },{
                    "#s-9e344803-ca50-4602-88f9-08986586ba2f #s-Button_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                        "filter": "alpha(opacity=70)"
                      }
                    }
                  },{
                    "#s-9e344803-ca50-4602-88f9-08986586ba2f #s-Button_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                        "filter": "alpha(opacity=70)"
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
                    "target": "screens/5e48440b-f671-4277-a6db-f2d9dbf00671"
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