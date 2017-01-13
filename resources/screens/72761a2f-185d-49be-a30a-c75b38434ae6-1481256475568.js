jQuery("#simulation")
  .on("click", ".s-72761a2f-185d-49be-a30a-c75b38434ae6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72761a2f-185d-49be-a30a-c75b38434ae6 #s-Button_1": {
                      "attributes": {
                        "opacity": "0.7"
                      }
                    }
                  },{
                    "#s-72761a2f-185d-49be-a30a-c75b38434ae6 #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                        "filter": "alpha(opacity=70)"
                      }
                    }
                  },{
                    "#s-72761a2f-185d-49be-a30a-c75b38434ae6 #s-Button_1": {
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
                    "target": "screens/0383770f-c4de-4c8a-8f0e-011c60ebcccb"
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