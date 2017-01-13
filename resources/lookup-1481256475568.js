(function(window, undefined) {
  var dictionary = {
    "9e344803-ca50-4602-88f9-08986586ba2f": "workdayDetailedScreen1",
    "d35f2484-9da4-4911-aab2-db52485cce64": "CPC-ManagementScreen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LoginScreen",
    "50c8e7c1-6be3-4a06-9ffa-c996bb590a7f": "Event-InterviewScreen",
    "26bf8e3a-8614-4564-85bd-92e678fe0842": "CPC-ConstructionServicesScreen",
    "ce8fe72c-31ae-49fc-b8b5-278176b04086": "CPCScreen",
    "3f7d7151-aeb8-46e7-8676-2b83bacc2126": "NotificationsScreen",
    "148c7e83-8137-4e9c-92bf-ed5cd84577d9": "viewlist cpc",
    "9aceb97e-9176-4c45-b6bd-1014b4054e2e": "CPC-TechnologyScreen",
    "2996f232-20ef-43d4-910a-0c3cf67389d4": "StudentjobsScreen",
    "cafae8c5-692e-4171-8010-fe5fc3f8fb9c": "AppliedSuccessfully",
    "d86cf23a-dc0e-4b08-b2d9-ea2f7c8ea70b": "CPC-FinanceScreen",
    "a17f6f2c-3270-4d59-b0bb-cced3df32b66": "HomeScreen",
    "88516577-d867-48ea-9ca1-2d7abfec75be": "CPC-EngineeringServicesScreen",
    "5e48440b-f671-4277-a6db-f2d9dbf00671": "WorkdayScreen",
    "67988135-8ac2-43d1-a42a-cf468a695149": "StudentJobs-SearchScreen",
    "d1a31f1c-f979-414d-88f7-881dd75bd853": "Event-CareerFairScreen",
    "0383770f-c4de-4c8a-8f0e-011c60ebcccb": "EventsScreen",
    "d120a0f9-42be-4984-9e2a-b2a84db58da5": "SoftDevGoogleJobDescription",
    "8df4438b-6be3-4b52-9e4e-21b10320c91e": "modify cpc",
    "72761a2f-185d-49be-a30a-c75b38434ae6": "Event-ResumeScreen",
    "f53b65f3-c13b-444c-a04d-024f7d0ab73c": "NotificationScreen",
    "ce0f570c-cff3-412d-b8c3-51695d973234": "workdayDetailedScreen3",
    "70394edd-e23f-47fe-a591-66ee4838f117": "ProfileScreen",
    "c2c38f27-16f5-4c96-b25b-51176880aced": "workdayDetailedScreen2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);