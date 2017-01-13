jQuery("#simulation")
  .on("click", ".s-d120a0f9-42be-4984-9e2a-b2a84db58da5 .click", function(event, data) {
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
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Image_43 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Image_43": {
                      "attributes": {
                        "opacity": "0.54"
                      }
                    }
                  },{
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Image_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  },{
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Image_43": {
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
                    "target": "screens/9aceb97e-9176-4c45-b6bd-1014b4054e2e",
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Button_1": {
                      "attributes": {
                        "opacity": "0.7"
                      }
                    }
                  },{
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                        "filter": "alpha(opacity=70)"
                      }
                    }
                  },{
                    "#s-d120a0f9-42be-4984-9e2a-b2a84db58da5 #s-Button_1": {
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
    }
  });