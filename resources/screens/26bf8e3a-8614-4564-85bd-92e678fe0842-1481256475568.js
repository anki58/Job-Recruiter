jQuery("#simulation")
  .on("click", ".s-26bf8e3a-8614-4564-85bd-92e678fe0842 .click", function(event, data) {
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
                    "#s-26bf8e3a-8614-4564-85bd-92e678fe0842 #s-Image_43 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-26bf8e3a-8614-4564-85bd-92e678fe0842 #s-Image_43": {
                      "attributes": {
                        "opacity": "0.54"
                      }
                    }
                  },{
                    "#s-26bf8e3a-8614-4564-85bd-92e678fe0842 #s-Image_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)",
                        "filter": "alpha(opacity=54)"
                      }
                    }
                  },{
                    "#s-26bf8e3a-8614-4564-85bd-92e678fe0842 #s-Image_43": {
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
          "delay": 500
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });